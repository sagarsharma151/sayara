import React,{useEffect,useState} from 'react';
import '../style/Blogread.scss'
import { useHistory } from 'react-router-dom';
import {useParams} from "react-router-dom"
import Header from '../Header'
import discount from '../images/discount 1.png'
import formmain from '../images/form-main.png'
import '../style/productdetails.scss'
import { Fetchdata } from "../Service";
import { useDispatch, useSelector } from "react-redux";
import Footer from '../Footer'
const ProductDetails = () => {
  const history = useHistory();
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
    {thisProduct &&   <div class="containers">
   
    
  <div class="cookiesContent" id="cookiesPopup">
  
  <div style={{height:'100px', width:'100%',position:'relative'}}> <a href="/" className="close">✖</a><img src={formmain} className='modal-img' alt="cookies-img" />
    <div className="modal-content"><h1 className='modal-main-text'>{thisProduct.company_name}</h1>
    <h5  className='modal-second-text'>dfgfdgdfgdfg </h5></div> <div className='discount-div'><img src={discount} alt=''/><span className='discount-text'> {thisProduct.promo_discount}% OFF</span></div></div>
    
    
  <div>  <p className='modal-text content-text-style'>About Vendor<br></br><span className='about-inside'> <p className='read-para' dangerouslySetInnerHTML={{ __html: thisProduct.company_details}}></p></span></p>
    <p className='content-text-style'>Service <br></br><span className='about-inside'>{thisProduct.service_name} </span></p>
   </div>
   <div className="btngotit">  <button class="accept" onClick={()=>{history.push('/')}}>Ok, got it</button></div>
  
  </div>
</div>}
 
    <Footer />
</div>
  )
}

export default ProductDetails