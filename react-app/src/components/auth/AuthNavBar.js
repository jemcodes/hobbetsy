import React from 'react';
import { NavLink } from 'react-router-dom';
import DemoUser from './DemoUser';
import "../styles/navBar.css"

const AuthNavBar = () => {
  return (
    <nav className="auth-nav">
        <div className="nav-items">
          <NavLink to="/login" exact={true} activeClassName="active">
          <button id="auth-nav-btn">Login</button>
          </NavLink>
        </div>
        <div className="nav-items">
          <NavLink to="/sign-up" exact={true} activeClassName="active">
          <button id="auth-nav-btn">Sign Up </button>
          </NavLink>
        </div>
        <div className="nav-items">
          <DemoUser />
        </div>
    </nav>
  );
}

export default AuthNavBar;