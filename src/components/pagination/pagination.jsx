import React from 'react';
import './pagination.css';

function Pagination({ totalPage, size, onSizeChange }) {
  return (
    <div className="pagination">
      <div className="pagination-value">
        <span className="pagination-value__name">Rows per page:</span>
        <select className="pagination-value__section" defaultValue={size} onChange={(e) => onSizeChange(e.target.value)}>
          <option className="pagination-value__option" value="2">2</option>
          <option className="pagination-value__option" value="5">5</option>
          <option className="pagination-value__option" value="10">10</option>
          <option className="pagination-value__option" value="15">15</option>
          <option className="pagination-value__option" value="20">20</option>
        </select>
      </div>
      <p className="pagination-current">21-30 of 100</p>
      <p className="pagination-control">{totalPage}</p>
    </div>
  );
}

export default Pagination;
