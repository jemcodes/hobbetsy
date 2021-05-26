import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { displayItems } from '../store/cart';

function Cart() {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user.id)
    const itemList = useSelector(state => {
        return state.cart.list.map(cartId => state.cart[cartId])
    });
    // const allCartItems = ({
    //     user_id,
    //     product_id,
    //     products
    // }) => dispatch()

     useEffect(() => {
         dispatch(displayItems(userId));
     }, [dispatch, userId])

    return (
        <div>
            <h1>{itemList.user_id}</h1>
        </div>
    )
}

export default Cart;