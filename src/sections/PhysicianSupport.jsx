import React from 'react';
import { Stethoscope, BookOpen, Sun } from 'lucide-react';
import Card from '../components/Card';
import './PhysicianSupport.css';

const PhysicianSupport = () => {
  const badges = [
    {
      icon: Stethoscope,
      title: 'Physician Oversight',
      description: 'Program reviewed by medical professionals',
    },
    {
      icon: BookOpen,
      title: 'Evidence-Based Approach',
      description: 'Grounded in nutrition and exercise science',
    },
    {
      icon: Sun,
      title: 'Holistic Health Focus',
      description: 'Mind, body, and lifestyle integration',
    },
  ];

  return (
    <section className="physician-support">
      <div className="container">
        <h2 className="section-heading">Supported by Physicians</h2>

        <p className="physician-statement">
          Arogya is supported by volunteer physicians who believe in the power of movement
          and lifestyle for better health. Their involvement ensures our program aligns with
          evidence-based practices and prioritizes your safety.
        </p>

        <div className="trust-badges">
          {badges.map((badge, index) => {
            const IconComponent = badge.icon;
            return (
              <Card key={index} variant="default" className="trust-badge">
                <div className="trust-icon" aria-hidden="true">
                  <IconComponent size={28} />
                </div>
                <h3 className="trust-title">{badge.title}</h3>
                <p className="trust-description">{badge.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PhysicianSupport;
