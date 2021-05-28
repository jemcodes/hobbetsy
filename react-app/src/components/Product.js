import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { displayProducts } from '../store/product';
import Categories from './Categories';
import SingleProduct from './SingleProduct';
import ProductRow from './ProductRow';
import ProductRowBottom from './ProductRowBottom';
import FeatureRow from './FeatureRow';
import './styles/product.css'

function Product() {
    const dispatch = useDispatch();
    const productList = useSelector(state => {
        return state.products.list.map(productId => state.products[productId])
    });

    useEffect(() => {
        dispatch(displayProducts());
    }, [dispatch]);

    return (
        <div>
            {<ProductRow />}
            {<FeatureRow />}
            {<ProductRowBottom />}
        </div>

    )
}

export default Product;
