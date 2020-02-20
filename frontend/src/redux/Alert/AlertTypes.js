import {
  SET_ERROR,
  REMOVE_ERROR,
  SET_NOTIFICATION,
  REMOVE_NOTIFICATION
} from "./AlertActions";

export const setError = err => {
  return {
    type: SET_ERROR,
    payload: err
  };
};

export const removeError = msg => {
  return {
    type: REMOVE_ERROR,
    payload: msg
  };
};

export const setNotification = msg => {
  return {
    type: SET_NOTIFICATION,
    payload: msg
  };
};

export const removeNotification = msg => {
  return {
    type: REMOVE_NOTIFICATION,
    payload: msg
  };
};
