import React, { useState } from 'react';
import uuid from 'react-uuid';
import StudentTests from '../student-tests';
import { ReactComponent as DropDownArrow } from '../../images/arrow-down-light.svg';
import './student-info-item.css';

function StudentInfoItem({
  name, id, group, score, speed, parents, tests, checkedAll,
}) {
  const [showInfo, setShowInfo] = useState(false);
  const [checkedStudent, setCheckedStudent] = useState(checkedAll);

  const checked = (checkedStudent) ? 'table-row--checked' : 'table-row';
  const arrowChange = (showInfo) ? 'drop-down-btn__arrow--reverse' : 'drop-down-btn__arrow';
  const inputId = uuid();

  return (
    <>
      <tr className={checked} key="student-info">
        <td className="table-data table-data__checkbox">
          <label className="label" htmlFor={inputId}>
            <input
              className="checkbox"
              type="checkbox"
              id={inputId}
              checked={checkedStudent}
              onChange={() => setCheckedStudent(!checkedStudent)}
            />
            <span className="thead-col__text visually-hidden">select</span>
          </label>
        </td>
        <td className="table-data table-data__name">
          <span className="table-data__value">
            {name}
          </span>
        </td>
        <td className="table-data table-data__id">
          <span className="table-data__value">
            {id}
          </span>
        </td>
        <td className="table-data table-data__class">
          <span className="table-data__value">
            {group}
          </span>
        </td>
        <td className="table-data table-data__score">
          <span className="table-data__value">
            {score}
          </span>
        </td>
        <td className="table-data table-data__speed">
          <span className="table-data__value">
            {speed}
          </span>
        </td>
        <td className="table-data table-data__parents">
          <span className="table-data__value table-data__value-perents">
            {parents}
          </span>
        </td>
        <td className="table-data table-data__actions">
          <span className="table-data__value actions">
            <button className="actions__info drop-down-btn" type="button" onClick={() => setShowInfo(!showInfo)}>
              <DropDownArrow className={arrowChange} />
            </button>
          </span>
        </td>
      </tr>
      <tr className="table-row table-row-info" key="student-tests-info">
        {(showInfo) ? <StudentTests name={name} id={id} tests={tests} /> : null}
      </tr>
    </>
  );
}

export default StudentInfoItem;
