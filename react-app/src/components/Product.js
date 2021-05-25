import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { displayProducts } from '../store/product';
import Categories from './Categories';
import SingleProduct from './SingleProduct';
import ProductRow from './ProductRow';

function Product() {
    const dispatch = useDispatch();
    const productList = useSelector(state => {
        return state.products.list.map(productId => state.products[productId])
    });


    console.log('component', productList)


    // useEffect(() => {
    //     dispatch(displayProducts());
    // }, [dispatch])

    return (
        <div>
            <h1>HOBBETSY</h1>
            <h2>Products</h2>
            {/* <Categories /> */}
            {<ProductRow productList={productList} />}
            <ul>
                {productList && productList.map((product) =>
                    (<li key={product.id}><Link to={`/products/${product.id}`}>{product.title}</Link></li>)
                )}
            </ul>
        </div>

    )
}

export default Product;
