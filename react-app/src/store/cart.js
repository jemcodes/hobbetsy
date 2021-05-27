import { useImperativeHandle } from "react";

//action
const GET_ITEMS = 'cart/GET_ITEMS';
const ADD_ITEMS = 'cart/ADD_ITEMS';
const DELETE_ITEM = 'cart/DELETE_ITEM'

//action creator
const getItems = list => ({
  type: GET_ITEMS,
  list
})

const addItems = list => ({
  type: ADD_ITEMS,
  list
})

const deleteItem = payload => ({
  type: DELETE_ITEM,
  payload
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

export const deleteItemsFromCart = (list) => async (dispatch) => {
  const { userId, productId, cartId } = list;
  const response = await fetch(`/api/users/${userId}/cart/${cartId}/products/${productId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(list)
  })
  if (response.ok) {
    const data = await response;
    dispatch(deleteItem(cartId))
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
  let nextState = {}
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

    case DELETE_ITEM:
      nextState = { ...state }
      delete nextState[action.payload]
      return nextState

    default:
      return state;
  }
}
