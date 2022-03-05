import {
  HOME_IMAGE_SLIDER_REQUEST,
  HOME_IMAGE_SLIDER_SUCCESS,
  HOME_IMAGE_SLIDER_ERROR,

  CUSTOMER_REVIEW_LIST_REQUEST,
  CUSTOMER_REVIEW_LIST_SUCCESS,
  CUSTOMER_REVIEW_LIST_ERROR,

  CAR_WASH_REQUEST,
  CAR_WASH_SUCCESS,
  CAR_WASH_ERROR,

  GET_QUOTATION_REQUEST,
  GET_QUOTATION_SUCCESS,
  GET_QUOTATION_ERROR,

  PARTNER_LIST_REQUEST,
  PARTNER_LIST_SUCCESS,
  PARTNER_LIST_EORROR,

  CAR_SERVICE_LIST_REQUEST,
  CAR_SERVICE_LIST_SUCCESS,
  CAR_SERVICE_LIST_ERROR,

  CAR_PRODUCT_LIST_REQUEST,
  CAR_PRODUCT_LIST_SUCCESS,
  CAR_PRODUCT_LIST_ERROR,

  SELL_CAR_LIST_REQUEST,
  SELL_CAR_LIST_SUCCESS,
  SELL_CAR_LIST_ERROR,

  MODAL_LIST_REQUEST,
  MODAL_LIST_SUCCESS,
  MODAL_LIST_ERROR,

  Contactus_REQUEST,
  Contactus_SUCCESS,
  Contactus_ERROR,

  BLOG_REQUEST,
  BLOG_SUCCESS,
  BLOG_ERROR,

  BLOG_READ_REQUEST,
  BLOG_READ_SUCCESS,
  BLOG_READ_ERROR,

  RENT_CAR_REQUEST,
  RENT_CAR_SUCCESS,
  RENT_CAR_ERROR,

  BRAND_LIST_REQUEST,
  BRAND_LIST_SUCCESS,
  BRAND_LIST_ERROR,
} from "../Constant";

const initialState = {
  loading: false,
  ImageSlider: [],
  error: "",
};
const BrandListState = {
  loading: false,
  BrandList: [],
  error: "",
};
const customerState = {
  loading: false,
  CustomerRevielist: [],
  error: "",
};

const carwashState ={
  loading: false,
  CarwashList: [],
  error: "",
}

const carservicelistState = {
  loading: false,
  CarserviceList: [],
  error: "",
} 


const PartnerlistState = {
  loading: false,
  PartnerList: [],
  error: "",
} 

const ProductlistState = {
  loading: false,
  CarproductList: [],
  error: "",
} 

const SellcarlistState = {
  loading: false,
  SellcarList: [],
  error: "",
} 

const ModallistState = {
  loading: false,
  ModalList: [],
  error: "",
} 

const ContactusState = {
  loading: false,
  Contactus: [],
  error: "",
} 

const BlogState = {
  loading: false,
  Blogtext: [],
  error: "",
} 

const BlogReadState = {
  loading: false,
  Blogread: [],
  error: "",
} 

const CarRentState = {
  loading: false,
  Carrentlist: [],
  error: "",
} 

const GetquotationState = {
  loading: false,
  Getquotation: [],
  error: "",
} 
const HomeImgSlider = (state = initialState, action) => {
  switch (action.type) {
    case HOME_IMAGE_SLIDER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case HOME_IMAGE_SLIDER_SUCCESS:
      return {
        loading: false,
        ImageSlider: action.payload,
        error: "",
      };
    case HOME_IMAGE_SLIDER_ERROR:
      return {
        loader: false,
        ImageSlider: [],
        error: action.error,
      };
    default:
      return state;
  }
};


export const CustmerReviewlist = (state = customerState, action) => {
  console.log(action, "rrrrrrrrrrrrrrrrrrrgjghgjgjhgjh");
  switch (action.type) {
    case CUSTOMER_REVIEW_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CUSTOMER_REVIEW_LIST_SUCCESS:
      return {
        loading: false,
        CustomerRevielist: action.payload,
        error: "",
      };
    case CUSTOMER_REVIEW_LIST_ERROR:
      return {
        loader: false,
        CustomerRevielist: [],
        error: action.error,
      };
    default:
      return state;
  }
};


export const CarwashList = (state = carwashState, action) => {
  switch (action.type) {
    case CAR_WASH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CAR_WASH_SUCCESS:
      return {
        loading: false,
        CarwashList: action.payload,
        error: "",
      };
    case CAR_WASH_ERROR:
      return {
        loader: false,
        CarwashList: [],
        error: action.error,
      };
    default:
      return state;
  }
};

