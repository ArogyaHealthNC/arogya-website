import React from 'react';
import { User } from 'lucide-react';
import './MeetYourGuide.css';

const MeetYourGuide = () => {
  return (
    <section className="meet-your-guide">
      <div className="container">
        <h2 className="section-heading">Your Expert Guide</h2>

        <div className="guide-content">
          <div className="guide-image">
            <div className="guide-image-placeholder">
              {/* Placeholder for instructor image */}
              <User size={64} className="placeholder-icon" />
            </div>
          </div>

          <div className="guide-info">
            <div className="guide-credentials">
              <h3 className="guide-name">[Instructor Name], RD</h3>
              <p className="guide-title">Registered Dietitian & Exercise Kinesiologist</p>
            </div>

            <div className="guide-bio">
              <p>
                With over [X] years helping adults move better and feel better, [Instructor
                Name] brings a unique combination of nutrition expertise and movement science
                to every session.
              </p>

              <p>
                Her approach is simple: practical guidance that works for real life, delivered
                in a warm and supportive environment. No extreme diets. No intimidating
                workouts. Just evidence-based strategies that help you build sustainable
                habits.
              </p>

              <blockquote className="guide-quote">
                "I created Arogya because I believe everyone deserves to feel strong,
                energized, and confident in their body — regardless of where they're starting
                from."
              </blockquote>
            </div>

            <div className="guide-badges">
              <div className="badge">RD</div>
              <div className="badge">Exercise Kinesiologist</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetYourGuide;
