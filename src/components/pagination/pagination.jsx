import React from 'react';
import './pagination.css';
import { ReactComponent as Arrow } from '../../images/arrow.svg';
import pagesControl from '../../constants';
import { getCurrentSizeList } from '../../models';

function Pagination({
  page, size, totalPages, onSizeChange, onPageChange, disableBackBtn, disableForthBtn,
}) {
  const {
    numberOfstudents,
    currentSizeOfPageStart,
    currentSizeOfPageEnd,
  } = getCurrentSizeList(page, totalPages, size);

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
        {currentSizeOfPageStart}
        -
        {currentSizeOfPageEnd}
        {' '}
        of
        {' '}
        {numberOfstudents}
      </p>
      <div className="pagin-control">
        <Arrow
          className={`pagin-control__btn pagin-control__btn--back ${disableBackBtn}`}
          onClick={() => onPageChange(pagesControl.back)}
        />
        <Arrow
          className={`pagin-control__btn pagin-control__btn--forth ${disableForthBtn}`}
          onClick={() => onPageChange(pagesControl.forth)}
        />
      </div>
    </div>
  );
}

export default Pagination;
