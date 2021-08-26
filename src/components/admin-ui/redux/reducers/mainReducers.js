import { combineReducers } from "redux";
import accountReducer from "./accountReducers.js";


const mainReducer = combineReducers({
  account: accountReducer
});

export default mainReducer;
