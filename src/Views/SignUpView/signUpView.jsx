//sCSS Imports
import "./signUpView.scss";

//React Imports

//Component Imports
import SignUpAdmin from "../../Components/SignUp/signAdmin";

//Assets

const SignUpView = (props) => {
  return (
    <div className="signup-view">
      <div className="form-div">
        <SignUpAdmin />
      </div>
    </div>
  );
};

export default SignUpView;
