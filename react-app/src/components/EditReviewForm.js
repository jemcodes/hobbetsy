import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createReview } from "../store/review";
import { displayReviews } from "../store/review"

function EditReviewForm(props) {
    const { reviewId } = props
    const [rating, setRating] = useState(1);
    const [review, setReview] = useState("");
    const [errors, setErrors] = useState([]);
    const user = useSelector(state => state.session.user);
    const reviewProp = useSelector(state => state.reviews[reviewId]);
    // console.log(reviewProp)
    const dispatch = useDispatch();

    const { productId } = useParams()

    const onReviewSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            rating,
            review,
            productId
        }

        await dispatch(createReview(payload))
        dispatch(displayReviews(productId))

        setRating(1)
        setReview("")
    };

    const updateRating = (e) => {
        setRating(e.target.value);
    };

    const updateReview = (e) => {
        setReview(e.target.value);
    }

    return (
        <form onSubmit={onReviewSubmit}>
            <div>
                <label>Rating</label>
                <input
                    type="number"
                    min="1"
                    max="5"
                    step="1"
                    name="rating"
                    onChange={updateRating}
                    value={reviewProp.rating}
                ></input>
            </div>
            <div>
                <label>Review</label>
                <textarea

                    name="review"
                    onChange={updateReview}
                    value={reviewProp.review}
                />
            </div>
            <button type="submit">Edit Review</button>
        </form>
    )
}

export default EditReviewForm;