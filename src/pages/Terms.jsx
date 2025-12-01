/**
 * Terms of Service Page - Arogya Wellness Website
 *
 * Purpose: Display terms of service and usage conditions
 */

import SEO from '../components/SEO';
import './Terms.css';

function Terms() {
  return (
    <div className="terms-page">
      <SEO
        title="Terms of Service | Arogya Wellness"
        description="Read the terms and conditions for using Arogya's wellness program and website services."
      />
      {/* Hero Section */}
      <section className="legal-hero">
        <div className="container">
          <h1>Terms of Service</h1>
          <p className="last-updated">Last updated: December 1, 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="legal-content">
        <div className="container">
          <div className="legal-body">
            <div className="legal-section">
              <h2>Agreement to Terms</h2>
              <p>
                By accessing or using the Arogya website and wellness program services,
                you agree to be bound by these Terms of Service. If you do not agree to
                these terms, please do not use our services.
              </p>
            </div>

            <div className="legal-section">
              <h2>Description of Services</h2>
              <p>
                Arogya provides a community-based wellness program that includes:
              </p>
              <ul>
                <li>Live group exercise sessions led by qualified instructors</li>
                <li>Weekly lifestyle discussions on nutrition, sleep, and stress management</li>
                <li>Community support and accountability</li>
                <li>Educational wellness content</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Eligibility</h2>
              <p>
                To participate in our program, you must be at least 18 years old.
                By registering, you confirm that you meet this requirement.
              </p>
            </div>

            <div className="legal-section">
              <h2>Health Disclaimer</h2>
              <p>
                <strong>Important:</strong> Our wellness program is designed for general
                fitness and well-being. It is not a substitute for professional medical advice,
                diagnosis, or treatment.
              </p>
              <ul>
                <li>
                  Always consult your physician before starting any new exercise or
                  wellness program
                </li>
                <li>
                  If you experience any discomfort or pain during exercise, stop immediately
                  and seek medical attention
                </li>
                <li>
                  Participants are responsible for ensuring they are physically able to
                  participate in the activities
                </li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>User Responsibilities</h2>
              <p>As a participant, you agree to:</p>
              <ul>
                <li>Provide accurate information during registration</li>
                <li>Participate respectfully and support fellow community members</li>
                <li>Not share login credentials or access with others</li>
                <li>Not record or redistribute program content without permission</li>
                <li>Notify us of any health conditions that may affect your participation</li>
              </ul>
            </div>

            <div className="legal-section">
              <h2>Intellectual Property</h2>
              <p>
                All content on the Arogya website and in our programs, including but not
                limited to text, graphics, logos, videos, and exercise routines, is the
                property of Arogya and is protected by copyright and other intellectual
                property laws.
              </p>
            </div>

            <div className="legal-section">
              <h2>Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Arogya shall not be liable for
                any indirect, incidental, special, consequential, or punitive damages
                arising from your use of our services or participation in our program.
              </p>
            </div>

            <div className="legal-section">
              <h2>Modifications to Service</h2>
              <p>
                We reserve the right to modify, suspend, or discontinue any aspect of
                our services at any time. We will provide reasonable notice of significant
                changes when possible.
              </p>
            </div>

            <div className="legal-section">
              <h2>Changes to Terms</h2>
              <p>
                We may update these Terms of Service from time to time. Continued use
                of our services after changes are posted constitutes acceptance of the
                updated terms.
              </p>
            </div>

            <div className="legal-section">
              <h2>Contact Us</h2>
              <p>
                If you have questions about these Terms of Service, please contact us at:
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

export default Terms;
