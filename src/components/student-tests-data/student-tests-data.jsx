import React from 'react';
import './student-tests-data.css';
import { getTestStyle, getScoreClassName } from '../../models';

function StudentTastsData({
  label, score, speed, total, expSpeed, concept, date, absent, abcent, numberList,
}) {
  const { valueClassName, levelScore, levelSpeed } = getTestStyle(score, speed);
  const scoreClassName = getScoreClassName(score);

  return (
    <tr className={valueClassName}>
      <td className="test-data">
        <span className="test-data__value">
          {numberList}
          .
        </span>
      </td>
      <td className="test-data test-data__label">
        <span className="test-data__value">
          Finding
          {' '}
          {label}
        </span>
      </td>
      <td className="test-data">
        <span className={`test-data__value ${scoreClassName}`}>
          {levelScore}
        </span>
      </td>
      <td className="test-data">
        <span className="test-data__value">
          {levelSpeed}
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
