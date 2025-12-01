import React, { useState } from 'react';
import { Check, CheckCircle } from 'lucide-react';
import Input from '../components/Input';
import Button from '../components/Button';
import { submitRegistrationForm } from '../services/forms';
import './JoinProgram.css';

const JoinProgram = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    referralSource: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const benefits = [
    '3 live exercise sessions per week',
    'Weekly lifestyle discussions',
    'Community support & accountability',
    'Expert guidance from a Registered Dietitian',
    'Recordings available if you miss a session'
  ];

  const trustIndicators = [
    'Cancel anytime',
    'All fitness levels welcome',
    'No equipment required'
  ];

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

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your name';
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
      await submitRegistrationForm(formData);
      setIsSuccess(true);
      setFormData({ fullName: '', email: '', phone: '', referralSource: '' });
    } catch (error) {
      console.error('Registration error:', error);
      setErrors({ email: 'Something went wrong. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="join-program" className="join-program">
        <div className="container">
          <div className="success-state">
            <div className="success-icon">
              <CheckCircle size={48} />
            </div>
            <h2>Welcome to Arogya! Check your email for next steps.</h2>
            <p className="what-to-expect">
              You'll receive a welcome email with everything you need to get started — including your session links and a quick guide to your first week.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="join-program" className="join-program">
      <div className="container">
        <h2 className="section-heading">Ready to Feel Your Best?</h2>

        <p className="value-statement">
          Join Arogya and experience the power of guided movement, practical wellness education, and a community that has your back. Your journey to feeling stronger, more energized, and more confident starts here.
        </p>

        <div className="join-content">
          <div className="join-benefits">
            <h3 className="benefits-heading">What's Included:</h3>
            <ul className="benefits-list">
              {benefits.map((benefit, index) => (
                <li key={index} className="benefit-item">
                  <Check size={18} className="benefit-icon" />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="trust-indicators">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="trust-indicator-item">
                  <Check size={16} className="trust-check" />
                  {indicator}
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="join-form">
            <Input
              label="Full Name"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              error={errors.fullName}
              placeholder="Your full name"
              required
            />

            <Input
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="your@email.com"
              required
            />

            <Input
              label="Phone (optional)"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
            />

            <div className="input-group">
              <label htmlFor="referralSource" className="label">
                How did you hear about us?
              </label>
              <select
                id="referralSource"
                name="referralSource"
                className="input select"
                value={formData.referralSource}
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                <option value="Friend or Family">Friend or Family</option>
                <option value="Social Media">Social Media</option>
                <option value="Search Engine">Search Engine</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="large"
              disabled={isSubmitting}
              className="join-submit"
            >
              {isSubmitting ? 'Joining...' : 'Join Arogya Now'}
            </Button>

            <p className="what-to-expect">
              After signing up, you'll receive a welcome email with everything you need to get started — including your session links and a quick guide to your first week.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinProgram;
