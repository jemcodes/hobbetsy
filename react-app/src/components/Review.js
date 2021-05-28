import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { displayReviews } from "../store/review"

import SingleReview from './SingleReview';

function Review() {



    // console.log(editable);

    const { productId } = useParams();
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
            <h2 id="single-prod-review-heading">Reviews</h2>
            <div id="single-prod-review-contents">
                {reviewList.map(review => (
                    <SingleReview review={review} productId={productId} />
                ))}
            </div>
        </div>
    )
}

export default Review;