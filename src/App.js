import HeaderComp from "./Components/Header/header";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeBG from "./Components/HomeBG/homeBg";
import MainCard from "./Components/MainCard/mainCard";
import MainView from "./Views/MainView/mainView";
import SignUpView from "./Views/SignUpView/signView";
import LogInView from "./Views/LogInView/loginView";
import SignAdminView from "./Views/SignUpView/signAdminView";
import SignTenantView from "./Views/SignUpView/signTenantView";
// import {useState} from 'react';

function App() {
  return (
    <div className="App">
      <div className="header-container">
        <HeaderComp />
      </div>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<HomeBG />} />
          <Route path="/rooms" element={<MainView />} />
          <Route path="/rooms/:addID" element={<MainCard />} />
          <Route path="/signup" element={<SignUpView />} />
          <Route path="/signup/admin" element={<SignAdminView />} />
          <Route path="/signup/tenant" element={<SignTenantView />} />
          <Route path="/login" element={<LogInView />} />
          <Route path="/main" element={<MainCard />} />
        </Routes>
      </div>
      {/* <HomeBG /> */}
      {/* <MainCard /> */}
      {/* <MainView /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <SignUpAdmin />
      <SignUpTenant /> */}
    </div>
  );
}

export default App;
