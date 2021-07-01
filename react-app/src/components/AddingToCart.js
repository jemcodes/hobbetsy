import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";
import { itemsAddedToCart } from '../store/cart';

export default function AddingToCart({ title }) {
  const dispatch = useDispatch();
  const productId = parseInt(useParams().productId);
  const userId = useSelector(state => state.session.user.id)
  const history = useHistory()

  //quantity and price

  const addToCartButton = (e) => {
    e.preventDefault()
    const payload = {
      productId,
      userId
    }
    alert(`${title} has been added to the cart!`)
    dispatch(itemsAddedToCart(payload))
    history.push('/')
  }

  return (
    <>
      <form onSubmit={addToCartButton}>
        <button id="add-to-cart-btn" type="submit">Add To Cart</button>
      </form>
    </>
  )

}
