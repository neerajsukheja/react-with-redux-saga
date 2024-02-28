import { combineReducers } from "redux";
import counterReducer from "./counter/reducer";
import productsListReducer from "./productsList/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  products: productsListReducer,
});

export default rootReducer;
