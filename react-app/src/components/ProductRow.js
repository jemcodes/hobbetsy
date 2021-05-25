import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Redirect } from 'react-router-dom';

function ProductRow({ productList }) {

    const product1 = productList[0];
    const product2 = productList[1];
    const product3 = productList[2];
    const product4 = productList[3];

    console.log(product2)
    // console.log(product2.title)
    return (
        <div>
            <ul>
                {productList.map((product) =>
                    (<li key={product.id}>{product.title}</li>)
                )}
            </ul>
        </div>
    )
}

export default ProductRow;