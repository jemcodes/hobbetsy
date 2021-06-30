import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Redirect } from 'react-router-dom';
import './styles/uniqueRow.css'

function UniqueRow() {

    const productList = useSelector(state => {
        return state.products.list.map(productId => state.products[productId])
    });

    const product1 = productList[27];
    const product2 = productList[30];
    const product3 = productList[31];
    const product4 = productList[32];
    const product5 = productList[29];
    const product6 = productList[33];
    const product7 = productList[34];

    return (
        <>
            <h3 id='unique-h3'>Unique Items</h3>
            <div id='unique-row-top-div'>
                <NavLink to={`/products/${product1?.id}`}>
                    <div className='unique-row-top-div-inner'>
                        <h4>{product1?.title}</h4>
                        <img src={product1?.image} />
                        <p className='unique-lore'>{product1?.lore}</p>
                        <p><span className='guarani'>₲</span>{product1?.price}</p>
                    </div>
                </NavLink>
                <NavLink to={`/products/${product5?.id}`}>
                    <div className='unique-row-top-div-inner'>
                        <h4>{product5?.title}</h4>
                        <img id='potatoes' src={product5?.image} />
                        <p className='unique-lore'>{product5?.lore}</p>
                        <p><span className='guarani'>₲</span>{product5?.price}</p>
                    </div>
                </NavLink>
                <NavLink to={`/products/${product6?.id}`}>
                    <div className='unique-row-top-div-inner'>
                        <h4>{product6?.title}</h4>
                        <img id='mithril' src={product6?.image} />
                        <p className='unique-lore'>{product6?.lore}</p>
                        <p><span className='guarani'>₲</span>{product6?.price}</p>
                    </div>
                </NavLink>
                <NavLink to={`/products/${product7?.id}`}>
                    <div className='unique-row-top-div-inner'>
                        <h4>{product7?.title}</h4>
                        <img id='mithril' src={product7?.image} />
                        <p className='unique-lore'>{product7?.lore}</p>
                        <p><span className='guarani'>₲</span>{product7?.price}</p>
                    </div>
                </NavLink>
            </div>
            <div id='unique-row-bottom-div'>
                <NavLink to={`/products/${product3?.id}`}>
                    <div className='unique-row-bottom-div-inner'>
                        <h4>{product3?.title}</h4>
                        <img src={product3?.image} />
                        <p className='unique-lore'>{product3?.lore}</p>
                        <p><span className='guarani'>₲</span>{product3?.price}</p>
                    </div>
                </NavLink>
                <NavLink to={`/products/${product4?.id}`}>
                    <div className='unique-row-bottom-div-inner'>
                        <h4>{product4?.title}</h4>
                        <img src={product4?.image} />
                        <p className='unique-lore'>{product4?.lore}</p>
                        <p><span className='guarani'>₲</span>{product4?.price}</p>
                    </div>
                </NavLink>
                <NavLink to={`/products/${product2?.id}`}>
                    <div className='unique-row-bottom-div-inner'>
                        <h4>{product2?.title}</h4>
                        <img src={product2?.image} />
                        <p className='unique-lore'>{product2?.lore}</p>
                        <p><span className='guarani'>₲</span>{product2?.price}</p>
                    </div>
                </NavLink>
            </div>
            <hr id='unique-row-hr' />
            {/* <div id='product-row-bottom-div'>
                <NavLink to={`/products/${product1?.id}`}>
                    <div className='product-row-bottom-div-inner'>
                        <h4>{product1?.title}</h4>
                        <img src={product1?.image} />
                        <p><span className='guarani'>₲</span>{product1?.price}</p>
                    </div>
                </NavLink>
                <NavLink to={`/products/${product2?.id}`}>
                    <div className='product-row-bottom-div-inner'>
                        <h4>{product2?.title}</h4>
                        <img src={product2?.image} />
                        <p><span className='guarani'>₲</span>{product2?.price}</p>
                    </div>
                </NavLink>
                <NavLink to={`/products/${product3?.id}`}>
                    <div className='product-row-bottom-div-inner'>
                        <h4>{product3?.title}</h4>
                        <img src={product3?.image} />
                        <p><span className='guarani'>₲</span>{product3?.price}</p>
                    </div>
                </NavLink>
                <NavLink to={`/products/${product4?.id}`}>
                    <div className='product-row-bottom-div-inner'>
                        <h4>{product4?.title}</h4>
                        <img src={product4?.image} />
                        <p><span className='guarani'>₲</span>{product4?.price}</p>
                    </div>
                </NavLink>
            </div> */}
        </>
    )
}

export default UniqueRow;
