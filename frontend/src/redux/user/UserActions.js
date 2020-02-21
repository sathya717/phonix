import { SET_USER, SET_AVAILABLE_ITEMS, CREATE_NEW_ITEM } from "./UserTypes";
import Axios from "axios";
import { setError } from "../Alert/AlertActions";

export const setUser = user => {
  return {
    type: SET_USER,
    payload: user
  };
};

export const setItems = items => {
  return {
    type: SET_AVAILABLE_ITEMS,
    payload: items
  };
};

export const setNewItem = () => {
  return {
    type: CREATE_NEW_ITEM
  };
};

export const fetchUser = (token, history) => async dispatch => {
  try {
    const res = await Axios.get("/api/users", {
      headers: { "x-auth-token": token }
    });
    dispatch(setUser(res.data.user));
  } catch (err) {
    localStorage.removeItem("token");
    history.push("/login");
  }
};

export const fetchAvailableItems = token => async dispatch => {
  try {
    const res = await Axios.get("/api/items", {
      headers: { "x-auth-token": token }
    });
    dispatch(setItems(res.data.items));
  } catch (err) {
    dispatch(setError(err.response.data.errors));
  }
};

export const createNewItem = (token, data) => async dispatch => {
  try {
    const res = await Axios.post("/api/items", data, {
      headers: { "x-auth-token": token }
    });
    console.log(res.data);
    dispatch(setNewItem());
    dispatch(fetchAvailableItems(token));
  } catch (err) {
    console.log(err);
    dispatch(setError(err.response.data.errors));
  }
};
