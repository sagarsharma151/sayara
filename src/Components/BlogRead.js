import React,{useEffect,useState} from 'react';
import '../style/Blogread.scss'
import {useParams} from "react-router-dom"
import {Link} from 'react-router-dom'
import cardero from '../images/cardero.png'
import Header from '../Header'
import {connect} from 'react-redux'
import { useDispatch, useSelector } from "react-redux";
import { FetchdataBlog } from "../Service";
import Blog2 from '../images/blog2.png';
import Footer from '../Footer'

const BlogRead = ()=> {
    const {blog_alias,name} = useParams()
    console.log(blog_alias,'isdddddddddddddddddddd')
    const [blogread, setBlogRead] = useState([]);
    const newData = useSelector((state) => state.Blog.Blogtext.data);
    const dispatch = useDispatch();
   
    console.log(newData,"blogread  ")
    
    React.useEffect(() => {
        dispatch(FetchdataBlog());
      }, []);
    useEffect(() => {
      if (newData) {
        setBlogRead(newData);
      }
    }, [newData]);
  
// const readblog = ()=>
// blogread.map((details,index)=>(
//     <div className='main-container-blog'>
//     <div>
//         <h1 className='first-head'>
//         Car wash
//         </h1>
//     </div>
//     <div className='heading-blog-flex'>
//         <div className='heading-left-blog'>
//               <div>
//                   <h1 className='second-main-head'>
//               Beyond Car Wash And More: An App For All That Your Car Needs
//               </h1>
//               </div>
//         </div>
//         <div className='heading-right-blog'>
//           <div>
//               <p className='read-date'>15 Nov, 2021</p>
//           </div>
//         </div>
//     </div>

//     <div className='main-div-img'>
//     <div className='main-img'>
//           <img src={Blog2} alt=''/>
//     </div>

//     <div>
//         <br /> <br />
//         <p className='read-para'>
//         A do-it-all app for your car. Sounds too good to believe? When everything from food to clothes is available at your fingertips, why not car services? For the first time in Abu Dhabi, we are bringing together all car-related services on a mobile platform named Sayaraa. We have an impressive array of services including doorstep carwash, shopping center carwash, maintenance services, rent a car, car buy and sell and many more.  
// Sayaraa is a mobile app compatible with both Android and iOS devices. It currently serves Abu Dhabi with some of the capital’s top-rated service stations and service personnel. This A-listed category of car service providers is hosted on Sayaraa with assured deals and offers. Sayaraa can be rightly called the capital’s one-stop car fix app.
// <br /><br />
// So, how exactly can Sayaraa help you? Let's take, for example, the car wash scenario in Abu Dhabi. As you know, Abu Dhabi is known for its flash supercars, high rise buildings, and glamorous lifestyle; it is very rare that you see a car covered in dirt or sand.  The government imposes heavy fines for not keeping your vehicle clean. Plus, washing your car in open parking lots of residential areas is a punishable offense. It is also unacceptable to leave your cars unwashed for a long time as this type of behavior can tarnish the aesthetic appearance of the city. For these reasons, car wash centers are flocked almost every day of the week. To add to the people’s misery, these said car wash centers are concentrated in the industrial sites of Abu Dhabi. The other car wash options are doorstep wash, wash at shopping malls or avail services from a fuel station. 
// <br /><br />
// Finding the best deal from the above options takes a lot of time and effort. Hence, Sayaraa decided to take off that stumbling block and provide a platform of authorized service providers and vendors. We provide services that are not only limited to the car wash but also car rentals, car maintenance and car buy/sell.  
// Our list of A-Class collaborators offers car wash at your doorstep to shopping malls entirely at your convenience. The best part of choosing Sayaraa is that we do consider the fact that water is an asset and should be conserved. Hence, the water used in washing the car is saved, recycled & reused which results in less water wastage and encourages an environment-friendly wash in order to maintain sustainability with available resources.
// <br /><br />
// Using Sayaraa is a cakewalk. Download the app, search for your required service from your location and avail services from the list that pops up. You can request services as per your convenience from your home. If not, leave your car with a service provider, sit back, relax and save time with Sayaraa priority. The mobile app is user-friendly with search tools as easy as a cakewalk. Appointments can be made easily at your ease and comfort. The unique selling point of Sayaraa is its pricing and offers anytime-anywhere. All you need to do is just open the app, select your location, desired time frame, type of service, and voila!  
// We have a lot more to offer. Stay tuned to find more.  
//         </p>
//     </div>

 
//     </div>

// </div>
// ))
const thisProduct = blogread && blogread.find(prod => prod.blog_alias === blog_alias)
console.log(thisProduct,'blockreadblockreadblockreadblockreadblockread')

  return (
      <>
      <div>
          <Header />
          {thisProduct && <div className='main-container-blog'>
    <div >
        <h1 className='first-head'>
        Car wash
      
        </h1>
    </div>
    <div style={{width:'100%'}}>
    <div className='heading-blog-flex'>
        <div className='heading-left-blog'>
              <div>
                  <h1 className='second-main-head'>
              
              {thisProduct.title}
              </h1>
              </div>
        </div>
        <div className='heading-right-blog'>
          <div>
              <p className='read-date'>
                  {/* 15 Nov, 2021 */}
                  {thisProduct.added_date}
                  </p>
          </div>
        </div>
    </div>
</div>
    <div className='main-div-img'>
    <div className='main-img'>
          <img src={`https://sayaraagroup.com/${thisProduct.blog_image}`} alt=''/>
    </div>

    <div>
        <br /> <br />
        <p ></p>
        <p className='read-para' dangerouslySetInnerHTML={{ __html: thisProduct.description}}>
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
        </p>
    </div>


    </div>

</div> }
          <Footer />
      </div>
      </>
  )
}
export default BlogRead;