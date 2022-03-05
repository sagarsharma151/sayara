import React from 'react';
import HomeHeader from '../Header';
import '../style/Homepartner.scss'
import {Link} from 'react-router-dom'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import attractcustomer from '../images/attractcustomer.png';
import brand from '../images/brand.png';
import increase from '../images/increase.png'
import home from '../images/home.png'
import download from '../images/downloads.png';
import carmob from '../images/carmob.png';
import right from '../images/right.png'
  import Footer from "../Footer";
  import "../style/About.scss";

  import Button from "@mui/material/Button";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import "../style/banner.scss";
  import Slider from "react-slick";
  import image1 from "../../src/images/image 1.png";
  import image2 from "../../src/images/image2.png";
  import image3 from "../../src/images/image3.png";
  import image4 from "../../src/images/imag34.png";
  import btnIcon from "../../src/images/btn-icon.png";
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
const Partnerhome = ()=>{
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
    return(
        <>

        <div>
            <div className='bg-image-home'>
            <HomeHeader />
              <div className="home-content-div">
                  <div className='home-content-heading-div'>
                      <h1 className='home-heading'>Become a partner with the best car service platform in Abu Dhabi.</h1>
                      <p className='Home-para'>Get more customers by registering your workstation for free on Sayaraa.</p>

                   
                  </div>
                  <div className='home-btn-get'>
                     <Link to='/' className='home-start-get-button'>Get Start</Link>
                     </div>
              </div>
            </div>
            <Container maxWidth="md" >
            <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2} mt={15} justifyContent='space-around'>
        <Grid item  xs={12} md={3} lg={3} xl={3}>
          <div className='partner-img-div'>
              <img src={attractcustomer} className='partner-img-group' alt=''/>
              <h6 className='img-with-content'>Attract more Customers</h6>
          </div>
        </Grid>
        <Grid item xs={12} md={3} lg={3} xl={3}>
          <div className='partner-img-div'>
              <img src={brand} className='partner-img-group' alt=''/>
              <h6 className='img-with-content'>Increase your Revenue</h6>
          </div>
        </Grid>
        <Grid item xs={12} md={3} lg={3} xl={3}>
      <div style={{width:'100%',height:'100%'}}>
      <div className='partner-img-div'>
              <img src={increase} className='partner-img-group' alt=''/>
              <h6 className='img-with-content'>Boost your Brand Visibility</h6>
          </div>
      </div>
        </Grid>
       
      </Grid>
    </Box>
      </Container>
            {/* our coustomers */}
       <div className='our-custmers-background1'>
       <div className="our-custmers-info1">
           <div className="our-custmers-content1">
             <h1 className='custmer-heading1'>You can Get Started, In 3 Simple Steps</h1>
            
            
           </div>
          </div>
        <div className="custmer-main-div1-home">
        <div className="custmer-card-main1-home">
  <div className="card1-home">
    <div className="card-header1-home">
    <div className='card-imgs-div1'>
     <img src={home} alt=''/>
     </div>
    </div>
    <div className="card-body1-home">
      {/* <span className="tag tag-teal" style={{color:'black'}}>Technology</span> */}
      <h4 className='custmer-card-heading1-home'>
      Start with Creating
an Account
      </h4>
    
      <div className="user1-home">
      <img src={right} alt="user" style={{width:'15px' , height:'15px'}} />
        <div className="user-info1-home">
         <div className='ratings-group1-home'>
         <p className='custmer-card-para1-home'>
      Provide your personal & company details
      </p>
         </div>
        </div>
      </div>
    </div>
  </div>
  <div className="card1-home">
    <div className="card-header1-home">
      <div className='card-imgs-div2'>
     <img src={download} alt=''/>
     </div>
    </div>
    <div className="card-body1-home">
      {/* <span className="tag tag-teal" style={{color:'black'}}>Technology</span> */}
      <h4 className='custmer-card-heading1-home'>

Upload Required Documents
      </h4>
    
      <div className="user1-home">
      <img src={right} alt="user" style={{width:'15px' , height:'15px'}} />
        <div className="user-info1-home">
         <div className='ratings-group1-home'>
         <p className='custmer-card-para1-home'>
      Upload your ID proof, workshop license etc.
      </p>
         </div>
        </div>
      </div>
    </div>
  </div>
  <div className="card1-home">
    <div className="card-header1-home">
    <div className='card-imgs-div3'>
     <img src={carmob} alt=''/>
     </div>
    </div>
    <div className="card-body1-home">
      {/* <span className="tag tag-teal" style={{color:'black'}}>Technology</span> */}
      <h4 className='custmer-card-heading1-home'>
      Go Live & Start
Recieving Orders
      </h4>
     
      <div className="user1-home">
      <img src={right} alt="user" style={{width:'15px' , height:'15px'}} />
        <div className="user-info1-home">
         <div className='ratings-group1-home'>
         <p className='custmer-card-para1-home'>
      Manage orders on partner app & web dashboard
      </p>
         </div>
        </div>
      </div>
    </div>
  </div>
          
        </div>
        
</div>

      </div>
      
     <div className='main-partner-container'>
     <Grid container>
       <Grid xs={12} mt={10}>
       <div className='btn-card'>
          <Link to='/' className='get-start-btn'>Get Started</Link>
        </div>
       </Grid>
      <Grid item xs={12} md={12} lg={12} xl={12} mt={10}>
            <div className="our-backbone-background-partner">
              <div className="our-backbone">
                <div className="our-backbone-flex">
                  <div className="our-heading-para-group-partner">
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
            </div>
          </Grid>
      <Grid item xs={12}>
            <div className="ourbackbone-sliderweb">
              <Slider
                {...settings1}
                slidesToShow={4}
                slidesToScroll={2}
                autoplaySpeed={3000}
              >
                {backcard()}
              </Slider>
            </div>
            <div className="ourbackbone-sliderphone">
              <Slider
                {...settings2}
                slidesToShow={1}
                slidesToScroll={1}
                autoplaySpeed={3000}
              >
                {backcard()}
              </Slider>
            </div>
          </Grid>


      </Grid>
     </div>
     <Footer />
        </div>
        </>
    )
}

export default Partnerhome;