import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { displayReviews } from "../store/review"

function Review() {
    const { productId }= useParams();
    // console.log("PRODUCT ID", productId)
    const dispatch = useDispatch();
    const reviewList = useSelector(state => {
        return state.reviews.list.map(reviewId => state.reviews[reviewId])
    });
    useEffect(() => {
            dispatch(displayReviews(productId))        
    }, [dispatch, productId])
    

    return (
        <div>
            <h1>Reviews</h1>
            {reviewList.map(reviewItem => (
                <div key={reviewItem.id}>
                    <div>{reviewItem.user}</div>
                    <div>{reviewItem.rating}</div>
                    <div>{reviewItem.review}</div>
                </div>
            ))}
        </div>
    )
}

export default Review;