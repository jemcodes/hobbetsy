import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { displayReviews } from "../store/review"
import EditReviewForm from './EditReviewForm';

function Review() {

    const [editable, setEditable] = useState(false)
    const [editableId, setEditableId] = useState()

    // console.log(editable);

    const { productId } = useParams();
    // console.log("PRODUCT ID", productId)
    const dispatch = useDispatch();
    const reviewList = useSelector(state => {
        return state.reviews.list.map(reviewId => state.reviews[reviewId])
    });

    const editButton = (e) => {
        e.preventDefault()

        setEditable(!editable)
        setEditableId(e.target.id)
        console.log(e.target)
        console.log('ID', editableId)
    }

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
                    <button id={reviewItem.id} onClick={editButton}>Edit</button>
                    {/* reviewItem.id === editableId && */}
                    {editable && <EditReviewForm reviewId={reviewItem.id} />}
                    <button>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default Review;