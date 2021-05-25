import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EditReview() {

    const { productId, reviewId } = useParams();

    return (
        <div>
            <h2>Here's where you can update a review!</h2>
        </div>
    )
}

export default EditReview;