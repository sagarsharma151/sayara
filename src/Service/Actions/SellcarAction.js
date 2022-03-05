import axios from "axios";
import {
    SELL_CAR_LIST_REQUEST,
    SELL_CAR_LIST_SUCCESS,
    SELL_CAR_LIST_ERROR,
  } from "../Constant";
const SellcarlistRequest = () => {
  return {
    type: SELL_CAR_LIST_REQUEST,
  };
};

const SellcarlistSuccess = (SellcarList) => {
  return {
    type: SELL_CAR_LIST_SUCCESS,
    payload: SellcarList,
  };
};
const SellcarlistError = (error) => {
  return {
    type: SELL_CAR_LIST_ERROR,
    payload: error,
  };
};

export const FetchdataSellcarlist = () => {
  return (dispatch) => {
    dispatch(SellcarlistRequest());

 axios.get("https://sayaraagroup.com/beta/WebsiteApi/sellcar_list")
      .then((response) => {
        const SellcarList = response.data;
        dispatch(SellcarlistSuccess(SellcarList));
      })
      .catch((err) => {
        dispatch(SellcarlistError(err.message));
        console.log(err.message);
      });
  };
};


