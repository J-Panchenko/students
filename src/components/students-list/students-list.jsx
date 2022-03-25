import React, { useState } from 'react';
import './students-list.css';
import uuid from 'react-uuid';
import { ReactComponent as AlphabetSort } from '../../images/alphabetical-sorting.svg';
import { ReactComponent as ValueSort } from '../../images/sort.svg';
import StudentInfoItem from '../student-info-item';

function StudentsList({
  students, setSortBy, sortDir, setSortDir,
}) {
  const [checkedAll, setCheckedAll] = useState(false);
  const valueDir = (sortDir === -1) ? 1 : -1;

  return (
    <table className="table">
      <thead className="table-head">
        <tr className="thead-row">
          <th className="thead-col thead-col__checkbox">
            <label className="label" htmlFor="selectAll">
              <input
                className="checkbox checkbox-all"
                type="checkbox"
                id="selectAll"
                checked={checkedAll}
                onChange={() => setCheckedAll(!checkedAll)}
              />
              <span className="thead-col__text visually-hidden">Select All</span>
            </label>
          </th>
          <th className="thead-col thead-col__name">
            <div className="thead-col__inner">
              <span className="thead-col__text">Name</span>
              <button
                className="thead-col__filter"
                type="button"
                onClick={() => [setSortBy('name'), setSortDir(valueDir)]}
              >
                <AlphabetSort className="thead-col__filter-img" />
              </button>
            </div>
          </th>
          <th className="thead-col thead-col__id">
            <span className="thead-col__text">ID</span>
          </th>
          <th className="thead-col thead-col__class">
            <div className="thead-col__inner">
              <span className="thead-col__text">Class</span>
              <button
                className="thead-col__filter"
                type="button"
                onClick={() => [setSortBy('class'), setSortDir(valueDir)]}
              >
                <ValueSort className="thead-col__filter-img" />
              </button>
            </div>
          </th>
          <th className="thead-col thead-col__score">
            <div className="thead-col__inner">
              <span className="thead-col__text">Av. Score, %</span>
              <button
                className="thead-col__filter"
                type="button"
                onClick={() => [setSortBy('score'), setSortDir(valueDir)]}
              >
                <ValueSort className="thead-col__filter-img" />
              </button>
            </div>
          </th>
          <th className="thead-col thead-col__speed">
            <div className="thead-col__inner">
              <span className="thead-col__text">Av. Speed</span>
              <button
                className="thead-col__filter"
                type="button"
                onClick={() => [setSortBy('speed'), setSortDir(valueDir)]}
              >
                <ValueSort className="thead-col__filter-img" />
              </button>
            </div>
          </th>
          <th className="thead-col thead-col__parents">
            <span className="thead-col__text">Parents</span>
          </th>
          <th className="thead-col thead-col__actions">
            <span className="thead-col__text">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="table-body">
        {students.map((student) => (
          <StudentInfoItem
            key={uuid()}
            checkedAll={checkedAll}
            {...student}
          />
        ))}
      </tbody>
    </table>
  );
}

export default StudentsList;
