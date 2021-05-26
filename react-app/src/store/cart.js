//action
const GET_ITEMS = 'cart/GET_ITEMS';

//action creator
const getItems = list => ({
  type: GET_ITEMS,
  list
})

//thunk
export const displayItems = (id) => async (dispatch) => {
  const response = await fetch(`/api/users/${id}/cart`);
  if (response.ok) {
    const data = await response.json();
    dispatch(getItems(data))
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
  switch (action.type) {
    case GET_ITEMS:
      const nextState = {}
      action.list.items.forEach(item => {
        nextState[item.id] = item
      })
      return {
        ...state,
        ...nextState,
        list: action.list.items
      };
    default:
      return state;
  }
}
