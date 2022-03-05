import axios from "axios";
import {
  
    BLOG_REQUEST,
    BLOG_SUCCESS,
    BLOG_ERROR,
  } from "../Constant";
const BlogRequest = () => {
  return {
    type: BLOG_REQUEST,
  };
};

const BlogSuccess = (Blogtext) => {
  return {
    type: BLOG_SUCCESS,
    payload: Blogtext,
  };
};
const BlogError = (error) => {
  return {
    type: BLOG_ERROR,
    payload: error,
  };
};

export const FetchdataBlog = () => {
  return (dispatch) => {
    dispatch(BlogRequest());

 axios.get("https://sayaraagroup.com/beta/WebsiteApi/blog")
      .then((response) => {
        const Blogtext = response.data;
        dispatch(BlogSuccess(Blogtext));
      })
      .catch((err) => {
        dispatch(BlogError(err.message));
        console.log(err.message);
      });
  };
};


