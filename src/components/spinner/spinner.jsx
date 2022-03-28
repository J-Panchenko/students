import React from 'react';
import './spinner.css';

function Spinner() {
  return (
    <div className="spinner-box">
      <div className="configure-border-1">
        <div className="configure-core" />
      </div>
      <div className="configure-border-2">
        <div className="configure-core" />
      </div>
    </div>
  );
}

export default Spinner;
