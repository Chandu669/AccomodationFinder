//CSS Imports
import "./header.css";

//React Imports
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

//Component Imports
import MenuItem from "./MenuItem";
import { ReactComponent as UserIcon } from "../../Assets/svgs/user-icon.svg";
import { ReactComponent as ProfileIcon } from "../../Assets/svgs/profile-icon.svg";

//Assets

const profData = {
  userName: "Yehan Appartments",
  gMail: "yehan.kalhara@gmail.com",
  fName: "Yehan Kalhara Wanigathunga",
  contact: "076-2297883",
};

const HeaderComp = (props) => {

  const navigate = useNavigate();
  const [visibleProfile, setVisibleProfile] = useState(false);

  const Profile = (props) => {
    return (
      <div className="profile" style={{
        visibility: visibleProfile?"visible":"hidden",
        opacity: visibleProfile?1:0,
        right: visibleProfile?"20px":"-10px",
      }} onMouseLeave={() => setVisibleProfile(false)}>
        <div className="upper-section">
          <div className="user-icon">
            <UserIcon className="icon-svg" />
          </div>
          <p className="user-name">{profData.userName}</p>
          <p className="g-mail">{profData.gMail}</p>
        </div>

        <hr className="h-divider" />

        <div className="section-2">
          <p className="sub-link" onClick={() => {
            setVisibleProfile(false);
            navigate("/admin");
            }}>Dashboard</p>
          <p className="sub-link" onClick={() => {
            setVisibleProfile(false);
            props.setUser(false);
            navigate("/");
          }}>LogOut</p>
        </div>
      </div>
    );
  };

  const BoxLink = (props) => {
    const [selected, setSelected] = useState(false);

    const pathName = useLocation().pathname;
    const pathsArray = pathName.split("/");
    const firstPath = "/" + pathsArray[1];

    useEffect(() => {
      setSelected(firstPath === props.link);
    }, [pathName, props.link]);

    return (
      <li>
        <Link
          to={props.link}
          className={`getstarted ${selected ? "activeBox" : ""}`}
        >
          {props.title}
        </Link>
      </li>
    );
  };

  return (
    <header id="header" class="fixed-top ">
      <div
        className="container d-flex align-items-center justify-content-between"
        style={{
          position: "relative",
        }}
      >
        <h1 class="logo">
          <a href="https://www.sjp.ac.lk/">USJ</a>
        </h1>
        {/* <!-- Uncomment below if you prefer to use an image logo --> */}
        {/* <a href="https://www.sjp.ac.lk/" class="logo"><img src={require("../../Assets/Images/SJP.png")} alt="" class="img-fluid" /></a> */}

        <nav id="navbar" className="navbar">
          <ul>
            <MenuItem link="/" title="Home" selected={false} />
            {/* <li><a className="nav-link scrollto active" href="/">Home</a></li> */}
            <li>
              <a className="nav-link scrollto" href="#about">
                Houses
              </a>
            </li>
            <MenuItem link="/rooms" title="Boardingrooms" selected={false} />
            <li>
              <a className="nav-link scrollto " href="#portfolio">
                How it works?
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#team">
                Team
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#partners">
                Partners
              </a>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Drop Down</span> <i class="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Drop Down 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Drop Down</span>{" "}
                    <i class="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Drop Down 2</a>
                </li>
                <li>
                  <a href="#">Drop Down 3</a>
                </li>
                <li>
                  <a href="#">Drop Down 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
            {props.user === false && (
              <BoxLink link={"/signup"} title="SignUp" selected={false} />
            )}

            {props.user === false && (
              <BoxLink link={"/login"} title="LogIn" selected={false} />
            )}

            {props.user == true && (
              <li>
                <div className="profile-icon">
                  <ProfileIcon className="profile-svg" onClick={() => setVisibleProfile(true)}/>
                </div>
              </li>
            )}
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <Profile setUser={props.setUser}/>
      </div>
    </header>
  );
};

export default HeaderComp;
