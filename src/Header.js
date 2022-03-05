// import React, { createRef,useState } from "react";
import React, {useState,useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import HeaderRoutes from './HeaderRoutes';
import "./style/landing/header.scss";
import Avatar from '@mui/material/Avatar';
import Fram7 from '../src/images/Frame 7.png'
import Logo from './Logo'
import { UserContext } from "./App";
// import OtpInput from "react-otp-input";
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// // import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import '../src/style/Login.scss'
// import leftimag from '../src/images/SIde image.png';
// import loginlogo from '../src/images/loginlogo.png'
// import PhoneInput from "react-phone-number-input";
// // import MuiField from "./MuiField";
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import { useFormik } from 'formik';
// import "react-phone-number-input/style.css";
// import {Link} from 'react-router-dom'
// import { GoogleLogin , GoogleLogout} from 'react-google-login';



// // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');
// const ref = createRef();
// const UserContexts = createContext()
export default function Nav() {
  // const [a,setB] =useState(false);
  const { setB } = useContext(UserContext);
  const [toggleState, setToggleState] = useState(false);
// const user = useContext(UserContext)
const handleLogin = () => setB(true);
  const toggle = () => {
    setToggleState(toggleState === false ? true : false);
  };
  // const ClientId = "358857275498-plkjtsfsdmn3vs15coufspn49lugtkgs.apps.googleusercontent.com"
// const [showLoginButton , setShowLoginButton] = useState(true)
// const [signoutButton , setSignoutButton] = useState(false)
// const [code, setCode] = useState("");
// const [open,setOpen] = useState(setUser)
// const openmodel1 = ()=>{
//   setOpen(true)
// }
// const handleChange = (code) => setCode(code);
// const onLoginSuccess = (res)=>{
//          console.log(res.profileObj,'login sucesses');
//          setShowLoginButton(false);
//          setSignoutButton(true);
// }
// const onFailure = (res)=>{
//     console.log('failure res',res)
  
// }
// const onSignOut =()=>{
// alert("you have Been sign out sucesessfuly")
// setShowLoginButton(true);
// setSignoutButton(false);
// }
  // let subtitle;


  // const formik = useFormik({
  //   initialValues: {
  //     phone: ""
  //   }
  // });
  // const { setFieldValue } = formik;
  

  return (
 
   <div style={{width:'100%',background:'#fff',boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
    
      <header style={{maxWidth: '1200px', margin:'0 auto'}}>
      
      <div className="logo" onClick={toggle}>
        <Logo />
      </div>

      <nav>
        <i className="fa fa-bars" aria-hidden="true" onClick={toggle} />
        <ul className={`collapsed ${toggleState ? "is-expanded" : ""}`} >
          {HeaderRoutes.anonymous.map((route,i) => {
            // debugger
            return (
             

                <li key={i}>
              <NavLink active="true" className="active" onClick={toggle} to={route.link}>
               {route.name}
                </NavLink></li>
              
            );
          })}
          
          {/* <li className='web-login'>  <Link className="Login-btn"  activeclassname="active" onClick={handleLogin} to='#' >
         
          Log in &nbsp; <Avatar style={{ width:'30px',height:'30px'}}><img src={Fram7} alt=''/></Avatar>
                 
                </Link> </li>
                <li className='mobile-login'>  <a className="Login-btn"  activeclassname="active" onClick={handleLogin} href='#demo-modal1' >
         
          Log in &nbsp; <Avatar style={{ width:'30px',height:'30px'}}><img src={Fram7} alt=''/></Avatar>
                 
                </a> </li> */}
          {/* <NavLink activeClassName="active" to="/about" onClick={toggle}>
            <li>about</li>
          </NavLink>
          <NavLink activeClassName="active" to="/contact" onClick={toggle}>
            <li>contact</li>
          </NavLink> */}
        </ul>
      </nav>
    </header>
    {/* <div id="demo-modal" class="modal">
    <div class="modal__content">
       
         <div className='login-left'>
           <img src={leftimag} className='login-img' alt=''/>
           </div>
         <div className='login-right'>
           <div className='login-logodiv'>
             <img  src={loginlogo} className='loginlogo-img' alt=''/>
           </div>
           <div className='login-head-div'>
             <h1 className='login-heading'>Welcome to Sayaraa!</h1>

             <form>
      <Box py={3} px={5}>
      <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={12}>
        <PhoneInput
    
          international
  defaultCountry="IN"
  addInternationalOption='false'
          className='phone'
          name="phone"
          onChange={(value) => setFieldValue("phone", value)}
          ref={ref}
        />
        </Grid>
        <Grid xs={12}>
       <div className='login-btn'> <Stack spacing={2} >
      <Button variant="contained" className="btn" style={{backgroundColor:'#FB7E15'}}><a href='#otp-modal' style={{color:'white'}}>Get OTP</a></Button>
   
    </Stack></div>

    <div>
      <p className='signup'>Want to become a partner ? <Link to='signup'>Sign up here</Link></p>
    </div>

    <div className='google-group'>
    {showLoginButton ?  <GoogleLogin
    clientId={ClientId}
    buttonText="Login With Google"
    onSuccess={onLoginSuccess}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'}
    className='login'
  /> : null}

  {signoutButton ? <GoogleLogout
      clientId={ClientId}
      buttonText="Logout"
      onLogoutSuccess={onSignOut}
    >
    </GoogleLogout> : null}
    </div>
        </Grid>
      </Grid>
       
      </Box>
    </form>
           </div>
         </div>
   

        <a href="#" class="modal__close">&times;</a>
    </div>
</div>
  */}

 {/* otp- web*/}
 {/* <div id="otp-modal" class="modal">
    <div class="modal__content">
         <div className='login-left'>
           <img src={leftimag} className='login-img' alt=''/>
           </div>
         <div className='login-right'>
           <div className='login-logodiv'>
             <img  src={loginlogo} className='loginlogo-img' alt=''/>
           </div>
           <div className='login-head-div'>
             <div className='otp-heading'>
             <h1 className='login-heading '>OTP has been sent to your mobile number ‘900095588878’</h1>
             </div>

             <form>
      <Box py={3} px={5}>
      <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={12}>
       <div className='otp'>
       <OtpInput
        value={code}
        onChange={handleChange}
        numInputs={4}
        separator={<span style={{ width: "8px" }}></span>}
        isInputNum={true}
        shouldAutoFocus={true}
        inputStyle={{
          border: "1px solid transparent",
          borderRadius: "8px",
          width: "54px",
          backgroundColor:'#F4F6FA',
          height: "54px",
          fontSize: "12px",
          color: "#000",
          fontWeight: "400",
          caretColor: "blue"
        }}
        focusStyle={{
          border: "1px solid #CFD3DB",
          outline: "none"
        }}
      />
       </div>
        </Grid>
        <Grid xs={12}>
       <div className='otp-btn'> <Stack spacing={2} >
      <Button variant="contained" className="btn" style={{backgroundColor:'#FB7E15'}}>Verify</Button>
   
    </Stack></div> */}

  
        {/* </Grid>
      </Grid>
       
      </Box>
    </form>
           </div>
         </div>

        <a href="#" class="modal__close">&times;</a>
    </div>
</div> */}


 {/* otp- mobile*/}
 {/* <div id="otp-modal1" class="otp-modal">
    <div class="otp-modal__content">
    <div className='login-logodiv'>
             <img  src={loginlogo} className='loginlogo-img' alt=''/>
           </div>

           <div className='otp-heading'>
             <h1 className='login-heading '>OTP has been sent to your mobile number ‘900095588878’</h1>
             </div>

             <div className='otp1'>
       <OtpInput
        value={code}
        onChange={handleChange}
        numInputs={4}
        separator={<span style={{ width: "8px" }}></span>}
        isInputNum={true}
        shouldAutoFocus={true}
        inputStyle={{
          border: "1px solid transparent",
          borderRadius: "8px",
          width: "47px",
          backgroundColor:'#F4F6FA',
          height: "54px",
          fontSize: "12px",
          color: "#000",
          fontWeight: "400",
          caretColor: "blue"
        }}
        focusStyle={{
          border: "1px solid #CFD3DB",
          outline: "none"
        }}
      />
       </div>
       <div className='otp-btn'> <Stack spacing={2} >
      <Button variant="contained" className="btn" style={{backgroundColor:'#FB7E15'}}>Verify</Button>
   
    </Stack></div>
        <a href="#" class="modal__close">&times;</a>
    </div>
</div>
<div id="demo-modal1" class="modal1">
    <div class="modal__content1">
   
       
           <div className='login-right1'>
           <div className='login-logodiv'>
             <img  src={loginlogo} className='loginlogo-img' alt=''/>
           </div>
           <div className='login-head-div'>
             <h1 className='login-heading'>Welcome to Sayaraa!</h1>

             <form>
             <Grid container spacing={2} mt={2} justifyContent='center'>
        <Grid item xs={12}>
        <PhoneInput
         
          international
  defaultCountry="IN"
  addInternationalOption='false'
          className='phone'
          name="phone"
          onChange={(value) => setFieldValue("phone", value)}
          ref={ref}
        />
          </Grid>
          <Grid xs={12}>
       <div className='login-btn'> <Stack spacing={2} >
      <Button variant="contained" className="btn" style={{backgroundColor:'#FB7E15'}}><a href='#otp-modal1'>Get OTP</a></Button>
   
    </Stack></div>

    <div>
      <p className='signup-mob'>Want to become a partner ? <Link to='signup'>Sign up here</Link></p>
    </div>
</Grid>
          </Grid>
     
    </form>
           </div>
         </div>
        <a href="#" class="modal__close1">&times;</a>
    </div>
</div> */}
   </div>
  
  );
}
