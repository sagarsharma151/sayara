import React,{useState} from "react";
// import { styled } from '@mui/material/styles';
import Box from "@mui/material/Box";
// import Paper from '@mui/material/Paper';
import {FetchdataGetquotation} from '../Service'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import Star from "../images/star.png";
import "../style/secondhead.scss";
import HeadApps from "../images/head-app.png";
import HeadGoogle from "../images/head-google.png";
import { FetchdataBrandList } from "../Service";
import {FetchdataModallist} from '../Service'
// import {FetchdataGetquotation} from '../Service'
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Offeringtabs from "../Components/Tabs";
import Select from "@mui/material/Select";
// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));
const useStyles = makeStyles(theme => ({
  selectinput:{
    "& .css-1km1ehz":{
      justifyContent:'space-between'
    }
  },
  FORM: {
    [theme.breakpoints.down("xs")]: {
      minWidth:' 145px',
      width: '145px',
      height:"55px"
    },
    [theme.breakpoints.between("sm", "md")]: {
      minWidth:' 145px',
      width: '145px',
      minWidth:' 145px',
      width: '145px',
    },
    "@media (min-width: 1280px)": {
      minWidth:' 220px',
    width: '220px'
    },
  // "& .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root":{
  //   minWidth:' 220px',
  //   width: '220px'
  // },
  
  //    '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':{
  //      display: 'flex'
  //    },
 
   },
   select :{
     "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":{
       display:'flex'
     }
   },
  Formbtn: {
    [theme.breakpoints.down("xs")]: {
      marginTop:'20px',
      backgroundColor:'#151c28'
    },
    [theme.breakpoints.between("sm", "md")]: {
      marginTop:'20px',
      backgroundColor:'#151c28'
    },
    "@media (min-width: 1280px)": {
   marginTop:'20px',
   backgroundColor:'#151c28'
    },
   },
  //  select :{
  //    "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":{
  //      display:'flex'
  //    }
  //  }
  // button: {
  //   color: "white",
  //   [theme.breakpoints.down("xs")]: {
  //     marginTop: theme.spacing(1),
  //     backgroundColor: "purple"
  //   },
  //   [theme.breakpoints.between("sm", "md")]: {
  //     marginTop: theme.spacing(3),
  //     backgroundColor: "blue"
  //   },
  //   "@media (min-width: 1280px)": {
  //     marginTop: theme.spacing(5),
  //     backgroundColor: "red"
  //   }
  // }
}));
const SecondHead = () => {
  const [inputValues, setInputValue] = useState({
    brand_name: "",
    model_name: "",
  });
  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };
  const [brandlist, setBrandlist] = React.useState([]);
  const brandList = useSelector((state) => state);
  console.log("brandList123", brandList);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(FetchdataBrandList());
  },[]);
  React.useEffect(() => {
    if (brandList && brandList.BrandList.BrandList.data) {
      setBrandlist(brandList.BrandList.BrandList.data);
    }
  }, [brandList]);
  // React.useEffect(()=>{
  //   FetchdataModallist();
  // },[])
  // const onSubmited = e => {
  //   e.preventDefault();

  // const newUser = {
  // 	contact_name: contact_name,
  // 	contactEmail: contactEmail,
  // 	brand_name: brand_name,
  // 	contactPhone: contactPhone,
  //   model_name:model_name
  // };
  //   dispatch(FetchdataGetquotation(inputValues));
  //   console.log(inputValues,'inputValues');
  // };
 
  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }
  // React.useEffect(() => {
  //   Fetchdata();
  // }, []);

  // React.useEffect(() => {
  //   if (ImageSlider && ImageSlider.ImageSlider.ImageSlider.data) {
  //     setSlide(ImageSlider.ImageSlider.ImageSlider.data);
  //   }
  // }, [ImageSlider]);

   // console.log('sdfldsflsflsf',ModalList.ModalList.data)
   const [modallist,setModallist] = React.useState([])
   // const [age, setAge] = React.useState("");
   React.useEffect(()=>{
       dispatch(FetchdataModallist()) ;
   },[])
   React.useEffect(()=>{
       if(brandList && brandList.ModalList.ModalList.data){
           setModallist(brandList.ModalList.ModalList.data)
       }
   },[brandList])

   console.log('modallist',modallist)
   // const handleChange = (event) => {
   //     setAge(event.target.value);
   //   };
   const classes = useStyles();
   const onSubmited = e => {
    e.preventDefault();

  // const newUser = {
  // 	contact_name: contact_name,
  // 	contactEmail: contactEmail,
  // 	brand_name: brand_name,
  // 	contactPhone: contactPhone,
  //   model_name:model_name
  // };
    dispatch(FetchdataGetquotation(inputValues));
    if(inputValues){
      toast.success("Thanks Your Quotation request received", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: false
      });
    
    console.log(inputValues,'inputValues');
    // const notify =()=>{ 
     
    //   }
    setInputValue({
      contact_name: "",
      contact_email: "",
      brand_name: "",
      model_name: "",
    });
  };
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }} style={{background:"red"}}>
        <Grid container spacing={2}>
          <Grid item xs={12} className="sechead-bg">
            <Grid container spacing={2} className="secondhead" p={2}>
              <Grid item xs={8} md={8} xl={8}>
                <div className="second-headstar">
                  <div className="secondhead-img-div">
                    <img src={Star} alt="star" className="head-img" />
                  </div>
                  <div className="offeringhead-content">
                    <h5 className="offeringsecondhead-content-h1">
                      Download The Sayaraa app & book your service now!
                    </h5>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4} xl={4}>
                <div className="head-social">
                  <div className="social-imgdiv1">
                  <a  href='https://play.google.com/store/apps/details?id=com.sjainpune.sayaraa&hl=en' target="_blank"><img src={HeadGoogle} alt="star" className="social-img1" /></a>
                  </div>
                  <div className="social-imgdiv2">
                  <a  href='https://apps.apple.com/in/app/sayaraa/id1491527366' target="_blank"><img className="social-img2" src={HeadApps} alt="star" /></a>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <div className="main-container">
        <Grid container justifyContent="space-between">
          <Grid item xs={12} md={3} xl={3}>
            <div>
              <h4 className="left-heading">Get your free quotation...</h4>
            </div>
            <form onSubmit={onSubmited}>
            <Grid container>
              <Grid item xs={6} md={12} xl={12}>
                <div>
                <FormControl sx={{ m: 1, ml: 0, mt: 2 }} className={classes.FORM}>
                <Select
                  style={{ height: "44px",display: "flex" }}
                  name="brand_name" 
                  value={inputValues.brand_name}
                  onChange={(e) => handleChange(e)}
                  displayEmpty
                  required
                  inputProps={{ "aria-label": "Without label" }}
                  className={`${classes.select} ${classes.selectinput}`}
                >
                  <MenuItem value="">
                    <em>Select Brand Name</em>
                  </MenuItem>
                 
                  {brandlist.map((num, i) => (
                    <MenuItem value={num.brand_name} key={i} className={classes.selectinput}>
                      {/* <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      > */}
                        <div style={{ widht: "40%" }}>
                          <em>{num.brand_name}</em>
                        </div>{" "}
                        <div style={{ width: "20%" }}>
                          <div style={{ width: "40px", height: "auto" }}>
                            <img
                              src={`https://sayaraagroup.com/${num.brand_image}`}
                              style={{ width: "100%", height: "100%" }} alt=''
                            />
                          </div>
                        </div>
                      {/* </div> */}
                    </MenuItem>
                  ))}

                  {/* <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
              </FormControl>
                </div>
              </Grid>
              <Grid item xs={6} md={12} xl={12}>
                <div>
                <FormControl sx={{ m: 1, ml: 0, mt: 2 }} className={classes.FORM}>
                <Select
                  style={{ height: "44px",display:'flex' }}
                  value={inputValues.model_name}
                  onChange={(e) => handleChange(e)}
                  displayEmpty
                  required
                  name="model_name" 
                  inputProps={{ "aria-label": "Without label" }}
                  className={`${classes.select} ${classes.selectinput}`}
                >
                  <MenuItem value="">
                    <em>Select Modal Name</em>
                  </MenuItem>
                
                  {modallist.map((num,i)=>(
                    <MenuItem value={num.model_name} key={i} className={classes.selectinput}>
                      {/* <div style={{display:'flex',justifyContent:'space-around'}}> */}
                        <div style={{widht:'40%'}}><em>{num.model_name}</em></div>  <div style={{width:'20%'}}><div style={{width:'40px',height:'auto'}}><img src={`https://sayaraagroup.com/${num.model_image}`} alt='' style={{width:'100%',height:'100%'}} /></div></div>
                        {/* </div> */}
                        </MenuItem>
                  ))}
                  
                  {/* <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
              </FormControl>
                </div>
              
            {/* <div style={{ textAlign: "center", marginTop: "20px" }}>
           
            </div> */}
              </Grid>
              <Grid xs={12}>
              <div className="dropdowns">
              <input
                type="text"
                className="homeNames"
                placeholder="Enter Name"
                name='contact_name' value={inputValues.contact_name}
                onChange={(e) => handleChange(e)}
                required
              />
              <input
                type="email"
                placeholder="Enter email"
                className="homeNames  nameoffering"
                name="contact_email" value={inputValues.contact_email}
                onChange={(e) => handleChange(e)}
                required
              />

<Button variant="contained" type='submit' className={classes.Formbtn}>
                Get Free Quotation
              </Button>
            </div>
              </Grid>
            </Grid>
            </form>
          </Grid>
          <Grid item mt={0} xs={12} md={9} xl={9}>
            <Grid container spacing={2}>
              {/* <Grid item xs={12} md={8} xl={8}>
                <div>
                  <h1 className="explore-heading">Explore Our Offerings</h1>
                </div>
              </Grid>
              <Grid item xs={12} md={4} xl={4}>
                <div className="search-container">
                  <Searchbar />
                </div>
              </Grid> */}
              <Grid item xs={12}>
                <Offeringtabs />
              </Grid>
              {/* <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default SecondHead;
