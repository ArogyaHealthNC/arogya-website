import React from 'react';
import PropTypes from 'prop-types';
import './SessionCard.css';

const SessionCard = ({
  type = 'exercise',
  title,
  time,
  duration,
  topic,
  onJoin,
  className = '',
}) => {
  const sessionClass = `session-card session-card-${type} ${className}`.trim();
  const isExercise = type === 'exercise';

  return (
    <div className={sessionClass}>
      <div className="session-card-header">
        <div className="session-type">
          <span className={`session-indicator session-${type}`} aria-hidden="true"></span>
          <span className="session-type-label">
            {isExercise ? 'Exercise Session' : 'Lifestyle Discussion'}
          </span>
        </div>
        <span className="session-duration">{duration}</span>
      </div>

      <h3 className="session-title">{title}</h3>

      {topic && (
        <p className="session-topic">
          <strong>Topic:</strong> {topic}
        </p>
      )}

      <div className="session-footer">
        <time className="session-time">{time}</time>
        {onJoin && (
          <button
            className="session-join-btn"
            onClick={onJoin}
            aria-label={`Join ${title} session`}
          >
            Join Session
          </button>
        )}
      </div>
    </div>
  );
};

SessionCard.propTypes = {
  type: PropTypes.oneOf(['exercise', 'lifestyle']).isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  topic: PropTypes.string,
  onJoin: PropTypes.func,
  className: PropTypes.string,
};

export default SessionCard;
