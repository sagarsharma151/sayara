import React from "react";
import axios from 'axios'
import {
    CUSTOMER_REVIEW_LIST_REQUEST,
    CUSTOMER_REVIEW_LIST_SUCCESS,
    CUSTOMER_REVIEW_LIST_ERROR
} from "../Constant";
 const ReviewlistRequest = () => {
  return {
    type: CUSTOMER_REVIEW_LIST_REQUEST,
  };
};

const ReviewlistSuccess = (CustomerRevielist) => {
 
  return {
    type: CUSTOMER_REVIEW_LIST_SUCCESS,
    payload: CustomerRevielist,
  };
  
};
 const ReviewlistError = (error) => {
  return {
    type: CUSTOMER_REVIEW_LIST_ERROR,
    payload: error,
  };
};

export const FetchdataReviewlist = ()=>{
    return (dispatch)=>{
     dispatch(ReviewlistRequest())
     
     axios.get('https://sayaraagroup.com/beta/WebsiteApi/review_list').then((response)=>{
       const CustomerRevielist = response.data
       
       dispatch(ReviewlistSuccess(CustomerRevielist))
     }).catch((err)=>{
       dispatch(ReviewlistError(err.message))
       console.log(err.message)
     })

    }
}