import axios from "axios";
import {
  DELETE_PRODUCT_SUCCESS,
  GET_ORDER_SUCCESS,
  GET_PRODUCT_SUCCESS,
  PATCH_ORDER_SUCCESS,
  PATCH_PRODUCT_SUCCESS,
  POST_PRODUCT_SUCCESS,
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
} from "./actionTypes";
const url = `https://juneberry-backend.onrender.com`;

//posting product data(adding a single product)
export const addProductMen = (productData) => async (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  await axios
    .post(`${url}/men`, productData)
    .then(() => {
      dispatch({ type: POST_PRODUCT_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};
export const addProductWomen = (productData) => async (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  await axios
    .post(`${url}/women`, productData)
    .then(() => {
      dispatch({ type: POST_PRODUCT_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

//getting data from server and populating on dom
export const getProduct = (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get(`${url}/men`)
    .then((res) => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

//patching data
export const editProduct = (dataobj, id) => async (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  await axios
    .patch(`${url}/men/${id}`, dataobj)
    .then(() => {
      dispatch({ type: PATCH_PRODUCT_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

//delete product
export const deleteProduct = (id) => async (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  await axios
    .delete(`${url}/men/${id}`)
    .then(() => {
      dispatch({ type: DELETE_PRODUCT_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

//get orders
export const getOrders = (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get(`${url}/order`)
    .then((res) => {
      dispatch({ type: GET_ORDER_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

//change order status
export const changeOrderStatus = (id, value) => async (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  await axios
    .patch(`${url}/order/${id}`, {
      status: value,
    })
    .then(() => {
      dispatch({ type: PATCH_ORDER_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};