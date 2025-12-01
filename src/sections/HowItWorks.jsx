import React from 'react';
import Button from '../components/Button';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Join the Program',
      description: 'Sign up in under 2 minutes. No complicated setup — just your name and email to get started.'
    },
    {
      number: 2,
      title: 'Attend Live Sessions',
      description: 'Join 3 guided exercise sessions and 1 lifestyle discussion each week, right from your living room.'
    },
    {
      number: 3,
      title: 'Feel Better, Together',
      description: 'Experience more energy, better sleep, and the motivation that comes from being part of a supportive community.'
    }
  ];

  const handleStartClick = () => {
    const joinSection = document.getElementById('join-program');
    if (joinSection) {
      joinSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-heading">Getting Started is Simple</h2>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="how-it-works-cta">
          <Button
            variant="primary"
            size="large"
            onClick={handleStartClick}
          >
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
