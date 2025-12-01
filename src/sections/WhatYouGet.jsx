import React from 'react';
import { Activity, MessageCircle, Users } from 'lucide-react';
import Card from '../components/Card';
import './WhatYouGet.css';

const WhatYouGet = () => {
  const features = [
    {
      icon: Activity,
      title: '3 Live Exercise Sessions',
      description:
        "Join guided movement sessions designed for all fitness levels. No gym required — just you, your screen, and 45 minutes to feel stronger.",
    },
    {
      icon: MessageCircle,
      title: 'Weekly Lifestyle Discussions',
      description:
        "Learn practical strategies for better sleep, smarter eating, and stress relief. Real advice you can use immediately — no fads or complicated rules.",
    },
    {
      icon: Users,
      title: 'Community Support & Accountability',
      description:
        "You're not doing this alone. Connect with a supportive group of people who get it — and who will help you show up, week after week.",
    },
  ];

  return (
    <section id="what-you-get" className="what-you-get">
      <div className="container">
        <h2 className="section-heading">Your Weekly Wellness Routine</h2>

        <div className="features-grid">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} variant="feature" className="feature-card">
                <div className="feature-icon" aria-hidden="true">
                  <IconComponent size={32} />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
