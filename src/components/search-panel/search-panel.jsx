import React from 'react';
import './search-panel.css';
import search from '../../images/search.svg';

function SearchPanel() {
  return (
    <form className="search-form">
      <input
        type="text"
        className="search-input"
        placeholder="Enter Student Name, Parent or ID here"
      />
      <button className="search-button" type="submit">
        <img className="search-icon" src={search} width="16" height="16.5" alt="search button" />
      </button>
    </form>
  );
}

export default SearchPanel;
