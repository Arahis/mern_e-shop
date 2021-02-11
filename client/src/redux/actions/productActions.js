import {
  IS_DATA_LOADING,
  SET_PRODUCT_DATA,
  SET_PRODUCT_ERROR,
  IS_PRODUCT_DATA_LOADING,
  PRODUCT_DETAILS_DATA,
  PRODUCT_DETAILS_ERROR,
} from "../types";
import axios from "axios";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: IS_DATA_LOADING });
    const { data } = await axios.get("/api/products");
    dispatch({ type: SET_PRODUCT_DATA, payload: data });
  } catch (error) {
    dispatch({ type: SET_PRODUCT_ERROR, payload: error.message });
  }
};

export const productDetails = (id, qty = 1) => async (dispatch) => {
  try {
    dispatch({ type: IS_PRODUCT_DATA_LOADING });
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({ type: PRODUCT_DETAILS_DATA, payload: { ...data, qty } });
  } catch (error) {
    dispatch({ type: PRODUCT_DETAILS_ERROR, payload: error.message });
  }
};
