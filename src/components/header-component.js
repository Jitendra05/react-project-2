import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = (props) => (
  <div className="header">
    <div className="container">
      <header>
          <h1 className="header__title">{props.title}</h1>
          {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
          <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
          <NavLink to="/add" activeClassName="is-active">Add Expanse</NavLink>
          {/* <NavLink to="/edit" activeClassName="is-active">Edit Expanse</NavLink> */}
          <NavLink to="/help" activeClassName="is-active">Help</NavLink>
      </header>
    </div>
  </div>
);

Header.defaultProps = {
  title: 'Expansify'
};

export default Header;
