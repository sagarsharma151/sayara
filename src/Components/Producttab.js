import React ,{useEffect,useState} from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import {connect} from 'react-redux'
import {FetchdataCarproductlist} from '../Service'
import Grid from '@mui/material/Grid';
import washcard from '../images/washcard.png';
import Right from '../images/right.png'
import '../style/Carservice.scss';
import Star from '../images/Star 1.png'
// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const Producttab = ({FetchdataCarproductlist,CarproductList,search})=>{
    const [productlist,setProductlist] = useState([])
    useEffect(()=>{
        FetchdataCarproductlist();
    },[])
    useEffect(()=>{
        if(CarproductList && CarproductList.CarproductList.data){
            setProductlist(CarproductList.CarproductList.data)
        }
    })

    const Productlistshow = ()=>
    productlist.filter((value) => {
        if (search === "") {
          return value;
        } else if (
          value.service_name.toLowerCase().includes(search.toLowerCase())
        ) {
          return value;
        }
      }).map((list,index)=>(
        <Grid container spacing={2} className='main1' key={index}>
        <Grid item  xs={12} md={4} xl={4}>
            <div>
              <div className='car-img-div1'>
                  <img src={`https://sayaraagroup.com/${list.image}`} style={{borderRadius:"15px"}} alt=''/>
              </div>
          </div>
        </Grid>
        <Grid item  xs={12} md={8} xl={8}>
          <div>
              <div className='card-heading1 '>
              <div className='card-main-heading1'>
                      <div>
                      {/* <h1>Wheel Balance</h1> */}
                      <h1>{list.service_name}</h1>
                      </div>
                      <div className='add-div1'>
                          {/* <p className='add-para1'>AED 100</p> */}
                          <p className='add-para1' >{list.price}</p>
                          <p className='line1'>AED 100</p>
                      </div>
                  </div>
                  
                  <div className='card-ratings-withcontent1'>
                      <div>
                      <p>By Almjra car wash, Opposite EMC, Musaffah-5 | 2 kms</p>
                      </div>
                      <div className='ratings-div1'>
                         <div className='ratingswithcontent-div1'>
                             <div className='rate-flex1'> <img  src={Star} alt=''/></div>
                             <div><p className='rates1'>4/5</p></div>
                         </div>
                      </div>
                  </div>
                 
                  {/* <div className='cardwash-list1'>
                      <div className='cardwash-listimgdiv1'>
                          <img src={Right}  alt=''/>
                      </div>
                      <div className='carwash-contentlist1'>
                        <p>Service at doorstep & workstation</p>
                      </div>
                  </div>
                  <div className='cardwash-list1'>
                      <div className='cardwash-listimgdiv1'>
                          <img src={Right}  alt=''/> 
                      </div>
                      <div className='carwash-contentlist1'>
                        <p>Packages are available</p>
                      </div>
                  </div>
                  <div className='cardwash-list1'>
                      <div className='cardwash-listimgdiv1'>
                          <img src={Right}  alt=''/>
                      </div>
                      <div className='carwash-contentlist1'>
                        <p>Complementary services</p>
                      </div>
                  </div> */}
              </div>
          </div>
         
        </Grid>
        
        <Grid item xs={12} mb={5}>
        <div className='border1'>
        
        </div>
        </Grid>
    
      </Grid>
    ))
    return(
        <>
        <div>{Productlistshow()}</div>
     
        </>
    )
}

// export default Producttab;
const mapstate = (state) => {
    return {
        CarproductList: state.CarProductList,
    };
  };
  const mapDispatchprops = (dispatch) => {
    return {
        FetchdataCarproductlist: () => {
        dispatch(FetchdataCarproductlist());
      },
    };
  };
  
  export default connect(mapstate, mapDispatchprops)(Producttab);