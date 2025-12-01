/**
 * Contact Page - Arogya Wellness Website
 *
 * Purpose: Provide contact form and information for inquiries
 * Meta: Contact Arogya | Questions About Our Wellness Program
 * Description: Have questions about Arogya? Get in touch with our team.
 *              We typically respond within 24 hours.
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Mail,
  Clock,
  HelpCircle,
  CheckCircle,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from 'lucide-react';
import { submitContactForm } from '../services/forms';
import SEO from '../components/SEO';
import './Contact.css';

function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
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
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'This field is required';
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
      await submitContactForm(formData);
      setFormStatus({ submitted: true, loading: false, error: null });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      setFormStatus({
        submitted: false,
        loading: false,
        error: 'Failed to send message. Please try again.',
      });
    }
  };

  const handleFaqClick = () => {
    navigate('/#faq');
  };

  return (
    <div className="contact-page">
      <SEO
        title="Contact Arogya | Questions About Our Wellness Program"
        description="Have questions about Arogya? Get in touch with our team. We typically respond within 24 hours."
      />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1>Get in Touch</h1>
          <p className="intro-text">
            Have a question about Arogya? We'd love to hear from you. Fill out the form below
            or reach out directly — we typically respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="form-section">
              <h2>Send Us a Message</h2>

              {formStatus.submitted && (
                <div className="success-message">
                  <div className="success-icon">
                    <CheckCircle size={48} />
                  </div>
                  <h3>Message sent! We'll be in touch.</h3>
                  <p>Thank you for contacting us. We typically respond within 24 hours.</p>
                </div>
              )}

              {!formStatus.submitted && (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">
                      Your Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? 'error' : ''}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
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
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? 'error' : ''}
                      rows="6"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                    {errors.message && (
                      <span className="error-message">{errors.message}</span>
                    )}
                  </div>

                  <button type="submit" className="submit-button" disabled={formStatus.loading}>
                    {formStatus.loading ? 'Sending...' : 'Send Message'}
                  </button>

                  {formStatus.error && <div className="form-error">{formStatus.error}</div>}
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="info-section">
              <div className="info-card">
                <div className="info-icon">
                  <Mail size={28} />
                </div>
                <h3>Email Us Directly</h3>
                <p>Prefer email? Send us a message at:</p>
                <a href="mailto:hello@arogya.com" className="email-link">
                  hello@arogya.com
                </a>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <Clock size={28} />
                </div>
                <h3>Response Time</h3>
                <p>
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <HelpCircle size={28} />
                </div>
                <h3>Common Questions</h3>
                <p>
                  Looking for quick answers? Check out our FAQ section for common questions
                  about the program.
                </p>
                <button onClick={handleFaqClick} className="faq-link">
                  View FAQ →
                </button>
              </div>

              <div className="social-section">
                <h3>Follow us for wellness tips and updates</h3>
                <div className="social-links">
                  <a
                    href="https://facebook.com/arogya"
                    className="social-link"
                    title="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="https://instagram.com/arogya"
                    className="social-link"
                    title="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://twitter.com/arogya"
                    className="social-link"
                    title="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/company/arogya"
                    className="social-link"
                    title="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="additional-info">
        <div className="container">
          <h2>What to Expect</h2>
          <div className="expectations-grid">
            <div className="expectation-item">
              <div className="expectation-number">1</div>
              <h3>We Receive Your Message</h3>
              <p>Your inquiry goes directly to our team for review</p>
            </div>
            <div className="expectation-item">
              <div className="expectation-number">2</div>
              <h3>We Review & Respond</h3>
              <p>Our team will get back to you within 24 hours</p>
            </div>
            <div className="expectation-item">
              <div className="expectation-number">3</div>
              <h3>We Help You Get Started</h3>
              <p>Whether you have questions or are ready to join, we're here to help</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
