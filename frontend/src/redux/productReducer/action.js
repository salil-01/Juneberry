import axios from "axios"
import { GET_PRODUCT_FAILURE, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS } from "./actionTypes"

// Dresses
export const getMenProduct = (paramObj)=>(dispatch)=>{
  console.log(paramObj)
    dispatch({type:GET_PRODUCT_REQUEST})
   axios
     .get(`http://localhost:4000/dresses`, paramObj)
     .then((res) => {
       console.log(res);
       dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
     })
     .catch(() => {
       dispatch({ type: GET_PRODUCT_FAILURE });
     });
}