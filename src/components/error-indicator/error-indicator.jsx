import React from 'react';
import './error-indicator.css';
import icon from '../../images/error-indicator.png';

function ErrorIndicator() {
  return (
    <div className="error-indicator">
      <img src={icon} alt="error icon" />
      <span className="boom">Oops!</span>
      <span>
        Something went wrong!
      </span>
    </div>
  );
}

export default ErrorIndicator;
