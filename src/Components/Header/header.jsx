//CSS Imports
import './header.css';

//React Imports
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

//Component Imports
import MenuItem from './MenuItem';

//Assets


const HeaderComp = (props) => {

const BoxLink = (props) => {

  const [selected, setSelected] = useState(false);

  const pathName = useLocation().pathname;
  const pathsArray = pathName.split("/");
  const firstPath = "/" + pathsArray[1];

  useEffect(() => {
    setSelected(firstPath === props.link);
}, [pathName, props.link]);

  return(
    <li>
        <Link to={props.link} className={`getstarted ${selected ? "activeBox": ""}`}>
            {props.title}
        </Link>
      </li>
  );
}

return(
    <header id="header" class="fixed-top ">
    <div className="container d-flex align-items-center justify-content-between">

      <h1 class="logo"><a href="https://www.sjp.ac.lk/">USJ</a></h1>
      {/* <!-- Uncomment below if you prefer to use an image logo --> */}
      {/* <a href="https://www.sjp.ac.lk/" class="logo"><img src={require("../../Assets/Images/SJP.png")} alt="" class="img-fluid" /></a> */}

      <nav id="navbar" className="navbar">
        <ul>
          <MenuItem link="/" title="Home" selected={false} />
          {/* <li><a className="nav-link scrollto active" href="/">Home</a></li> */}
          <li><a className="nav-link scrollto" href="#about">Houses</a></li>
          <MenuItem link="/rooms" title="Studentrooms" selected={false} />
          <li><a className="nav-link scrollto " href="#portfolio">How it works?</a></li>
          <li><a className="nav-link scrollto" href="#team">Team</a></li>
          <li><a className="nav-link scrollto" href="#partners">Partners</a></li>
          <li className="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          <BoxLink link={"/signup"} title="SignUp" selected={false} />
          <BoxLink link={"/login"} title="LogIn" selected={false} />
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
);
};

export default HeaderComp;