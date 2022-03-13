import React,{useEffect,useState} from 'react';
import '../style/Blogread.scss'
import {useParams} from "react-router-dom"
import {Link} from 'react-router-dom'
import cardero from '../images/cardero.png'
import Button from "@mui/material/Button";
import Header from '../Header'
import '../style/productdetails.scss'
import {connect} from 'react-redux'
import { Fetchdata } from "../Service";
import { useDispatch, useSelector } from "react-redux";
import { FetchdataBlog } from "../Service";
import Blog2 from '../images/blog2.png';
import Footer from '../Footer'
const ProductDetails = () => {
    const {offer_id,name} = useParams()
    console.log(offer_id,'offer_id')
    const [blogread, setBlogRead] = useState([]);
    const newData = useSelector((state) => state.HomeImgSlider.ImageSlider.data);
    console.log(newData,'newDataaaaaaaaaaaaaaaaaaaaaaaaaaaa')
    const dispatch = useDispatch();
   
    console.log(newData,"blogread  ")
    
    React.useEffect(() => {
        dispatch(Fetchdata());
      }, []);
    useEffect(() => {
      if (newData) {
        setBlogRead(newData);
      }
    }, [newData]);
  
const thisProduct = blogread && blogread.find(prod => prod.offer_id === offer_id)
console.log(thisProduct,'blockreadblockreadblockreadblockreadblockread')

  return (
    <div>
    <Header />
    {thisProduct && <div className='main-container-product'>

<div style={{width:'100%'}}>
<div className='heading-blog-flex'>
  <div className='details-heading-left-blog'>
        <div>
            <h1 className='offerid-main-head'>
        
     OfferId:   {thisProduct.offer_id}
        </h1>
        </div>
  </div>
  
  <div className='details-heading-right-blog'>
  <div className='product-logo'>
    
    <img src={`https://sayaraagroup.com/${thisProduct.logo}`} className='product-logo-img' />

</div>
  </div>
</div>
</div>
{/* <div>
            <h1 className='offerid-main-head'>
        
     Company Name : &nbsp;  {thisProduct.company_name}
        </h1>
        </div> */}
<div className='heading-blog-flex'>
  <div className='details-heading-left-blog'>
        <div>
            <h1 className='offerid-main-head'>
        
            Service Name : &nbsp; 
        </h1>
        </div>
  </div>

  <div className='details-heading-right-blog'>
    <div>
        <p className='read-date'>
            {/* 15 Nov, 2021 */}
            {thisProduct.service_name} 
            </p>
    </div>
  </div>
  <div className='details-heading-left-blog'>
        <div>
            <h1 className='offerid-main-head'>
        
            Company Name : &nbsp;
        </h1>
        </div>
  </div>

  <div className='details-heading-right-blog'>
    <div>
        <p className='read-date'>
            {/* 15 Nov, 2021 */}
            {thisProduct.company_name}
            </p>
    </div>
  </div>
  <div className='details-heading-left-blog'>
        <div>
            <h1 className='offerid-main-head'>
        
            promo discount : &nbsp;
        </h1>
        </div>
  </div>

  <div className='details-heading-right-blog'>
    <div>
        <p className='read-date'>
            {/* 15 Nov, 2021 */}
            {thisProduct.promo_discount} %
            </p>
    </div>
  </div>
  <div className='details-heading-left-blog'>
        <div>
            <h1 className='offerid-main-head'>
        
            Description : &nbsp; 
        </h1>
        </div>
  </div>

  <div className='details-heading-right-blog'>
    <div>
        <p className='read-date'>
            {/* 15 Nov, 2021 */}
            <p className='read-para' dangerouslySetInnerHTML={{ __html: thisProduct.company_details}}></p>
            </p>
    </div>
  </div>

  <div className='details-heading-left-blog'>
        <div>
            <h1 className='offerid-main-head'>
        
            Company Email : &nbsp; 
        </h1>
        </div>
  </div>

  <div className='details-heading-right-blog'>
    <div>
      
            {/* 15 Nov, 2021 */}
            <p className='read-date'>   <p className='read-para' dangerouslySetInnerHTML={{ __html: thisProduct.company_email}}></p></p>
    </div>
  </div>

  <div className='details-heading-right-blog'>
    <div>
      
            {/* 15 Nov, 2021 */}
           <button  className='pdetails-btn'><Link to='/' className='plink'>Close</Link></button>
    </div>
  </div>
</div>

{/* <div className='main-div-img'>
<div className='main-img'>
    <img src={`https://sayaraagroup.com/${thisProduct.promo_discount}`} alt=''/>
</div>

<div>
  <br /> <br />
  <p ></p>
  <p className='read-para' dangerouslySetInnerHTML={{ __html: thisProduct.company_details}}> */}
  {/* A do-it-all app for your car. Sounds too good to believe? When everything from food to clothes is available at your fingertips, why not car services? For the first time in Abu Dhabi, we are bringing together all car-related services on a mobile platform named Sayaraa. We have an impressive array of services including doorstep carwash, shopping center carwash, maintenance services, rent a car, car buy and sell and many more.  
Sayaraa is a mobile app compatible with both Android and iOS devices. It currently serves Abu Dhabi with some of the capital’s top-rated service stations and service personnel. This A-listed category of car service providers is hosted on Sayaraa with assured deals and offers. Sayaraa can be rightly called the capital’s one-stop car fix app.
<br /><br />
So, how exactly can Sayaraa help you? Let's take, for example, the car wash scenario in Abu Dhabi. As you know, Abu Dhabi is known for its flash supercars, high rise buildings, and glamorous lifestyle; it is very rare that you see a car covered in dirt or sand.  The government imposes heavy fines for not keeping your vehicle clean. Plus, washing your car in open parking lots of residential areas is a punishable offense. It is also unacceptable to leave your cars unwashed for a long time as this type of behavior can tarnish the aesthetic appearance of the city. For these reasons, car wash centers are flocked almost every day of the week. To add to the people’s misery, these said car wash centers are concentrated in the industrial sites of Abu Dhabi. The other car wash options are doorstep wash, wash at shopping malls or avail services from a fuel station. 
<br /><br />
Finding the best deal from the above options takes a lot of time and effort. Hence, Sayaraa decided to take off that stumbling block and provide a platform of authorized service providers and vendors. We provide services that are not only limited to the car wash but also car rentals, car maintenance and car buy/sell.  
Our list of A-Class collaborators offers car wash at your doorstep to shopping malls entirely at your convenience. The best part of choosing Sayaraa is that we do consider the fact that water is an asset and should be conserved. Hence, the water used in washing the car is saved, recycled & reused which results in less water wastage and encourages an environment-friendly wash in order to maintain sustainability with available resources.
<br /><br />
Using Sayaraa is a cakewalk. Download the app, search for your required service from your location and avail services from the list that pops up. You can request services as per your convenience from your home. If not, leave your car with a service provider, sit back, relax and save time with Sayaraa priority. The mobile app is user-friendly with search tools as easy as a cakewalk. Appointments can be made easily at your ease and comfort. The unique selling point of Sayaraa is its pricing and offers anytime-anywhere. All you need to do is just open the app, select your location, desired time frame, type of service, and voila!  
We have a lot more to offer. Stay tuned to find more.   */}
{/* {} */}
  {/* </p>
</div>


</div> */}

</div> }
    <Footer />
</div>
  )
}

export default ProductDetails