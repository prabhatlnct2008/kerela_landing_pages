from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_migrate import Migrate
import os

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)

    # Configuration
    app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URI', 'sqlite:///tracking.db')
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'dev-secret-key-change-in-production')

    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)

    # CORS configuration - allow Vercel and localhost
    allowed_origins = [
        'http://localhost:3000',
        'http://localhost:3001',
        'https://kerela-landing-pages.vercel.app',
        'https://*.vercel.app'  # Allow all Vercel preview deployments
    ]
    # Add custom origins from environment variable
    custom_origins = os.getenv('CORS_ORIGINS', '').split(',')
    allowed_origins.extend([o.strip() for o in custom_origins if o.strip()])

    CORS(app, origins=allowed_origins, supports_credentials=True)

    # Register blueprints
    from app.routes import tracking_bp
    app.register_blueprint(tracking_bp, url_prefix='/api')

    # Create tables
    with app.app_context():
        db.create_all()

    return app
