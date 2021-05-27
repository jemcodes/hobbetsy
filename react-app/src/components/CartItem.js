import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CartItem({ itemList }){

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