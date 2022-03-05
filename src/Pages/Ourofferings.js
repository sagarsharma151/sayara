import React from "react";
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SecondHead from "../Components/SecondHead";
import Footer from "../Footer";
import Header from '../Header'
// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));
export default function Ourofferings() {
  return (
    <div>
           <Header />
        <Box sx={{ flexGrow: 1 }} mt={2}>
     
      <Grid container spacing={2}>
        <Grid item xs={12}>
      <SecondHead />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
        {/* <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid> */}
      </Grid>
    </Box>
    </div>
  );
}
