import * as React from "react";
import {connect} from 'react-redux'
import {FetchdataModallist} from '../Service'
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { NavLink } from "react-router-dom";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
const Branddropdown = ({FetchdataModallist,ModalList}) => {
console.log('sdfldsflsflsf',ModalList.ModalList.data)
        const [modallist,setModallist] = React.useState([])
    const [age, setAge] = React.useState("");
    React.useEffect(()=>{
        FetchdataModallist();
    },[])
    React.useEffect(()=>{
        if(ModalList && ModalList.ModalList.data){
            setModallist(ModalList.ModalList.data)
        }
    },[ModalList])

    console.log('modallist',modallist)
    const handleChange = (event) => {
        setAge(event.target.value);
      };
  return (
    <div>
        <FormControl sx={{ m: 1, ml: 0, mt: 2, minWidth: 220 }}>
                <Select
                  style={{ height: "44px" }}
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  style={{display:'flex'}}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <input />
                  {modallist.map((num,i)=>(
                    <MenuItem value={num.model_name} key={i}><div style={{display:'flex',justifyContent:'space-around'}}>
                        <div style={{widht:'40%'}}><em>{num.model_name}</em></div>  <div style={{width:'40%'}}><div style={{width:'60px',height:'60px'}}><img src={`https://sayaraagroup.com/${num.model_image}`} style={{width:'100%',height:'100%'}} /></div></div>
                        </div></MenuItem>
                  ))}
                  
                  {/* <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
              </FormControl>
    </div>
  )
}

// export default Branddropdown
const mapstate = state=>{
    return{
        ModalList:state.ModalList,
    }
    
  }
  console.log('flsjflsdjlfjls',mapstate)
  const mapDispatchprops = (dispatch)=>{
    return{
        FetchdataModallist:()=>{
            dispatch(FetchdataModallist());
        }
    }
  }
  
  export default connect(mapstate,mapDispatchprops)(Branddropdown);