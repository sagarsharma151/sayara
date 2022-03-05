
import  React ,{useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import productkey from '../images/icons/key-icon.png'
import '../style/tabs.scss'
import { makeStyles } from "@material-ui/core/styles";
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import cartabs from '../images/Cartab.png'
import CarWash from './Carwash'
import Carservice from './Carservice';
import products from '../images/products.png';
import CellcarLists from './CellCar'
import Rentcar from './Rentcar';
// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const useStyle = makeStyles({
  tabs:{
  "& .css-h0q0iv-MuiButtonBase-root-MuiTab-root.Mui-selected":{
    color: '#151C28'
  },
  "& .css-1aquho2-MuiTabs-indicator":{
    backgroundColor:'#151C28'
  }
 } })
function TabPanel(props) {
  const { children, value, index, ...other } = props;
const classes = useStyle();
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className={classes.tabs}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [searchTitle, setSearchTitle] = useState("");
  return (
    <Box sx={{ width: '100%' }}>
        <Grid container spacing={2}>
              <Grid item xs={12} md={8} xl={8}>
                <div>
                  <h1 className="explore-heading">Explore Our Offerings</h1>
                </div>
              </Grid>
              <Grid item xs={12} md={4} xl={4}>
                <div className="search-container">
                <input
   className="search-containers"
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />
                </div>
              </Grid></Grid>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" 
          selectionFollowsFocus
                  variant="scrollable"
                  scrollButtons
        >
          <Tab label="Car wash" iconPosition="start" icon={ <img src={cartabs} className='tabimg tabs' alt=''/>} className='tabs-border' {...a11yProps(0)} />
          <Tab label="Car services/products" iconPosition="start" icon={ <img src={products} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(1)} />
          <Tab label="Buy/Cell Car" iconPosition="start" icon={ <img src={cartabs} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(2)} />
          <Tab label="rentcar list" iconPosition="start" icon={ <img src={productkey} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(3)} />
          {/* <Tab label="Car wash" iconPosition="start" icon={ <img src={cartabs} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(4)} />
          <Tab label="Car wash" iconPosition="start" icon={ <img src={cartabs} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(5)} />
          <Tab label="Car wash" iconPosition="start" icon={ <img src={cartabs} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(6)} />
          <Tab label="Car wash" iconPosition="start" icon={ <img src={cartabs} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(7)} />
          <Tab label="Car wash" iconPosition="start" icon={ <img src={cartabs} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(8)} />
          <Tab label="Car wash" iconPosition="start" icon={ <img src={cartabs} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(9)} />
          <Tab label="Car wash" iconPosition="start" icon={ <img src={cartabs} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(10)} />
          <Tab label="Car wash" iconPosition="start" icon={ <img src={cartabs} className='tabimg' alt=''/>} className='tabs-border' {...a11yProps(11)} /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
       <CarWash search={searchTitle}/>
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
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
       <Carservice search={searchTitle}/>
        </Grid>
     
      </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
       <CellcarLists search={searchTitle}/>
        </Grid>
     
      </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
       <Rentcar search={searchTitle}/>
      </TabPanel>
      {/* <TabPanel value={value} index={4}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={7}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={8}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={9}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={10}>
        Item Two
      </TabPanel> */}
    </Box>
  );
}