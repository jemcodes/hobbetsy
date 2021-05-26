import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createReview } from "../store/review";

function CreateReview() {
    const [rating, setRating] = useState(1);
    const [review, setReview] = useState("");
    const [errors, setErrors] = useState([]);
    const user = useSelector(state => state.session.user);
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
                    value={rating}
                    ></input>
            </div>
            <div>
                <label>Review</label>
                <textarea
                    
                    name="review"
                    onChange={updateReview}
                    value={review}
                    />
            </div>
            <button type="submit">Submit Review</button>
        </form>
    )
}

export default CreateReview;