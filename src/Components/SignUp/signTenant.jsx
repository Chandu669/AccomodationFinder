//SCSS Imports
import './signAdmin.scss';

//React Imports

//Component Imports

//Assets


const SignUpTenant = (props) => {

    const InputSection = (props) => {
        return (
          <div className="input-section">
            <p className="input-title">{props.title}</p>
            <input type="text" id={props.id} placeholder={props.tip} />
          </div>
        );
      };
    
      const PWDInputSection = (props) => {
        return (
          <div className="input-section">
            <p className="input-title">{props.title}</p>
            <input type="password" id={props.id} placeholder={props.tip} />
          </div>
        );
      };
    
      const EmailInputSection = (props) => {
        return (
          <div className="input-section">
            <p className="input-title">{props.title}</p>
            <input type="email" id={props.id} placeholder={props.tip} />
          </div>
        );
      };
    
      return (
        <div className="signup-wrapper">
          <p className="main-title">Sign Up - Tenant Account</p>
          <p className="sub-title">Please fill this form to create an account.</p>
          <InputSection title={"Name *"} id={"name"} tip={"Enter your Name here"} />
          <InputSection
            title={"Username *"}
            id={"u-name"}
            tip={"Enter your Username here"}
          />
          <EmailInputSection
            title={"Email *"}
            id={"email"}
            tip={"Enter your Email Address here"}
          />
          <PWDInputSection
            title={"Password *"}
            id={"pwd"}
            tip={"Enter your Password here"}
          />
          <PWDInputSection
            title={"Confirm Password *"}
            id={"c-pwd"}
            tip={"Enter your Password again"}
          />
    
          <p className="req-text">* - required</p>
          <div className="reset-div">
            <a href="#" className="reset-link">
              Reset form
            </a>
          </div>
          <div className="signup-btn">Sign Up</div>
          <div className="final-section">
            <p className="question">Already have an account?</p>
            <a href="#" className="log-link">
              Log In
            </a>
          </div>
        </div>
      );
};

export default SignUpTenant;