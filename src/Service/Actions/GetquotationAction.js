
import React from "react";
import axios from "axios";
import {
    GET_QUOTATION_REQUEST,
    GET_QUOTATION_SUCCESS,
    GET_QUOTATION_ERROR,
  } from "../Constant";
import { JavascriptOutlined } from "@mui/icons-material";
const GetquotationRequest = () => {
  return {
    type: GET_QUOTATION_REQUEST,
  };
};

const GetquotationSuccess = (Getquotation) => {
  return {
    type: GET_QUOTATION_SUCCESS,
    payload:Getquotation,
  };
};
const GetquotationError = (error) => {
  return {
    type: GET_QUOTATION_ERROR,
    payload: error,
  };
};

export const FetchdataGetquotation =  (newUser) => {
  
  console.log(newUser,'newuser')
  console.log(newUser,'newUsernewUsernewUsernewUsernewUser')

var formData = new FormData();
    
  formData.append('contact_name', newUser.contact_name)
  formData.append('contact_email', newUser.contact_email)
  formData.append('brand_name', newUser.brand_name)
  formData.append('model_name', newUser.model_name)
  formData.append('type', newUser.type)
  return (dispatch) => {

    dispatch(GetquotationRequest());

 axios.post("https://sayaraagroup.com/beta/WebsiteApi/get_quotation",formData, {
  headers: {
   
    'Content-Type': 'multipart/form-data',
  },
})
      .then( (response) => {
        console.log(response,'Getquotation')
        const Getquotation = response
      console.log('data',Getquotation)
        dispatch(GetquotationSuccess(Getquotation));
      })
      .catch((err) => {
        dispatch(GetquotationError(err.message));
        console.log(err.message);
      });
  };
};


