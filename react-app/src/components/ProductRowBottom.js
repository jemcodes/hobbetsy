import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Redirect } from 'react-router-dom';
import './styles/product-row-bottom.css'

function ProductRowBottom() {

    const productList = useSelector(state => {
        return state.products.list.map(productId => state.products[productId])
    });

    const product1 = productList[27];
    const product2 = productList[25];
    const product3 = productList[24];
    const product4 = productList[26];

    console.log(product2)
    // console.log(product2.title)
    return (
        <>
            <h3 id='sustenance-h3'>Food and Drink</h3>
            <div id='product-row-bottom-div'>
                <NavLink to={`/products/${product1?.id}`}>
                    <div className='product-row-bottom-div-inner'>
                        <h4>{product1?.title}</h4>
                        <img src={product1?.image} />
                        <p><span class='guarani'>₲</span>{product1?.price}</p>
                    </div>
                </NavLink>
                <NavLink to={`/products/${product2?.id}`}>
                    <div className='product-row-bottom-div-inner'>
                        <h4>{product2?.title}</h4>
                        <img src={product2?.image} />
                        <p><span class='guarani'>₲</span>{product2?.price}</p>
                    </div>
                </NavLink>
                <NavLink to={`/products/${product3?.id}`}>
                    <div className='product-row-bottom-div-inner'>
                        <h4>{product3?.title}</h4>
                        <img src={product3?.image} />
                        <p><span class='guarani'>₲</span>{product3?.price}</p>
                    </div>
                </NavLink>
                <NavLink to={`/products/${product4?.id}`}>
                    <div className='product-row-bottom-div-inner'>
                        <h4>{product4?.title}</h4>
                        <img src={product4?.image} />
                        <p><span class='guarani'>₲</span>{product4?.price}</p>
                    </div>
                </NavLink>
            </div>
        </>
    )
}

export default ProductRowBottom;