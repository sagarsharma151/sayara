
import React from "react";
import axios from "axios";
import {
    CAR_SERVICE_LIST_REQUEST,
    CAR_SERVICE_LIST_SUCCESS,
    CAR_SERVICE_LIST_ERROR,
  } from "../Constant";
const CarservicelistRequest = () => {
  return {
    type: CAR_SERVICE_LIST_REQUEST,
  };
};

const CarservicelistSuccess = (CarserviceList) => {
  return {
    type: CAR_SERVICE_LIST_SUCCESS,
    payload: CarserviceList,
  };
};
const CarservicelistError = (error) => {
  return {
    type: CAR_SERVICE_LIST_ERROR,
    payload: error,
  };
};

export const FetchdataCarServicelist = () => {
  return (dispatch) => {
    dispatch(CarservicelistRequest());

 axios.get("https://sayaraagroup.com/beta/WebsiteApi/carservice_list")
      .then((response) => {
        const CarserviceList = response.data;
        dispatch(CarservicelistSuccess(CarserviceList));
      })
      .catch((err) => {
        dispatch(CarservicelistError(err.message));
        console.log(err.message);
      });
  };
};


