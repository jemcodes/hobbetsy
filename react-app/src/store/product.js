//action
const GET_PRODUCTS = "products/GET_PRODUCTS"

//action creator
const getProducts = (list) => {
  return {
    type: GET_PRODUCTS,
    list
  }
}


//thunk action
export const displayProducts = () => async (dispatch) => {
  const response = await fetch('/api/products/');
  if (response.ok) {
    const data = await response.json();
    // console.log("DATA COMIN FROM STORE", data)
    dispatch(getProducts(data))
  }
}

const initialState = {
  list: [],
};

const sortList = list => {
  return list.map(product => product.id)
}

//reducer
export default function productReducer(state = initialState, action) {
  switch (action.type) {
    // case GET_PRODUCTS:
    //   const listProducts = {};
    //   action.allproducts.forEach(product => {
    //     listProducts[product.title] = product;
    //   });
    //   return {
    //     ...listProducts,
    //     ...state,
    //     productsList: action.allproducts
    //   }

    case GET_PRODUCTS:
      const nextState = {}
      action.list.products.forEach(product => {
        nextState[product.id] = product
      })
      return {
        ...state,
        ...nextState,
        list: sortList(action.list.products)
      };
    // return { allproducts: action.payload }
    default:
      return state;
  }
}
