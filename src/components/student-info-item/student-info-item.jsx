import React from 'react';
import { useSelect, useShowInfo } from '../../hooks';
import StudentTests from '../student-tests';
import { ReactComponent as DropDownArrow } from '../../images/arrow-down-light.svg';
import { ReactComponent as InfoButton } from '../../images/info.svg';
import './student-info-item.css';
import { getScoreClassName, getSpeedClassName } from '../../models';

function StudentInfoItem({
  name, id, class: group, score, speed, parents, tests, selectAll,
}) {
  const { showInfo, setShowInfo, arrowShowClassName } = useShowInfo(false);
  const { select, setSelect, selectedClassName } = useSelect(selectAll);
  const scoreColor = getScoreClassName(score);
  const speedColor = getSpeedClassName(speed);

  return (
    <>
      <tr className={selectedClassName} key="student-info">
        <td className="table-data table-data__checkbox">
          <label className="label" htmlFor="check-student">
            <input
              className="checkbox"
              type="checkbox"
              id="check-student"
              checked={select}
              onChange={() => setSelect(!select)}
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
          <span className={`table-data__value ${scoreColor}`}>
            {score}
          </span>
        </td>
        <td className="table-data table-data__speed">
          <span className={`table-data__value ${speedColor}`}>
            {speed}
          </span>
        </td>
        <td className="table-data table-data__parents">
          <InfoButton className="table-data__value table-data__perents-info" />
          <span className="table-data__value table-data__perents-name">
            {parents.join(', ')}
          </span>
        </td>
        <td className="table-data table-data__actions">
          <span className="table-data__value actions">
            <button
              className="actions__info drop-down-btn"
              type="button"
              onClick={() => setShowInfo(!showInfo)}
            >
              <DropDownArrow className={arrowShowClassName} />
            </button>
          </span>
        </td>
      </tr>
      <tr className="table-row" key="student-tests-info">
        {(showInfo) ? <StudentTests name={name} id={id} tests={tests} /> : null}
      </tr>
    </>
  );
}

export default StudentInfoItem;
