import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: false,
  isAdminAuth: false,
  token: "",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAdminAuth:false,
        token:"",
        isAuth:false
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError:false,
        token: payload.token,
        isAuth: true,
        isAdminAuth: payload.admin ? true : false,
      };
    }
    default:
      return state;
  }
};
