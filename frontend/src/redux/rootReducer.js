import { combineReducers } from "redux";
import AuthReducer from "./Auth/AuthReducer";

export default combineReducers({
  auth: AuthReducer
});
