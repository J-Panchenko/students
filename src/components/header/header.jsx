import React from 'react';
import avatar from '../../images/avatar.svg';
import './header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="school-info">
            <img className="school-info__logo" alt="School logo" width="161" height="32" />
            <select className="school-info__select" defaultValue="school1">
              <option className="schools-select__option" value="school1">School 1</option>
              <option className="schools-select__option" value="school2">School 2</option>
              <option className="schools-select__option" value="school3">School 3</option>
            </select>
          </div>
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__item">
                <a className="menu__link" href="/">analytics</a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="/">gradebooks</a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="/">tests</a>
              </li>
              <li className="menu__item">
                <a className="menu__link active" href="/">students</a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="/">teachers</a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="/">archive</a>
              </li>
            </ul>
          </nav>
          <div className="user">
            <img className="user__avatar" src={avatar} alt="User avatar" width="32" height="32" />
            <div className="user__menu" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
