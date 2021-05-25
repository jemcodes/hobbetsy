import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Redirect } from 'react-router-dom';

function FeatureRow() {

    const featureList = useSelector(state => {
        return state.products.list.map(productId => state.products[productId])
    });

    const feature1 = featureList[7];
    const feature2 = featureList[20];
    const feature3 = featureList[13];
    const feature4 = featureList[26];

    return (
        <div>
            <h1>FEATURE ROW</h1>
            <ul>
                <NavLink to={`/products/${feature1.id}`}><li>{feature1.title}</li></NavLink>
                <NavLink to={`/products/${feature2.id}`}><li>{feature2.title}</li></NavLink>
                <NavLink to={`/products/${feature3.id}`}><li>{feature3.title}</li></NavLink>
                <NavLink to={`/products/${feature4.id}`}><li>{feature4.title}</li></NavLink>
            </ul>
        </div>
    )
}

export default FeatureRow;