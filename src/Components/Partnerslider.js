import React from 'react'
import {FetchdataPartnerList} from '../Service'
import {connect} from 'react-redux'
import Custmerlist from '../Components/Custmerlist'
import car from "../../src/images/download.png";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { NavLink } from "react-router-dom";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/banner.scss";
import StarIcon from "@mui/icons-material/Star";
import Slider from "react-slick";
import Mobile from "../images/mobile.png";
import engine from "../images/Frame 895.png";
import car1 from "../images/Frame 896.png";
import car2 from "../images/Frame 897.png";
import car3 from "../images/Frame 898.png";
import workmobile from "../images/Group 1007.png";
import image1 from "../images/image 1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/imag34.png";
import btnIcon from "../images/btn-icon.png";
// import { margin, width } from "@mui/system";
import RightArrow from "../images/Arrow - Right.png";
import DblMobile from "../images/dbl-mob.png";
import appstore from "../images/appstore.png";
import googleplay from "../images/googleplay.png";

function Arrow(props) {
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    const char =
      props.type === "next" ? (
        <img src={btnIcon} style={{ width: "50px", height: "50px" }} alt="" />
      ) : (
        <img src={btnIcon} style={{ width: "50px", height: "50px",transform:'rotate(180deg)' }} alt="" /> 
        
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
const Partnerslider = ({FetchdataPartnerLists,PartnerList}) => {
    const [age, setAge] = React.useState("");

    const [imageSlider,setImageSlider] = React.useState([]);

  React.useEffect(()=>{
    if(PartnerList && PartnerList.PartnerList.data ){
        setImageSlider(PartnerList.PartnerList.data)
    }
    
  },[PartnerList])

    var backbone = [
        {
          image: image1,
        },
        {
          image: image2,
        },
        {
          image: image3,
        },
        {
          image: image4,
        },
        {
          image: image1,
        },
        {
          image: image1,
        },
        {
          image: image1,
        },
        {
          image: image1,
        },
      ];

      React.useEffect(()=>{
        FetchdataPartnerLists();
      },[]);


      const handleChange = (event) => {
        setAge(event.target.value);
      };
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
      var settings1 = {
        dots: false,
        arrows: true,
        prevArrow: <Arrow type="prev" />,
        nextArrow: <Arrow type="next" />,
        infinite: false,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 3,
      };
      var settings2 = {
        dots: false,
        arrows: true,
        prevArrow: <Arrow type="prev" />,
        nextArrow: <Arrow type="next" />,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      const backcard = () =>
      imageSlider.map((num, i) => (
          <div className="cards-list" key={i}>
            <div className="card2">
              <div style={{ width: "100%", height: "100%" }}>
                <img
                  src={`https://sayaraagroup.com/${num.logo}` }
                  className='partnerslider'
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        ));
  return (
    <div>
         <Slider
            {...settings1}
            slidesToShow={4}
            slidesToScroll={2}
            autoplaySpeed={3000}
          >
            {backcard()}
          </Slider>
    </div>
  )
}
export const MobilePartnerslider = ({FetchdataPartnerList,PartnerList}) => {
    const [age, setAge] = React.useState("");
    var backbone = [
        {
          image: image1,
        },
        {
          image: image2,
        },
        {
          image: image3,
        },
        {
          image: image4,
        },
        {
          image: image1,
        },
        {
          image: image1,
        },
        {
          image: image1,
        },
        {
          image: image1,
        },
      ];
      const handleChange = (event) => {
        setAge(event.target.value);
      };
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
      var settings1 = {
        dots: false,
        arrows: true,
        prevArrow: <Arrow type="prev" />,
        nextArrow: <Arrow type="next" />,
        infinite: false,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 3,
      };
      var settings2 = {
        dots: false,
        arrows: true,
        prevArrow: <Arrow type="prev" />,
        nextArrow: <Arrow type="next" />,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
      const backcard = () =>
        backbone.map((num, i) => (
          <div className="cards-list" key={i}>
            <div className="card2">
              <div style={{ width: "100%", height: "100%" }}>
                <img
                  src={num.image}
                  style={{ width: "100%", height: "100%" }}
                  alt=""
                />
              </div>
            </div>
          </div>
        ));
  return (
    <div>
        <Slider
{...settings2}
slidesToShow={1}
slidesToScroll={1}
autoplaySpeed={3000}
>
{backcard()}
</Slider>
    </div>
  )
}
const mapstate = state=>{
    return{
        PartnerList:state.Partnerlists,
    }
    
  }
  const mapDispatchprops = (dispatch)=>{
    return{
        FetchdataPartnerLists:()=>{
            dispatch(FetchdataPartnerList());
        }
    }
  }
  
  export default connect(mapstate,mapDispatchprops)(Partnerslider);