import React, { useState } from 'react';
import './students-list.css';
import uuid from 'react-uuid';
import alphabet from '../../images/alphabetical-sorting.svg';
import sort from '../../images/sort.svg';
import StudentInfoItem from '../student-info-item';
import withService from '../hoc';

function StudentsList({ students }) {
  const [checkedAll, setCheckedAll] = useState(false);

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
            <span className="thead-col__text">Name</span>
            <button className="thead-col__filter" type="button">
              <img className="thead-col__filter-img" src={alphabet} alt="name-sorting" />
            </button>
          </th>
          <th className="thead-col thead-col__id">
            <span className="thead-col__text">Id</span>
            <button className="thead-col__filter" type="button">
              <img className="thead-col__filter-img" src={sort} alt="id-sorting" />
            </button>
          </th>
          <th className="thead-col thead-col__class">
            <span className="thead-col__text">Class</span>
          </th>
          <th className="thead-col thead-col__score">
            <span className="thead-col__text">Av. Score, %</span>
            <button className="thead-col__filter" type="button">
              <img className="thead-col__filter-img" src={sort} alt="id-sorting" />
            </button>
          </th>
          <th className="thead-col thead-col__speed">
            <span className="thead-col__text">Av. Speed</span>
            <button className="thead-col__filter" type="button">
              <img className="thead-col__filter-img" src={sort} alt="id-sorting" />
            </button>
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

export default withService(StudentsList);
