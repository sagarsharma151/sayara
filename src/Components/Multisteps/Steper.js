import React, { useRef, useState } from 'react';
import axios from "axios";
import {
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import '../../style/Signup.scss';

import { ImageConfig } from '../../config/ImageConfig'; 
import uploadImg from '../../images/img-icon.png';
import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  
    color: 'white',
    background: '#FB7E15',
    borderRadius:' 8px',
    marginTop:'26px'
  },
  "& .MuiStepper-root":{
padding:0
  },
  "& .makeStyles-button-11":{
marginTop:'20px',
float:'right'
  }
}));

function getSteps() {
  return [
    "SIGN UP",
    "CHOOSE PLAN",
    "checkout",
    // "Payment",
  ];
}
const BasicForm = () => {
  const { control } = useFormContext();
//   const useStyles = makeStyles(theme =>({
//     root:{
//      width:"100%",
   
    
//      "& .MuiStepIcon-root.MuiStepIcon-active":{
//          color:'#FFF4EB',
//          fill: '#FB7E15',
//      },
//      "& .MuiStepIcon-root.MuiStepIcon-completed":{
//                color:'green'
//      },
//      "& .MuiPaper-root":{
//        backgroundColor:'transparent',
//        borderBottom:'1px solid rgba(211, 215, 223, 0.6)',
//        margin:'0 auto',
//        width:'98%'
//      },
//      "& .MuiStepIcon-text":{
     
//  //       fontFamily: 'poppins',
//  // fontStyle: 'normal',
//  // fontWeight: '500',
//  // fontSize:'24px'
//      },
//      "& .MuiTypography-h5":{
//        fontFamily: 'poppins',
//        fontStyle:'normal',
//        fontWeight: '500',
//        fontSize: '24px',
//        lineHeight: '120%',
//        color: '#151C28',
//        textAlign:'left',
//        paddingLeft:'80px',
//        paddingBottom:'30px',
//        marginTop:'18px'
//       },
//       "& .MuiTypography-h1":{
//        fontFamily: 'poppins',
//        fontStyle:'normal',
//        fontWeight: '500',
//        fontSize: '24px',
//        lineHeight: '120%',
//        color: '#151C28',
//        textAlign:'left',
//        paddingLeft:'98px',
//        // paddingBottom:'30px',
//        marginTop:'40px'
//       },
//       "& .MuiFilledInput-root":{
//        background: '#F4F6FA',
//        borderRadius: '4px',
//       },
//       "& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root":{
//  backgroundColor:'#F4F6FA',
//  border:'none',
//  outLine:'none',
//  // marginTop:"27px"
//       },
 
//      //  '@media(minWidth: 600px)' : {
//      //   width: '100%'
//      // },
   
//     },
//     [theme.breakpoints.between("sm", "md")]: {
//      width:'100%',
//      left:'0px'
//     },
//     "@media (min-width: 600px)": {
//       root:{width:'100%',left:'0px'}
 
//     }
//  }));
  return (
    <>
     <div>
      <Grid container spacing={2}>
      <Grid item xs={12} md={12} lg={12}>
       <div className='form-heading-contact'><h2>Contact</h2></div>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
        <div    className="input-div">
        <Controller
        control={control}
        name="company_email"
        render={({ field }) => (
          <input
            id="company_email"
            label="company_email"
            className="input-div multi-input"
            variant="outlined"
            placeholder="company_email"
            fullwidth="true"
            margin="normal"
            {...field}
          />
        )}
      />
</div>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
        <div    className="input-div">
        <Controller
        control={control}
        name="company_name"
        render={({ field }) => (
          <input
            id="company_name"
            label="company Name"
            className="input-div multi-input"
            variant="outlined"
            placeholder="company name"
            fullwidth="true"
            margin="normal"
            {...field}
          />
        )}
      />
</div>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
        <div    className="input-div">
        <Controller
        control={control}
        name="owner_number"
        render={({ field }) => (
          <input
            id="owner_number"
            label="owner Name"
            className="input-div multi-input"
            variant="outlined"
            placeholder="Enter Your owner number"
            fullwidth="true"
            margin="normal"
            {...field}
          />
        )}
      />
</div>
        </Grid> 
        <Grid item xs={12} md={6} lg={6}>
        <div    className="input-div">
        <Controller
        control={control}
        name="number"
        render={({ field }) => (
          <input
            id="number"
            label="number"
            className="input-div multi-input"
            variant="outlined"
            placeholder="Enter number"
            fullwidth="true"
            margin="normal"
            {...field}
          />
        )}
      />
</div>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
        <div    className="input-div">
        <Controller
        control={control}
        name="exp"
        render={({ field }) => (
          <input
            id="exp"
            label="exp"
            className="input-div multi-input"
            variant="outlined"
            placeholder="Enter Your exp"
            fullwidth="true"
            margin="normal"
            {...field}
          />
        )}
      />
</div>
        </Grid>
      
        <Grid item xs={12} md={12} lg={12}>
        <div    className="div">
        <h1>Address</h1>
</div>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
        <div    className="input-div">
        <Controller
        control={control}
        name="address1"
        render={({ field }) => (
          <input
            id="address1"
            label="address1"
            className="input-div multi-input"
            variant="outlined"
            placeholder="Enter Your address1"
            fullwidth="true"
            margin="normal"
            {...field}
          />
        )}
      />
</div>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
        <div    className="input-div">
        <Controller
        control={control}
        name="address2"
        render={({ field }) => (
          <input
            id="address2"
            label="address2"
            className="input-div multi-input"
            variant="outlined"
            placeholder="Enter Your address2"
            fullwidth="true"
            margin="normal"
            {...field}
          />
        )}
      />
</div>
        </Grid> 
        {/* <Grid  xs={12} md={6} lg={6}>
        <div    className="input-div">
        <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <input
            id="first-name"
            label="First Name"
            className="input-div"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullwidth="true"
            margin="normal"
            {...field}
          />
        )}
      />
</div>
        </Grid> */}
      </Grid>
    </div>
      


    
    </>
  );
};
const ContactForm = (props) => {
  // const { control } = useFormContext();
  const { control } = useFormContext();
  const wrapperRef = useRef(null);

    const [fileList, setFileList] = useState([]);
 
    const [company_image, setImage] = useState([]);
    const onDragEnter = () => wrapperRef.current.classList.add('dragover');

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');

    const onDrop = () => wrapperRef.current.classList.remove('dragover');

    // const onFileDrop = (e) => {
    //     const newFile = e.target.files[0];
    //     if (newFile) {
    //         const updatedList = [...fileList, newFile];
    //         setFileList(updatedList);
    //         props.onFileChange(updatedList);
    //     }
    // }

    const fileRemove = (file) => {
        const updatedList = [...fileList];
        updatedList.splice(fileList.indexOf(file), 1);
        setFileList(updatedList);
        props.onFileChange(updatedList);
    }
  return (
    <>
      <div className='documents-heading-div'> <h1 className='documents-heading'>Company Documents</h1></div>
            <div
                ref={wrapperRef}
                className="drop-file-input"
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
            >
               
                <div className="drop-file-input__label">
                    <img src={uploadImg} alt=""/>
                    
                </div>
                <div><p className='drag-para'>Drag & drop your file here or <span className='browse'> Browse</span></p></div>
                <Controller
        control={control}
        name="company_image"
        render={({ field:{ onChange, value }  }) => (   <input type="file" 
        onChange={async (e) => {
          function readFileAsync() {
            return new Promise((resolve, reject) => {
              const file = e.target.files[0];
              if (!file) {
                return;
              }
              const reader = new FileReader();

              reader.onload = () => {
                resolve({
                  company_image: `data:${file.type};base64,${btoa(reader.result)}`,
               
                });
              };

              reader.onerror = reject;

              reader.readAsBinaryString(file);
            });
          }

          const newImage = await readFileAsync();

          setImage([newImage, ...company_image]);
          onChange([newImage, ...company_image]);
        }} 
  />   )}
        />
            </div>
            {
                fileList.length > 0 ? (
                    <div className="drop-file-preview">
                        <p className="drop-file-preview__title">
                            Ready to upload
                        </p>
                        {
                            fileList.map((item, index) => (
                                <div key={index} className="drop-file-preview__item">
                                    <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />
                                    <div className="drop-file-preview__item__info">
                                        <p>{item.name}</p>
                                        <p>{item.size}B</p>
                                    </div>
                                    <span className="drop-file-preview__item__del" onClick={() => fileRemove(item)}>x</span>
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
    </>
  );
};
const PersonalForm = () => {
  const { control} = useFormContext();
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={12}>
        <div    className="input-div3 uploade">
    
        <Controller
        control={control}
        name="company_doc"
        render={({ field }) => ( 
       
          <input
            id="company_doc"
            type='file'
            className="input-div "
            variant="outlined"
            placeholder="Enter Your First Name"
   
            margin="normal"
            {...field}
          />
          )}
          />
</div>
        </Grid>
        <Grid item xs={12} md={6} lg={12}>
        <div    className="input-div3 uploade">
     
        <Controller
        control={control}
        name="company_logo"
        render={({ field }) => ( 
     
          <input
            id="company_logo"
            type='file'
  
            label="company_logo"
            className="input-div"
            variant="outlined"
            placeholder="Enter Your First Name"
      
            margin="normal"
            {...field}
          />
          )}
          />
</div>
        </Grid>
        
      </Grid>
    </>
  );
};
// const PaymentForm = () => {
//   const { control } = useFormContext();
//   return (
//     <>
//       <Controller
//         control={control}
//         name="cardNumber"
//         render={({ field }) => (
//           <TextField
//             id="cardNumber"
//             label="Card Number"
//             variant="outlined"
//             placeholder="Enter Your Card Number"
//             fullwidth="true"
//             margin="normal"
//             {...field}
//           />
//         )}
//       />
//       <Controller
//         control={control}
//         name="cardMonth"
//         render={({ field }) => (
//           <TextField
//             id="cardMonth"
//             label="Card Month"
//             variant="outlined"
//             placeholder="Enter Your Card Month"
//             fullwidth="true"
//             margin="normal"
//             {...field}
//           />
//         )}
//       />
//       <Controller
//         control={control}
//         name="cardYear"
//         render={({ field }) => (
//           <TextField
//             id="cardYear"
//             label="Card Year"
//             variant="outlined"
//             placeholder="Enter Your Card Year"
//             fullwidth="true"
//             margin="normal"
//             {...field}
//           />
//         )}
//       />
//     </>
//   );
// };

function getStepContent(step) {
  const onFileChange = (files) => {
    console.log(files);
}
  switch (step) {
    case 0:
      return <BasicForm />;

    case 1:
      return <ContactForm onFileChange={(files) => onFileChange(files)}/>;
    case 2:
      return <PersonalForm />;
    // case 3:
    //   return <PaymentForm />;
    default:
      return "unknown step";
  }
}

const LinaerStepper = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      company_email: "",
      company_name: "",
      owner_number: "",
      number: "",
      exp: "",
      address1: "",
      address2: "",
      company_image: "",
      company_doc: "",
      company_logo: "",
    },
  });
  console.log(methods,'methods')
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    console.log(data && data.company_image[0] && data.company_image[0].url ,'1111111111111111111111111111111111111');
    const company_image = data  && data.company_image[0] && data.company_image[0].company_image;
    console.log(company_image,'company_image22222222222222')
    var formData = new FormData();
    
    formData.append('company_email', data.company_email)
    formData.append('company_name', data.company_name)
    formData.append('owner_number', data.owner_number)
    formData.append('number', data.number)
    formData.append('exp', data.exp)
    formData.append('address1', data.address1)
    formData.append('address2', data.address2)
    formData.append('company_image', company_image)
    formData.append('company_doc', data.company_doc)
    formData.append('company_logo', data.company_logo)
    console.log(formData,'formData');
    if (activeStep === steps.length - 1) {
      axios.post("https://sayaraagroup.com/beta/WebsiteApi/submit_vendor",formData, {
        headers: {
         
          'Content-Type': 'multipart/form-data',
        },
      })
        .then((data) => data)
        console.log(data,'dsdsfsasaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
        .then((res) => {
          console.log(res);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <div className={classes.root}>
      <Stepper alternativeLabel activeStep={activeStep} >
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}

              <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  skip
                </Button>
              )}
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                // onClick={handleNext}
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;
