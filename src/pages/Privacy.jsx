/**
 * Privacy Policy Page - Arogya Wellness Website
 *
 * Purpose: Display privacy policy and data handling information
 */

import SEO from '../components/SEO';
import './Privacy.css';

function Privacy() {
  return (
    <div className="privacy-page">
      <SEO
        title="Privacy Policy | Arogya Wellness"
        description="Learn how Arogya collects, uses, and protects your personal information. Read our complete privacy policy."
      />
      {/* Hero Section */}
      <section className="legal-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: December 1, 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="legal-content">
        <div className="container">
          <div className="legal-body">
            <div className="legal-section">
              <h2>Introduction</h2>
              <p>
                Arogya ("we," "our," or "us") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website or participate in our wellness program.
              </p>
            </div>

            <div className="legal-section">
              <h2>Information We Collect</h2>
              <h3>Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide, including:</p>
              <ul>
                <li>Name and email address</li>
                <li>Phone number (optional)</li>
                <li>How you heard about us</li>
                <li>Messages and inquiries submitted through our contact form</li>
              </ul>

              <h3>Automatically Collected Information</h3>
              <p>
                When you visit our website, we may automatically collect certain information
                about your device and usage patterns, including:
              </p>
              <ul>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide and manage our wellness program services</li>
                <li>Send you program updates, schedules, and communications</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Send newsletters and wellness tips (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties.
                We may share your information only in the following circumstances:
              </p>
              <ul>
                <li>With service providers who assist in our operations (e.g., email services)</li>
                <li>When required by law or to protect our rights</li>
                <li>With your explicit consent</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect
                your personal information. However, no method of transmission over the
                Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="legal-section">
              <h2>Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Cookies</h2>
              <p>
                Our website may use cookies and similar tracking technologies to enhance
                your browsing experience. You can set your browser to refuse cookies,
                though this may limit some functionality.
              </p>
            </div>

            <div className="legal-section">
              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you
                of any changes by posting the new policy on this page and updating the
                "Last updated" date.
              </p>
            </div>

            <div className="legal-section">
              <h2>Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our data practices,
                please contact us at:
              </p>
              <p className="contact-info">
                <strong>Email:</strong>{' '}
                <a href="mailto:hello@arogya.com">hello@arogya.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Privacy;
