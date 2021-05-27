import React from "react";
import { Link } from "react-router-dom";


function SingleSearchItem({ product }){
    
    return (
        <div>
                <div><Link to={`/products/${product.id}`}>{product.title}</Link></div>
        </div>
    )
}

export default SingleSearchItem