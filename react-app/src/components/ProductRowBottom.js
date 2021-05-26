import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Redirect } from 'react-router-dom';

function ProductRowBottom() {

    const productList = useSelector(state => {
        return state.products.list.map(productId => state.products[productId])
    });

    const product1 = productList[24];
    const product2 = productList[25];
    const product3 = productList[23];
    const product4 = productList[27];

    console.log(product2)
    // console.log(product2.title)
    return (
        <div>
            <h1>PRODUCT ROW BOTTOM</h1>
            <ul>
                <NavLink to={`/products/${product1.id}`}><li>{product1.title}</li></NavLink>
                <NavLink to={`/products/${product2.id}`}><li>{product2.title}</li></NavLink>
                <NavLink to={`/products/${product3.id}`}><li>{product3.title}</li></NavLink>
                <NavLink to={`/products/${product4.id}`}><li>{product4.title}</li></NavLink>
                <li>Patrick is a apple</li>
            </ul>
        </div>
    )
}

export default ProductRowBottom;