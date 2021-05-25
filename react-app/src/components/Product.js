import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { displayProducts } from '../store/product';

function Product() {
    const dispatch = useDispatch();
    const productList = useSelector(state => {
        return state.products.list.map(productId => state.products[productId])
    });


    console.log('component', productList)


    useEffect(() => {
        dispatch(displayProducts());
    }, [dispatch])

    return (
        <div>
            <h1>HOBBETSY</h1>
            <h2>Products</h2>
            <ul>
                {productList && productList.map((product) =>
                    (<li key={product.id}>{product.title}</li>)
                )}
            </ul>
        </div>

    )
}

export default Product;
