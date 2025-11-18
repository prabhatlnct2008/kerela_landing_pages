# Kerala Landing Pages

Two high-converting landing pages for Kerala tour packages with comprehensive tracking, built with Next.js 14, TypeScript, Tailwind CSS, and Flask backend.

## 🌟 Features

### Landing Pages
- **Two Landing Page Variants**:
  - **Premium Escape** (`/kerala-premium-escape`) - Dark theme with dramatic hero section
  - **Group Tour** (`/kerala-group-tour`) - Light theme with clean, modern design
- **Pixel-Perfect Design**: Based on provided screenshot segments
- **Fully Responsive**: Mobile-first design that works on all devices
- **WhatsApp Integration**: Direct CTA buttons with source tracking
- **Performance Optimized**: Built with Next.js for fast load times

### Analytics & Tracking
- **Flask Backend API**: Complete tracking system for user behavior
- **Session Tracking**: Automatically creates and tracks user sessions with source attribution
- **Event Tracking**: Tracks button clicks, scrolls, page views, and user interactions
- **Exit Intent Popup**: Captures leads before users leave (desktop only)
- **User Details Collection**: Stores contact form submissions
- **Source Attribution**: Captures traffic source from URL parameters (source, utm_source, ref, etc.)
- **Analytics Dashboard**: Query API endpoints for session, event, and user data

## 📁 Project Structure

```
kerela_landing_pages/
├── app/                            # Next.js App Router
│   ├── kerala-premium-escape/     # Landing Page 1 (Dark Theme)
│   ├── kerala-group-tour/         # Landing Page 2 (Light Theme)
│   ├── layout.tsx
│   ├── page.tsx                   # Home page
│   └── globals.css
│
├── components/                     # Shared React components
│   ├── WhatsAppButton.tsx         # WhatsApp CTA with tracking
│   ├── ExitIntentPopup.tsx        # Exit intent lead capture
│   ├── TrackingProvider.tsx       # Tracking initialization
│   └── SourceTracker.tsx          # Source tracking (deprecated)
│
├── services/                       # Frontend services
│   └── trackingService.ts         # Tracking API client
│
├── utils/
│   └── sourceTracking.ts          # Source tracking utilities
│
├── backend/                        # Flask Backend API
│   ├── app/
│   │   ├── __init__.py            # Flask app factory
│   │   ├── models.py              # Database models (Session, Event, UserDetail)
│   │   └── routes.py              # API endpoints
│   ├── run.py                     # Flask entry point
│   ├── requirements.txt           # Python dependencies
│   └── README.md                  # Backend documentation
│
└── screenshots/                    # Design reference
    ├── kerela_landing_page_1/
    └── kerela_landing_page_2/
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Python 3.8+
- npm or yarn

### Frontend Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd kerela_landing_pages
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.local.example .env.local
# Edit .env.local and set NEXT_PUBLIC_API_URL if needed
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

### Backend Setup (Flask)

1. Navigate to backend directory:
```bash
cd backend
```

2. Create virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create environment file:
```bash
cp .env.example .env
# Edit .env if needed
```

5. Run the Flask server:
```bash
python run.py
```

The API will be available at `http://localhost:5000`

## 📊 Tracking System

### How It Works

1. **Session Creation**: When a user visits a landing page, a session is created with:
   - Page name
   - Source attribution (from URL parameters)
   - Referrer
   - User agent and IP
   - Unique session ID (stored in localStorage)

2. **Event Tracking**: The system automatically tracks:
   - **Page views**: When user lands on the page
   - **Scroll depth**: 25%, 50%, 75%, 100% milestones
   - **Button clicks**: All WhatsApp CTA clicks with location
   - **Exit intent**: When user shows exit behavior (desktop only)
   - **Form submissions**: Contact form and exit intent popup submissions

3. **User Details**: When users submit forms:
   - Name, email, phone, message
   - Form type (exit_intent, contact_form, etc.)
   - Associated with session for complete journey tracking

### Exit Intent Popup

- **Desktop only**: Triggers when mouse leaves viewport from top
- **Delay**: Activates after 3 seconds on page
- **One-time**: Shows once per session
- **Lead capture**: Collects name, email, phone, and message
- **Tracking**: All interactions are tracked to backend

