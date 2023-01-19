//SCSS Imports
import "./signView.scss";

//React Imports
import { Link } from "react-router-dom";

//Component Imports

//Assets

const SignUpView = (props) => {
  return (
    <div className="signup-view">
      <div className="wrapper-t">
        <p className="title">Sign Up</p>
        <p className="ques">What type of account do you want to create?</p>
        <div className="btn-section">
          <div className="type-btn">
            <Link to={"/signup/admin"} className="page-link">Admin Account</Link>
          </div>
          <div className="type-btn">
            <Link to={"/signup/tenant"} className="page-link">Tenant Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpView;
