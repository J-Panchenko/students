import React from 'react';
import './filter.css';

function Filter() {
  return (
    <aside className="filter">
      <div className="filter__inner">
        <ul className="filter__list">
          <li className="filter__item">
            <span className="filter__text">show all</span>
          </li>
          <li className="filter__item">
            <span className="filter__text">all grades</span>
          </li>
          <li className="filter__item">
            <span className="filter__text">all classes</span>
          </li>
          <li className="filter__item">
            <span className="filter__text">av.score</span>
          </li>
          <li className="filter__item">
            <span className="filter__text">av.speed</span>
          </li>
          <li className="filter__item">
            <span className="filter__text">all classes</span>
          </li>
          <li className="filter__item filter__clear">
            <span className="filter__text--clear">clear all</span>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Filter;
