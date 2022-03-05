
import React from "react";
import axios from "axios";
import {
    RENT_CAR_REQUEST,
    RENT_CAR_SUCCESS,
    RENT_CAR_ERROR,
  } from "../Constant";
const CarrentRequest = () => {
  return {
    type: RENT_CAR_REQUEST,
  };
};

const CarrentSuccess = (Carrentlist) => {
  return {
    type: RENT_CAR_SUCCESS,
    payload: Carrentlist,
  };
};
const CarrentError = (error) => {
  return {
    type: RENT_CAR_ERROR,
    payload: error,
  };
};

export const FetchdataCarRentlist = () => {
  return (dispatch) => {
    dispatch(CarrentRequest());

 axios.get("https://sayaraagroup.com/beta/WebsiteApi/rentcar_list")
      .then((response) => {
        const Carrentlist = response.data;
      
        dispatch(CarrentSuccess(Carrentlist));
      })
      .catch((err) => {
        dispatch(CarrentError(err.message));
        console.log(err.message);
      });
  };
};


