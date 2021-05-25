import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Redirect } from 'react-router-dom';

function ProductRow() {

    const productList = useSelector(state => {
        return state.products.list.map(productId => state.products[productId])
    });

    const product1 = productList[0];
    const product2 = productList[1];
    const product3 = productList[2];
    const product4 = productList[3];

    console.log(product2)
    // console.log(product2.title)
    return (
        <div>
            <h1>PRODUCT ROW</h1>
            <ul>
                <li>{product1.title}</li>
                <li>{product2.title}</li>
                <li>{product3.title}</li>
                <li>{product4.title}</li>
                <li>Patrick is a goober</li>
            </ul>
        </div>
    )
}

export default ProductRow;