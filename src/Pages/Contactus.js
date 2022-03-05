import React,{useState,useEffect} from 'react';
import Footer from '../Footer'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import '../style/Contactus.scss';
import { useDispatch, useSelector } from "react-redux";
import Location from '../images/Location.png';
import Call from '../images/Call.png';
import Message from '../images/Message.png'
import Header from '../Header'
import {FetchdataContactus} from '../Service';

const Contactus = ()=>{
  const dispatch = useDispatch();
  const newData = useSelector((state) => state.ContactUs.Contactus);
  console.log(newData,"newData  ")
  const [inputValues, setInputValue] = useState({
    contact_name: "",
    contact_email: "",
    contact_subject: "",
    contact_phone: "",
    contact_message: "",
 
  });

  useEffect(() => {
    if (Contactus && Contactus.status === true) {
      setInputValue(Contactus);
    }
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }
  // const [name,setName] = useState('');
  // const [contactEmail,setContactEmail] = useState('');
  // const [contactSubject,setContactSubject] = useState("");
  // const [contactPhone,setContactPhone] = useState("");
  // const [contactMessage,setContactMessage] = useState("");
  const onSubmited = e => {
		e.preventDefault();

		// const newUser = {
		// 	name: name,
		// 	contactEmail: contactEmail,
		// 	contactSubject: contactSubject,
		// 	contactPhone: contactPhone,
    //   contactMessage:contactMessage
		// };
    dispatch(FetchdataContactus(inputValues));
		console.log(inputValues,'inputValues');
	};
    return(
        <>
        
        <div className='contactus-main'>
          <Header />
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} justifyContent='center'>
        <Grid item xs={12} md={4} lg={4} xl={4} mt={10}>
         <div>
             <div className='contact-content'>
             <h1 className='contact-heading'>Contact us</h1>
          <br/>
          <p className='contact-para'>If you have any questions simply use the following contact details. We’re available 24x7.</p>
          <div className='address-div'>
              <div>
<div><img src={Location} className='contact-icon' alt=''/></div>
              </div>
              <div>
                 <div>
                 <p className='location-para'>
                Sayaraa Group FZC 
                 <br />
                <span className='location-span'>Business center, Sharjah Publishing City <br /> Free Zone </span>
                <br />
                <span className='location-span'>Sharjah, United Arab Emirates </span></p>
                 </div>
              </div>
          </div>

          <div className='address-div'>
              <div>
<div><img src={Call} className='contact-icon' alt=''/></div>
              </div>
              <div>
                 <div>
                 <p className='location-para'>
                 +971-504073436
                 </p>
                 </div>
              </div>
          </div>

          <div className='address-div'>
              <div>
<div><img src={Message} className='contact-icon' alt=''/></div>
              </div>
              <div>
                 <div>
                 <p className='location-para'>
                 info@sayaraagroup.com
                 </p>
                 </div>
              </div>
          </div>
             </div>
         </div>
        </Grid>
        <Grid item  xs={10} md={6} lg={6} xl={6} mt={10}>
         <div>
             <div className='conractform-div'>
               <div><h1 className='form-head'>Write us!</h1></div>
<form onSubmit={onSubmited}>
               <div className='contact-input-div forminput'><input type='text'  name='contact_name' value={inputValues.contact_name}  className='input1'  placeholder='Full Name' onChange={(e) => handleChange(e)}/></div>

               <div className='contact-input-div forminput'><input type='text' name="contact_email" value={inputValues.contact_email}  className='input1' placeholder='Email ID'  onChange={(e) => handleChange(e)}/></div>

               <div className='contact-input-div forminput'><input type='text' name="contact_subject" value={inputValues.contact_subject}  className='input1' placeholder='contact' onChange={(e) => handleChange(e)}/></div>
 
               <div className='contact-input-div forminput'><input type='text' name="contact_phone" value={inputValues.contact_phone}  className='input1'  placeholder='Mobile Number ' onChange={(e) => handleChange(e)}/></div>

               <div className='textarea-div forminput'><textarea type='text' name="contact_message" value={inputValues.contact_message}  className='input1'  placeholder='Message' onChange={(e) => handleChange(e)}/></div>

               <div className='contactbtn-div'><button type='submit' className='contactform-btn'>Submit</button></div>
            </form>
             </div>
         </div>
        </Grid>
      </Grid>
    </Box>
        </div>
        <Footer />
        </>
    )
}
// const mapstate = state=>{
//   return{
//       Contactus:state,
//   }
  
// }
// console.log('flsjflsdjlfjls',mapstate)
// const mapDispatchprops = (dispatch)=>{
//   return{
//     FetchdataContactus:()=>{
//           dispatch(FetchdataContactus());
//       }
//   }
// }

// export default connect(mapstate,mapDispatchprops)(Contactus);
export default Contactus;
