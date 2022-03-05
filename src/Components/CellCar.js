import * as React from 'react';
import {connect} from 'react-redux'
import {FetchdataSellcarlist} from '../Service'
import Grid from '@mui/material/Grid';
import washcard from '../images/washcard.png';
import Right from '../images/right.png'
import '../style/Carservice.scss';
import Star from '../images/Star 1.png'
const Cellcartabs = ({FetchdataSellcarlist,SellcarList,search})=>{
const [modallist,setModallist] = React.useState([]);
 React.useEffect(()=>{
    FetchdataSellcarlist();
  },[]);
  React.useEffect(()=>{
    if(SellcarList && SellcarList.SellcarList.data){
        setModallist(SellcarList.SellcarList.data)
    }
    
  },[SellcarList])


 
const CellcarLists = ()=>
modallist.filter((value) => {
    if (search === "") {
      return value;
    } else if (
      value.brand.toLowerCase().includes(search.toLowerCase())
    ) {
      return value;
    }
  }).map((list,index)=>(
    <Grid container spacing={2} mb={5} className='main1' key={index}>
    <Grid item  xs={12} md={4} xl={4}>
        <div>
          <div className='car-img-div1'>
              <img src={`https://sayaraagroup.com/${list.st_image}`} alt='' style={{borderRadius:"15px"}}/>
          </div>
      </div>
    </Grid>
    <Grid item  xs={12} md={8} xl={8}>
      <div>
          <div className='card-heading1 '>
          <div className='card-main-heading1'>
                  <div>
                  {/* <h1>Exterior Wash</h1> */}
                  <h1>{list.brand}</h1>
                  </div>
                  <div className='add-div1'>
                      {/* <p className='add-para1'>AED 100</p> */}
                      <p className='add-para1'>{list.price}</p>
                      <p className='line1'>AED 100</p>
                  </div>
              </div>
              
              <div className='card-ratings-withcontent1'>
                  <div>
                  {/* <p>By Almjra car wash, Opposite EMC, Musaffah-5 | 2 kms</p> */}
                  <p>{list.description}</p>
                  </div>
                  <div className='ratings-div1'>
                     <div className='ratingswithcontent-div1'>
                         <div className='rate-flex1'> <img  src={Star} alt=''/></div>
                         <div><p className='rates1'>4</p></div>
                     </div>
                  </div>
              </div>
             
              {/* <div className='cardwash-list1'>
                  <div className='cardwash-listimgdiv1'>
                      <img src={Right} alt=''/>
                  </div>
                  <div className='carwash-contentlist1'>
                    <p>Service at doorstep & workstation</p>
                  </div>
              </div>
              <div className='cardwash-list1'>
                  <div className='cardwash-listimgdiv1'>
                      <img src={Right} alt=''/> 
                  </div>
                  <div className='carwash-contentlist1'>
                    <p>Packages are available</p>
                  </div>
              </div>
              <div className='cardwash-list1'>
                  <div className='cardwash-listimgdiv1'>
                      <img src={Right} alt=''/>
                  </div>
                  <div className='carwash-contentlist1'>
                    <p>Complementary services</p>
                  </div>
              </div> */}
          </div>
      </div>
     
    </Grid>
    
    <Grid item xs={12}>
    <div className='border1'>
    
    </div>
    </Grid>
  </Grid>
))



    return(
        <>
        <div>
{CellcarLists()}
        </div>
     
        </>
    )
}

// export default Servicetabs;

const mapstate = state=>{
    return{
        SellcarList:state.SellcarList,
    }
    
  }
  const mapDispatchprops = (dispatch)=>{
    return{
        FetchdataSellcarlist:()=>{
            dispatch(FetchdataSellcarlist());
        }
    }
  }
  
  export default connect(mapstate,mapDispatchprops)(Cellcartabs);