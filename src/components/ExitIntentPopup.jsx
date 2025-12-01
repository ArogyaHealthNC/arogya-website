/**
 * Exit Intent Popup - Arogya Wellness Website
 *
 * Purpose: Capture leads when user is about to leave the page
 * Trigger: Mouse exits viewport (desktop) or back button (mobile)
 * Content: Email capture form with lead magnet offer
 */

import { useState, useEffect, useCallback } from 'react';
import { X, Gift } from 'lucide-react';
import { submitEmailCapture } from '../services/forms';
import './ExitIntentPopup.css';

function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [formData, setFormData] = useState({ firstName: '', email: '' });
  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });
  const [errors, setErrors] = useState({});

  // Check if popup was already dismissed this session
  useEffect(() => {
    const dismissed = sessionStorage.getItem('exitPopupDismissed');
    if (dismissed) {
      setHasTriggered(true);
    }
  }, []);

  // Desktop: Mouse leave detection
  const handleMouseLeave = useCallback(
    (e) => {
      if (hasTriggered) return;

      // Only trigger when mouse leaves through the top of the viewport
      if (e.clientY <= 0) {
        setIsVisible(true);
        setHasTriggered(true);
      }
    },
    [hasTriggered]
  );

  // Set up event listeners
  useEffect(() => {
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseLeave]);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('exitPopupDismissed', 'true');
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Please enter your name';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormStatus({ loading: true, success: false, error: null });

    try {
      await submitEmailCapture(formData);
      setFormStatus({ loading: false, success: true, error: null });
      // Auto-close after success
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (error) {
      setFormStatus({
        loading: false,
        success: false,
        error: 'Something went wrong. Please try again.',
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="exit-popup-overlay" onClick={handleBackdropClick}>
      <div className="exit-popup" role="dialog" aria-modal="true">
        <button
          className="exit-popup-close"
          onClick={handleClose}
          aria-label="Close popup"
        >
          <X size={24} />
        </button>

        {formStatus.success ? (
          <div className="exit-popup-success">
            <div className="success-icon">
              <Gift size={48} />
            </div>
            <h2>You're In!</h2>
            <p>Check your inbox for your first wellness tip.</p>
          </div>
        ) : (
          <>
            <div className="exit-popup-header">
              <div className="popup-icon">
                <Gift size={32} />
              </div>
              <h2>Wait! Get a Free Wellness Tip</h2>
              <p>
                Before you go, sign up to receive simple, actionable wellness advice
                delivered to your inbox every week.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="exit-popup-form">
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Your first name"
                  className={errors.firstName ? 'error' : ''}
                />
                {errors.firstName && (
                  <span className="error-message">{errors.firstName}</span>
                )}
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && (
                  <span className="error-message">{errors.email}</span>
                )}
              </div>

              <button
                type="submit"
                className="exit-popup-submit"
                disabled={formStatus.loading}
              >
                {formStatus.loading ? 'Subscribing...' : 'Get Free Wellness Tips'}
              </button>

              {formStatus.error && (
                <p className="form-error">{formStatus.error}</p>
              )}
            </form>

            <button className="exit-popup-dismiss" onClick={handleClose}>
              No thanks, I'll pass
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ExitIntentPopup;
