import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({
  logo,
  logoAlt = 'Arogya',
  navLinks = [],
  ctaText = 'Join Now',
  onCtaClick,
  className = ''
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`header ${isScrolled ? 'header-scrolled' : ''} ${className}`.trim()}
    >
      <div className="header-container">
        <div className="header-logo">
          {logo ? (
            typeof logo === 'string' ? (
              <img src={logo} alt={logoAlt} className="logo-image" />
            ) : (
              logo
            )
          ) : (
            <span className="logo-text">{logoAlt}</span>
          )}
        </div>

        {/* Desktop Navigation */}
        <nav className="header-nav" aria-label="Main navigation">
          <ul className="nav-list">
            {navLinks.map((link, index) => (
              <li key={index} className="nav-item">
                <a
                  href={link.href}
                  className={`nav-link ${link.active ? 'nav-link-active' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        {ctaText && (
          <div className="header-cta">
            <button
              className="btn btn-primary btn-medium"
              onClick={onCtaClick}
            >
              {ctaText}
            </button>
          </div>
        )}

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <nav aria-label="Mobile navigation">
            <ul className="mobile-nav-list">
              {navLinks.map((link, index) => (
                <li key={index} className="mobile-nav-item">
                  <a
                    href={link.href}
                    className={`mobile-nav-link ${link.active ? 'mobile-nav-link-active' : ''}`}
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            {ctaText && (
              <button
                className="btn btn-primary btn-medium mobile-cta"
                onClick={() => {
                  closeMobileMenu();
                  onCtaClick && onCtaClick();
                }}
              >
                {ctaText}
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  logo: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  logoAlt: PropTypes.string,
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      active: PropTypes.bool,
    })
  ),
  ctaText: PropTypes.string,
  onCtaClick: PropTypes.func,
  className: PropTypes.string,
};

export default Header;
