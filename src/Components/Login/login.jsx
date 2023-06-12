//CSS Imports
import "./login.scss";

//React Imports
import { themeLogIn } from "../../Themes/theme";

//Component Imports
import React, { useEffect, useState, useContext } from "react";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ThemeProvider } from "@mui/material";
import { UserUpdateData, setToken } from "../../Services/AuthService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
//Assets

const LogIN = (props) => {
  const token = setToken();
  const initialState = { email: "", password: "" };
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [accountType, setAccountType] = React.useState("Tenant");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setAccountType(event.target.value);
  };

  // const logInHandler = (event) => {
  //   if(accountType === "Tenant"){
  //     navigate("/");
  //   }else if(accountType === "Admin"){
  //     navigate("/admin");
  //   }
  //   props.setUser(true);
  // }


  const submitLogin = () => {
    if (!userData.email) {
      toast.error("Please enter user email!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      return;
    }
    if (!userData.password) {
      toast.error("Please enter user password!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "foo-bar",
      });
      return;
    }
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
      <div className="input-section">
        <p className="input-title">{props.title}</p>
        <input type="email" id={props.id} placeholder={props.tip} value={userData?.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
      </div>

      <div className="input-section">
        <p className="input-title">{props.title}</p>
        <input type="password" id={props.id} placeholder={props.tip} value={userData?.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
      </div>
      <div className="signup-btn" onClick={submitLogin}>Log In</div>
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
