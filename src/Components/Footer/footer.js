//CSS Imports
import './footer.css';

//React Imports
import { Link } from 'react-router-dom';

//Component Imports
import MenuItem from './MenuItem';

//Assets


const FooterComp = (props) => {



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
          <li><Link to={"/signup"} className='getstarted'>LogIn</Link></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
);
};

export default FooterComp;