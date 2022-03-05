
import React from "react";
import axios from "axios";
import {
    PARTNER_LIST_REQUEST,
  PARTNER_LIST_SUCCESS,
  PARTNER_LIST_EORROR
  } from "../Constant";
const PartnerlistRequest = () => {
  return {
    type: PARTNER_LIST_REQUEST,
  };
};

const PartnerlistSuccess = (PartnerList) => {
  return {
    type: PARTNER_LIST_SUCCESS,
    payload: PartnerList,
  };
};
const PartnerlistError = (error) => {
  return {
    type: PARTNER_LIST_EORROR,
    payload: error,
  };
};

export const FetchdataPartnerList = () => {
  return (dispatch) => {
    dispatch(PartnerlistRequest());

 axios.get("https://sayaraagroup.com/beta/WebsiteApi/partner_list")
      .then((response) => {
        const PartnerList = response.data;

        dispatch(PartnerlistSuccess(PartnerList));
      })
      .catch((err) => {
        dispatch(PartnerlistError(err.message));
        console.log(err.message);
      });
  };
};


