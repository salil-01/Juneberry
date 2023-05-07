import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "./actionTypes";
import axios from "axios";
export const login = (userData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  await axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/login`, userData)
    .then((res) => {
      if (res.data.token) {
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
        // return Promise.resolve();
      } else {
        dispatch({ type: LOGIN_FAILURE });
        // return Promise.reject();
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE });
      // return Promise.reject();
    });
};

export const logout = async(dispatch) => {
  await dispatch({ type: LOGOUT_SUCCESS });
};
