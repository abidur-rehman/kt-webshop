import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  loginError: null,
  signUpError: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        loginError: '',
        signUpError: ''
      };
    case UserActionTypes.AUTH_USER_FAILURE:
      return {
        ...state,
        loginError: action.payload
      };
    case UserActionTypes.SIGN_USER_FAILURE:
      return {
        ...state,
        signUpError: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
