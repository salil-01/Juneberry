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
  
  const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    orders: [],
  };
  export const reducer = (state = initialState, { payload, type }) => {
    switch (type) {
      case PRODUCT_REQUEST: {
        return {
          ...state,
          isLoading: true,
        };
      }
      case PRODUCT_FAILURE: {
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      }
      case GET_PRODUCT_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          products: payload,
        };
      }
      case POST_PRODUCT_SUCCESS: {
        return {
          ...state,
          isLoading: false,
        };
      }
      case PATCH_PRODUCT_SUCCESS: {
        return {
          ...state,
          isLoading: false,
        };
      }
      case DELETE_PRODUCT_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          isError: false,
        };
      }
      case GET_ORDER_SUCCESS: {
        return {
          ...state,
          isLoading: false,
          orders: payload,
        };
      }
      case PATCH_ORDER_SUCCESS: {
        return {
          ...state,
          isLoading: false,
        };
      }
      default:
        return state;
    }
  };