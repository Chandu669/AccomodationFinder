//CSS Imports
import "./signView.scss";

//React Imports

//Component Imports
import SignUpTenant from "../../Components/SignUp/signTenant";

//Assets


const SignTenantView = (props) => {

return(
    <div className="signup-view">
      <div className="wrapper">
        <SignUpTenant />
      </div>
    </div>
);
};

export default SignTenantView;