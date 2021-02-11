import { IS_DATA_LOADING, SET_PRODUCT_DATA, SET_PRODUCT_ERROR } from "../types";

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_DATA_LOADING:
      return { ...state, loading: true };
    case SET_PRODUCT_DATA:
      return { ...state, loading: false, products: action.payload };
    case SET_PRODUCT_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default productReducer;
