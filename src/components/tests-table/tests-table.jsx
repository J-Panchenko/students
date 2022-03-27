import React from 'react';
import uuid from 'react-uuid';
import StudentTastsData from '../student-tests-data';
import { ReactComponent as ValueSort } from '../../images/sort.svg';
import './tests-table.css';

function TestsTable({ tests }) {
  return (
    <table className="tests-table">
      <thead className="tests-table-head">
        <tr className="tests-table-row">
          <th className="tests-table-col tests-table-col__number">
            <span className="tests-table-col__hash">#</span>
          </th>
          <th className="tests-table-col tests-table-col__label">
            <span className="tests-table-col__name">Test Label</span>
          </th>
          <th className="tests-table-col tests-table-col__score">
            <span className="tests-table-col__name">Score</span>
          </th>
          <th className="tests-table-col tests-table-col__speed">
            <span className="tests-table-col__name">Speed</span>
          </th>
          <th className="tests-table-col tests-table-col__total">
            <span className="tests-table-col__name">Total Q-ns</span>
          </th>
          <th className="tests-table-col tests-table-col__exp-speed">
            <span className="tests-table-col__name">Exp. Speed</span>
          </th>
          <th className="tests-table-col tests-table-col__concept">
            <span className="tests-table-col__name">Concept</span>
          </th>
          <th className="tests-table-col tests-table-col__date">
            <div className="thead-col__inner">
              <span className="thead-col__text tests-table-col__name">Date</span>
              <button className="thead-col__filter" type="button">
                <ValueSort className="thead-col__filter-img" />
              </button>
            </div>
          </th>
          <th className="tests-table-col tests-table-col__absent">
            <span className="tests-table-col__name">Absent</span>
          </th>
        </tr>
      </thead>
      <tbody className="tests-table-body">
        {tests.map((test, index) => {
          const numberList = index + 1;
          return <StudentTastsData key={uuid()} {...test} numberList={numberList} />;
        })}
      </tbody>
      <tfoot className="tests-table-foot">
        <tr className="tests-result-row">
          <td className="tests-result-data" colSpan={2}>
            <span className="tests-result__name">Average</span>
          </td>
          <td className="tests-result-data">
            <span className="tests-result__score value--blue">96%</span>
          </td>
          <td className="tests-result-data" colSpan={6}>
            <span className="tests-result__speed value--blue">Above expected</span>
          </td>
        </tr>
      </tfoot>
    </table>
  );
}

export default TestsTable;
