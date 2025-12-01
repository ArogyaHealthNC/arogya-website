/**
 * 404 Not Found Page - Arogya Wellness Website
 *
 * Purpose: Display a friendly error page for non-existent routes
 */

import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import './NotFound.css';

function NotFound() {
  return (
    <div className="not-found-page">
      <SEO
        title="Page Not Found | Arogya Wellness"
        description="The page you're looking for doesn't exist. Return to Arogya's homepage to continue your wellness journey."
        noIndex={true}
      />
      <div className="container">
        <div className="not-found-content">
          <h1 className="error-code">404</h1>
          <h2 className="error-title">Page Not Found</h2>
          <p className="error-message">
            Oops! The page you're looking for doesn't exist or has been moved.
            Let's get you back on track to wellness.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary">
              <Home size={20} />
              <span>Go Home</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn btn-secondary"
            >
              <ArrowLeft size={20} />
              <span>Go Back</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
