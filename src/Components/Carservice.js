import * as React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import Servicetabs from './Servicetabs';
import Producttab from './Producttab';
// const blue = {
//   50: '#F0F7FF',
//   100: '#C2E0FF',
//   200: '#80BFFF',
//   300: '#66B2FF',
//   400: '#3399FF',
//   500: '#007FFF',
//   600: '#0072E5',
//   700: '#0059B2',
//   800: '#004C99',
//   900: '#003A75',
// };
// font-family: IBM Plex Sans, sans-serif;
//   color: white;
//   cursor: pointer;

const Tab = styled(TabUnstyled)`
width: 108px;
height: 41px;
text-align:center;
font-size: 0.875rem;
font-weight: bold;
background-color: #FFFFFF;
border: 1px solid rgba(88, 85, 98, 0.27);
box-sizing: border-box;
padding: 12px 16px;
margin: 6px 6px;
border-radius: 50px;
display: flex;
justify-content: center;
  &:hover {
    background-color: #FB7E15;
  }

  &:focus {
    color: #fff;
    border-radius: 50px;
    outline: 2px solid #FB7E15;
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: #FB7E15;
    color:'white
    
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  min-width: 320px;
  
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  text-align:center
  align-items: center;
  justify-content: flex-start;
  align-content: space-between;
`;

export default function UnstyledTabsCustomized({search}) {
  return (
    <TabsUnstyled defaultValue={0}>
      <TabsList>
        <Tab>Services</Tab>
        <Tab>Products</Tab>
      </TabsList>
      <TabPanel value={0}><Servicetabs search={search}/></TabPanel>
      <TabPanel value={1}><Producttab search={search}/></TabPanel>
    </TabsUnstyled>
  );
}