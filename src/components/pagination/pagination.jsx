import React from 'react';
import './pagination.css';
import { ReactComponent as Arrow } from '../../images/arrow.svg';

function Pagination({
  currentSizeStart, currentSizeEnd, numberOfstudents, size, onSizeChange, onPageChange,
}) {
  const pagesControl = {
    back: -1,
    forth: 1,
  };

  return (
    <div className="pagination">
      <div className="pagination-value">
        <span className="pagination-value__name">Rows per page:</span>
        <div className="pagination-value__inner">
          <select
            className="pagination-value__section"
            defaultValue={size}
            onChange={(e) => onSizeChange(e.target.value)}
          >
            <option className="pagination-value__option" value="2">2</option>
            <option className="pagination-value__option" value="5">5</option>
            <option className="pagination-value__option" value="10">10</option>
            <option className="pagination-value__option" value="20">20</option>
          </select>
        </div>
      </div>
      <p className="pagination-current">
        {currentSizeStart}
        -
        {currentSizeEnd}
        {' '}
        of
        {' '}
        {numberOfstudents}
      </p>
      <div className="pagination-control">
        <Arrow
          className="pagination-control__btn pagination-control__btn--back"
          onClick={() => onPageChange(pagesControl.back)}
        />
        <Arrow
          className="pagination-control__btn pagination-control__btn--forth"
          onClick={() => onPageChange(pagesControl.forth)}
        />
      </div>
    </div>
  );
}

export default Pagination;