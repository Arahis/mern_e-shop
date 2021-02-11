import { IS_DATA_LOADING, PRODUCT_DETAILS_DATA, PRODUCT_DETAILS_ERROR } from "../types";

const initialState = {
  product: {},
};

const productDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_DATA_LOADING:
      return { ...state, loading: true };
    case PRODUCT_DETAILS_DATA:
      return { ...state, loading: false, product: action.payload };
    case PRODUCT_DETAILS_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default productDetailsReducer;