import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({
  label,
  id,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  required = false,
  disabled = false,
  error,
  helperText,
  className = '',
  ...props
}) => {
  const inputId = id || name;
  const hasError = !!error;

  return (
    <div className={`input-group ${className}`.trim()}>
      {label && (
        <label
          htmlFor={inputId}
          className={`label ${required ? 'label-required' : ''}`}
        >
          {label}
        </label>
      )}

      <input
        type={type}
        id={inputId}
        name={name}
        className={`input ${hasError ? 'input-error' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        disabled={disabled}
        aria-invalid={hasError}
        aria-describedby={
          error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
        }
        {...props}
      />

      {error && (
        <span id={`${inputId}-error`} className="error-text" role="alert">
          {error}
        </span>
      )}

      {helperText && !error && (
        <span id={`${inputId}-helper`} className="helper-text">
          {helperText}
        </span>
      )}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  helperText: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
