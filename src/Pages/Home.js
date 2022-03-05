import React, { useState } from "react";
import Footer from "../Footer";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { Fetchdata } from "../Service";
import Custmerlist from "../Components/Custmerlist";
import car from "../../src/images/download.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Partnerslider from "../Components/Partnerslider";
import MobilePartnerslider from "../Components/Partnermobslider";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { NavLink,useHistory  } from "react-router-dom";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import CustmerMobilelist from "../Components/Custmermobile";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/banner.scss";
import carwashicon from "../images/icons/Car wash.png";
import producticon from "../images/icons/product-icon.png";
import caricons from "../images/icons/car-icon.png";
import drivingicon from "../images/icons/driving-icon.png";
import keyicon from "../images/icons/key-icon.png";
import frame from "../images/icons/fram-icon.png";
import Slider from "react-slick";
import Mobile from "../../src/images/mobile.png";
import engine from "../../src/images/Frame 895.png";
import car1 from "../../src/images/Frame 896.png";
import car2 from "../../src/images/Frame 897.png";
import car3 from "../../src/images/Frame 898.png";
import workmobile from "../../src/images/Group 1007.png";
import btnIcon from "../../src/images/btn-icon.png";
// import { margin, width } from "@mui/system";
import RightArrow from "../../src/images/Arrow - Right.png";
import DblMobile from "../../src/images/dbl-mob.png";
import appstore from "../../src/images/appstore.png";
import googleplay from "../../src/images/googleplay.png";
import Header from "../Header";
// import Searchinput from "../Components/Searchinput";
import { FetchdataBrandList } from "../Service";
import {FetchdataModallist} from '../Service'
import {FetchdataGetquotation} from '../Service'
// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));
const useStyles = makeStyles(theme => ({
  selectinput:{
    "& .css-1km1ehz":{
      justifyContent:'space-between'
    }
  },
  FORM: {
    [theme.breakpoints.down("xs")]: {
      minWidth:' 145px',
      width: '145px',
      height:"55px"
    },
    [theme.breakpoints.between("sm", "md")]: {
      minWidth:' 145px',
      width: '145px',
      minWidth:' 145px',
      width: '145px',
    },
    "@media (min-width: 1280px)": {
      minWidth:' 220px',
    width: '220px'
    },
  // "& .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root":{
  //   minWidth:' 220px',
  //   width: '220px'
  // },
  
  //    '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':{
  //      display: 'flex'
  //    },
 
   },
   select :{
     "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":{
       display:'flex'
     }
   }
  // button: {
  //   color: "white",
  //   [theme.breakpoints.down("xs")]: {
  //     marginTop: theme.spacing(1),
  //     backgroundColor: "purple"
  //   },
  //   [theme.breakpoints.between("sm", "md")]: {
  //     marginTop: theme.spacing(3),
  //     backgroundColor: "blue"
  //   },
  //   "@media (min-width: 1280px)": {
  //     marginTop: theme.spacing(5),
  //     backgroundColor: "red"
  //   }
  // }
}));
// const useStyles = makeStyles({

