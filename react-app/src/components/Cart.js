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
    console.log("ITEM LIST:", itemList)
    // const allCartItems = ({
    //     user_id,
    //     product_id,
    //     products
    // }) => dispatch()



    return (
        <div>
            <p>Cart ID: {itemList?.id}</p>
            <p>Product ID: {itemList?.product_id}</p>
            <p>User ID: {itemList?.user_id}</p>
            <p>Product Title: {itemList?.product_title}</p>
            <img src={`${itemList?.product_image}`} />
        </div >
    )
}

export default Cart;
