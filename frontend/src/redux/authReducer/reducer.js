import { getData, setData } from "../../utilis/localStorage";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  isAuth: getData("auth") || false,
  isAdminAuth: getData("adminAuth") || false,
  token: getData("token") || "",
  user: getData("name") || "",
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
        isAdminAuth: false,
        token: "",
        isAuth: false,
      };
    }
    case LOGIN_SUCCESS: {
      setData("token", payload.token);
      setData("auth", true);
      setData("adminAuth", true);
      setData("name", payload.user || payload.admin);
      return {
        ...state,
        isLoading: false,
        isError: false,
        token: payload.token,
        isAuth: true,
        isAdminAuth: payload.admin ? true : false,
        user: payload.user || payload.admin,
      };
    }
    case LOGOUT_SUCCESS: {
      setData("token", "");
      setData("auth", false);
      setData("adminAuth", false);
      setData("name", "");
      return {
        ...state,
        isLoading: false,
        isError: false,
        token: "",
        isAuth: false,
        isAdminAuth: false,
        user: "",
      };
    }
    default:
      return state;
  }
};