export const Partnerlists = (state = PartnerlistState, action) => {
  switch (action.type) {
    case PARTNER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PARTNER_LIST_SUCCESS:
      return {
        loading: false,
        PartnerList: action.payload,
        error: "",
      };
    case PARTNER_LIST_EORROR:
      return {
        loader: false,
        PartnerList: [],
        error: action.error,
      };
    default:
      return state;
  }
};

export const CarServiceList = (state = carservicelistState, action) => {
  switch (action.type) {
    case CAR_SERVICE_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CAR_SERVICE_LIST_SUCCESS:
      return {
        loading: false,
        CarserviceList: action.payload,
        error: "",
      };
    case CAR_SERVICE_LIST_ERROR:
      return {
        loader: false,
        CarserviceList: [],
        error: action.error,
      };
    default:
      return state;
  }
};


export const CarProductList = (state = ProductlistState, action) => {
  switch (action.type) {
    case CAR_PRODUCT_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CAR_PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        CarproductList: action.payload,
        error: "",
      };
    case CAR_PRODUCT_LIST_ERROR:
      return {
        loader: false,
        CarproductList: [],
        error: action.error,
      };
    default:
      return state;
  }
};

export const SellcarList = (state = SellcarlistState, action) => {
  switch (action.type) {
    case SELL_CAR_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SELL_CAR_LIST_SUCCESS:
      return {
        loading: false,
        SellcarList: action.payload,
        error: "",
      };
    case SELL_CAR_LIST_ERROR:
      return {
        loader: false,
        SellcarList: [],
        error: action.error,
      };
    default:
      return state;
  }
};

export const ModalList = (state = ModallistState, action) => {
  switch (action.type) {
    case MODAL_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case MODAL_LIST_SUCCESS:
      return {
        loading: false,
        ModalList: action.payload,
        error: "",
      };
    case MODAL_LIST_ERROR:
      return {
        loader: false,
        ModalList: [],
        error: action.error,
      };
    default:
      return state;
  }
};

export const ContactUs = (state = ContactusState, action) => {
  switch (action.type) {
    case Contactus_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Contactus_SUCCESS:
      return {
        loading: false,
        Contactus: action.payload,
        error: "",
      };
    case Contactus_ERROR:
      return {
        loader: false,
        Contactus: [],
        error: action.error,
      };
    default:
      return state;
  }
};

export const Blog = (state = BlogState, action) => {
  switch (action.type) {
    case BLOG_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case BLOG_SUCCESS:
      return {
        loading: false,
        Blogtext: action.payload,
        error: "",
      };
    case BLOG_ERROR:
      return {
        loader: false,
        Blogtext: [],
        error: action.error,
      };
    default:
      return state;
  }
};

export const BlogReads = (state = BlogReadState, action) => {
  switch (action.type) {
    case BLOG_READ_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case BLOG_READ_SUCCESS:
      return {
        loading: false,
        Blogread: action.payload,
        error: "",
      };
    case BLOG_READ_ERROR:
      return {
        loader: false,
        Blogread: [],
        error: action.error,
      };
    default:
      return state;
  }
};

export const Rentlist = (state = CarRentState, action) => {
  switch (action.type) {
    case RENT_CAR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RENT_CAR_SUCCESS:
      return {
        loading: false,
        Carrentlist: action.payload,
        error: "",
      };
    case RENT_CAR_ERROR:
      return {
        loader: false,
        Carrentlist: [],
        error: action.error,
      };
    default:
      return state;
  }
};


export const BrandList = (state = BrandListState, action) => {
  switch (action.type) {
    case BRAND_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case BRAND_LIST_SUCCESS:
      return {
        loading: false,
        BrandList: action.payload,
        error: "",
      };
    case BRAND_LIST_ERROR:
      return {
        loader: false,
        BrandList: [],
        error: action.error,
      };
    default:
      return state;
  }
};

export const GetquotationList = (state = GetquotationState, action) => {
  switch (action.type) {
    case GET_QUOTATION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_QUOTATION_SUCCESS:
      return {
        loading: false,
        Getquotation: action.payload,
        error: "",
      };
    case GET_QUOTATION_ERROR:
      return {
        loader: false,
        Getquotation: [],
        error: action.error,
      };
    default:
      return state;
  }
};
export default HomeImgSlider;
