import React from 'react';
import { Users } from 'lucide-react';
import Card from '../components/Card';
import './Community.css';

const Community = () => {
  const testimonials = [
    {
      quote: 'This program has completely changed my mornings. I actually look forward to moving now — something I never thought I\'d say.',
      author: 'Sarah M.',
      duration: 'Participant for 8 months'
    },
    {
      quote: 'I love the community feel. Everyone is so supportive, and the discussions on sleep and stress have been game-changers for me.',
      author: 'James T.',
      duration: 'Participant for 6 months'
    },
    {
      quote: 'The community aspect keeps me accountable in a way that\'s encouraging, not judgmental. I\'ve finally found something I can stick with.',
      author: 'Maria L.',
      duration: 'Participant for 1 year'
    }
  ];

  const stats = [
    { value: '50+', label: 'Active Participants' },
    { value: '200+', label: 'Sessions Held' },
    { value: '12', label: 'Lifestyle Topics Covered' },
    { value: '4.9★', label: 'Average Rating' }
  ];

  return (
    <section className="community">
      <div className="container">
        {/* Community Photo Placeholder */}
        <div className="community-photo">
          <div className="community-photo-placeholder">
            <Users size={64} className="photo-icon" />
            <span>Community Session Photo</span>
          </div>
        </div>

        <div className="community-header">
          <h2 className="section-heading">More Than Exercise — A Community</h2>
          <p className="community-tagline">Movement, Nutrition, Sleep, Stress — Together</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <Card key={index} variant="elevated" className="testimonial-card">
              <blockquote className="testimonial-quote">
                "{testimonial.quote}"
              </blockquote>
              <p className="testimonial-author">
                — {testimonial.author}, {testimonial.duration}
              </p>
            </Card>
          ))}
        </div>

        <div className="stats-row">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="community-message">
          <p>
            Wellness isn't meant to be a solo journey. When you join Arogya, you become part of a group that celebrates progress, shares setbacks, and shows up for each other — week after week.
          </p>
          <p>
            That's the difference between a program you try and a program that actually works.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;
