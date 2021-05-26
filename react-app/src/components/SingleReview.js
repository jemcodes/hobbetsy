import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EditReviewForm from './EditReviewForm';

function SingleReview({ review }) {

    const [editable, setEditable] = useState(false)
    const [editableId, setEditableId] = useState()
    console.log(review)
    const user = useSelector(state => state.session.user)

    const editButton = (e) => {
        e.preventDefault()
        setEditable(!editable)
    }

    return (
        <div key={review.id}>
            <div>{review.user}</div>
            <div>{review.rating}</div>
            <div>{review.review}</div>
            {user.id === review.user_id && <button id={review.id} onClick={editButton}>Edit</button>}
            {user.id === review.user_id && <button>Delete</button>}
            {/* reviewItem.id === editableId && */}
            {editable && <EditReviewForm reviewId={review.id} />}

        </div>
    )
}


export default SingleReview;