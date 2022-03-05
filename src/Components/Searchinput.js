
import React,{useState} from 'react'
import "../style/Searchinput.scss";
import {connect} from 'react-redux'
import {FetchdataBrandList} from '../Service'
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import Select from "react-select";

const  Searchinput = ({FetchdataBrandList,BrandList})=> {
  const [searchTitle, setSearchTitle] = useState("");
  const [formValues, setFormValues] = useState({
    subject: "",
    // tutoringLevel: [],
    // // paymentMethod: "",
    // hours: 0,
    // minutes: 0,
  });
  const [brand, setBrand] = React.useState("");
  const selectCustomStyles = {
    control: (provided, state) => ({
      ...provided,
      minHeight: "35px",
      background: "#f7f8fa",
      borderStyle: "none",
      boxShadow: state.isFocused ? null : null,
    }),

    valueContainer: (provided, state) => ({
      ...provided,
      padding: "0px 6px",
      margin: state.isFocused ? "0px" : "0px",
    }),

    input: (provided) => ({
      ...provided,
      margin: "0px",
      padding: "0px",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
    }),
    placeholder: () => ({
      color: "#193658",
    }),
  };


  console.log('FetchdataBrandList',BrandList.BrandList.BrandList.data)
        const [modallist,setModallist] = React.useState([])
    const [age, setAge] = React.useState("");
    React.useEffect(()=>{
      FetchdataBrandList();
    },[])
    React.useEffect(()=>{
        if(BrandList && BrandList.BrandList.BrandList.data){
            setModallist(BrandList.BrandList.BrandList.data)
        }
    },[BrandList])
    const handleChange1 = (event) => {
      setBrand(event.target.value);
    };
    console.log('modallist',modallist)
    const _alterTutoringLevelArray = () => {
      if (Array.isArray(modallist) && modallist.length) {
        let newTLevels = [];
        modallist.map((item) => {
          const { name, value } = item;
          let newItem = {
            label: name,
            value: value,
          };
          newTLevels.push(newItem);
        });
        return newTLevels;
      }
      return [];
    };
  return (
    <div >
            <FormControl sx={{ m: 1, ml: 0, mt: 2, minWidth: 220 }}>
                <Select
                  style={{ height: "44px" }}
                  value={brand}
                  onChange={handleChange1}
                  displayEmpty
                  // options={modallist}
                  inputProps={{ "aria-label": "Without label" }}
                  style={{display:'flex'}}
                >
                              <input
      
      type="text"
      placeholder="Search..."
      defaultValue={'fff'}
      // onChange={(e) => setSearchTitle(e.target.value)}
    />
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
      
                  {modallist.filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.brand_name.includes(searchTitle)
            ) {
              return value;
            }
          }).map((num,i)=>(
  <MenuItem value={num.brand_name} key={i} className='abc ' style={{display:'flex'}}><div style={{display:'flex',justifyContent:'space-around'}}>
      <div style={{widht:'40%'}}><em>{num.brand_name}</em></div>  <div style={{width:'40%'}}><div style={{width:'60px',height:'60px'}}><img src={`https://sayaraagroup.com/${num.brand_image}`} style={{width:'100%',height:'100%'}} /></div></div>
      </div></MenuItem>
))}
                  
                  {/* <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
              </FormControl>
                 {/* <Select
                  id="tutoringLevel"
                  styles={selectCustomStyles}
                  // options={[
                  //   { label: "Adult", value: "adult" },
                  //   { label: "College", value: "college" },
                  //   { label: "High School", value: "highschool" },
                  // ]}
                  options={_alterTutoringLevelArray()}
                  onChange={(e) =>
                    setFormValues({ ...formValues, ["subject"]: e.target.value })
                  }
                  // value={()=>{
                  //   modallist.map((num,i)=>{
                  //     return num.brand_name
                  //   }
                  // })}
                  // isMulti={true}
                  placeholder="--Select Tutoring Level--"
                /> */}
    </div>
  );
}


const mapstate = state=>{
    return{
      BrandList:state
    }
    
  }
  console.log('flsjflsdjlfjls',mapstate)
  const mapDispatchprops = (dispatch)=>{
    return{
      FetchdataBrandList:()=>{
            dispatch(FetchdataBrandList());
        }
    }
  }
  
  export default connect(mapstate,mapDispatchprops)(Searchinput);