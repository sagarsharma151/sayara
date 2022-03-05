import React ,{createContext,useState} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from '../src/Components/Login'
import "./style/index.scss";
import Blog from '../src/Components/Blog';
import Otp from '../src/Components/Otp'
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
import Multiform from '../src/Components/Multisteps/Multistep'

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
        {/* <Route exact path="/signup" component={Multiform} /> */}
     {/* <Route exact path="/otp" component={Otp} />
        <Route exact path='/login'  value={a} component={Login} /> */}
        
      </div>
    </div>
    </UserContext.Provider>
  );
}

export default App;
export {UserContext}