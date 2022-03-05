import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Stepper,Step,StepLabel} from '@material-ui/core'
import StepOne from './StepOne';
import '../../style/Signup.scss'
import Steptwo from './Steptwo'
const useStyles = makeStyles(theme =>({
 
   root:{
    width:"100%",
  
   
    "& .MuiStepIcon-root.MuiStepIcon-active":{
        color:'#FFF4EB',
        fill: '#FB7E15',
    },
    "& .MuiStepIcon-root.MuiStepIcon-completed":{
              color:'green'
    },
    "& .MuiPaper-root":{
      backgroundColor:'transparent',
      borderBottom:'1px solid rgba(211, 215, 223, 0.6)',
      margin:'0 auto',
      width:'98%'
    },
    "& .MuiStepIcon-text":{
    
//       fontFamily: 'poppins',
// fontStyle: 'normal',
// fontWeight: '500',
// fontSize:'24px'
    },
    "& .MuiTypography-h5":{
      fontFamily: 'poppins',
      fontStyle:'normal',
      fontWeight: '500',
      fontSize: '24px',
      lineHeight: '120%',
      color: '#151C28',
      textAlign:'left',
      paddingLeft:'80px',
      paddingBottom:'30px',
      marginTop:'18px'
     },
     "& .MuiTypography-h1":{
      fontFamily: 'poppins',
      fontStyle:'normal',
      fontWeight: '500',
      fontSize: '24px',
      lineHeight: '120%',
      color: '#151C28',
      textAlign:'left',
      paddingLeft:'98px',
      // paddingBottom:'30px',
      marginTop:'40px'
     },
     "& .MuiFilledInput-root":{
      background: '#F4F6FA',
      borderRadius: '4px',
     },
     "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root":{
backgroundColor:'#F4F6FA',
border:'none',
outLine:'none',
// marginTop:"27px"
     },

    //  '@media(minWidth: 600px)' : {
    //   width: '100%'
    // },
  
   },
   [theme.breakpoints.between("sm", "md")]: {
    width:'100%',
    left:'0px'
   },
   "@media (min-width: 600px)": {
     root:{width:'100%',left:'0px'}

   }
}));
const Multistep = () => {
    const [activeStep, setActiveStep] = React.useState(0);

    const Getstep = ()=>{
        return ["SIGN UP","CHOOSE PLAN", "checkout"]
    }
    const steps = Getstep()
    const Getstepcontent = (stepIndex) =>{
        switch(stepIndex){
            case 0:
                return <StepOne />;
            case 1:
                return <Steptwo onFileChange={(files) => onFileChange(files)}/>;
            case 2:
                return "Step Three (checkout)";
            default: return "Unkonwn step"
        }
    }

    const handleNext = (e) => {
      e.preventDefault()
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };
    const classes = useStyles();
    const onFileChange = (files) => {
      console.log(files);
  }

  return( 
    <>
       <div className='signup-img'>
         <div className='form-content-div'>
           <div className='form-content-div-second'>
             <h1 className='form-headings'>
             Come Partner with us
             </h1>
             <p className='form-para'>Please complete all needed fields for registration and enjoy receiving more customers.</p>
           </div>
         </div>
    </div> 
 <div className='main-div-form'>
 <div  className={classes.root}>
<Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
 
  <>
  {activeStep === steps.length ? "The Steps" :
       (
        <form onSubmit={handleNext}> {Getstepcontent(activeStep)}
               <hr className="border-bot"/>
       <button type='submit' className='form-btn' >{activeStep === steps.length - 1 ? "finish" : "Next" }</button>
       </form>)}
  </>
      
  </div>
  </div></>)
};

export default Multistep;