import React from "react";
import '../src/style/banner.scss'
import footer1 from '../src/images/footer1.png'
import footer2 from '../src/images/footer2.png'
import footer3 from '../src/images/footer3.png'
import footerbtn from '../src/images/footerbtn.png'
import footerapps from '../src/images/footerapps.png'
import footergoogle from '../src/images/footergoogle.png'
import facebook from '../src/images/facebook.png'
import twiter from '../src/images/twitter.png'
import instagram from '../src/images/instagram.png'
import linkedin from '../src/images/linkedin.png'
import Logofooter from '../src/images/logofooter.png'
import { Link } from "react-router-dom";
const Footer =()=>{
    return (
        <>
         {/*footer */}
         <div className='footer-background'>
        <div className="footer">
          <div
            className="footer-flex1"
          >
           <div className='footer-logo-div'>
             <img src={Logofooter} className='footer-logo' alt=''/>
           </div>
          
           <div className='footer-icon-main'>
           <div className='footer-logo-social'>
           <a href='https://www.facebook.com/sayaraagroup/?modal=admin_todo_tour' target="_blank"><img className='social-logo-infooter' src={facebook}  alt=''/></a></div>
           <div className='footer-logo-social1'>
           <a href='https://www.facebook.com/sayaraagroup/?modal=admin_todo_tour' target="_blank"><img className='social-logo-infooter' src={twiter}  alt=''/></a></div>
           <div className='footer-logo-social1'>
           <a href="https://www.instagram.com/sayaraagroup/" target="_blank"><img className='social-logo-infooter' src={instagram}  alt=''/></a></div>
           <div className='footer-logo-social1'>
           <a href="https://www.linkedin.com/in/sayaraa-group-30b5b5195/" target="_blank"><img className='social-logo-infooter' src={linkedin}  alt='' /></a></div>
           </div>
           <div>
           </div>
          </div>
          <div
            className="footer-content"
          >
           <div>
           <div> <Link className='footer-links' to='/about' >About</Link></div>
           <div> <Link className='footer-links' to='/offering' >Our offerings</Link></div>
           <div> <Link className='footer-links' to='/contactus' >Contact us</Link></div>
            
           </div>
           <div>
           </div>
          </div>
          <div
            className="footer-content-flex1"
          >
          <div>
           <div> <Link className='footer-links' to='/blog'>Blog</Link></div>
           <div> <Link className='footer-links' to='/' >How it works</Link></div>
           <div> <Link className='footer-links' to='/privacyandterms' >Terms & Conditions</Link></div>
            
           </div>
          </div>
          <div
            className="footer-content-flex1"
          >
          <div>
           <div> <Link className='footer-links' to='/partnerhome'>Become Partner</Link></div>
           {/* <div> <Link className='footer-links' to='/login'>Customer Log in</Link></div>  */}
           </div>
          </div>
          <div
            className="footer-contents-flex2"
          >
          <div>
           <div> <a className='offer-heading' href='https://play.google.com/store/apps/details?id=com.sjainpune.sayaraa&hl=en' target="_blank"><img src={footergoogle} style={{width:'100%',height:'auto'}} alt=''/></a></div>
           <div> <a className='offer-heading' href='https://apps.apple.com/in/app/sayaraa/id1491527366' target="_blank"><img src={footerapps} style={{width:'100%',height:'auto'}} alt=''/></a></div>
            
           </div>
          </div>
          <div
            className="footer-contents-flex2"
          >
          <div style={{width:'60px',margin:'2rem'}}>
           <div> <Link className='offer-heading' to='/'><img src={footerbtn} style={{width:'100%',height:'auto'}} alt=''/></Link></div>
            
           </div>
          </div>
        
        </div>
        
        <div className='footers'>
        <div className='footers-flex'>
<div className='footer-linkswithgooggle1' ><img src={footer1} style={{width:'100%',height:'auto'}} alt=''/></div>
<div className='footer-linkswithgooggle'><img src={footer2} style={{width:'100%',height:'auto'}} alt=''/></div>
<div className='footer-linkswithgooggle'><img src={footer3} style={{width:'100%',height:'auto'}} alt=''/></div>
        </div>
         <div className='footer-copy-flex'>
       
<div><p className='footer-copy'>Sayaraa Group FZC © 2020 All Rights Reserved</p></div>
        
        </div>
     
         </div>
      </div>
        </>
    )
}

export default Footer;