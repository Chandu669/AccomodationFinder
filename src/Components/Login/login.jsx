//CSS Imports
import "./login.scss";

//React Imports
import { themeLogIn } from "../../Themes/theme";
import { Link,useNavigate } from "react-router-dom";

//Component Imports
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ThemeProvider } from "@mui/material";

//Assets

const LogIN = (props) => {
  const [accountType, setAccountType] = React.useState("Tenant");

  const navigate = useNavigate();
  
  const handleChange = (event) => {
    setAccountType(event.target.value);
  };

  const logInHandler = (event) => {
    if(accountType === "Tenant"){
      navigate("/");
    }else if(accountType === "Admin"){
      navigate("/admin");
    }
    props.setUser(true);
  }

  const InputSection = (props) => {
    return (
      <div className="input-section">
        <p className="input-title">{props.title}</p>
        <input type="text" id={props.id} placeholder={props.tip} />
      </div>
    );
  };

  const PWDInputSection = (props) => {
    return (
      <div className="input-section">
        <p className="input-title">{props.title}</p>
        <input type="password" id={props.id} placeholder={props.tip} />
      </div>
    );
  };

  return (
    <div className="login-wrapper">
      <p className="main-title">{'Log In - ' + accountType}</p>
      <ThemeProvider theme={themeLogIn}>
        <Box sx={{ minWidth: 120, width: "80%", marginTop: "30px" }}>
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Account Type:</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={accountType}
              label="Account-type"
              onChange={handleChange}
            >
              <MenuItem value={"Tenant"}>Tenant</MenuItem>
              <MenuItem value={"Admin"}>Admin</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </ThemeProvider>
      <InputSection
        title={"Username"}
        id={"u-name"}
        tip={"Enter your Username here"}
      />
      <PWDInputSection
        title={"Password"}
        id={"pwd"}
        tip={"Enter your Password here"}
      />
      <div className="signup-btn" onClick={logInHandler}>Log In</div>
      <div className="final-section">
        <p className="question">Haven't an account?</p>
        <Link to={"/signup"} className="log-link">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default LogIN;