### Source Tracking

Supported URL parameters:
- `?source=facebook`
- `?utm_source=google&utm_medium=cpc&utm_campaign=summer`
- `?ref=instagram`
- `?referrer=email`

Example URLs:
```
/kerala-premium-escape?source=facebook
/kerala-group-tour?utm_source=google&utm_campaign=summer2024
```

## 🔌 API Endpoints

See `backend/README.md` for complete API documentation.

### Key Endpoints:

**Session Management**
- `POST /api/session/create` - Create new session
- `GET /api/analytics/sessions` - Get session data

**Event Tracking**
- `POST /api/event/track` - Track user event
- `GET /api/analytics/events` - Get event data

**User Details**
- `POST /api/user-details/submit` - Submit contact details
- `GET /api/analytics/user-details` - Get user submissions

**Health Check**
- `GET /api/health` - API health status

## 🎯 Tracked Events

| Event Type | Description | Metadata |
|------------|-------------|----------|
| `page_view` | User lands on page | page, timestamp |
| `scroll` | Scroll depth milestones | depth_percentage |
| `click` | General button clicks | element_id, element_text |
| `whatsapp_click` | WhatsApp CTA clicks | location, button_text |
| `exit_intent` | Exit intent triggered | timestamp |
| `form_submit` | Form submissions | form_type, fields |

## 📱 WhatsApp Integration

All WhatsApp CTAs:
- Track clicks with location metadata
- Include pre-filled messages
- Append source tracking data
- Open in new tab/window
- Work on mobile and desktop

Update phone number in `utils/sourceTracking.ts`:
```typescript
const phoneNumber = '919999999999'; // Your WhatsApp number
```

## 🎨 Landing Page Comparison

| Feature | Premium Escape | Group Tour |
|---------|---------------|------------|
| Theme | Dark with overlay | Light and clean |
| Hero Style | Full-screen background | Gradient background |
| Stats Display | Grid layout | Horizontal bar |
| Color Scheme | Gray/Green | Teal/Cyan |
| Best For | Dramatic impact | Modern, professional |

## 📈 Analytics Usage

### Query Sessions
```bash
curl "http://localhost:5000/api/analytics/sessions?page=kerala-premium-escape&days=7"
```

### Query Events
```bash
curl "http://localhost:5000/api/analytics/events?event_type=whatsapp_click&days=7"
```

### Query User Details
```bash
curl "http://localhost:5000/api/analytics/user-details?form_type=exit_intent&days=30"
```

## 🛠 Technologies Used

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS
- **React** - UI library

### Backend
- **Flask** - Python web framework
- **SQLAlchemy** - ORM for database
- **SQLite** - Database (can use PostgreSQL in production)
- **Flask-CORS** - Cross-origin support
- **Flask-Migrate** - Database migrations

## 🚢 Deployment

### Frontend (Vercel)
```bash
npm run build
vercel deploy
```

Set environment variable in Vercel:
```
NEXT_PUBLIC_API_URL=https://your-backend-url.com/api
```

### Backend (Production)

Using Gunicorn:
```bash
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 "app:create_app()"
```

For production, consider:
- PostgreSQL instead of SQLite
- Proper secret key management
- HTTPS/SSL certificates
- Rate limiting
- CORS configuration for production domains

## 🔒 Security Considerations

- Backend stores IP addresses for analytics
- CORS configured for localhost (update for production)
- No authentication on analytics endpoints (add if needed)
- Session IDs stored in localStorage
- Sanitize user inputs before storing

## 📝 Customization

### Update Contact Information
- Phone: `utils/sourceTracking.ts`
- Email/Address: Footer components

### Modify Tracking Events
Edit `services/trackingService.ts` to add custom events

### Change Colors
Update `tailwind.config.ts`

### Add New Tracking Fields
1. Update database models in `backend/app/models.py`
2. Run migrations
3. Update API endpoints
4. Update frontend tracking service

## 📄 License

This project is built for Kerala Wanderers travel company.

## 🤝 Contributing

This is a client project. Contact the project maintainer for contribution guidelines.

---

Built with ❤️ using Next.js, Flask, and Tailwind CSS
