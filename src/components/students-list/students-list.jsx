import React from 'react';
import uuid from 'react-uuid';
import { useSelect } from '../../hooks';
import { ReactComponent as AlphabetSort } from '../../images/alphabetical-sorting.svg';
import { ReactComponent as ValueSort } from '../../images/sort.svg';
import StudentInfoItem from '../student-info-item';
import Spinner from '../spinner';
import './students-list.css';

function StudentsList({ students, loading, onSort }) {
  const { selectAll, setSelectAll } = useSelect(false);
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
                checked={selectAll}
                onChange={() => setSelectAll(!selectAll)}
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
                onClick={() => onSort('name')}
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
                onClick={() => onSort('class')}
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
                onClick={() => onSort('score')}
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
                onClick={() => onSort('speed')}
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
        {loading ? (
          <tr className="spinner">
            <td className="spinner__inner" colSpan={8}>
              <Spinner />
            </td>
          </tr>
        ) : students.map((student) => (
          <StudentInfoItem
            key={uuid()}
            selectAll={selectAll}
            {...student}
          />
        ))}
      </tbody>
    </table>
  );
}

export default StudentsList;
