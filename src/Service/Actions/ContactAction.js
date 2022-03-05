
import React from "react";
import axios from "axios";
import {
    Contactus_REQUEST,
    Contactus_SUCCESS,
    Contactus_ERROR,
  } from "../Constant";
import { JavascriptOutlined } from "@mui/icons-material";
const ContactusRequest = () => {
  return {
    type: Contactus_REQUEST,
  };
};

const ContactusSuccess = (Contactus) => {
  return {
    type: Contactus_SUCCESS,
    payload:Contactus,
  };
};
const ContactusError = (error) => {
  return {
    type: Contactus_ERROR,
    payload: error,
  };
};

export const FetchdataContactus =  (newUser) => {
  
  console.log(newUser,'newuser')
  console.log(newUser,'newUsernewUsernewUsernewUsernewUser')

var formData = new FormData();
    
  formData.append('contact_name', newUser.contact_name)
  formData.append('contact_email', newUser.contact_email)
  formData.append('contact_subject', newUser.contact_subject)
  formData.append('contact_phone', newUser.contact_phone)
  formData.append('contact_message', newUser.contact_message)
  return (dispatch) => {

    dispatch(ContactusRequest());

 axios.post("https://sayaraagroup.com/beta/WebsiteApi/contact_us",formData, {
  headers: {
   
    'Content-Type': 'multipart/form-data',
  },
})
      .then( (response) => {
        console.log(response,'responseseeeeeeeeeeeeeeeeeeeeeeeee')
        const Contactus = response
      console.log('data',Contactus)
        dispatch(ContactusSuccess(Contactus));
      })
      .catch((err) => {
        dispatch(ContactusError(err.message));
        console.log(err.message);
      });
  };
};


