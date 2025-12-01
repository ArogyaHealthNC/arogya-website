import React from 'react';
import Button from '../components/Button';
import './Hero.css';

const Hero = () => {
  const handleJoinClick = () => {
    const joinSection = document.getElementById('join-program');
    if (joinSection) {
      joinSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMoreClick = () => {
    const whatYouGetSection = document.getElementById('what-you-get');
    if (whatYouGetSection) {
      whatYouGetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <p className="hero-credibility">
            Led by a Registered Dietitian & Exercise Kinesiologist
          </p>

          <h1 className="hero-headline">
            Move better. Feel better. Live better.
          </h1>

          <p className="hero-subheadline">
            A guided exercise and wellness program designed to support your energy, strength, and overall well-being — with the community support to help you stay on track.
          </p>

          <div className="hero-cta">
            <Button
              variant="primary"
              size="large"
              onClick={handleJoinClick}
            >
              Join the Program
            </Button>
            <button
              className="hero-learn-more"
              onClick={handleLearnMoreClick}
            >
              Learn More ↓
            </button>
          </div>

          <p className="hero-trust">
            Supported by Physician Volunteers
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
