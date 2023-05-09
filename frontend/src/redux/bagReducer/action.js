import axios from "axios";
import {
  ADD_ADDRESS,
  ADD_TO_BAG,
  ADD_TO_WISHLIST,
  POST_ORDER_FAILURE,
  POST_ORDER_REQUEST,
  POST_ORDER_SUCCESS,
  UPDATE_BAG,
  UPDATE_WISHLIST,
} from "./actionTypes";

export const addToBag = (obj) => (dispatch) => {
  dispatch({ type: ADD_TO_BAG, payload: obj });
};
export const addToWishlist = (obj) => (dispatch) => {
  dispatch({ type: ADD_TO_WISHLIST, payload: obj });
};
export const updateBag = (obj) => (dispatch) => {
  dispatch({ type: UPDATE_BAG, payload: obj });
};
export const updateWishlist = (obj) => (dispatch) => {
  dispatch({ type: UPDATE_WISHLIST, payload: obj });
};
export const addAddress = (obj) => (dispatch) => {
  dispatch({ type: ADD_ADDRESS, payload: obj });
};
export const postOrder = (data,token) => async (disapatch) => {
  disapatch({ type: POST_ORDER_REQUEST });
  await axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/order/create`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res);
      disapatch({ type: POST_ORDER_SUCCESS });
    })
    .catch((error) => {
      console.log(error);
      disapatch({ type: POST_ORDER_FAILURE });
    });
};
