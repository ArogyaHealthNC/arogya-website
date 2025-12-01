import React from 'react';
import { Apple, Moon, Scale, Zap } from 'lucide-react';
import Card from '../components/Card';
import './LifestyleTopics.css';

const LifestyleTopics = () => {
  const topics = [
    {
      icon: Apple,
      title: 'Nutrition & Healthy Eating',
      description:
        'Simple, practical tips for nourishing your body — no restrictive diets or complicated meal plans.',
    },
    {
      icon: Moon,
      title: 'Sleep Hygiene',
      description:
        'Better rest for more energy. Learn science-backed strategies for improving your sleep quality.',
    },
    {
      icon: Scale,
      title: 'Stress Management',
      description:
        'Practical techniques for daily calm — because managing stress is essential for lasting health.',
    },
    {
      icon: Zap,
      title: 'Energy & Recovery',
      description:
        'Fuel your body for active living. Understand how movement, rest, and nutrition work together.',
    },
  ];

  return (
    <section className="lifestyle-topics">
      <div className="container">
        <h2 className="section-heading">Wellness Beyond Movement</h2>

        <p className="lifestyle-intro">
          Our weekly discussions cover practical lifestyle topics to support your overall
          well-being — because feeling your best takes more than exercise alone.
        </p>

        <div className="topics-grid">
          {topics.map((topic, index) => {
            const IconComponent = topic.icon;
            return (
              <Card key={index} variant="feature" className="topic-card">
                <div className="topic-icon" aria-hidden="true">
                  <IconComponent size={28} />
                </div>
                <h3 className="topic-title">{topic.title}</h3>
                <p className="topic-description">{topic.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LifestyleTopics;
