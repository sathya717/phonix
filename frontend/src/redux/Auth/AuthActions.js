import {
  SET_USER_LOGGED_IN,
  SET_USER_TOKEN,
  SET_NEW_USER_CREATED,
  REMOVE_NEW_USER_CREATED
} from "./AuthTypes";
import axios from "axios";
import { setError, setNotification } from "../Alert/AlertActions";

export const setUserToken = token => {
  return {
    type: SET_USER_TOKEN,
    payload: token
  };
};

export const setNewUserCreated = () => {
  return {
    type: SET_NEW_USER_CREATED
  };
};

export const removeNewUserCreated = () => {
  return {
    type: REMOVE_NEW_USER_CREATED
  };
};

export const fetchUserToken = config => async dispatch => {
  try {
    const res = await axios.post("/api/auth", config);
    dispatch(setUserToken(res.data.token));
    localStorage.setItem("token", res.data.token);
  } catch (err) {
    dispatch(setError(err.response.data.errors));
  }
};

export const createNewUser = config => async dispatch => {
  try {
    const res = await axios.post("/api/users", config);
    console.log(res.data);
    dispatch(setNotification(res.data));
  } catch (err) {
    dispatch(setError(err.response.data.errors));
  }
};
