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

//posting product data(adding a single product)
export const addProductDress = (productData, token) => async (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  await axios
    .post(
      `${process.env.REACT_APP_BACKEND_process.env.REACT_APP_BACKEND_URL}/dress/add`,
      productData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      console.log(res);
      dispatch({ type: POST_PRODUCT_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};
export const addProductShoes = (productData, token) => async (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  await axios
    .post(`${process.env.REACT_APP_BACKEND_URL}/shoes/add`, productData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res);
      dispatch({ type: POST_PRODUCT_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};

//getting data from server and populating on dom
export const getProduct = (category) => (dispatch) => {
  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get(`${process.env.REACT_APP_BACKEND_URL}/${category}`)
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
    .patch(`${process.env.REACT_APP_BACKEND_URL}/dress/${id}`, dataobj)
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
    .delete(`${process.env.REACT_APP_BACKEND_URL}/dress/${id}`)
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
    .get(`${process.env.REACT_APP_BACKEND_URL}/order`)
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
    .patch(`${process.env.REACT_APP_BACKEND_URL}/order/${id}`, {
      status: value,
    })
    .then(() => {
      dispatch({ type: PATCH_ORDER_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};
