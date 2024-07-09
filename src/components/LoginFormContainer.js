import FrameComponent from "./FrameComponent7";
import PropTypes from "prop-types";
import './LoginFormContainer.css';


const LoginFormContainer = ({ className="" }) => {
  return (
    <form className={`login-form-container ${className}`}>
      <div className="login-form-container-child" />
      <div className="password-icon-container">
        <img className="password-icon2" loading="lazy" alt="" src="/vector11.svg" />
      </div>
      <div className="welcome-message-container">
        <div className="hey-group">
          <h2 className="hey1">Hey</h2>
          <div className="welcome-wrapper">
            <h2 className="welcome">Welcome .</h2>
          </div>
          <div className="create-your-account-wrapper">
            <div className="create-your-account">Create your account.</div>
          </div>
        </div>
      </div>
      <div className="input-fields-container">
        <div className="rectangle-parent137">
          <div className="frame-child95" />
          <input className="name4" placeholder="Name" type="text" />
        </div>
      </div>
      <div className="input-fields-container1">
        <div className="rectangle-parent138">
          <div className="frame-child96" />
          <input className="email-or-phone2" placeholder="Email or Phone " type="text" />
        </div>
      </div>
      <div className="input-fields-container2">
        <div className="rectangle-parent139">
          <div className="frame-child97" />
          <input className="password2" placeholder="Password" type="text" />
          <div className="input-icons">
            <img className="email-icon" alt="" src="/vector-12.svg" />
          </div>
        </div>
      </div>
      <div className="sign-up-button-container">
        <div className="sign-up-button-parent">
          <div className="sign-up-button">
            <div className="rectangle-parent140">
              <div className="frame-child98" />
              <input className="confirm-password2" placeholder="Confirm Password" type="text" />
              <div className="confirm-password-icon-containe">
                <img className="confirm-password-icon1" alt="" src="/vector-12.svg" />
              </div>
            </div>
            <div className="terms-policy-container">
              <div className="rectangle-parent141">
                <input className="rectangle-input" type="checkbox" />
                <div className="i-understood-the-terms-polic-container">
                  <div className="i-understood-the-container1">
                    <span className="i-understood-the">{`I understood the `}</span>
                    <span className="terms-policy1">{`terms & policy`}</span>
                    <span className="span7">.</span>
                  </div>
                </div>
              </div>
            </div>
          </div><FrameComponent sIGNUP="SIGN UP" />
        </div>
      </div>
      <div className="divider-container">
        <div className="divider-wrapper">
          <div className="divider1" />
        </div>
        <div className="or1">or</div>
        <div className="divider-container-inner">
          <div className="frame-child99" />
        </div>
      </div>
      <div className="input-fields-container3">
        <div className="frame-parent19">
          <div className="rectangle-parent142">
            <div className="frame-child100" />
            <img className="facebook-svgrepo-com-1-icon1" loading="lazy" alt="" src="/facebooksvgrepocom-1.svg" />
          </div>
          <div className="rectangle-parent143">
            <div className="frame-child101" />
            <img className="google-svgrepo-com-icon1" loading="lazy" alt="" src="/googlesvgrepocom.svg" />
          </div>
        </div>
      </div>
      <div className="login-link-container">
        <div className="already-have-an-container">
          <span className="already-have-an">{`Already have an account? `}</span>
          <span className="log-in1">Log in</span>
        </div>
      </div>
    </form>);
};

LoginFormContainer.propTypes = {
  className: PropTypes.string
};

export default LoginFormContainer;