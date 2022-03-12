import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Footer from "../Footer";
import "../style/About.scss";
import { Link } from "react-router-dom";
import Partnerslider  from '../Components/Partnerslider'
import MobilePartnerslider from '../Components/Partnermobslider'
import AboutCar from "../images/aboutcar.png";
import About1 from "../images/about1.png";
import About2 from "../images/about2.png";
import About3 from "../images/about3.png";
import About4 from "../images/about4.png";
import About5 from "../images/about5.png";
import About6 from "../images/about6.png";
import About7 from "../images/about7.png";
import Button from "@mui/material/Button";
import Ourmission from "../images/mission.png";
import Vission from "../images/vision.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/banner.scss";
import Slider from "react-slick";
import image1 from "../../src/images/image 1.png";
import image2 from "../../src/images/image2.png";
import image3 from "../../src/images/image3.png";
import image4 from "../../src/images/imag34.png";
import btnIcon from "../../src/images/btn-icon.png";
import Header from "../Header";
// import { margin, width } from "@mui/system";
import RightArrow from "../../src/images/Arrow - Right.png";

function Arrow(props) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow";
  const char =
    props.type === "next" ? (
      <img src={btnIcon} style={{ width: "50px", height: "50px" }} alt="" />
    ) : (
      // <img src={btnIcon} style={{width:'50px' , height:'50px'}} alt=''/>;
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

const About = () => {


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
  var settings2 = {
    dots: false,
    arrows: true,
    prevArrow: <Arrow type="prev" />,
    nextArrow: <Arrow type="next" />,
    infinite: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <>
    
    <Header/>
      <Box sx={{ flexGrow: 1 }} mt={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} className="sechead-bg">
            <Grid container spacing={2} className="secondhead">
              <Grid item xs={8} md={8} xl={8}>
                <div>
                  {/* <div className='second-headstar'> */}
                  {/* <div className='secondhead-img-div'>
                <img src={Star}  alt='star' className='head-img'/>
                
              </div> */}
                  <div className="secondhead-content">
                    <h5 className="secondhead-content-h1">
                      <span className="secondcontent-span">About</span> <br />{" "}
                      Sayaraa
                    </h5>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4} xl={4}>
                <div className="head-social">
                  <div className="about-imgdiv1">
                    <img src={AboutCar} alt="star" className="social-img1" />
                  </div>
                  {/* <div  className='social-imgdiv2'>

        <img className='social-img2'  src={HeadApps}  alt='star' />
       
      </div> */}
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <div className="main-container">
        <Grid container>
          <Grid item xs={12} md={12} xl={12}>
            <div className="mainheading-div">
              <div className="mainheading-div">
                <h1 className="main-heading">
                  You love your car and we love to solve your car-related
                  problems
                </h1>
              </div>
              <p className="main-para">
                Sayaraa is your one stop destination for everything you need on
                the road. Enquire a service for automobile prices and book a
                service appointment. Find your ride from the comfort of your
                home, book a service appointment and even enquire with your
                mechanic – all in just one tap
              </p>

              <Grid container justifyContent="center" mt={5} spacing={2}>
                <Grid item xs={6} md={3} xl={3}>
                  <div>
                    <img src={About1} className="about-images" alt="" />
                  </div>
                </Grid>
                <Grid item xs={6} md={3} xl={3}>
                  <div>
                    <img src={About2} className="about-images" alt="" />
                  </div>
                </Grid>
                <Grid item xs={6} md={3} xl={3}>
                  <div>
                    <img src={About3} className="about-images" alt="" />
                  </div>
                </Grid>
                <Grid item xs={6} md={3} xl={3}>
                  <div>
                    <img src={About4} className="about-images" alt="" />
                  </div>
                </Grid>
                <Grid item xs={6} md={3} xl={3}>
                  <div>
                    <img src={About5} className="about-images" alt="" />
                  </div>
                </Grid>
                <Grid item xs={6} md={3} xl={3}>
                  <div>
                    <img src={About6} className="about-images" alt="" />
                  </div>
                </Grid>
                <Grid item xs={6} md={3} xl={3}>
                  <div>
                    <img src={About7} className="about-images" alt="" />
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <div className="service-div">
                    <p className="service-para">
                      Get instant access to a never-ending services cars & book
                      a service appointment
                    </p>
                  </div>
                </Grid>
                <Grid item xs={12} md={4} xl={4}>
                  <div>
                    <h1 className="custmer-details">4k +</h1>
                    <p className="custmer-paras">Happy Customers</p>
                  </div>
                </Grid>
                <Grid item xs={12} md={4} xl={4}>
                  <div>
                    <h1 className="custmer-details">4.4</h1>
                    <p className="custmer-paras">Ratings</p>
                  </div>
                </Grid>
                <Grid item xs={12} md={4} xl={4}>
                  <div>
                    <h1 className="custmer-details">100</h1>
                    <p className="custmer-paras">Service partners</p>
                  </div>
                </Grid>
                <Grid item mt={5} xs={6} xs={4} md={4} lg={4} xl={4}>
                  <div style={{ textAlign: "center" }} className="stack">
                    <a className="downloadapp" href="https://play.google.com/store/apps/details?id=com.sjainpune.sayaraa&hl=en" target="_blank">Download the App</a>
                  </div>
                </Grid>
              </Grid>
            </div>
            {/* <Grid container>
       
       <Grid item xs={12} >
         <div>
      <FormControl sx={{ m: 4, minWidth: 230 }} className='select1' >
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </div>
      </Grid>
      <Grid item xs={12} >
         <div>
      <FormControl sx={{ minWidth: 230 }} className='select2' >
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </div>
      </Grid>
   
    </Grid> */}
          </Grid>

          {/* <Grid item xs={9}>
         <Item>xs=8</Item>
       </Grid> */}
        </Grid>
      </div>
      <div className="solve-content">
        <Grid container spacing={2}>
          <Grid item mt={5} xs={12}>
            <div className="solve-problem">
              <h1 className="custmer-details1">How we solve your problem?</h1>
              <p className="custmer-paras1">
                We know your Car is an important part of your daily life, so
                depending on its condition you have to spend time on your
                automotive repairs. If it gets damaged from extreme conditions,
                then you will have problems with your performance as well. The
                solution to this problem is ‘Sayaraa’. We provide best quality
                services and long lasting results at prices that are very
                reasonable.
              </p>
              <p className="custmer-paras1 paras-margin">
                {" "}
                Our aim is to endow you with a range of services that address
                your specific requirements and exceed your expectations. The
                services offered by us are known for the high quality,
                reliability and attention to detail. We are completely devoted
                to delivering Industry’s best services without fail. Our team is
                specialized and well equipped with leading-edge technology in
                order to solve any problem related with the car appearance or
                performance. At Sayaraa, we believe in collaborating, investing
                time and effort while working hand in hand under strict
                conditions to provide an exclusive detailing solution to meet
                your specific needs.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="solve-cotent1">
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12} md={6} xl={6}>
            <div className="ourmission-main">
              <h1 className="ourmission">Our Mission</h1>
              <p className="ourmission-par">
                If we are not striving for "Customer Enthusiasm", then what are
                we striving for? If we are not proactively anticipating the
                requirements of our Customers and team members, then what do we
                do when these needs arrive? At Sayaraa, we expect more from
                ourselves and more from each other. Our objective is to build
                trust between us and provide you with the best service. To
                achieve our goal of satisfying your needs, we will do our best
                to give you the most reliable, efficient, convenient and
                responsive service that meets your expectations.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={6} xl={6}>
            <div className="mission-img">
              <img src={Ourmission} className="about-images" alt="" />
            </div>
          </Grid>
          <Grid item xs={12} md={6} xl={6}>
            <div className="mission-img">
              <img src={Vission} className="about-images" alt="" />
            </div>
          </Grid>
          <Grid item xs={12} md={6} xl={6}>
            <div className="ourmission-main">
              <h1 className="ourmission">Our Vision</h1>
              <p className="ourmission-par">
                We are united in our shared dedication to delighting our
                Customers. Guided by values that inspire us all to positively
                impact the lives of others, we work together as a team to honor
                our humble beginnings and uphold the our esteemed traditions
                while instilling pride in all we do.
              </p>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="our-backbone-background">
              <div className="our-backbone">
                <div className="our-backbone-flex">
                  <div className="our-heading-para-group">
                    <h1 className="our-backbone-heading">
                      Our Partners are our Backbone
                    </h1>
                    <p className="our-backbone-para-about">
                      We believe in working together to give the best ever. We
                      have collaborated with a ton of vendors! These are the
                      awesome folks that make your services easy & simply. For
                      all your car related services we've got you covered.
                    </p>
                  </div>
                  <div></div>
                </div>
                {/* <Button variant="contained" sx={{ mt: 2}} className='download-btn' >Download the App</Button> */}
                {/* <div className="our-backbone-btn">
                  
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
                </div> */}
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
          <div className="ourbackbone-sliderweb">
         <Partnerslider />
        </div>
            {/* <div className="ourbackbone-sliderphone">
              <Slider
                {...settings2}
                slidesToShow={1}
                slidesToScroll={1}
                autoplaySpeed={3000}
              >
                {backcard()}
              </Slider>
            </div> */}
             <div className="ourbackbone-sliderphone">
        <MobilePartnerslider />
        </div>
          </Grid>
        </Grid>
      </div>
      <Footer />
     
    </>
  );
};

export default About;
