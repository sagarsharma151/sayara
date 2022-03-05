import axios from "axios";
import {
    CAR_PRODUCT_LIST_REQUEST,
    CAR_PRODUCT_LIST_SUCCESS,
    CAR_PRODUCT_LIST_ERROR,
  } from "../Constant";
const CarproductlistRequest = () => {
  return {
    type: CAR_PRODUCT_LIST_REQUEST,
  };
};

const CarproductlistSuccess = (CarproductList) => {
  return {
    type: CAR_PRODUCT_LIST_SUCCESS,
    payload: CarproductList,
  };
};
const CarproductlistError = (error) => {
  return {
    type: CAR_PRODUCT_LIST_ERROR,
    payload: error,
  };
};

export const FetchdataCarproductlist = () => {
  return (dispatch) => {
    dispatch(CarproductlistRequest());

 axios.get("https://sayaraagroup.com/beta/WebsiteApi/product_list")
      .then((response) => {
        const CarproductList = response.data;
        dispatch(CarproductlistSuccess(CarproductList));
      })
      .catch((err) => {
        dispatch(CarproductlistError(err.message));
        console.log(err.message);
      });
  };
};


