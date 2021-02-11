import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_CHANGE_ITEM } from "../types";
import axios from "axios";

export const addToCard = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({ type: CART_ADD_ITEM, payload: data });
    localStorage.setItem(
      "cartList",
      JSON.stringify(getState().cartList.cartList)
    );
  } catch {}
};
