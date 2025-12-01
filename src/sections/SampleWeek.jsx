import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import './SampleWeek.css';

const SampleWeek = () => {
  const navigate = useNavigate();

  const schedule = [
    {
      day: 'Monday',
      type: 'exercise',
      title: 'Exercise Session',
      time: '9:00 AM ET',
      duration: '45 minutes'
    },
    {
      day: 'Tuesday',
      type: 'lifestyle',
      title: 'Lifestyle Discussion',
      time: '7:00 PM ET',
      duration: '30 minutes',
      topic: 'This week\'s wellness focus'
    },
    {
      day: 'Wednesday',
      type: 'exercise',
      title: 'Exercise Session',
      time: '9:00 AM ET',
      duration: '45 minutes'
    },
    {
      day: 'Friday',
      type: 'exercise',
      title: 'Exercise Session',
      time: '9:00 AM ET',
      duration: '45 minutes'
    }
  ];

  const handleScheduleClick = () => {
    navigate('/schedule');
  };

  return (
    <section className="sample-week">
      <div className="container">
        <h2 className="section-heading">A Week with Arogya</h2>

        <p className="sample-week-intro">
          Here's what a typical week looks like. Sessions are designed to fit into your life — not take it over.
        </p>

        <div className="schedule-grid">
          {schedule.map((session, index) => (
            <Card key={index} variant="default" className="schedule-card">
              <div className={`schedule-indicator schedule-indicator-${session.type}`}>
                {session.type === 'exercise' ? '●' : '○'}
              </div>
              <h3 className="schedule-day">{session.day}</h3>
              <p className="schedule-title">{session.title}</p>
              <p className="schedule-time">
                {session.time} • {session.duration}
              </p>
              {session.topic && (
                <p className="schedule-topic">Topic: {session.topic}</p>
              )}
            </Card>
          ))}
        </div>

        <div className="schedule-legend">
          <span className="legend-item">
            <span className="legend-indicator exercise">●</span> Exercise Session
          </span>
          <span className="legend-item">
            <span className="legend-indicator lifestyle">○</span> Lifestyle Discussion
          </span>
        </div>

        <div className="sample-week-cta">
          <button
            className="link-button"
            onClick={handleScheduleClick}
          >
            View Full Schedule →
          </button>
        </div>
      </div>
    </section>
  );
};

export default SampleWeek;
