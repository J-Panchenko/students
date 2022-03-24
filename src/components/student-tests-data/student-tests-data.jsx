import React from 'react';
import './student-tests-data.css';

function StudentTastsData(tests) {
  const {
    label, score, speed, total, expSpeed, concept, data, absent, abcent,
  } = tests;
  const beAway = (absent === undefined) ? abcent : absent;
  return (
    <li>
      <div className="test-row">
        <span className="test-data">
          Finding
          {' '}
          {label}
        </span>
        <span className="test-data">{score}</span>
        <span className="test-data">{speed}</span>
        <span className="test-data">{total}</span>
        <span className="test-data">{expSpeed}</span>
        <span className="test-data">{concept}</span>
        <span className="test-data">{data}</span>
        <span className="test-data">{beAway}</span>
      </div>
    </li>
  );
}

export default StudentTastsData;
