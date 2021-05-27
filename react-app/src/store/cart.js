import { useImperativeHandle } from "react";

//action
const GET_ITEMS = 'cart/GET_ITEMS';
const ADD_ITEMS = 'cart/ADD_ITEMS';

//action creator
const getItems = list => ({
  type: GET_ITEMS,
  list
})

const addItems = list => ({
  type: ADD_ITEMS,
  list
})

//thunk
export const displayItems = (id) => async (dispatch) => {
  const response = await fetch(`/api/users/${id}/cart`);
  if (response.ok) {
    const data = await response.json();
    console.log('THIS IS THE DATA', data)
    dispatch(getItems(data))
  }
}

export const itemsAddedToCart = (list) => async (dispatch) => {
  const { userId, productId } = list;
  const response = await fetch(`/api/users/${userId}/cart/products/${productId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(list)
  })
  if (response.ok) {
    const data = await response.json();
    dispatch(addItems(data))
  }
}

const initialState = {
  list: [],
};

// TODO const sortList = list => {
//   return list.map(cart => cart.createdAt)
// }

//reducer
export default function cartReducer(state = initialState, action) {
  const nextState = {}
  switch (action.type) {
    case GET_ITEMS:
      action.list.carts.forEach(cart => {
        nextState[cart.id] = cart
      })
      return {
        ...state,
        ...nextState,
        list: action.list.carts
      };
    case ADD_ITEMS:
      return {
        ...state,
        ...nextState,
      }

    default:
      return state;
  }
}
