import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { displayItems } from '../store/cart';

function Cart() {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user.id)

    // useEffect(() => {
    //     dispatch(displayItems(userId));
    // }, [dispatch, userId])

    
    const itemList = useSelector(state => {
        console.log('CHECKING STATE', state.cart[1])
        return state.cart[1]
    });
    console.log(itemList)
    // const allCartItems = ({
    //     user_id,
    //     product_id,
    //     products
    // }) => dispatch()



    return (
        <div>
            <h1>Item List: {itemList}</h1>
        </div>
    )
}

export default Cart;
