import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { itemsAddedToCart } from '../store/cart';

export default function AddingToCart() {
  const dispatch = useDispatch();
  const productId = parseInt(useParams().productId);
  const userId = useSelector(state => state.session.user.id)

  //quantity and price

  const addToCartButton = (e) => {
    e.preventDefault()
    const payload = {
      productId,
      userId
    }
    dispatch(itemsAddedToCart(payload))
  }

  return (
    <>
      <form onSubmit={addToCartButton}>
        <button type="submit">Add To Cart</button>
      </form>
    </>
  )

}
