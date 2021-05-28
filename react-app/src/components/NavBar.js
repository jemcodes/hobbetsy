import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import Search from './Search';
import Cart from './Cart';
import DemoUser from './auth/DemoUser';
import cart from '../images/cart.png';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact={true} activeClassName="active">
            <button>Home</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" exact={true} activeClassName="active">
            <button>Login</button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            <button>Sign Up </button>
          </NavLink>
        </li>
        <li>
          <DemoUser />
        </li>
        {/* <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li> */}
        <li>
          <Search />
        </li>
        <li>
          <NavLink to="/cart" exact={true} activeClassName="active">
            <img src={cart} width="50px" />
          </NavLink>
        </li>
        <li>
          <LogoutButton />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
