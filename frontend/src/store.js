import productReducer from './features/productSlice'
import cartReducer, { getTotals } from './features/cartSlice'
import checkoutReducer from "./features/checkoutSlice"
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
export const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
    checkout: checkoutReducer
  
});
export const store = createStore(rootReducer, applyMiddleware(thunk));

store.dispatch(getTotals())