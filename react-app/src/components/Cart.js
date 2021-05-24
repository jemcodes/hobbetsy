import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux"

function Cart() {

    const userId = useSelector(state => state.session.user.id)

    return (
        <div>
            <h1>{userId}</h1>
        </div>
    )
}

export default Cart;