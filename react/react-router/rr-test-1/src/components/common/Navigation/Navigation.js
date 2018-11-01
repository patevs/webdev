
// react component library import
import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

// import Navigation style sheet
import './Navigation.css';

// Navigation react component
class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <div id="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    );
  }
}

export default Navigation;
