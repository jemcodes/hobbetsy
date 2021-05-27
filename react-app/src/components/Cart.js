import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { displayItems } from '../store/cart';
import CartItem from './CartItem'

function Cart() {
    const dispatch = useDispatch();
    const userId = useSelector(state => state.session.user.id)

    // useEffect(() => {
    //     dispatch(displayItems(userId));
    // }, [dispatch, userId])


    const cartList = useSelector(state => {
        return state.cart.list.map( cartId => state.cart[cartId.id])})
        // console.log('CHECKING STATE', state.cart[1])
        // return state.cart[1]
    console.log(cartList)
    const userCart = cartList.filter( item => {
        return item?.user_id === userId
    })

    console.log("THIS IS THE USER CART DONT MISS IT JAMIE", userCart)
    // console.log("ITEM LIST:", itemList)
    // const allCartItems = ({
    //     user_id,
    //     product_id,
    //     products
    // }) => dispatch()



    return (
        <div>
            {userCart.map(itemList => (
                <CartItem itemList={itemList}/>
            ))}
        </div>
    )
}

export default Cart;
