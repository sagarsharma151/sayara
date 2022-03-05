import axios from "axios";
import {
    MODAL_LIST_REQUEST,
    MODAL_LIST_SUCCESS,
    MODAL_LIST_ERROR,
  } from "../Constant";
const ModallistRequest = () => {
  return {
    type: MODAL_LIST_REQUEST,
  };
};

const ModallistSuccess = (ModalList) => {
  return {
    type: MODAL_LIST_SUCCESS,
    payload: ModalList,
  };
};
const ModallistError = (error) => {
  return {
    type: MODAL_LIST_ERROR,
    payload: error,
  };
};

export const FetchdataModallist = () => {
  return (dispatch) => {
    dispatch(ModallistRequest());

 axios.get("https://sayaraagroup.com/beta/WebsiteApi/model_list/?brand_id=20")
      .then((response) => {
        const ModalList = response.data;

        dispatch(ModallistSuccess(ModalList));
      })
      .catch((err) => {
        dispatch(ModallistError(err.message));
        console.log(err.message);
      });
  };
};


