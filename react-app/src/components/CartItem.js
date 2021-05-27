import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteItemsFromCart } from "../store/cart"


export default function CartItem({ itemList }){

    const dispatch = useDispatch();
    const productId = itemList?.product_id
    // console.log("ARE YOU A NUMBER",productId)
    const userId = useSelector(state => state.session.user.id)
    const cartId = itemList?.id
    const removeItemButton = (e) => {
        e.preventDefault()
        const payload = {
            productId,
            userId,
            cartId
        }
        dispatch(deleteItemsFromCart(payload))
    }

    return (
        <div>
            <p>Cart ID: {itemList?.id}</p>
            <p>Product ID: {itemList?.product_id}</p>
            <p>User ID: {itemList?.user_id}</p>
            <p>Product Title: {itemList?.product_title}</p>
            <img src={`${itemList?.product_image}`} />
            <button onClick={removeItemButton}>Remove Item</button>
        </div >
    )
}