import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {
  Typography,

  Grid,

  TextField,
  FormControl,
} from "@material-ui/core";
const useStyles = makeStyles({
  Textfields: {
    "& .MuiFilledInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiFormControl-root": {
      border: "0",
      margin: "0",
      display: "inline-flex",
      padding: "0",
      position: "relative",
      minWdth: "100%",
      flexDirection: "column",
      verticalAlign: "top",
      width: "100%",
    },

    formContainer: {
      position: "relative",
      width: "100%",
      height: "auto",
      padding: "2rem",
    },
    "& .MuiTypography-h5": {
      fontFamily: "poppins",
      fontStyle: "normal",
      fontWeight: "500",
      fontSize: "24px",
      lineHeight: "120%",
      color: "#151C28",
      textAlign: "left",
      paddingLeft: "80px",
      paddingBottom: "30px",
      marginTop: "18px",
    },
    "& .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root":{
      backgroundColor:"#F4F6FA",
      border:'none'
    }
  },
});
//  const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));




// const StyledOption = styled(OptionUnstyled)`
//   list-style: none;
//   padding: 4px 10px;
//   margin: 0;
//   border-bottom: 1px solid #ddd;
//   cursor: default;

//   &:last-of-type {
//     border-bottom: none;
//   }

//   &.${optionUnstyledClasses.disabled} {
//     color: #888;
//   }

//   &.${optionUnstyledClasses.selected} {
//     background-color: rgba(25, 118, 210, 0.08);
//   }

//   &.${optionUnstyledClasses.highlighted} {
//     background-color: #16d;
//     color: #fff;
//   }

//   &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
//     background-color: #05e;
//     color: #fff;
//   }

//   &:hover:not(.${optionUnstyledClasses.disabled}) {
//     background-color: #39e;
//   }
// `;





const StepOne = () => {
  const classes = useStyles();

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div>
        <Typography variant="h5" className={classes.heading}>
          Contact
        </Typography>
        <div>
          <Grid container spacing={2} mt={5} className='form-multi-container'>
            <Grid item xs={10} md={6} xl={6}>
              <div className="input-div">
                <input
                  style={{ width: "100%" }}
                  placeholder="Company Name"
                  className="multi-input"
                />
                {/* <TextField style={{width:'100%'}} className={classes.Textfields} id="filled-basic" label="Company Name" variant="filled" /> */}
              </div>
            </Grid>
            <Grid item xs={10} md={6} xl={6}>
              <div className="input-div">
                <input
                  style={{ width: "100%" }}
                  placeholder="Company Name"
                  className="multi-input"
                />
                {/* <TextField style={{width:'100%'}} className={classes.Textfields} id="filled-basic" label="Email" variant="filled" /> */}
              </div>
            </Grid>
            <Grid item xs={10} md={6} xl={6}>
              <div className="input-div">
                <input
                  style={{ width: "100%" }}
                  placeholder="Company Name"
                  className="multi-input"
                />
                {/* <TextField style={{width:'100%'}} className={classes.Textfields} id="filled-basic" label="Owner’s Phone Number" variant="filled" /> */}
              </div>
            </Grid>
            <Grid item xs={10} md={6} xl={6}>
              <div className="input-div">
                <input
                  style={{ width: "100%" }}
                  placeholder="Company Name"
                  className="multi-input"
                />
                {/* <TextField style={{width:'100%'}} className={classes.Textfields} id="filled-basic" label="Owner’s Phone Number" variant="filled" /> */}
              </div>
            </Grid>
            {/* <Grid xs={10} md={5} xl={5}>
              <div className="input-div tel">
                <input
                  style={{ width: "100%" }}
                  placeholder="Company Name"
                  className="multi-input"
                  required
                />
               
              </div>
            </Grid> */}
            <Grid item xs={10} md={6} xl={6}>
              <div className="input-div">
                <FormControl style={{ width: "100%" }}>
                  <Select
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </Grid>
            {/* <Grid item xs={10} md={6} xl={6}>
              <div className="input-div">
                <input
                  style={{ width: "100%" }}
                  placeholder="Company Name"
                  className="multi-input"
                />
                
              </div>
            </Grid> */}
            {/* <Grid item xs={5}>
          <div style={{width:'410px',margin:'0 auto'}}>
      
          </div>
        </Grid> */}
            <Grid xs={12}>
              {" "}
              <Typography variant="h1" className={classes.heading}>
                Address
              </Typography>
            </Grid>
            {/* <Grid item xs={10} md={5} xl={5}>
              <div className="input-div">
                <TextField
                  style={{ width: "100%" }}
                  className={classes.Textfields}
                  id="filled-basic"
                  label="Address Line 1"
                  variant="filled"
                />
              </div>
            </Grid> */}
            <Grid item xs={10} md={6} xl={6}>
              <div className="input-div">
                <input
                  style={{ width: "100%" }}
                  placeholder="Company Name"
                  className="multi-input"
                />
                {/* <TextField style={{width:'100%'}} className={classes.Textfields} id="filled-basic" label="Owner’s Phone Number" variant="filled" /> */}
              </div>
            </Grid>
            {/* <Grid item xs={10} md={5} xl={5}>
              <div className="input-div">
                <TextField
                  style={{ width: "100%" }}
                  className={classes.Textfields}
                  id="filled-basic"
                  label="Address Line 2"
                  variant="filled"
                />
              </div>
            </Grid> */}
            <Grid item xs={10} md={6} xl={6}>
              <div className="input-div">
                <input
                  style={{ width: "100%" }}
                  placeholder="Company Name"
                  className="multi-input"
                />
                {/* <TextField style={{width:'100%'}} className={classes.Textfields} id="filled-basic" label="Owner’s Phone Number" variant="filled" /> */}
              </div>
            </Grid>
            {/* <Grid item xs={10} md={12} xl={12}>
              <div className="maplink">
                <TextField
                  style={{ width: "100%" }}
                  className={classes.Textfields}
                  id="filled-basic"
                  label="Map Link"
                  variant="filled"
                />
              </div>
            </Grid> */}
            <Grid item xs={10} md={6} xl={6}>
              <div className="input-div">
                <input
                  style={{ width: "100%" }}
                  placeholder="Company Name"
                  className="multi-input"
                />
                {/* <TextField style={{width:'100%'}} className={classes.Textfields} id="filled-basic" label="Owner’s Phone Number" variant="filled" /> */}
              </div>
            </Grid>
          </Grid>

          {/* <div style={{marginTop:'80px'}}>
       <Grid container spacing={4}  justifyContent="space-around">
      
      </Grid>
       </div> */}
        </div>
      </div>
    </>
  );
};

export default StepOne;
