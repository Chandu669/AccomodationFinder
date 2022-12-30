import HeaderComp from './Components/Header/header';
import { Route, Routes } from "react-router-dom";
import './App.css';
import HomeBG from './Components/HomeBG/homeBg';
import MainCard from './Components/MainCard/mainCard';
import MainView from './Views/MainView/mainView';
import SignUpAdmin from './Components/SignUp/signAdmin';
import SignUpTenant from './Components/SignUp/signTenant';
// import {useState} from 'react';

function App() {

  return (
    <div className="App" >
      <HeaderComp />
      <Routes>
        <Route path="/" element={<HomeBG />} />
        <Route path="/rooms" element={<MainView />} />
        <Route path="/signup" element={<SignUpAdmin />} />
        <Route path="/main" element={<MainCard />} />
      </Routes>
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
