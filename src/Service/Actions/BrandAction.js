import axios from "axios";
import {
  BRAND_LIST_REQUEST,
  BRAND_LIST_SUCCESS,
  BRAND_LIST_ERROR,
  } from "../Constant";
const BrandListRequest = () => {
  return {
    type: BRAND_LIST_REQUEST,
  };
};
const BrandListSuccess = (BrandList) => {
  return {
    type: BRAND_LIST_SUCCESS,
    payload: BrandList,
  };
};
const BrandListlistError = (error) => {
  return {
    type: BRAND_LIST_ERROR,
    payload: error,
  };
};

export const FetchdataBrandList = () => {
  return (dispatch) => {
    dispatch(BrandListRequest());

 axios.get("https://sayaraagroup.com/beta/WebsiteApi/brand_list")
      .then((response) => {
        const BrandList = response.data;
        dispatch(BrandListSuccess(BrandList));
      })
      .catch((err) => {
        dispatch(BrandListlistError(err.message));
        console.log(err.message);
      });
  };
};


