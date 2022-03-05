import React  from 'react';
import '../style/Blog.scss'
import CardRoutes from './Cardcontent';
import {Link} from 'react-router-dom'
import cardero from '../images/cardero.png'
import Header from '../Header'
import {connect} from 'react-redux'
import { FetchdataBlog } from "../Service";
// import blog1 from '../images/blog1.png'
// import blog3 from '../images/blog3.png'
 const Blog = ({FetchdataBlog,Blogtext})=> {
    //  const [cards,setCards] = useState()
    console.log(Blogtext.Blog.Blogtext.data,'FetchdataBlog')
    const [blogtexts, setBlogtext] = React.useState([]);
    React.useEffect(() => {
      FetchdataBlog();
    }, []);
    React.useEffect(() => {
      if (Blogtext && Blogtext.Blog.Blogtext.data) {
        setBlogtext(Blogtext.Blog.Blogtext.data);
      }
    }, [Blogtext]);
   const BlogtextCard = ()=>
    blogtexts.map((data,i)=>(
<div className="card" key={i}>
       <div className="card-header" >
         <img src={`https://sayaraagroup.com/${data.blog_image}`} alt="rover" />
       </div>
       <div className="card-body">
         <span className="tag ">car wash</span>
         <h4 className='card-heading'>
     {/* Beyond Car Wash And More: An App For All That Your Car Needs */}
     {data.title}
         </h4>
         {/* <p ></p> */}
         
         <p className='card-para' dangerouslySetInnerHTML={{ __html: data.description.substring(0, 230)}}>
         {/* A do-it-all app for your car. Sounds too good to believe? When everything from food to clothes is available at your fingertips, why not car services? For the first time in Abu Dhabi, we are bringing together all car-related... */}
        
      
         </p>
         <div className="user">
          <div className='date'><p className='dates'>{data.added_date}</p></div>
           <div className="user-info">
            <Link className='link block-card-link' to={`/blog/${data.blog_alias}`}>Read More <img src={cardero} style={{width:'20px' , height:'auto'}} alt=''/></Link>
            
           </div>
         </div>
       </div>
     </div>
    ))
    // {CardRoutes.cardcontent.map((data)=>{
    //   return <div className="card">
    //    <div className="card-header">
    //      <img src={data.image} alt="rover" />
    //    </div>
    //    <div className="card-body">
    //      <span className="tag ">{data.name}</span>
    //      <h4 className='card-heading'>
    //  Beyond Car Wash And More: An App For All That Your Car Needs
    //      </h4>
    //      <p className='card-para'>
    //      A do-it-all app for your car. Sounds too good to believe? When everything from food to clothes is available at your fingertips, why not car services? For the first time in Abu Dhabi, we are bringing together all car-related...
    //      </p>
    //      <div className="user">
    //       <div className='date'><p className='dates'>05/11/2021</p></div>
    //        <div className="user-info">
    //         <Link className='link' to='/carwash'>Read More <img src={cardero} style={{width:'20px' , height:'auto'}} alt=''/></Link>
            
    //        </div>
    //      </div>
    //    </div>
    //  </div>
    //  })}
  return(
     
  <>
    <div>
      <Header />
       <div className='blog-main'>
       {/* <div className="left-blog">
        fgfdgdg
        </div> */}
        <div className='blog-right'>
           <div className='content-div'> <p className='blog-head'>Latest read</p>
           <h1 className='main-head'>Beyond Car Wash And More: An App For All That Your Car Needs</h1>
           <p className='blog-para'>A do-it-all app for your car. Sounds too good to believe? When everything from food to clothes is available at your fingertips</p>
           <div className='btn-group'><button className='blog-btn'><a href='#/'>Read More</a></button></div>
           </div>
        </div>
       </div>
       <div className="container">
{BlogtextCard()}
  {/* <div className="card">
    <div className="card-header">
      <img src={blog2} alt="ballons" />
    </div>
    <div className="card-body">
      <span className="tag ">Car wash</span>
      <h4 className='card-heading'>
Beyond Car Wash And More: An App For All That Your Car Needs
      </h4>
      <p className='card-para'>
      A do-it-all app for your car. Sounds too good to believe? When everything from food to clothes is available at your fingertips, why not car services? For the first time in Abu Dhabi, we are bringing together all car-related...
      </p>
      <div className="user">
       <div className='date'><p className='dates'>05/11/2021</p></div>
        <div className="user-info">
         <Link className='link'>Read More <img src={cardero} style={{width:'20px' , height:'auto'}}/></Link>
         
        </div>
      </div>
    </div>
  </div> */}
  {/* <div className="card">
    <div className="card-header">
      <img src={blog3} alt="city" />
    </div>
    <div className="card-body">
      <span className="tag">Car wash</span>
      <h4 className='card-heading'>
Beyond Car Wash And More: An App For All That Your Car Needs
      </h4>
      <p className='card-para'>
      A do-it-all app for your car. Sounds too good to believe? When everything from food to clothes is available at your fingertips, why not car services? For the first time in Abu Dhabi, we are bringing together all car-related...
      </p>
      <div className="user">
       <div className='date'><p className='dates'>05/11/2021</p></div>
        <div className="user-info">
         <Link className='link'>Read More <img src={cardero} style={{width:'20px' , height:'auto'}}/></Link>
         
        </div>
      </div>
    </div>
  </div> */}
    </div>
   </div>
      </>
  )
}
// export default Blog

const mapstate = (state) => {
  return {
    Blogtext: state,
  };
};
const mapDispatchprops = (dispatch) => {
  return {
    FetchdataBlog: () => {
      dispatch(FetchdataBlog());
    },
  };
};

export default connect(mapstate, mapDispatchprops)(Blog);