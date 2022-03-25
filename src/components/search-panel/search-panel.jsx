import React from 'react';
import './search-panel.css';
import searchImg from '../../images/search.svg';

function SearchPanel({ search, setSearch }) {
  return (
    <form className="search-form" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        className="search-input"
        placeholder="Enter Student Name, Parent or ID here"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="search-button" type="submit">
        <img className="search-icon" src={searchImg} width="16" height="16.5" alt="search button" />
      </button>
    </form>
  );
}

export default SearchPanel;
