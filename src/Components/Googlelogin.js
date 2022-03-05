import React , {useState} from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogin , GoogleLogout} from 'react-google-login';


const GoogleSign = (response) => {
    const ClientId = "358857275498-plkjtsfsdmn3vs15coufspn49lugtkgs.apps.googleusercontent.com"
    const [showLoginButton , setShowLoginButton] = useState(true)
    const [signoutButton , setSignoutButton] = useState(false)
   
    const onLoginSuccess = (res)=>{
             console.log(res.profileObj,'login sucesses');
             setShowLoginButton(false);
             setSignoutButton(true);
    }
    const onFailure = (res)=>{
        console.log('failure res',res)
        setShowLoginButton(true);
        setSignoutButton(false);
    }
const onSignOut =()=>{
    alert("you have Been sign out sucesessfuly")
}
 return (
     <>
    {showLoginButton ?  <GoogleLogin
    clientId={ClientId}
    buttonText="Login"
    onSuccess={onLoginSuccess}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'}
  /> : null}

  {signoutButton ? <GoogleLogout
      clientId={ClientId}
      buttonText="Logout"
      onLogoutSuccess={onSignOut}
    >
    </GoogleLogout> : null}
     </>
 )
}

export default GoogleLogin ;