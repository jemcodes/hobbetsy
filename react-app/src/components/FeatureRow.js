import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Redirect } from 'react-router-dom';
import './styles/feature-row.css'

function FeatureRow() {

    const featureList = useSelector(state => {
        return state.products.list.map(productId => state.products[productId])
    });

    const feature1 = featureList[7];
    const feature2 = featureList[12];
    const feature3 = featureList[13];
    const feature4 = featureList[14];

    return (
        <>
            <h3 id='featured-items-h3'>Featured Items</h3>
            <div id='feature-row-div'>
                <NavLink to={`/products/${feature1?.id}`}>
                    <div id='feature-row-div-left' className='feature-row-div-inner'>
                        <h4>{feature1?.title}</h4>
                        <img src={feature1?.image} />
                        <p id='lore'>{feature1?.lore}</p>
                        <p><span class='guarani'>₲</span>{feature1?.price}</p>
                    </div>
                </NavLink>
                <NavLink to={`/products/${feature2?.id}`}>
                    <div className='feature-row-div-inner'>
                        <h4>{feature2?.title}</h4>
                        <img src={feature2?.image} />
                        <p id='lore'>{feature2?.lore}</p>
                        <p><span class='guarani'>₲</span>{feature2?.price}</p>
                    </div>
                </NavLink>
                <NavLink to={`/products/${feature3?.id}`}>
                    <div id='feature-row-div-third' className='feature-row-div-inner'>
                        <h4>{feature3?.title}</h4>
                        <img src={feature3?.image} />
                        <p id='lore'>{feature3?.lore}</p>
                        <p><span class='guarani'>₲</span>{feature3?.price}</p>
                    </div>
                </NavLink>
                <NavLink to={`/products/${feature4?.id}`}>
                    <div className='feature-row-div-inner'>
                        <h4>{feature4?.title}</h4>
                        <img src={feature4?.image} />
                        <p id='lore'>{feature4?.lore}</p>
                        <p><span class='guarani'>₲</span>{feature4?.price}</p>
                    </div>
                </NavLink>
            </div>
            <hr id='feature-row-hr' />
        </>
    )
}

export default FeatureRow;