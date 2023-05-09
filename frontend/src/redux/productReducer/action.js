import axios from "axios";
import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "./actionTypes";

// Dresses
export const getDressProduct = (paramObj) => async (dispatch) => {
  // console.log(paramObj)
  dispatch({ type: GET_PRODUCT_REQUEST });
  await axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/dress`, paramObj)
    .then((res) => {
      //  console.log(res);
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data.msg });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: GET_PRODUCT_FAILURE });
    });
};

//Shoes

export const getShoeProduct = (paramObj) => async(dispatch) => {
  // console.log(paramObj);
  dispatch({ type: GET_PRODUCT_REQUEST });
  await axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/shoes`, paramObj)
    .then((res) => {
      // console.log(res);
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data.msg });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: GET_PRODUCT_FAILURE });
    });
};
