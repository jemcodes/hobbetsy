import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import displayReviews from "../store/review"

function Review() {
    const { productId }= useParams();
    // console.log("PRODUCT ID", productId)
    const dispatch = useDispatch();
    useEffect(() => {
            dispatch(displayReviews(productId))        
    }, [dispatch])
    

    return (
        <div>
            <h2>Here's a review!</h2>
        </div>
    )
}

export default Review;