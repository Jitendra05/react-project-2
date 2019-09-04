import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = () => (
  <div className="header">
    <div className="container">
      <header>
          <h1 className="header__title">Expansify</h1>
          <h2>track your expanses</h2>
          <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
          <NavLink to="/add" activeClassName="is-active">Add Expanse</NavLink>
      </header>
    </div>
  </div>
);

export default Header;
