/**
 * About Page - Arogya Wellness Website
 *
 * Purpose: Showcase mission, philosophy, origin story, instructor bio, and physician advisors
 * Meta: About Arogya | Our Mission & Approach to Wellness
 * Description: Learn about Arogya's holistic approach to wellness, our founding story,
 *              and the expert team behind our guided exercise and lifestyle program.
 */

import { useNavigate } from 'react-router-dom';
import { CheckCircle, BookOpen, Sun } from 'lucide-react';
import SEO from '../components/SEO';
import './About.css';

function About() {
  const navigate = useNavigate();

  const handleJoinClick = () => {
    navigate('/join');
  };

  return (
    <div className="about-page">
      <SEO
        title="About Arogya | Our Mission & Approach to Wellness"
        description="Learn about Arogya's holistic approach to wellness, our founding story, and the expert team behind our guided exercise and lifestyle program."
      />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1>About Arogya</h1>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <p className="mission-statement">
              Arogya exists to help adults feel their best — physically and mentally — through
              guided movement, practical wellness education, and the power of community.
            </p>
            <p className="mission-statement">
              We believe that wellness shouldn't be complicated, intimidating, or isolating.
              It should be accessible, sustainable, and something you actually enjoy.
            </p>
          </div>
        </div>
      </section>

      {/* Program Philosophy */}
      <section className="philosophy-section">
        <div className="container">
          <h2>Our Approach</h2>
          <div className="philosophy-content">
            <p>
              Arogya takes a holistic approach to wellness. We know that feeling your best
              isn't just about exercise — it's about how you sleep, what you eat, how you
              manage stress, and who supports you along the way.
            </p>
            <p>
              That's why our program combines three weekly exercise sessions with lifestyle
              discussions on topics that matter: nutrition, sleep, stress management, and
              recovery. And we do it all in a supportive community environment where showing
              up matters more than being perfect.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="origin-section">
        <div className="container">
          <h2>How Arogya Started</h2>
          <div className="origin-content">
            <p>
              Arogya was founded by [Instructor Name], a Registered Dietitian and Exercise
              Kinesiologist who saw too many people struggling with wellness programs that
              didn't work for real life.
            </p>
            <blockquote className="founder-quote">
              "I kept meeting people who felt like they'd tried everything — every diet,
              every workout trend — and nothing stuck. They weren't failing. The programs
              were failing them."
            </blockquote>
            <p>
              Arogya was created as an alternative: a program built on evidence-based practices,
              designed for all fitness levels, and grounded in the belief that community support
              makes all the difference.
            </p>
            <p>
              The name "Arogya" comes from Sanskrit, meaning "health" or "freedom from disease."
              It represents our vision of wellness as a state of vitality and well-being — not
              just the absence of illness.
            </p>
          </div>
        </div>
      </section>

      {/* Instructor Bio */}
      <section className="instructor-section">
        <div className="container">
          <h2>Meet [Instructor Name]</h2>
          <div className="instructor-content">
            <div className="instructor-image">
              {/* Placeholder for instructor image */}
              <div className="image-placeholder">
                <span>Instructor Photo</span>
              </div>
            </div>
            <div className="instructor-bio">
              <p className="credentials">
                Registered Dietitian & Exercise Kinesiologist
              </p>
              <p>
                [Instructor Name] is a Registered Dietitian and Exercise Kinesiologist with
                over [X] years of experience helping adults improve their health through
                movement and nutrition.
              </p>
              <p>
                She holds a [degree] from [University] and has completed additional
                certifications in [relevant certifications]. Her career has spanned [clinical
                settings, community wellness, etc.], giving her a unique perspective on what
                actually helps people create lasting change.
              </p>
              <p>
                When she's not leading Arogya sessions, [Instructor Name] enjoys [personal
                interests], reminding her participants that wellness is about living a full
                life — not a restricted one.
              </p>

              {/* Certification Badges */}
              <div className="certifications">
                <div className="cert-badge">RD</div>
                <div className="cert-badge">Exercise Kinesiologist</div>
                <div className="cert-badge">Additional Certifications</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Physician Advisors */}
      <section className="physicians-section">
        <div className="container">
          <h2>Our Physician Advisors</h2>
          <div className="physicians-content">
            <p>
              Arogya is supported by a team of volunteer physicians who review our programming
              and ensure it aligns with evidence-based health practices.
            </p>
            <p>
              Their involvement reflects our commitment to delivering a program that's not just
              enjoyable, but safe and effective. We're grateful for their support and expertise.
            </p>

            {/* Trust Badges */}
            <div className="trust-badges">
              <div className="trust-badge">
                <div className="badge-icon">
                  <CheckCircle size={28} />
                </div>
                <h3>Physician Oversight</h3>
                <p>Program reviewed by medical professionals</p>
              </div>
              <div className="trust-badge">
                <div className="badge-icon">
                  <BookOpen size={28} />
                </div>
                <h3>Evidence-Based Approach</h3>
                <p>Grounded in nutrition and exercise science</p>
              </div>
              <div className="trust-badge">
                <div className="badge-icon">
                  <Sun size={28} />
                </div>
                <h3>Holistic Health Focus</h3>
                <p>Mind, body, and lifestyle integration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Join Us?</h2>
            <p>Experience the Arogya difference for yourself</p>
            <button className="cta-button" onClick={handleJoinClick}>
              Join the Program
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