// });
function Arrow(props) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow";
  const char =
    props.type === "next" ? (
      <img src={btnIcon} style={{ width: "50px", height: "50px" }} alt="" />
    ) : (
      // <img src={btnIcon} style={{ width: "50px", height: "50px" }} alt="" />
      ""
    );
  return (
    <>
      <div>
        <span className={className} onClick={props.onClick}>
          {char}
        </span>
      </div>
    </>
  );
}
toast.configure();
const Home = ({ Fetchdata, CustomerRevielist, ...ImageSlider }) => {
 
  const classes = useStyles();
  const [imageslide, setSlide] = React.useState([]);
  // const [brand, setBrand] = React.useState("");
  const [inputValues, setInputValue] = useState({
    contact_name: "",
    contact_email: "",
    brand_name: "",
    model_name: "",
  });
  const history = useHistory();
  const [brandlist, setBrandlist] = React.useState([]);
  const brandList = useSelector((state) => state);
  console.log("brandList123", brandList);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(FetchdataBrandList());
  }, []);
  React.useEffect(() => {
    if (brandList && brandList.BrandList.BrandList.data) {
      setBrandlist(brandList.BrandList.BrandList.data);
    }
  }, [brandList]);
  // React.useEffect(()=>{
  //   FetchdataModallist();
  // },[])
  const onSubmited = e => {
    e.preventDefault();

  // const newUser = {
  // 	contact_name: contact_name,
  // 	contactEmail: contactEmail,
  // 	brand_name: brand_name,
  // 	contactPhone: contactPhone,
  //   model_name:model_name
  // };
    dispatch(FetchdataGetquotation(inputValues));
    if(inputValues){
      toast.success("Thanks Your Quotation request received", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: false
      });
    
    console.log(inputValues,'inputValues');
    // const notify =()=>{ 
     
    //   }
    setInputValue({
      contact_name: "",
      contact_email: "",
      brand_name: "",
      model_name: "",
    });
  };
  };
 
  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }
  React.useEffect(() => {
    Fetchdata();
  }, []);

  React.useEffect(() => {
    if (ImageSlider && ImageSlider.ImageSlider.ImageSlider.data) {
      setSlide(ImageSlider.ImageSlider.ImageSlider.data);
    }
  }, [ImageSlider]);
  // const handleChanges = (event) => {
  //   setBrand(event.target.value);
  // };


  var settingsweb = {
    dots: true,
    arrows: true,
    prevArrow: <Arrow type="prev" />,
    nextArrow: <Arrow type="next" />,
    infinite: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  var settingsmob = {
    dots: true,
    arrows: true,
    prevArrow: <Arrow type="prev" />,
    nextArrow: <Arrow type="next" />,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const renderSlides = () =>
    imageslide.map((num, i) => (
      <div className="cards-list" key={i}>
        <div className="card 1">
          <img
            src={`https://sayaraagroup.com/${num.image}`}
            className="slider-images" alt=''
          />
          <div className="card_heading heading-white">
            <p>{num.title}</p>
          </div>
          <div className="card_title title-white">
            <p>
              Get an{" "}
              <span style={{ fontWeight: "bold" }}>instant discount</span>{" "}
              <br /> of{" "}
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                AED 10
              </span>{" "}
              for the <br />
              <br />{" "}
            </p>
            <div className="homeslider-main-div">
              <p
                style={{
                  fontSize: "18px",
                  color: "black",
                  lineHeight: "27px",
                }}
              >
                {/* Express gold wash */}
                {num.company_name}
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    ));

  const imagesicon = [
    // {
    //   image:carwashicon,
    //   text:'Car Wash'
    // },
    {
      image: producticon,
      text: "Car Services or Products",
    },
    {
      image: caricons,
      text: "Buy or Sell Car",
    },
    {
      image: keyicon,
      text: "Rent a Car",
    },
    {
      image: frame,
      text: "Emergency Services",
    },
    {
      image: drivingicon,
      text: "Driving Instructor",
    },
  ];
  const homeiconcard = () =>
    imagesicon.map((data, index) => (
      <div className="car-setting" key={index}>
        <div className="icon-maindiv-home">
          <div className="icon-div-homeicon">
            <img src={data.image} className="icon-images-home" alt=''/>
          </div>

          <div className="icon-maindiv-heading">
            <h1 className="car-headings-icon">{data.text}</h1>
          </div>
        </div>
      </div>
    ));

  
 


  // console.log('sdfldsflsflsf',ModalList.ModalList.data)
        const [modallist,setModallist] = React.useState([])
    // const [age, setAge] = React.useState("");
    React.useEffect(()=>{
        dispatch(FetchdataModallist()) ;
    },[])
    React.useEffect(()=>{
        if(brandList && brandList.ModalList.ModalList.data){
            setModallist(brandList.ModalList.ModalList.data)
        }
    },[brandList])

    console.log('modallist',modallist)
    // const handleChange = (event) => {
    //     setAge(event.target.value);
    //   };

    
  return (
    <div style={{ maxWidth: "100%" }}>
      <Header />
      <div className="main">
        <div className="flexdiv">
          <div className="container-home banner-container">
            <div className="banner-left-container">
              <h1>Explore The Best Car Services in Abu Dhabi</h1>
              {/* <p>
                Lorem Which Are car services are top rated in Abu dhabi. we'll
                you get istant qutation in minute.
              </p> */}
            </div>
            <form onSubmit={onSubmited}>
            <div className="dropdown-group">
             
              <FormControl sx={{ m: 1, ml: 0, mt: 2 }} className={classes.FORM}>
                <Select
                  style={{ height: "44px", display: "flex" }}
                  name="brand_name" value={inputValues.brand_name}
                  onChange={(e) => handleChange(e)}
                  displayEmpty
                  required
                  inputProps={{ "aria-label": "Without label" }}
                 className={`${classes.select} ${classes.selectinput}`}
                >
                  <MenuItem value="">
                    <em>Select Brand Name</em>
                  </MenuItem>
                  
                  {brandlist.map((num, i) => (
                    <MenuItem value={num.brand_name} key={i} >
                      {/* <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      > */}
                        <div style={{ widht: "40%" }}>
                          <em>{num.brand_name}</em>
                        </div>{" "}
                        <div style={{ width: "20%" }}>
                          <div style={{ width: "40px", height: "auto" }}>
                            <img
                              src={`https://sayaraagroup.com/${num.brand_image}`} alt=''
                              style={{ width: "100%", height: "100%" }}
                            />
                          </div>
                        </div>
                      {/* </div> */}
                    </MenuItem>
                  ))}

                  {/* <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
              </FormControl>

              {/* <Searchinput /> */}
              <FormControl sx={{ m: 1, ml: 0, mt: 2 }} className={classes.FORM}>
                <Select
                  style={{ height: "44px",display:'flex' }}
                  value={inputValues.model_name}
                  onChange={(e) => handleChange(e)}
                  displayEmpty
                  required
                  name="model_name"
                  inputProps={{ "aria-label": "Without label" }}
                  className={`${classes.select} ${classes.selectinput}`}
               
                >
                  <MenuItem value="">
                    <em>Select Model Name</em>
                  </MenuItem>
                 
                  {modallist.map((num,i)=>(
                    <MenuItem value={num.model_name} key={i} >
                      {/* <div style={{display:'flex',justifyContent:'space-around'}}> */}
                        <div style={{widht:'40%'}}><em>{num.model_name}</em></div>  <div style={{width:'20%'}}><div style={{width:'40px',height:'auto'}}><img src={`https://sayaraagroup.com/${num.model_image}`} alt='' style={{width:'100%',height:'100%'}} /></div></div>
                        {/* </div> */}
                        </MenuItem>
                  ))}
                  
                  {/* <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
              </FormControl>
              
            </div>
            <div className="dropdown-group" mt={4}>
              <input
                type="text"
                className="homeName"
                placeholder="Enter Name"
                name='contact_name' value={inputValues.contact_name}
                onChange={(e) => handleChange(e)}
                required
              />
              <input
                type="email"
                placeholder="Enter email"
                className="homeName email-home"
                name="contact_email" value={inputValues.contact_email}
                onChange={(e) => handleChange(e)}
                required
              />
            </div>

            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <Button variant="contained" type='submit' className="button-getfree">
                Get Free Quotation
              </Button>
            </div>
            </form>
          </div>
        </div>
        <div className="flexdiv">
          <div style={{ width: "95%", margin: "0 auto" }}>
            <div className="img-div">
              <img
                src={car}
                style={{ width: "100%", height: "100%", borderRadius: "20px" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="slider webslider">
        <Slider dots={true} {...settingsweb}>
          {renderSlides()}
        </Slider>
      </div>
      <div className="slider mobslider">
        <Slider dots={true} {...settingsmob}>
          {renderSlides()}
        </Slider>
      </div>
      <div className="about-background" id="/about">
        <div className="about">
          <div className="about-img-flex">
            <div className="about-img-div">
              <img src={Mobile} className="about-mobile" alt="" />
            </div>
          </div>

          <div className="about-content-flex">
            <div className="about-info">
              <div className="content-head-left">
                <h1>About Sayara</h1>
                <p>
                  Sayaraa is here to make your life simple, search car prices,
                  book service oppointments and even enquire with your mechanic,
                  all from just one tap.
                </p>
              </div>
              <div className="content-head-right">
                <NavLink className="about-link" to="/">
                  Read More
                  <img src={RightArrow} className="about-link-icon" alt="" />
                </NavLink>
              </div>
              <div className="about-images">
                <img src={engine} alt="" />
              </div>
              <div className="about-images">
                <img src={car1} alt="" />
              </div>
              <div className="about-images">
                <img src={car2} alt="" />
              </div>
              <div className="about-images">
                <img src={car3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* sayara work */}
      <div className="sayara-work-background" id="/ouroffering">
        <div className="offering">
          <div className="offering-info-flex">
            <div>
              <h1 className="sayara-offer-heading">Our Offerings</h1>
              <p className="sayara-offer-p">
                We take pride in giving personalized services and ensure that
                when you leave, you get the best experience possible.
              </p>
            </div>
            <div className="sayara-btngroup" style={{ marginTop: "23px" }}>
              <a
                href="http://toappsto.re/sayaraa"
                target="_blank"
                className="sayara-download-btn"
              >
                Download the App
              </a>
              <Button
                variant="contained"
                sx={{ mt: 2, ml: 3 }}
                className="sayara-download-btn1"
              >
                <NavLink className="about-link" to="/offering">
                  Read More
                  <img src={RightArrow} className="about-links" alt="" />
                </NavLink>
                {/* <a href="/">Learn more</a> */}
              </Button>
            </div>
          </div>
          <div className="sayara-offering-card-flex">
            <div className="sayara-offering-pkg">
              <div className="car-setting">
                <div className="icon-home-div">
                  <h1 className="icon-heading-home">Packages available</h1>
                </div>
                <div className="icon-maindiv-home">
                  <div className="icon-div-homeicon">
                    <img src={carwashicon} className="icon-images-home" />
                  </div>

                  <div className="icon-maindiv-heading">
                    <h1>Car Wash</h1>
                  </div>
                </div>
              </div>

              {homeiconcard()}

              {/* <div className="car-setting"></div>
              <div className="car-setting"></div>
              <div className="car-setting"></div>
              <div className="car-setting"> </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* sayara works */}
      <div className="sayara-work-background" id="/work">
        <div className="sayara-works-div">
          <div className="sayara-works-flex-content">
            <div className="rt-containe">
              <div className="col-rt-12">
                <div className="rt-heading">
                  <h1 className="sayara-work-headings">How sayaraa works</h1>
                </div>
              </div>
            </div>
            <section>
              <div className="rt-containe">
                <div className="col-rt-12">
                  <div className="Scriptcontent">
                    {/* <!-- Stepper HTML --> */}
                    <div className="step">
                      <div>
                        <div className="circle">1</div>
                      </div>
                      <div>
                        <div className="title">Choose the Service You Want</div>
                        <div className="caption">
                          Choose from a variety of customised services with best
                          offerse to meet your specific needs
                        </div>
                      </div>
                    </div>
                    <div className="step step-active">
                      <div>
                        <div className="circle">2</div>
                      </div>
                      <div>
                        <div className="title">Schedule an Appointment</div>
                        <div className="caption">
                          Continue with your details and book your service after
                          you've selected the service.
                        </div>
                      </div>
                    </div>
                    <div className="step">
                      <div>
                        <div className="circle">3</div>
                      </div>
                      <div>
                        <div className="title">Select a Method of Payment</div>
                        <div className="caption">
                          Continue with payment after you've chosen a service.
                          Payment options include both online and offline
                          options
                        </div>
                      </div>
                    </div>

                    <div className="step">
                      <div>
                        <div className="circle">4</div>
                      </div>
                      <div>
                        <div className="title">Booking Confirmation</div>
                        <div className="caption">
                          Once the vendor has approved your service request,
                          your booking will be confirmed.
                        </div>
                      </div>
                    </div>

                    <div className="step">
                      <div>
                        <div className="circle">5</div>
                      </div>
                      <div>
                        <div className="title">Sit Back & Relax</div>
                        <div className="caption">
                          Now all you need to do is relax while we take care of
                          all your needs.
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Stepper HTML --> */}
                  </div>
                </div>
              </div>
            </section>
            <div></div>
          </div>
          <div className="sayara-work-image-flex">
            <div>
              <img src={workmobile} className="sayara-work-image" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* our coustomers */}
      <div className="our-custmers-background">
        <div className="our-custmers-info">
          <div className="our-custmers-content">
            <h1 className="custmer-heading">Hear from our Customers</h1>
            <p className="custmer-para">
              Don't just take our word, see what our customers says
            </p>
          </div>
        </div>
        <div>
          <div className="ourbackbone-sliderweb">
            <Custmerlist />
          </div>
          <div className="ourbackbone-sliderphone">
            <CustmerMobilelist />
          </div>
        </div>
      </div>

      {/* our backbone */}
      <div className="our-backbone-background">
        <div className="our-backbone">
          <div className="our-backbone-flex">
            <div className="our-heading-para-group">
              <h1 className="our-backbone-heading">
                Our Partners are our Backbone
              </h1>
              <p className="our-backbone-para">
                We've teamed up with the best! Take a look at some of our
                amazing vendors
              </p>
            </div>
            <div></div>
          </div>
          <div className="our-backbone-btn">
            {/* <Button variant="contained" sx={{ mt: 2}} className='download-btn' >Download the App</Button> */}
            <Button
              variant="contained"
              sx={{ mt: 2, ml: 2 }}
              className="our-backbone-btn1"
            >
              {" "}
              <a href="/" style={{ color: "#EC7735" }}>
                Learn more{" "}
                <img
                  src={RightArrow}
                  className="our-backbone-right-arrow"
                  alt=""
                />
              </a>
            </Button>
          </div>
        </div>
        <div className="ourbackbone-sliderweb">
          <Partnerslider />
        </div>
        <div className="ourbackbone-sliderphone">
          <MobilePartnerslider />
        </div>
      </div>
      {/* sayara work */}
      <div className="social-app-background">
        <div className="sayara-app">
          <div className="sayara-app-info">
            <div>
              <img src={DblMobile} className="sayara-img-app" alt="" />
            </div>
          </div>
          <div className="sayara-app-content ">
            <div className="sayara-app-heading-group">
              <h1 className="sayara-app-heading">Get Sayaraa App</h1>
              <p className="sayara-app-para">
                Download the app & enjoy our services
              </p>
            </div>
            <div className="social-app-login">
              <div className="social-flex1">
                <div>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.sjainpune.sayaraa&hl=en"
                    target="_blank"
                  >
                    {" "}
                    <img src={googleplay} alt="" />
                  </a>
                </div>
              </div>
              <div className="social-flex2">
                <div>
                  <a
                    href="https://apps.apple.com/in/app/sayaraa/id1491527366"
                    target="_blank"
                  >
                    <img src={appstore} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

const mapstate = (state) => {
  return {
    ImageSlider: state.HomeImgSlider,
  };
};
const mapDispatchprops = (dispatch) => {
  return {
    Fetchdata: () => {
      dispatch(Fetchdata());
    },
  };
};

export default connect(mapstate, mapDispatchprops)(Home);
