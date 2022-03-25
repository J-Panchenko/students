import React from 'react';
import './student-tests-data.css';

function StudentTastsData(tests) {
  const {
    label, score, speed, total, expSpeed, concept, date, absent, abcent, numberList,
  } = tests;

  return (
    <tr className="test-row">
      <td className="test-data">
        <span className="test-data__value">
          {numberList}
          .
        </span>
      </td>
      <td className="test-data">
        <span className="test-data__value">
          Finding
          {' '}
          {label}
        </span>
      </td>
      <td className="test-data">
        <span className="test-data__value">
          {(!score) ? 'NIL' : score}
        </span>
      </td>
      <td className="test-data">
        <span className="test-data__value">
          {(!speed) ? 'NIL' : speed}
        </span>
      </td>
      <td className="test-data">
        <span className="test-data__value">
          {total}
        </span>
      </td>
      <td className="test-data">
        <span className="test-data__value">
          {expSpeed}
        </span>
      </td>
      <td className="test-data">
        <span className="test-data__value">
          {concept}
        </span>
      </td>
      <td className="test-data">
        <span className="test-data__value">
          {date}
        </span>
      </td>
      <td className="test-data">
        <label className="label" htmlFor="selectAll">
          <input
            className="checkbox checkbox-all"
            type="checkbox"
            id="selectAll"
            checked={absent || abcent}
            disabled
          />
        </label>
      </td>
    </tr>
  );
}

export default StudentTastsData;
