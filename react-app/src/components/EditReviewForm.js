import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateReview } from "../store/review";
import { displayReviews } from "../store/review"

function EditReviewForm(props) {
    const { reviewId } = props
    const reviewProp = useSelector(state => state.reviews[reviewId]);
    const [rating, setRating] = useState(reviewProp.rating);
    const [review, setReview] = useState(reviewProp.review);
    const [errors, setErrors] = useState([]);
    const user = useSelector(state => state.session.user);
    // console.log(reviewProp)
    const dispatch = useDispatch();

    const { productId } = useParams()

    const onReviewSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            rating,
            review,
            productId,
            reviewId
        }

        await dispatch(updateReview(payload))
        dispatch(displayReviews(productId))

        setRating(1)
        setReview("")
    };

    const updateRating = (e) => {
        setRating(e.target.value);
    };

    const updateReviewValue = (e) => {
        setReview(e.target?.value);
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
                    value={rating}
                ></input>
            </div>
            <div>
                <label>Review</label>
                <textarea
                    name="review"
                    onChange={updateReviewValue}
                    value={review}
                />
            </div>
            <button type="submit">Edit Review</button>
        </form>
    )
}

export default EditReviewForm;