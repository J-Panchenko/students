import React from 'react';
import { ReactComponent as UpdateButton } from '../../images/update.svg';
import TestsTable from '../tests-table';
import './student-tests.css';

function StudentTests({
  name, id, tests,
}) {
  return (
    <td className="student-tests" colSpan={8}>
      <div className="student-tests__inner">
        <article className="student-tests-info">
          <header className="student-tests-info__header">
            <div className="student-data">
              <p className="student-data__item">
                <span className="student-data__description">Student: </span>
                <span className="student-data__value">{name}</span>
              </p>
              <p className="student-data__item">
                <span className="student-data__description">ID: </span>
                <span className="student-data__value">{id}</span>
              </p>
            </div>
            <ul className="filters-list">
              <li className="filters-list__item">
                <select className="param-selection concept-selection" defaultValue="All concepts">
                  <option className="concept-selection__option">All concepts</option>
                  <option className="concept-selection__option">Multiplication</option>
                </select>
              </li>
              <li className="filters-list__item">
                <select className="param-selection score-selection" defaultValue="All score">
                  <option className="score-selection__option">All score</option>
                  <option className="score-selection__option">100</option>
                </select>
              </li>
              <li className="filters-list__item">
                <select className="param-selection speed-selection" defaultValue="All speed">
                  <option className="speed-selection__option">All speed</option>
                  <option className="speed-selection__option">1h</option>
                </select>
              </li>
              <li className="filters-list__item">
                <div className="period-selection__inner">
                  <span className="period-selection__name">Select Period</span>
                  <label className="period-selection__label" htmlFor="date">
                    <span className="period-selection__icon" />
                    <input
                      className="period-selection__option"
                      type="date"
                      id="date"
                    />
                  </label>
                </div>
              </li>
              <li className="filters-list__item">
                <UpdateButton className="update-list-btn" />
              </li>
            </ul>
          </header>
          <main className="student-tests-info__main">
            <div className="tests-description">
              <div className="description-field">
                <p className="description-field__name">Score</p>
                <ul className="description-field__list">
                  <li className="description-field__value value--blue">90%+ accuracy</li>
                  <li className="description-field__value value--green">80 - 89% accuracy</li>
                  <li className="description-field__value value--yellow">50 - 79% accuracy</li>
                  <li className="description-field__value value--red">below 50% accuracy</li>
                </ul>
              </div>
              <div className="description-field">
                <p className="description-field__name">Speed</p>
                <ul className="description-field__list">
                  <li className="description-field__value value--blue">above expected</li>
                  <li className="description-field__value value--green">as expected</li>
                  <li className="description-field__value value--red">below expected</li>
                </ul>
              </div>
            </div>
            <div className="tests-table__inner">
              <TestsTable tests={tests} />
            </div>
          </main>
        </article>
      </div>
    </td>
  );
}
export default StudentTests;
