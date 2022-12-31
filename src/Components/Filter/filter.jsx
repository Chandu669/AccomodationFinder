//SCSS Imports
import "./filter.scss";

//React Imports
import { useState } from "react";

//Component Imports
import OutlinedInput from "@mui/material/OutlinedInput";
import { makeStyles } from '@mui/styles';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ThemeProvider, createTheme } from "@mui/material/styles";

//Assets

const useStyles = makeStyles((theme) => ({
    customSelect: {
        
    }
}))

const FilterComp = (props) => {
  const [value, setValue] = useState("");
  const [gender, setGender] = useState("");
  const [roomType, setRoomType] = useState("");
  const [price, setPrice] = useState("");
  const [distance, setDistance] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleChange1 = (event) => {
    setGender(event.target.value);
  };

  const handleChange2 = (event) => {
    setRoomType(event.target.value);
  };

  const handleChange3 = (event) => {
    setPrice(event.target.value);
  };

  const handleChange4 = (event) => {
    setDistance(event.target.value);
  };

  const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          focused: {
            borderColor: "#dddddd",
          },
        },
      },
    },
  });

  return (
    <div className="filter-div">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <FormControl
              sx={{ m: 1, minWidth: 120, width: "90%" }}
              size="small"
            >
              <ThemeProvider theme={theme}>
                <InputLabel id="demo-select-small">For</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={value}
                  label="For"
                  onChange={handleChange}
                  sx={{
                    ".Mui-focused": {
                      borderColor: "#dddddd",
                      borderWidth: "2px",
                    },
                  }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>University Students</MenuItem>
                  <MenuItem value={2}>Workers</MenuItem>
                </Select>
              </ThemeProvider>
            </FormControl>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4">
            <FormControl
              sx={{ m: 1, minWidth: 120, width: "90%" }}
              size="small"
            >
              <InputLabel id="demo-select-small">Gender</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={gender}
                label="For"
                onChange={handleChange1}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4">
            <FormControl
              sx={{ m: 1, minWidth: 120, width: "90%" }}
              size="small"
            >
              <InputLabel id="demo-select-small">Space</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={roomType}
                label="For"
                onChange={handleChange2}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>Single</MenuItem>
                <MenuItem value={2}>Double</MenuItem>
                <MenuItem value={3}>3 Person</MenuItem>
                <MenuItem value={4}>4 Person</MenuItem>
                <MenuItem value={5}>5 Person</MenuItem>
                <MenuItem value={6}>6-10 Person</MenuItem>
                <MenuItem value={10}>Over 10 Person</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4">
            <FormControl
              sx={{ m: 1, minWidth: 120, width: "90%" }}
              size="small"
            >
              <InputLabel id="demo-select-small">Price per Month</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={price}
                label="For"
                onChange={handleChange3}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Negotiable"}>Negotiable</MenuItem>
                <MenuItem value={"< 2000"}>&#60; 2000</MenuItem>
                <MenuItem value={"2000-3000"}>2000-3000</MenuItem>
                <MenuItem value={"3000-4000"}>3000-4000</MenuItem>
                <MenuItem value={"4000-5000"}>4000-5000</MenuItem>
                <MenuItem value={"5000-10000"}>5000-10000</MenuItem>
                <MenuItem value={"> 10 000"}>&#62; 10 000</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4">
            <FormControl
              sx={{ m: 1, minWidth: 120, width: "90%", color: "white" }}
              size="small"
            >
              <InputLabel id="demo-select-small">
                Distance from the USJ
              </InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={distance}
                label="Distance"
                onChange={handleChange4}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"< 100m"}>&#60; 100m</MenuItem>
                <MenuItem value={"100-250 m"}>100-250 m</MenuItem>
                <MenuItem value={"250-500 m"}>250-500 m</MenuItem>
                <MenuItem value={"500-1000 m"}>500-1000 m </MenuItem>
                <MenuItem value={"1 - 2.5 km"}>1-2.5 km</MenuItem>
                <MenuItem value={"> 2.5 km"}>&#62; 2.5 km</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComp;
