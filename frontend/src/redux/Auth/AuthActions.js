import {
  SET_USER_LOGGED_IN,
  SET_USER_TOKEN,
  SET_NEW_USER_CREATED,
  REMOVE_NEW_USER_CREATED
} from "./AuthTypes";
import axios from "axios";

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
  } catch (err) {
    console.log(err.response.data);
  }
};

export const createNewUser = config => async dispatch => {
  try {
    const res = await axios.post("/api/users", config);
    dispatch(setNewUserCreated());
  } catch (err) {
    console.log(err.response.data);
  }
};
