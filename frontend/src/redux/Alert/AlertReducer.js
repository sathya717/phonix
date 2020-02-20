import {
  SET_ERROR,
  REMOVE_ERROR,
  SET_NOTIFICATION,
  REMOVE_NOTIFICATION
} from "./AlertActions";

const initState = {
  errors: [],
  notifications: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, errors: [...state.errors, ...action.payload] };
    case REMOVE_ERROR:
      return {
        ...state,
        errors: state.errors.filter(error => error.msg != action.payload)
      };
    case SET_NOTIFICATION:
      return {
        ...state,
        notifications: [...state.notifications, action.payload]
      };
    case REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(
          notify => notify.msg !== action.payload
        )
      };
    default:
      return state;
  }
};
