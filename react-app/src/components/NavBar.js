import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import Search from './Search';
import Cart from './Cart';
import DemoUser from './auth/DemoUser';
import cart from '../images/yeoldecart.png';
import "./styles/navBar.css"
import logo from '../images/hobbetsylogoNB.png';


const NavBar = () => {
  return (
    <nav className="navContainer">
      <div>
        <NavLink to="/" exact={true} activeClassName="active">
          <img className="main-logo" src={logo} />
        </NavLink>
      </div>
      <div id='outer-search-div'>
        <Search />
      </div>
      <div id='nav-right-div'>
        <div>
          <NavLink to='/about' exact={true}>
            <button id="about-btn">About</button>
          </NavLink>
        </div>
        <div>
          <NavLink to="/cart" exact={true} activeClassName="active">
            <img src={cart} className="cartButton" />
          </NavLink>
        </div>
        <div>
          <LogoutButton />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
