import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { displayProducts } from '../store/product';
import Review from "./Review.js"

function SingleProduct() {
    const { productId } = useParams()
    const product = useSelector(state => state.products[productId])

    return (
        <div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.image}</p>
            <img src={`${product.image}`} alt="" />
            <p>{product.lore}</p>
            <Review />
        </div>
    )
}


export default SingleProduct;