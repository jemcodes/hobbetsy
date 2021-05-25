//action
const GET_PRODUCTS = "products/GET_PRODUCTS"

//action creator
const getProducts = (allproducts) => {
  return {
    type: GET_PRODUCTS,
    payload: allproducts
  }
}


//thunk action
export const displayProducts = () => async (dispatch) => {
  const response = await fetch('/api/products/');
  if (response.ok) {
    const data = await response.json();
    console.log("DATA COMIN FROM STORE", data)
    dispatch(getProducts(data))
  }
}

const initialState = { productsList: [] };

//reducer
export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      const listProducts = {};
      action.allproducts.forEach(product => {
        listProducts[product.title] = product;
      });
      return {
        ...listProducts,
        ...state,
        productsList: action.allproducts
      }

    //   case GET_PRODUCTS:
    //     const nextState = { ...state }
    //     nextState[action.payload] = action.payload
    //     return nextState;
    //   // return { allproducts: action.payload }
    default:
      return state;
  }
}
