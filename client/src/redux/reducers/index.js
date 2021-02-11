import { combineReducers } from "redux";
import productReducer from "./productReducer";
import productDetailsReducer from "./productDetailsReducer";
import cartReducer from "./cartReducer";
import { userLoginReducer, userRegisterReducer } from "./userReducer";

const rootReducer = combineReducers({
  productList: productReducer,
  productDetail: productDetailsReducer,
  cartList: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

export default rootReducer;
