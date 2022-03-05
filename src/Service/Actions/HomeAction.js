import React from "react";
import axios from 'axios'
import {
  HOME_IMAGE_SLIDER_REQUEST,
  HOME_IMAGE_SLIDER_SUCCESS,
  HOME_IMAGE_SLIDER_ERROR,
} from "../Constant";
 const HomesliderimgRequest = () => {
  return {
    type: HOME_IMAGE_SLIDER_REQUEST,
  };
};

const HomesliderimgSuccess = (ImageSlider) => {
 
  return {
    type: HOME_IMAGE_SLIDER_SUCCESS,
    payload: ImageSlider,
  };
  
};
 const HomesliderimgError = (error) => {
  return {
    type: HOME_IMAGE_SLIDER_ERROR,
    payload: error,
  };
};

export const Fetchdata = ()=>{
    return (dispatch)=>{
     dispatch(HomesliderimgRequest())
     
     axios.get('https://sayaraagroup.com/beta/WebsiteApi/offer_list').then((response)=>{
       const ImageSlider = response.data
 
       dispatch(HomesliderimgSuccess(ImageSlider))
     }).catch((err)=>{
       dispatch(HomesliderimgError(err.message))
       console.log(err.message)
     })

    }
}