import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteItemsFromCart } from "../store/cart"
import { displayItems } from '../store/cart';
import './styles/cartItems.css';


export default function CartItem({ itemList }) {
    const [toggle, setToggle] = useState(true);
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
        alert(`Are you sure?!`)
        dispatch(deleteItemsFromCart(payload))
        setToggle(!toggle);
    }

    useEffect(() => {
        dispatch(displayItems(userId));
    }, [dispatch, toggle])

    return (
        <div>
            <div className="citem-container">
                {/* <p>Cart ID: {itemList?.id}</p> */}
                {/* <p>Product ID: {itemList?.product_id}</p> */}
                {/* <p>User ID: {itemList?.user_id}</p> */}
                <div className="citem-pic-container">
                    <img className="citem-pic" src={`${itemList?.product_image}`} />
                </div>
                <div className="citem-info-container">
                    <div className="citem-title-container">
                        <p>{itemList?.product_title}</p>
                    </div>
                    <div className="citem-price-container">
                        <p>₲ {itemList?.product_price}</p>
                    </div>
                    <div className="citem-removebutton-container">
                        <button className="citem-removebutton" onClick={removeItemButton}>Remove Item</button>
                    </div>
                </div>
            </div >
        </div>
    )
}
