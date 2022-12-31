//SCSS Imports
import "./signView.scss";

//React Imports

//Component Imports
import SignUpAdmin from "../../Components/SignUp/signAdmin";

//Assets

const SignUpView = (props) => {
  return (
    <div className="signup-view">
      <div className="wrapper">
        <SignUpAdmin />
      </div>
    </div>
  );
};

export default SignUpView;
