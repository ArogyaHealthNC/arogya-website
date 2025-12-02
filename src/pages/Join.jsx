/**
 * Join Page - Arogya Wellness Website
 *
 * Purpose: Dedicated registration page for the wellness program
 * Meta: Join Arogya | Start Your Wellness Journey Today
 */

import { useState } from 'react';
import { CheckCircle, Users, Calendar, Heart, Sparkles } from 'lucide-react';
import { submitRegistrationForm } from '../services/forms';
import SEO from '../components/SEO';
import './Join.css';

const benefits = [
  {
    icon: Calendar,
    title: '3 Live Sessions Weekly',
    description: 'Expert-led exercise sessions designed for all fitness levels',
  },
  {
    icon: Users,
    title: 'Supportive Community',
    description: 'Connect with others on the same wellness journey',
  },
  {
    icon: Heart,
    title: 'Physician-Backed',
    description: 'Program designed with physician volunteers',
  },
  {
    icon: Sparkles,
    title: 'Lifestyle Coaching',
    description: 'Weekly discussions on nutrition, sleep, and stress',
  },
];

const referralSources = [
  { value: '', label: 'Select an option' },
  { value: 'friend', label: 'Friend or family member' },
  { value: 'social', label: 'Social media' },
  { value: 'search', label: 'Internet search' },
  { value: 'healthcare', label: 'Healthcare provider' },
  { value: 'community', label: 'Community event' },
  { value: 'other', label: 'Other' },
];

function Join() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    referralSource: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false,
    error: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormStatus({ submitted: false, loading: true, error: null });

    try {
      await submitRegistrationForm(formData);
      setFormStatus({ submitted: true, loading: false, error: null });
    } catch {
      setFormStatus({
        submitted: false,
        loading: false,
        error: 'Something went wrong. Please try again.',
      });
    }
  };

  if (formStatus.submitted) {
    return (
      <div className="join-page">
        <div className="join-success">
          <div className="container">
            <div className="success-content">
              <div className="success-icon">
                <CheckCircle size={64} />
              </div>
              <h1>Welcome to Arogya!</h1>
              <p className="success-message">
                You're officially registered. Check your email for next steps and
                details about joining your first session.
              </p>
              <div className="success-next-steps">
                <h2>What's Next?</h2>
                <ol>
                  <li>Check your inbox for a welcome email</li>
                  <li>Add the session times to your calendar</li>
                  <li>Join us for your first session — we can't wait to meet you!</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="join-page">
      <SEO
        title="Join Arogya | Start Your Wellness Journey Today"
        description="Sign up for Arogya's guided exercise and wellness program. 3 live sessions weekly, lifestyle coaching, and a supportive community."
      />
      {/* Hero Section */}
      <section className="join-hero">
        <div className="container">
          <h1>Start Your Wellness Journey</h1>
          <p className="hero-subtitle">
            Join our community of people committed to moving better, feeling better,
            and living better — together.
          </p>
        </div>
      </section>

      {/* Registration Content */}
      <section className="join-content">
        <div className="container">
          <div className="join-grid">
            {/* Benefits Sidebar */}
            <div className="benefits-section">
              <h2>What You'll Get</h2>
              <div className="benefits-list">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="benefit-item">
                      <div className="benefit-icon">
                        <IconComponent size={24} />
                      </div>
                      <div className="benefit-text">
                        <h3>{benefit.title}</h3>
                        <p>{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="trust-badge">
                <p>
                  <strong>100% Free</strong> — No credit card required.
                  <br />
                  Just bring your enthusiasm!
                </p>
              </div>
            </div>

            {/* Registration Form */}
            <div className="form-section">
              <div className="form-card">
                <h2>Register Now</h2>
                <p className="form-intro">
                  Fill out the form below to secure your spot. We'll send you
                  everything you need to get started.
                </p>

                <form onSubmit={handleSubmit} className="registration-form">
                  <div className="form-group">
                    <label htmlFor="fullName">
                      Full Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={errors.fullName ? 'error' : ''}
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <span className="error-message">{errors.fullName}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? 'error' : ''}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <span className="error-message">{errors.email}</span>
                    )}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="referralSource">How did you hear about us?</label>
                    <select
                      id="referralSource"
                      name="referralSource"
                      value={formData.referralSource}
                      onChange={handleChange}
                    >
                      {referralSources.map((source) => (
                        <option key={source.value} value={source.value}>
                          {source.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="submit-button"
                    disabled={formStatus.loading}
                  >
                    {formStatus.loading ? 'Registering...' : 'Join the Program'}
                  </button>

                  {formStatus.error && (
                    <div className="form-error">{formStatus.error}</div>
                  )}
                </form>

                <p className="form-disclaimer">
                  By registering, you agree to our{' '}
                  <a href="/terms">Terms of Service</a> and{' '}
                  <a href="/privacy">Privacy Policy</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Join;
