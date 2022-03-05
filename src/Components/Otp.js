
import { NavLink } from "react-router-dom";
// import "./style/landing/header.scss";
import Avatar from '@mui/material/Avatar';
import Fram7 from '../images/Frame 7.png'
import Logo from '../Logo'

// import OtpInput from "react-otp-input";
import React, {
    createRef,
    useState,
    useContext,
  } from "react";
  import { UserContext } from "../App";
  // import { UserContexts } from "../Header";
  // import ReactDOM from 'react-dom';
  import Modal from "react-modal";
  // import { styled } from "@mui/material/styles";
  import Box from "@mui/material/Box";
  // import Paper from "@mui/material/Paper";
  import Grid from "@mui/material/Grid";
  import "../style/Login.scss";
  import leftimag from "../images/SIde image.png";
  import loginlogo from "../images/loginlogo.png";
  // import PhoneInput from "react-phone-number-input";
  import Stack from "@mui/material/Stack";
  import Button from "@mui/material/Button";
  import { useFormik } from "formik";
  import "react-phone-number-input/style.css";
  import { Link } from "react-router-dom";
  import ReactPhoneInput from 'react-phone-input-2'
  import 'react-phone-input-2/lib/style.css'
  import { GoogleLogin, GoogleLogout } from "react-google-login";
  import analytics from '../firebase'
  // import Googlesign from './Googlelogin'
  import { getAuth, RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";

  
  
  // // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  // Modal.setAppElement('#yourAppElement');
  const ref = createRef();
  // const UserContext = createContext()
  
const Otp = () => {
    const user = useContext(UserContext);
    const ClientId =
      "358857275498-plkjtsfsdmn3vs15coufspn49lugtkgs.apps.googleusercontent.com";
    const [showLoginButton, setShowLoginButton] = useState(true);
    const [signoutButton, setSignoutButton] = useState(false);
    const [code, setCode] = useState("");
    const handleChange = (code) => setCode(code);
    const onLoginSuccess = (res) => {
      console.log(res.profileObj, "login sucesses");
      setShowLoginButton(false);
      setSignoutButton(true);
    };
    const onFailure = (res) => {
      console.log("failure res", res);
    };
    const onSignOut = () => {
      alert("you have Been sign out sucesessfuly");
      setShowLoginButton(true);
      setSignoutButton(false);
    };
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(user);
  
    // function openModal() {
    //   setIsOpen(true);
    // }
    const formik = useFormik({
      initialValues: {
        phone: "",
      },
    });
    const { setFieldValue } = formik;
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      // subtitle.style.color = "#f00";
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    const handleOnChange = (...args) => {
      console.log(args);
    };

    const sentotp = ()=>{
      const code = code;
      console.log(code,'codes')
window.confirmationResult.confirm(code).then((result) => {
  // User signed in successfully.
  const user = result.user;
  // ...
  console.log('success',JSON.stringify(user))
  alert('jhjgjhgjh')
}).catch((error) => {
  // User couldn't sign in (bad verification code?)
  // ...

  console.log('eorrrrrrrrrr')
});
    }
    return (
      <div>
        {/* <UserContext.Provider value={openModal} /> */}
        {/* <button onClick={openModal}>Open Modal</button> */}
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          ariaHideApp={false}
          contentLabel="Selected Option"
          // style={customStyles}
 
        >
          {/* <div id="demo-modal" class="modal"> */}
          <div className="modal__content">
            {/* <div className='login-container'> */}
            <div className="login-left">
              <img src={leftimag} className="login-img" alt=''/>
            </div>
            <div className="login-right">
              <div className="login-logodiv">
                <img src={loginlogo} className="loginlogo-img" alt=''/>
              </div>
              <div className="login-head-div">
                
  
                <form onSubmit={sentotp}>
                  <Box py={2} px={2}>
                    <Grid container spacing={2} justifyContent="center">
                      <Grid item={true} xs={12}>
                    
                        {/* <PhoneInput
                          international
                          defaultCountry="IN"
                          addInternationalOption="false"
                          className="phone"
                          name="phone"
                          onChange={(value) => setFieldValue("phone", value)}
                          ref={ref}
                        /> */}
                        {/* <PhoneInput
                        
    country={'us'}
    // value={phone}
    onChange={phone => this.setState({ phone })}
  /> */}
  <div style={{width:'50%',margin:'0 auto'}}>
  <h1 className="login-heading">Welcome to Sayaraa!</h1>
  <div className='otp'>
       {/* <OtpInput
        value={code}
        onChange={handleChange}
        numInputs={6}
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
      /> */}
       </div>
  </div>
                      </Grid>
  
                      <Grid item={true} xs={6}>
                        <div className="login-btn">
                         
                          <Stack spacing={2}>
                            <Button
                            type='submit'
                              variant="contained"
                              className="btn"
                              style={{ backgroundColor: "#FB7E15" }}
                            >
                              Get OTP
                            </Button>
                          </Stack>
                        </div>
                      </Grid>
                      <Grid item={true} xs={12}>
                        {/* <div className="login-btn">
                         
                          <Stack spacing={2}>
                            <Button
                              variant="contained"
                              className="btn"
                              style={{ backgroundColor: "#FB7E15" }}
                            >
                              Get OTP
                            </Button>
                          </Stack>
                        </div> */}
  
                        <div>
                          <p className="signup">
                            Want to become a partner ?{" "}
                            <Link to="/signup">Sign up here</Link>
                          </p>
                        </div>
  
                        <div className="google-group">
                          {showLoginButton ? (
                            <GoogleLogin
                              clientId={ClientId}
                              buttonText="Login With Google"
                              onSuccess={onLoginSuccess}
                              onFailure={onFailure}
                              cookiePolicy={"single_host_origin"}
                              className="login"
                            />
                          ) : null}
  
                          {signoutButton ? (
                            <GoogleLogout
                              clientId={ClientId}
                              buttonText="Logout"
                              onLogoutSuccess={onSignOut}
                            ></GoogleLogout>
                          ) : null}
                        </div>
                      </Grid>
                    </Grid>
                  </Box>
                </form>
              </div>
            </div>
  
            <a href="/" className="modal__close" onClick={closeModal}>
              &times;
            </a>
          </div>
          {/* </div> */}
        </Modal>
      </div>
    );
}

export default Otp