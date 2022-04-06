import React ,{createContext,useState} from "react";
import {  Route } from "react-router-dom";
// import Login from '../src/Components/Login'
import "./style/index.scss";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";
import Blog from '../src/Components/Blog';
// import Otp from '../src/Components/Otp'
// Components
// import Header from './Header'
import BlogRead from '../src/Components/BlogRead'
// Pages
import Home from "./Pages/Home";
import Ourofferings from "./Pages/Ourofferings";
import About from "./Pages/About";
import Privacyandcondition from '../src/Pages/Privacyandterms'
import Contactus from '../src/Pages/Contactus'
import Partnerhome from '../src/Pages/Partnerhome';
import Multiform from '../src/Components/Multisteps/Steper'
import ProductDetails from '../src/Pages/ProductDetails'
// import './App.css';
const UserContext = createContext()
function App() {
  const [a,setB] =useState(false);
  return (
    <UserContext.Provider value={{a,setB}} >
    <div className="App">
      
      <div className="">
        <Route exact path="/" component={Home} />
        <Route exaxt path="/offering" component={Ourofferings} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/:blog_alias" component={BlogRead} />
        <Route exact path='/privacyandterms' component={Privacyandcondition} /> 
        <Route exact path='/contactus' component={Contactus} />
        <Route exact path='/partnerhome' component={Partnerhome} />
<Route exact path='/productdetalis/:offer_id' component={ProductDetails} />
        <Route exact path="/signup" >
     <div>
       <div className="form-image-background">
       <div className='form-content-div'>
           <div className='form-content-div-second'>
             <h1 className='form-headings'>
             Come Partner with us
             </h1>
             <p className='form-para'>Please complete all needed fields for registration and enjoy receiving more customers.</p>
           </div>
         </div>
       </div>
       <CssBaseline />
      <Container component={Box} className='form-position' p={4}>
        <Paper component={Box} p={3}>
          <Multiform />
        </Paper>
      </Container>
     </div>
      </Route>
     {/* <Route exact path="/otp" component={Otp} />
        <Route exact path='/login'  value={a} component={Login} /> */}
        
      </div>
    </div>
    </UserContext.Provider>
  );
}

export default App;
export {UserContext}