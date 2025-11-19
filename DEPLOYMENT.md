# Deployment Guide for PythonAnywhere

## Overview

This project has two parts:
- **Flask Backend** - Tracking API (perfect for PythonAnywhere)
- **Next.js Frontend** - Landing pages (requires static export or separate hosting)

---

## Option A: Hybrid Deployment (Recommended)

### Part 1: Deploy Flask Backend to PythonAnywhere

#### Step 1: Create PythonAnywhere Account
1. Go to [pythonanywhere.com](https://www.pythonanywhere.com)
2. Sign up for an account (free tier works for testing)

#### Step 2: Upload Backend Code

**Method 1: Using Git (Recommended)**
```bash
# In PythonAnywhere Bash console
cd ~
git clone <your-repo-url> kerela_landing_pages
cd kerela_landing_pages/backend
```

**Method 2: Upload ZIP**
1. Zip the `backend` folder
2. Upload via PythonAnywhere Files tab
3. Extract in your home directory

#### Step 3: Create Virtual Environment
```bash
# In PythonAnywhere Bash console
cd ~/kerela_landing_pages/backend
mkvirtualenv --python=/usr/bin/python3.10 kerela-env
pip install -r requirements.txt
```

#### Step 4: Configure Web App

1. Go to **Web** tab → **Add a new web app**
2. Select **Manual configuration** → **Python 3.10**
3. Configure WSGI file:

Click on the WSGI configuration file link and replace contents with:

```python
import sys
import os

# Add your project to the path
project_home = '/home/YOUR_USERNAME/kerela_landing_pages/backend'
if project_home not in sys.path:
    sys.path.insert(0, project_home)

# Set environment variables
os.environ['FLASK_ENV'] = 'production'
os.environ['DATABASE_URL'] = 'sqlite:////home/YOUR_USERNAME/kerela_landing_pages/backend/instance/tracking.db'

# Import your Flask app
from run import app as application
```

**Replace `YOUR_USERNAME` with your PythonAnywhere username!**

#### Step 5: Configure Virtual Environment Path
In the Web tab, set **Virtualenv** to:
```
/home/YOUR_USERNAME/.virtualenvs/kerela-env
```

#### Step 6: Set Up Static Files (Optional)
If serving frontend from PythonAnywhere, add static file mapping:
- URL: `/static/`
- Directory: `/home/YOUR_USERNAME/kerela_landing_pages/backend/static`

#### Step 7: Reload Web App
Click the green **Reload** button.

Your Flask API will be available at:
```
https://YOUR_USERNAME.pythonanywhere.com/api/
```

### Part 2: Deploy Next.js to Vercel (Free)

#### Step 1: Push to GitHub
Ensure your code is on GitHub.

#### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click **New Project** → Import your repository

#### Step 3: Configure Environment Variables
In Vercel dashboard, add:
```
NEXT_PUBLIC_API_URL=https://YOUR_USERNAME.pythonanywhere.com/api
NEXT_PUBLIC_WHATSAPP_NUMBER=919999999999
NEXT_PUBLIC_ADMIN_USERNAME=admin
NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_password
```

#### Step 4: Deploy
Vercel auto-deploys on every push to main branch.

Your frontend will be at: `https://your-project.vercel.app`

---

## Option B: All on PythonAnywhere

### Step 1: Build Next.js as Static Export

First, update `next.config.js` to enable static export:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

Then build:
```bash
npm run build
```

This creates an `out` folder with static HTML/CSS/JS files.

### Step 2: Upload to PythonAnywhere

1. Zip the `out` folder
2. Upload to PythonAnywhere
3. Extract to `/home/YOUR_USERNAME/kerela_landing_pages/frontend`

### Step 3: Configure Flask to Serve Frontend

Update your Flask app to serve the static frontend:

```python
# In backend/app/__init__.py or run.py
from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_folder='../frontend')

# Serve Next.js static files
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_frontend(path):
    frontend_dir = os.path.join(app.root_path, '..', 'frontend')

    if path and os.path.exists(os.path.join(frontend_dir, path)):
        return send_from_directory(frontend_dir, path)

    # For SPA routing, serve index.html
    if path and os.path.exists(os.path.join(frontend_dir, path, 'index.html')):
        return send_from_directory(os.path.join(frontend_dir, path), 'index.html')

    return send_from_directory(frontend_dir, 'index.html')

# Keep API routes under /api prefix
# ... your existing routes
```

### Step 4: Update WSGI Configuration

Same as Option A, Step 4.

### Step 5: Static Files Mapping

In PythonAnywhere Web tab, add:
- URL: `/_next/`
- Directory: `/home/YOUR_USERNAME/kerela_landing_pages/frontend/_next`

- URL: `/images/`
- Directory: `/home/YOUR_USERNAME/kerela_landing_pages/frontend/images`

---

## Database Setup

### SQLite (Default - Good for small traffic)
SQLite works out of the box. Database file location:
```
/home/YOUR_USERNAME/kerela_landing_pages/backend/instance/tracking.db
```

### MySQL (Better for production)

1. Go to **Databases** tab in PythonAnywhere
2. Create a MySQL database
3. Update your Flask config:

```python
# In backend/app/__init__.py
import os

if os.environ.get('PYTHONANYWHERE'):
    SQLALCHEMY_DATABASE_URI = 'mysql://YOUR_USERNAME:YOUR_PASSWORD@YOUR_USERNAME.mysql.pythonanywhere-services.com/YOUR_USERNAME$tracking'
else:
    SQLALCHEMY_DATABASE_URI = 'sqlite:///tracking.db'
```

4. Install MySQL driver:
```bash
pip install mysqlclient
```

---

## CORS Configuration

Update Flask CORS to allow your frontend domain:

```python
# In backend/app/__init__.py
from flask_cors import CORS

app = Flask(__name__)

# Update with your actual domains
CORS(app, resources={
    r"/api/*": {
        "origins": [
            "http://localhost:3000",
            "https://your-project.vercel.app",
            "https://YOUR_USERNAME.pythonanywhere.com"
        ]
    }
})
```

---

## Environment Variables on PythonAnywhere

### Method 1: In WSGI file
```python
import os
os.environ['SECRET_KEY'] = 'your-secret-key'
os.environ['FLASK_ENV'] = 'production'
```

### Method 2: Using .env file
```bash
# Create .env in backend folder
echo "SECRET_KEY=your-secret-key" >> ~/kerela_landing_pages/backend/.env
echo "FLASK_ENV=production" >> ~/kerela_landing_pages/backend/.env
```

Then in Flask:
```python
from dotenv import load_dotenv
load_dotenv()
```

---

## Testing Your Deployment

### Test Flask API
```bash
curl https://YOUR_USERNAME.pythonanywhere.com/api/health
```

### Test Session Creation
```bash
curl -X POST https://YOUR_USERNAME.pythonanywhere.com/api/session/create \
  -H "Content-Type: application/json" \
  -d '{"page_name": "test", "source": "deployment-test"}'
```

### Check Logs
- **Error log**: Web tab → Error log
- **Server log**: Web tab → Server log
- **Access log**: Web tab → Access log

---

## Common Issues & Solutions

### Issue: "No module named 'flask'"
**Solution**: Ensure virtualenv path is correct in Web tab.

### Issue: CORS errors
**Solution**: Update Flask CORS configuration with correct origins.

### Issue: Database not found
**Solution**: Run database initialization:
```bash
cd ~/kerela_landing_pages/backend
python -c "from app import create_app, db; app = create_app(); app.app_context().push(); db.create_all()"
```

### Issue: Static files not loading
**Solution**: Check static file mappings in Web tab.

### Issue: 502 Bad Gateway
**Solution**: Check error logs; usually a Python import error.

---

## SSL/HTTPS

PythonAnywhere provides free SSL for `*.pythonanywhere.com` domains.

For custom domains (paid accounts):
1. Go to Web tab
2. Add custom domain
3. Enable Force HTTPS

---

## Scheduled Tasks (Optional)

For cleanup tasks, analytics reports, etc.:

1. Go to **Tasks** tab
2. Add scheduled task:
```bash
cd ~/kerela_landing_pages/backend && /home/YOUR_USERNAME/.virtualenvs/kerela-env/bin/python cleanup.py
```

---

## Cost Comparison

| Feature | Free Tier | Paid ($5/mo) |
|---------|-----------|--------------|
| Web apps | 1 | Unlimited |
| Custom domain | No | Yes |
| Always-on | No (sleeps after 3 months) | Yes |
| CPU seconds/day | 100 | 2000 |
| MySQL | Yes | Yes |

---

## Quick Start Commands

```bash
# SSH into PythonAnywhere console
# Clone repository
git clone <your-repo> kerela_landing_pages
cd kerela_landing_pages/backend

# Create virtual environment
mkvirtualenv --python=/usr/bin/python3.10 kerela-env

# Install dependencies
pip install -r requirements.txt

# Initialize database
python -c "from app import create_app, db; app = create_app(); app.app_context().push(); db.create_all()"

# Test locally
python run.py
```

Then configure Web app in PythonAnywhere dashboard.

---

## Next Steps After Deployment

1. ✅ Test all API endpoints
2. ✅ Verify tracking is working
3. ✅ Check admin dashboard login
4. ✅ Update WhatsApp number in production
5. ✅ Change admin password
6. ✅ Set up database backups
7. ✅ Monitor error logs

---

Need help? Check PythonAnywhere's documentation: https://help.pythonanywhere.com/
