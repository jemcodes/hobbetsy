import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { displayProducts } from '../store/product';
import Categories from './Categories';
import SingleProduct from './SingleProduct';
import ProductRow from './ProductRow';
import ProductRowBottom from './ProductRowBottom';
import FeatureRow from './FeatureRow';
import NavBar from './NavBar';
import './styles/product.css'
import UniqueRow from './UniqueRow';

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
            {<NavBar />}
            {<ProductRow />}
            {<UniqueRow />}
            {<FeatureRow />}
            {<ProductRowBottom />}
        </div>

    )
}

export default Product;
