import React, { useState } from 'react';
import { Lock } from 'lucide-react';
import Input from '../components/Input';
import Button from '../components/Button';
import { submitEmailCapture } from '../services/forms';
import './EmailCapture.css';

const EmailCapture = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'Please enter your name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await submitEmailCapture(formData);
      setIsSuccess(true);
      setFormData({ firstName: '', email: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Email capture error:', error);
      setErrors({ email: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="email-capture">
      <div className="container">
        <div className="email-capture-content">
          <h2 className="section-heading">Not Ready to Join? Stay Connected</h2>

          <div className="lead-magnet-info">
            <h3 className="lead-magnet-title">Get a Free Wellness Tip Each Week</h3>
            <p className="lead-magnet-value">
              Join our email list for simple, actionable wellness advice delivered to your inbox every week. No spam, no sales pitches — just practical tips to help you move better and feel better.
            </p>
            <p className="social-proof">Join 500+ others getting weekly wellness tips</p>
          </div>

          <form onSubmit={handleSubmit} className="email-capture-form">
            <div className="form-fields">
              <Input
                label="Your first name"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                error={errors.firstName}
                placeholder="First name"
                required
              />

              <Input
                label="Your email address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="Email address"
                required
              />
            </div>

            <Button
              type="submit"
              variant="primary"
              size="large"
              disabled={isSubmitting}
              className="email-capture-submit"
            >
              {isSubmitting ? 'Subscribing...' : 'Get Free Wellness Tips'}
            </Button>

            {isSuccess && (
              <p className="success-message" role="alert">
                You're in! Check your inbox.
              </p>
            )}

            <p className="privacy-assurance">
              <Lock size={14} /> We respect your privacy. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailCapture;
