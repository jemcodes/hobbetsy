import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EditReviewForm from './EditReviewForm';
import { deleteReviewThunk } from '../store/review'

function SingleReview({ review, productId }) {
    const dispatch = useDispatch()
    const [editable, setEditable] = useState(false)

    const user = useSelector(state => state.session.user)

    const editButton = (e) => {
        e.preventDefault()
        setEditable(!editable)
    }

    const deleteButton = (e) => {
        e.preventDefault()
        const payload = {
            userId:user.id,
            productId:productId,
            reviewId:review.id
        }
        dispatch(deleteReviewThunk(payload))
    }

    const renderRating = (review) => {
        if (review?.rating === 5) {
            review.ratingImages =
                <div>
                    <p>⭐️</p>
                    <p>⭐️</p>
                    <p>⭐️</p>
                    <p>⭐️</p>
                    <p>⭐️</p>
                </div>
        } else if (review?.rating === 4) {
            review.ratingImages =
                <div>
                    <p>⭐️</p>
                    <p>⭐️</p>
                    <p>⭐️</p>
                    <p>⭐️</p>
                </div>
        } else if (review?.rating === 3) {
            review.ratingImages =
                <div>
                    <p>⭐️</p>
                    <p>⭐️</p>
                    <p>⭐️</p>
                </div>
        } else if (review?.rating === 2) {
            review.ratingImages =
                <div>
                    <p>⭐️</p>
                    <p>⭐️</p>
                </div>
        } else if (review?.rating === 1) {
            review.ratingImages =
                <div>
                    <p>⭐️</p>
                </div>
        }

        return (
            <h2 className="review-list-rating-contents">{review?.ratingImages}</h2>
        )
    }

    return (
        <div id="single-review-contents" key={review?.id}>
            <div id="single-review-user">{review?.user}</div>
            <div id="single-review-rating">{renderRating(review)}</div>
            <div id="single-review">{review?.review}</div>
            <div id="single-review-btns">
                {user.id === review?.user_id && <button class="review-edit-btn" id={review?.id} onClick={editButton}>Edit</button>}
                {user.id === review?.user_id && <button id="review-delete-btn" onClick={deleteButton}>Delete</button>}
                {editable && <EditReviewForm reviewId={review?.id} editable={editable} setEditable={setEditable} />}
            </div>
        </div>
    )
}


export default SingleReview;