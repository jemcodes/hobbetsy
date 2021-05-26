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

    return (
        <div key={review.id}>
            <div>{review.user}</div>
            <div>{review.rating}</div>
            <div>{review.review}</div>
            {user.id === review.user_id && <button id={review.id} onClick={editButton}>Edit</button>}
            {user.id === review.user_id && <button onClick={deleteButton}>Delete</button>}
            {editable && <EditReviewForm reviewId={review.id} editable={editable} setEditable={setEditable} />}
        </div>
    )
}


export default SingleReview;