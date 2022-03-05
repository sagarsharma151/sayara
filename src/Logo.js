import React from 'react';
import { NavLink} from "react-router-dom";
import logoheaderfirst from '../src/images/header/logoheaderfirst.png'
// import Link from "next/link";
// import LogoIcon from "images/logo.svg";
// import LogoRoutes from "./Logopath";
// import { UserContext } from "hooks/UseUser";
// import { useRouter } from "next/router";
const Logo = () => {
  // console.log('role',LogoRoutes[role][0].link)

  // useEffect(() => {
  //   if (!document) return;
  //   const logoCol = document.getElementById('app-logo');
  //   document.addEventListener('scroll', function(e) {
    
  //   const top = document.documentElement.scrollTop;
  //     const scrollTop = (20 - top);
  //     if (Math.abs(scrollTop) < 20) {
  //       console.log(scrollTop)
  //       logoCol.style.marginTop = top + "px";
  //     }
  //   })
  // } , []);
  return (
    <div className="logo-col" id="app-logo" style={{ cursor: "pointer",width:'148.99px',height:'auto' }}>
      {/* <Link href="/" passHref={true}>
        <img src={LogoIcon} alt="logoicon-img"/>
      </Link> */}
      {/* {HeaderRoutes[role][0].link === role ?  console.log('roles4646464ss',HeaderRoutes[role][0]):'fjdsfjsdjf'} */}
      {/* style={{width:'17.99px',height:'29.88px'}} */}
          <NavLink activeclassname="active" style={{color:'#0A202F', display: 'flex',
flexDirection: 'row',


alignItems: 'center'}}   to='/'>
           <img src={logoheaderfirst} alt="logoicon-img" style={{width:'100%',height:'100%'}}/>
           </NavLink>

           </div>
)
};

export const Whitelogo = () => {
  // console.log('role',LogoRoutes[role][0].link)

  // useEffect(() => {
  //   if (!document) return;
  //   const logoCol = document.getElementById('app-logo');
  //   document.addEventListener('scroll', function(e) {
    
  //   const top = document.documentElement.scrollTop;
  //     const scrollTop = (20 - top);
  //     if (Math.abs(scrollTop) < 20) {
  //       console.log(scrollTop)
  //       logoCol.style.marginTop = top + "px";
  //     }
  //   })
  // } , []);
  return (
    <div className="logo-col" id="app-logo" style={{ cursor: "pointer" }}>
      {/* <Link href="/" passHref={true}>
        <img src={LogoIcon} alt="logoicon-img"/>
      </Link> */}
      {/* {HeaderRoutes[role][0].link === role ?  console.log('roles4646464ss',HeaderRoutes[role][0]):'fjdsfjsdjf'} */}
         
          <NavLink activeclassname="active" style={{color:'white', display: 'flex',
flexDirection: 'row',


alignItems: 'center'}}   to='/'>
           <img src={logoheaderfirst} alt="logoicon-img" style={{width:'100%',height:'100%'}}/>
           </NavLink>

           </div>
)
};
export default Logo;