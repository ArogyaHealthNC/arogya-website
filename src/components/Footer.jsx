import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

const Footer = ({
  logo,
  logoAlt = 'Arogya',
  tagline = 'Move better. Feel better. Live better.',
  contactEmail = 'hello@arogya.com',
  navLinks = [],
  legalLinks = [],
  socialLinks = [],
  onNewsletterSubmit,
  className = ''
}) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      if (onNewsletterSubmit) {
        await onNewsletterSubmit(email);
      }
      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className={`footer ${className}`.trim()}>
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              {logo ? (
                typeof logo === 'string' ? (
                  <img src={logo} alt={logoAlt} className="footer-logo-image" />
                ) : (
                  logo
                )
              ) : (
                <span className="footer-logo-text">{logoAlt}</span>
              )}
            </div>
            <p className="footer-tagline">{tagline}</p>
            {contactEmail && (
              <a href={`mailto:${contactEmail}`} className="footer-email">
                {contactEmail}
              </a>
            )}
          </div>

          {/* Navigation Column */}
          {navLinks.length > 0 && (
            <div className="footer-nav">
              <h3 className="footer-nav-title">Navigation</h3>
              <nav aria-label="Footer navigation">
                <ul className="footer-nav-list">
                  {navLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="footer-nav-link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          )}

          {/* Newsletter Column */}
          <div className="footer-newsletter">
            <h3 className="footer-newsletter-title">Stay Connected</h3>
            <p className="footer-newsletter-description">
              Get weekly wellness tips delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="newsletter-form">
              <div className="newsletter-input-group">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="newsletter-input"
                  aria-label="Email address for newsletter"
                />
                <button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="newsletter-submit"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              {submitStatus === 'success' && (
                <p className="newsletter-success" role="status">
                  You're in! Check your inbox.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="newsletter-error" role="alert">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>

            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div className="footer-social">
                <p className="footer-social-title">Follow us</p>
                <div className="footer-social-links">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="footer-social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <p className="footer-copyright">
              © {new Date().getFullYear()} Arogya. All rights reserved.
            </p>
            {legalLinks.length > 0 && (
              <ul className="footer-legal-links">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-legal-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  logo: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  logoAlt: PropTypes.string,
  tagline: PropTypes.string,
  contactEmail: PropTypes.string,
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  legalLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ),
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
    })
  ),
  onNewsletterSubmit: PropTypes.func,
  className: PropTypes.string,
};

export default Footer;
