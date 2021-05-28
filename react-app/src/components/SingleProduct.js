import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { displayProducts } from '../store/product';
import CreateReview from "./CreateReview";
import Review from "./Review.js";
import AddingToCart from "./AddingToCart.js";
import './styles/singleProduct.css';


function SingleProduct() {
    const { productId } = useParams()
    const product = useSelector(state => state.products[productId])

    return (
        <div id="single-prod-page">
            <div id="single-prod-info">
                <div id="single-prod-img-block">
                    <img src={`${product.image}`} alt="" />
                    <p id="single-prod-lore">{product.lore}</p>
                </div>
                <div id="single-prod-description-block">
                    <h3 id="single-prod-title">{product.title}</h3>
                    <h4 id="single-prod-price">${product.price}</h4>
                    <p>{product.description}</p>
                    <div id="single-prod-add-btn">
                        <AddingToCart />
                    </div>
                </div>
            </div>
            <div id="single-prod-review">
                <div id="single-prod-review-list">
                    <Review />
                </div>
                <div id="single-prod-review-form">
                    <CreateReview />
                </div>
            </div>
        </div>
    )
}


export default SingleProduct;
