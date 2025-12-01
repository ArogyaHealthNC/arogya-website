import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({
  children,
  variant = 'default',
  className = '',
  onClick,
  ...props
}) => {
  const cardClass = `card card-${variant} ${className}`.trim();
  const isClickable = !!onClick;

  return (
    <div
      className={`${cardClass} ${isClickable ? 'card-clickable' : ''}`}
      onClick={onClick}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onKeyPress={isClickable ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(e);
        }
      } : undefined}
      {...props}
    >
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'elevated', 'feature']),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;
