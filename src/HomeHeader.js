import React, { useState } from "react";
import { NavLink} from "react-router-dom";
import {PartnerHome} from './HeaderRoutes';
import "./style/landing/header.scss";
import {Whitelogo} from './Logo'

import "react-phone-number-input/style.css";
// import {Link} from 'react-router-dom'




// // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

export default function HomeHeader() {
  const [toggleState, setToggleState] = useState(false);
  const toggle = () => {
    setToggleState(toggleState === false ? true : false);
  };

  return (
   <div style={{width:'100%'}}>
      <header style={{maxWidth: '1200px', margin:'0 auto'}}>
      
      <div className="logo" onClick={toggle}>
        <Whitelogo />
      </div>

      <nav>
        <i className="fa fa-bars" aria-hidden="true" onClick={toggle} />
        <ul className={`collapsed ${toggleState ? "is-expanded" : ""}`} >
          {PartnerHome.homepartner.map((route,i) => {
            // debugger
            return (
             

                <li key={i} style={{color:'white'}}>
              <NavLink active="true" className="active navlinks" onClick={toggle} style={{color:'white'}} to={route.link}>
               {route.name}
                </NavLink></li>
              
            );
          })}
          
          {/* <li className='web-login'>  <a className="Login-btn"  activeClassName="active" onClick={toggle} href='#demo-modal' >
         
          Log in &nbsp; <Avatar style={{ width:'30px',height:'30px'}}><img src={Fram7} alt=''/></Avatar>
                 
                </a> </li>
                <li className='mobile-login'>  <a className="Login-btn"  activeClassName="active" onClick={toggle} href='#demo-modal1' >
         
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
   </div>
  );
}
