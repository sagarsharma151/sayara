import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Privacy from '../Components/Privacy';
import Condition from '../Components/Condition';
import Footer from '../Footer'
import '../style/Terms.scss'
import Header from '../Header'
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div >
          <p style={{paddingTop:'25px'}}>{children}</p>
        </div>
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

const  Privacyandterms = ()=> {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Header />
      <div className='privacyandtermsmain'>
      <div>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Privacy Policy" {...a11yProps(0)} style={{color:'#FB7E15'}}/>
          <Tab label="Terms & Conditions" {...a11yProps(1)} style={{color:'#FB7E15'}}/>
    
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        <Privacy />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Condition />
      </TabPanel>
      
      </div>
      <Footer />
    </>
  );
}
export default Privacyandterms;