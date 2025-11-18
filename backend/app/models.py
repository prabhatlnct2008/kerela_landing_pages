from app import db
from datetime import datetime
import uuid

class Session(db.Model):
    """Track user sessions"""
    __tablename__ = 'sessions'

    id = db.Column(db.String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    session_id = db.Column(db.String(36), unique=True, nullable=False, index=True)
    page = db.Column(db.String(100), nullable=False)
    source = db.Column(db.String(100))
    utm_source = db.Column(db.String(100))
    utm_medium = db.Column(db.String(100))
    utm_campaign = db.Column(db.String(100))
    referrer = db.Column(db.String(500))
    user_agent = db.Column(db.String(500))
    ip_address = db.Column(db.String(50))
    created_at = db.Column(db.DateTime, default=datetime.utcnow, index=True)

    # Relationships
    events = db.relationship('Event', backref='session', lazy='dynamic', cascade='all, delete-orphan')
    user_details = db.relationship('UserDetail', backref='session', lazy='dynamic', cascade='all, delete-orphan')

    def to_dict(self):
        return {
            'id': self.id,
            'session_id': self.session_id,
            'page': self.page,
            'source': self.source,
            'utm_source': self.utm_source,
            'utm_medium': self.utm_medium,
            'utm_campaign': self.utm_campaign,
            'referrer': self.referrer,
            'created_at': self.created_at.isoformat()
        }


class Event(db.Model):
    """Track user events (clicks, scrolls, etc.)"""
    __tablename__ = 'events'

    id = db.Column(db.Integer, primary_key=True)
    session_id = db.Column(db.String(36), db.ForeignKey('sessions.session_id'), nullable=False, index=True)
    event_type = db.Column(db.String(50), nullable=False, index=True)  # click, scroll, view, exit_intent, etc.
    event_name = db.Column(db.String(100))
    element_id = db.Column(db.String(100))
    element_class = db.Column(db.String(100))
    element_text = db.Column(db.Text)
    page_url = db.Column(db.String(500))
    metadata = db.Column(db.JSON)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow, index=True)

    def to_dict(self):
        return {
            'id': self.id,
            'session_id': self.session_id,
            'event_type': self.event_type,
            'event_name': self.event_name,
            'element_id': self.element_id,
            'element_class': self.element_class,
            'element_text': self.element_text,
            'page_url': self.page_url,
            'metadata': self.metadata,
            'timestamp': self.timestamp.isoformat()
        }


class UserDetail(db.Model):
    """Store user submitted details"""
    __tablename__ = 'user_details'

    id = db.Column(db.Integer, primary_key=True)
    session_id = db.Column(db.String(36), db.ForeignKey('sessions.session_id'), nullable=False, index=True)
    name = db.Column(db.String(200))
    email = db.Column(db.String(200), index=True)
    phone = db.Column(db.String(20))
    message = db.Column(db.Text)
    form_type = db.Column(db.String(50))  # exit_intent, contact_form, etc.
    metadata = db.Column(db.JSON)
    created_at = db.Column(db.DateTime, default=datetime.utcnow, index=True)

    def to_dict(self):
        return {
            'id': self.id,
            'session_id': self.session_id,
            'name': self.name,
            'email': self.email,
            'phone': self.phone,
            'message': self.message,
            'form_type': self.form_type,
            'metadata': self.metadata,
            'created_at': self.created_at.isoformat()
        }
