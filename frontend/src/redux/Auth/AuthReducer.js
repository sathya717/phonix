import {
  SET_USER_LOGGED_IN,
  SET_USER_TOKEN,
  REMOVE_NEW_USER_CREATED,
  SET_NEW_USER_CREATED
} from "./AuthTypes";

const initState = {
  loggedIn: false,
  newUserCreated: false,
  token: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_NEW_USER_CREATED:
      return { ...state, newUserCreated: true };
    case REMOVE_NEW_USER_CREATED:
      return { ...state, newUserCreated: false };
    case SET_USER_TOKEN:
      return { ...state, token: action.payload, loggedIn: true };
    default:
      return state;
  }
};
