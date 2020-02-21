import { SET_USER, SET_AVAILABLE_ITEMS, CREATE_NEW_ITEM } from "./UserTypes";

const initState = {
  user: null,
  available_items: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_AVAILABLE_ITEMS:
      return { ...state, available_items: action.payload };
    case CREATE_NEW_ITEM:
      return state;
    default:
      return state;
  }
};
