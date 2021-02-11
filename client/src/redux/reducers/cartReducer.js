import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_CHANGE_ITEM } from "../types";

const initialState = {
  cartList: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const itemExists = state.cartList.find(
        (listItem) => item.product.id === listItem.product.id
      );
      if (itemExists) {
        return state;
      } else {
        return { ...state, cartList: [...state.cartList, action.payload] };
      }

    case CART_REMOVE_ITEM:
      return {...state, cartList: state.cartList.filter(({ id }) => id !== action.payload.id)};
    default:
      return state;
  }
};

export default cartReducer;
