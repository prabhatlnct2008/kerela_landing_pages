# Kerala Landing Pages - Flask Backend

Tracking and analytics backend for Kerala landing pages.

## Features

- **Session Tracking**: Track user sessions with source attribution
- **Event Tracking**: Track button clicks, scrolls, page views, exit intent
- **User Details Collection**: Store contact form submissions
- **Analytics API**: Query tracking data with filters

## Setup

1. Create virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Run the server:
```bash
python run.py
```

The API will be available at `http://localhost:5000`

## API Endpoints

### Session Management

**Create Session**
```
POST /api/session/create
Content-Type: application/json

{
  "page": "kerala-premium-escape",
  "source": "facebook",
  "utm_source": "facebook",
  "utm_medium": "social",
  "utm_campaign": "summer2024",
  "referrer": "https://facebook.com"
}

Response: { "success": true, "session_id": "uuid" }
```

### Event Tracking

**Track Event**
```
POST /api/event/track
Content-Type: application/json

{
  "session_id": "uuid",
  "event_type": "click",
  "event_name": "whatsapp_cta_click",
  "element_id": "hero-cta",
  "element_class": "whatsapp-btn",
  "element_text": "Get Dates & Price on WhatsApp",
  "page_url": "/kerala-premium-escape",
  "metadata": {
    "position": "hero",
    "scroll_depth": 25
  }
}

Response: { "success": true, "event_id": 123 }
```

### User Details

**Submit User Details**
```
POST /api/user-details/submit
Content-Type: application/json

{
  "session_id": "uuid",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+919876543210",
  "message": "Interested in the Kerala trip",
  "form_type": "exit_intent",
  "metadata": {
    "interests": ["backwaters", "munnar"]
  }
}

Response: { "success": true }
```

### Analytics

**Get Sessions**
```
GET /api/analytics/sessions?page=kerala-premium-escape&days=7&limit=100

Response: {
  "success": true,
  "count": 50,
  "sessions": [...]
}
```

**Get Events**
```
GET /api/analytics/events?event_type=click&days=7&limit=100

Response: {
  "success": true,
  "count": 150,
  "events": [...]
}
```

**Get User Details**
```
GET /api/analytics/user-details?form_type=exit_intent&days=30

Response: {
  "success": true,
  "count": 25,
  "user_details": [...]
}
```

## Database Models

### Session
- session_id (unique)
- page
- source, utm_source, utm_medium, utm_campaign
- referrer, user_agent, ip_address
- created_at

### Event
- session_id (foreign key)
- event_type (click, scroll, view, exit_intent, etc.)
- event_name, element_id, element_class, element_text
- page_url
- metadata (JSON)
- timestamp

### UserDetail
- session_id (foreign key)
- name, email, phone
- message
- form_type (exit_intent, contact_form, etc.)
- metadata (JSON)
- created_at

## Event Types

- `click` - Button/link clicks
- `scroll` - Scroll depth tracking
- `view` - Section views
- `exit_intent` - Exit intent trigger
- `form_submit` - Form submissions
- `page_load` - Page load events
- `whatsapp_click` - WhatsApp button clicks

## Development

Run in development mode:
```bash
export FLASK_ENV=development
python run.py
```

## Production

For production, use a production-ready WSGI server:
```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 run:app
```
