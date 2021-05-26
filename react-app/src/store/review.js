//ACTION
const GET_REVIEWS = "reviews/GET_REVIEWS"
const POST_REVIEW = "reviews/POST_REVIEW"

//ACTION CREATOR
const getReviews = (list) => {
    return {
        type: GET_REVIEWS,
        list
    }
}

const postReview = (payload) => {
    return {
        type: POST_REVIEW,
        payload
    }
}

//THUNK ACTION
export const displayReviews = (id) => async (dispatch) => {
    console.log("I.......D........", id)
    const response = await fetch(`/api/products/${id}/reviews`);
    console.log("THUNKINESS", response)
    if (response.ok) {
        const data = await response.json();
        dispatch(getReviews(data))
    }
}

export const createReview = (payload) => async (dispatch) => {
    const { rating, review, productId } = payload;
    console.log("RRI---------", rating, review, productId)
    const response = await fetch(`/api/products/${productId}/reviews`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
    })
    console.log("RESPONSE------RESponce", response)
    if (response.ok) {
        const data = await response.json();
        dispatch(postReview(data))
    }
}

const initialState = {
    list: [],
};

const sortList = list => {
    return list.map(review => review.id)
}



export default function reviewReducer(state = initialState, action) {
    switch (action.type) {
        case GET_REVIEWS:
            const nextState = {}
            action.list.reviews.forEach(review => {
                nextState[review.id] = review
            })
            return {
                ...state,
                ...nextState,
                list: sortList(action.list.reviews)
            };
        case POST_REVIEW:
            return { ...state, ...action.payload }
        default:
            return state;
    }
}