from flask import Blueprint, request, jsonify
from app import db
from app.models import Session, Event, UserDetail
from datetime import datetime, timedelta
from sqlalchemy import func
import logging
import uuid

tracking_bp = Blueprint('tracking', __name__)

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


@tracking_bp.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint for monitoring"""
    try:
        # Test database connection
        db.session.execute(db.text('SELECT 1'))
        return jsonify({
            'status': 'healthy',
            'database': 'connected',
            'timestamp': datetime.utcnow().isoformat()
        }), 200
    except Exception as e:
        return jsonify({
            'status': 'unhealthy',
            'database': 'disconnected',
            'error': str(e)
        }), 500


@tracking_bp.route('/session/create', methods=['POST'])
def create_session():
    """Create a new tracking session"""
    try:
        data = request.json
        session_id = str(uuid.uuid4())

        session = Session(
            session_id=session_id,
            page=data.get('page'),
            source=data.get('source'),
            utm_source=data.get('utm_source'),
            utm_medium=data.get('utm_medium'),
            utm_campaign=data.get('utm_campaign'),
            referrer=data.get('referrer'),
            user_agent=request.headers.get('User-Agent'),
            ip_address=request.remote_addr
        )

        db.session.add(session)
        db.session.commit()

        logger.info(f"Created session: {session_id} for page: {data.get('page')}")

        return jsonify({
            'success': True,
            'session_id': session_id,
            'message': 'Session created successfully'
        }), 201

    except Exception as e:
        logger.error(f"Error creating session: {str(e)}")
        db.session.rollback()
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500


@tracking_bp.route('/event/track', methods=['POST'])
def track_event():
    """Track user events (clicks, scrolls, views, etc.)"""
    try:
        data = request.json
        session_id = data.get('session_id')

        if not session_id:
            return jsonify({
                'success': False,
                'error': 'session_id is required'
            }), 400

        # Verify session exists
        session = Session.query.filter_by(session_id=session_id).first()
        if not session:
            return jsonify({
                'success': False,
                'error': 'Invalid session_id'
            }), 404

        event = Event(
            session_id=session_id,
            event_type=data.get('event_type'),
            event_name=data.get('event_name'),
            element_id=data.get('element_id'),
            element_class=data.get('element_class'),
            element_text=data.get('element_text'),
            page_url=data.get('page_url'),
            extra_data=data.get('metadata', {})
        )

        db.session.add(event)
        db.session.commit()

        logger.info(f"Tracked event: {data.get('event_type')} for session: {session_id}")

        return jsonify({
            'success': True,
            'event_id': event.id,
            'message': 'Event tracked successfully'
        }), 201

    except Exception as e:
        logger.error(f"Error tracking event: {str(e)}")
        db.session.rollback()
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500


@tracking_bp.route('/user-details/submit', methods=['POST'])
def submit_user_details():
    """Submit user contact details"""
    try:
        data = request.json
        session_id = data.get('session_id')

        if not session_id:
            return jsonify({
                'success': False,
                'error': 'session_id is required'
            }), 400

        # Verify session exists
        session = Session.query.filter_by(session_id=session_id).first()
        if not session:
            return jsonify({
                'success': False,
                'error': 'Invalid session_id'
            }), 404

        user_detail = UserDetail(
            session_id=session_id,
            name=data.get('name'),
            email=data.get('email'),
            phone=data.get('phone'),
            message=data.get('message'),
            form_type=data.get('form_type', 'contact_form'),
            extra_data=data.get('metadata', {})
        )

        db.session.add(user_detail)
        db.session.commit()

        logger.info(f"User details submitted for session: {session_id}")

        return jsonify({
            'success': True,
            'message': 'User details saved successfully'
        }), 201

    except Exception as e:
        logger.error(f"Error saving user details: {str(e)}")
        db.session.rollback()
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500


@tracking_bp.route('/analytics/sessions', methods=['GET'])
def get_sessions():
    """Get session analytics"""
    try:
        # Query parameters for filtering
        page = request.args.get('page')
        source = request.args.get('source')
        days = request.args.get('days', 7, type=int)
        limit = request.args.get('limit', 100, type=int)

        # Base query
        query = Session.query

        # Apply filters
        if page:
            query = query.filter(Session.page == page)
        if source:
            query = query.filter(Session.source == source)

        # Date filter
        since = datetime.utcnow() - timedelta(days=days)
        query = query.filter(Session.created_at >= since)

        # Get results
        sessions = query.order_by(Session.created_at.desc()).limit(limit).all()

        return jsonify({
            'success': True,
            'count': len(sessions),
            'sessions': [s.to_dict() for s in sessions]
        }), 200

    except Exception as e:
        logger.error(f"Error fetching sessions: {str(e)}")
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500


@tracking_bp.route('/analytics/events', methods=['GET'])
def get_events():
    """Get event analytics"""
    try:
        session_id = request.args.get('session_id')
        event_type = request.args.get('event_type')
        days = request.args.get('days', 7, type=int)
        limit = request.args.get('limit', 100, type=int)

        query = Event.query

        if session_id:
            query = query.filter(Event.session_id == session_id)
        if event_type:
            query = query.filter(Event.event_type == event_type)

        since = datetime.utcnow() - timedelta(days=days)
        query = query.filter(Event.timestamp >= since)

        events = query.order_by(Event.timestamp.desc()).limit(limit).all()

        return jsonify({
            'success': True,
            'count': len(events),
            'events': [e.to_dict() for e in events]
        }), 200

    except Exception as e:
        logger.error(f"Error fetching events: {str(e)}")
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500


@tracking_bp.route('/analytics/user-details', methods=['GET'])
def get_user_details():
    """Get submitted user details"""
    try:
        form_type = request.args.get('form_type')
        days = request.args.get('days', 30, type=int)
        limit = request.args.get('limit', 100, type=int)

        query = UserDetail.query

        if form_type:
            query = query.filter(UserDetail.form_type == form_type)

        since = datetime.utcnow() - timedelta(days=days)
        query = query.filter(UserDetail.created_at >= since)

        details = query.order_by(UserDetail.created_at.desc()).limit(limit).all()

        return jsonify({
            'success': True,
            'count': len(details),
            'user_details': [d.to_dict() for d in details]
        }), 200

    except Exception as e:
        logger.error(f"Error fetching user details: {str(e)}")
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500


@tracking_bp.route('/analytics/events/aggregation', methods=['GET'])
def get_events_aggregation():
    """Get top events aggregated by count"""
    try:
        days = request.args.get('days', 7, type=int)
        limit = request.args.get('limit', 20, type=int)

        since = datetime.utcnow() - timedelta(days=days)

        # Query to aggregate events by type
        results = db.session.query(
            Event.event_type,
            func.count(Event.id).label('count')
        ).filter(
            Event.timestamp >= since
        ).group_by(
            Event.event_type
        ).order_by(
            func.count(Event.id).desc()
        ).limit(limit).all()

        aggregation = [
            {
                'event_type': row[0],
                'count': row[1]
            }
            for row in results
        ]

        return jsonify({
            'success': True,
            'days': days,
            'aggregation': aggregation
        }), 200

    except Exception as e:
        logger.error(f"Error fetching events aggregation: {str(e)}")
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500


@tracking_bp.route('/analytics/leads/events', methods=['GET'])
def get_lead_sessions_events():
    """Get event counts for lead-generating sessions"""
    try:
        days = request.args.get('days', 7, type=int)
        limit = request.args.get('limit', 50, type=int)

        since = datetime.utcnow() - timedelta(days=days)

        # Get sessions that have user details (leads)
        lead_sessions = db.session.query(
            UserDetail.session_id,
            UserDetail.name,
            UserDetail.email,
            UserDetail.form_type,
            UserDetail.created_at
        ).filter(
            UserDetail.created_at >= since
        ).order_by(
            UserDetail.created_at.desc()
        ).limit(limit).all()

        results = []
        for lead in lead_sessions:
            # Get event counts for this session, grouped by event type
            event_counts = db.session.query(
                Event.event_type,
                func.count(Event.id).label('count')
            ).filter(
                Event.session_id == lead.session_id
            ).group_by(
                Event.event_type
            ).all()

            # Total events for this session
            total_events = sum(ec[1] for ec in event_counts)

            # Event breakdown
            events_breakdown = {ec[0]: ec[1] for ec in event_counts}

            results.append({
                'session_id': lead.session_id,
                'lead_name': lead.name or 'Anonymous',
                'lead_email': lead.email,
                'form_type': lead.form_type,
                'created_at': lead.created_at.isoformat() if lead.created_at else None,
                'total_events': total_events,
                'events_breakdown': events_breakdown
            })

        # Also get aggregated stats across all lead sessions
        all_session_ids = [r['session_id'] for r in results]

        if all_session_ids:
            event_type_totals = db.session.query(
                Event.event_type,
                func.count(Event.id).label('count')
            ).filter(
                Event.session_id.in_(all_session_ids)
            ).group_by(
                Event.event_type
            ).order_by(
                func.count(Event.id).desc()
            ).all()

            aggregated_events = [
                {'event_type': et[0], 'count': et[1]}
                for et in event_type_totals
            ]
        else:
            aggregated_events = []

        return jsonify({
            'success': True,
            'days': days,
            'total_leads': len(results),
            'lead_sessions': results,
            'aggregated_events': aggregated_events
        }), 200

    except Exception as e:
        logger.error(f"Error fetching lead sessions events: {str(e)}")
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500
