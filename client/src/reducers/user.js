import { EDIT_USER, EDIT_USER_FAIL, LOGOUT } from '../actions/types';

const initialState = {
  user: null,
  loading: true,
  error: {},
};

const user = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case EDIT_USER:
      return {
        ...state,
        user: payload,
        loading: false,
      };
    case EDIT_USER_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case LOGOUT:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default user;
