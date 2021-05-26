//ACTION
const GET_REVIEWS = "reviews/GET_REVIEWS"

//ACTION CREATOR
const getReviews = (list) => {
    return {
        type: GET_REVIEWS,
        list
    }
}

//THUNK ACTION
export const displayReviews = (id) => async (dispatch) => {
    console.log("I.......D........", id)
    const response = await fetch(`/api/products/${id}/reviews`);
    console.log("THUNKINESS", response)
    if(response.ok){
        const data = await response.json();
        dispatch(getReviews(data))
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
        default:
            return state;
        }
    }