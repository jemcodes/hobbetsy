import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'
import './styles/orderconfirmation.css'

const OrderConfirmation = () => {
    return (
        <div id="confirmation-container-outer">
            <NavBar />
                <div id="confirmation-container-inner">
                    <h3>Your Order is being processed. Thank you for shopping with Hobbetsy. Now get out there, adventure awaits.</h3>
                    <NavLink to="/" exact={true} activeClassName="active">
                        Home
                    </NavLink>
                </div>
            <Footer />
        </div>
    )
}

export default OrderConfirmation