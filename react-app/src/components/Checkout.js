import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { checkOutCart } from "../store/cart"
import './styles/checkout.css';


export default function Checkout({ }) {
    const dispatch = useDispatch();
    const productId = parseInt(useParams().productId);
    const userId = useSelector(state => state.session.user.id)
    const history = useHistory()

    //quantity and price

    const checkoutButton = (e) => {
        e.preventDefault()
        const payload = {
            productId,
            userId
        }
        dispatch(checkOutCart(payload))
        history.push('/confirmation')
    }

    return (
        <>
            <form onSubmit={checkoutButton}>
                <button className="checkout-button" type="submit">Check Out</button>
            </form>
        </>
    )
}