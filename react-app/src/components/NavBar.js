import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { useSelector, useDispatch } from 'react-redux';
import Search from './Search';
import { displayItems } from '../store/cart';
import Cart from './Cart';
import DemoUser from './auth/DemoUser';
import cart from '../images/yeoldecart.png';
import "./styles/navBar.css"
import logo from '../images/hobbetsylogoNB.png';


const NavBar = () => {

  const dispatch = useDispatch();
  const userId = useSelector(state => state.session.user.id)

  const cartList = useSelector(state => {
    return state.cart.list.map(cartId => state.cart[cartId.id])
  })

  useEffect(() => {
    dispatch(displayItems(userId));
  }, [dispatch, userId])

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
            <div id='cart-div'>
              <img src={cart} className="cartButton" />
              <p>{cartList.length}</p>
            </div>
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
