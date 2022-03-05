import axios from "axios";
import {
  
    BLOG_READ_REQUEST,
    BLOG_READ_SUCCESS,
    BLOG_READ_ERROR,
  } from "../Constant";
const BlogReadRequest = () => {
  return {
    type: BLOG_READ_REQUEST,
  };
};

const BlogReadSuccess = (Blogread) => {
  return {
    type: BLOG_READ_SUCCESS,
    payload: Blogread,
  };
};
const BlogReadError = (error) => {
  return {
    type: BLOG_READ_ERROR,
    payload: error,
  };
};

// export const FetchdataBlogRead = () => {
//   return (dispatch) => {
//     dispatch(BlogReadRequest());

//  axios.get("https://sayaraagroup.com/beta/WebsiteApi/blog")
//       .then((response) => {
//         const Blogread = response.data;
//         dispatch(BlogReadSuccess(Blogread));
//       })
//       .catch((err) => {
//         dispatch(BlogReadError(err.message));
//         console.log(err.message);
//       });
//   };
// };


