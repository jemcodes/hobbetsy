import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DeleteReview() {

    const { productId, reviewId } = useParams();

    return (
        <button>This is a delete button</button>
    )
}

export default EditReview;