import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleProduct() {

    const { productId } = useParams()

    return (
        <div>
            <h3>{productId}</h3>
        </div>
    )
}


export default SingleProduct;