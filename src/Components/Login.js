import React, {
  createRef,
  useState,
  useContext,
} from "react";
import { getAuth, RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";
import { UserContext } from "../App";
// import { UserContexts } from "../Header";
// import ReactDOM from 'react-dom';
import Modal from "react-modal";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "../style/Login.scss";
import leftimag from "../images/SIde image.png";
import loginlogo from "../images/loginlogo.png";
import PhoneInput from "react-phone-number-input";
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



// // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');
const ref = createRef();
// const UserContext = createContext()

const Login = (props) => {
  const user = useContext(UserContext);
  const [phone,setNumber] = useState('')
  const ClientId =
    "358857275498-plkjtsfsdmn3vs15coufspn49lugtkgs.apps.googleusercontent.com";
  const [showLoginButton, setShowLoginButton] = useState(true);
  const [signoutButton, setSignoutButton] = useState(false);
const handleChange = (e)=>{
  setNumber(e.target.value)
  console.log('nuber',phone)
}
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
  const afterOpenModal = ()=> {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }
const configurecaptcha = ()=>{
  const auth = getAuth();
  window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
    'size': 'invisible',
    'callback': (response) => {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      onSignInSubmit();
      console.log("recaptha");
    },
defaultCountry:'IN'
  }, auth);
}
const onSignInSubmit = (e)=>{
e.preventDefault();
configurecaptcha();
  // const phoneNumber = getPhoneNumberFromUserInput();
  const phoneNumber = phone;
  console.log('phonenumber',phoneNumber)
  const appVerifier = window.recaptchaVerifier;
  
  const auth = getAuth();
  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log('otp send')
        // ...
      }).catch((error) => {
        // Error; SMS not sent
        console.log('errorr')
        // ...
      });
}
  function closeModal() {
    setIsOpen(false);
  }
  const handleOnChange = (...args) => {
    console.log(args);
  };
  {console.log('dljfdlf',phone)}
  return (
    <div>
      {/* <UserContext.Provider value={openModal} /> */}
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        // style={customStyles}
        contentLabel="Example Modal"

        // isOpen={!!props.modalIsOpen}
        // onRequestClose={props.clearSelectedOption}
        ariaHideApp={false}

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
              

              <form onSubmit={onSignInSubmit}>
                <Box py={2} px={2}>
                  <Grid  container spacing={2} justifyContent="center">
                    <Grid item={true}  xs={12}>
                  
                     
                      {/* <PhoneInput
                      
  country={'us'}
  // value={phone}
  onChange={phone => this.setState({ phone })}
/> */}
<div style={{width:'50%',margin:'0 auto'}}>
<h1 className="login-heading">Welcome to Sayaraa!</h1>
{/* <ReactPhoneInput
          defaultCountry="pl"
          containerStyle={{ marginTop: "15px" }}
          searchClass="search-class"
          searchStyle={{ margin: "0", width: "97%", height:"62px" ,padding:'px 20px' }}
          enableSearchField
          disableSearchIcon
         onChange={handleChange}
          country={'us'}
          value={this.state.phone}
          onChange={phone => this.setState({ phone })}
          // value={phone}
          inputProps={{
            name: 'phone',
            required: true,
            autoFocus: true
          }}
        /> */}
         <PhoneInput
                        international
                        defaultCountry="IN"
                        addInternationalOption="false"
                        // className="phone"
                        name="phone"
                        value={props.phone}
                        onChange={(value) => setNumber(value)}
                        ref={ref}
                      />
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
              <div id="sign-in-button"></div>
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
};
export default Login;
