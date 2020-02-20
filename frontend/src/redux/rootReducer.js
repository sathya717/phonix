import { combineReducers } from "redux";
import AuthReducer from "./Auth/AuthReducer";
import AlertReducer from "./Alert/AlertReducer";
import UserReducer from "./user/UserReducer";

export default combineReducers({
  auth: AuthReducer,
  alerts: AlertReducer,
  account: UserReducer
});
