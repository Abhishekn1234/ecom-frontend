import PropTypes from "prop-types";
import "./InputFields.css";

const InputFields = ({ className = "" }) => {
  return (
    <form className={`input-fields1 ${className}`}>
      <div className="welcome-message">
        <div className="hey-group">
          <h2 className="hey1">Hey</h2>
          <div className="welcome-back-wrapper">
            <h2 className="welcome-back">Welcome Back.</h2>
          </div>
          <div className="login-using-your-credentials-wrapper">
            <div className="login-using-your">
              Login using your credentials.
            </div>
          </div>
        </div>
      </div>
      <div className="email-phone-field">
        <div className="input-icon">
          <div className="input-icon-child" />
          <input
            className="email-or-phone2"
            placeholder="Email or Phone "
            type="text"
          />
        </div>
      </div>
      <div className="password-input-wrapper">
        <div className="password-input1">
          <div className="password-field">
            <div className="password-field-child" />
            <input className="password2" placeholder="Password" type="text" />
            <div className="password-icon-wrapper">
              <img className="password-icon2" alt="" src="/vector-12.svg" />
            </div>
          </div>
          <div className="forgot-password-parent">
            <div className="forgot-password">
              <div className="forget-password">Forget Password?</div>
            </div>
            <button className="login-button">
              <div className="login-button-child" />
              <div className="log-in1">LOG IN</div>
            </button>
          </div>
        </div>
      </div>
      <div className="divider1">
        <div className="divider-inner">
          <div className="frame-child125" />
        </div>
        <div className="or1">or</div>
        <div className="divider-child">
          <div className="frame-child126" />
        </div>
      </div>
      <div className="email-phone-field1">
        <div className="frame-parent22">
          <div className="rectangle-parent167">
            <div className="frame-child127" />
            <img
              className="facebook-svgrepo-com-1-icon1"
              loading="lazy"
              alt=""
              src="/facebooksvgrepocom-1.svg"
            />
          </div>
          <div className="rectangle-parent168">
            <div className="frame-child128" />
            <img
              className="google-svgrepo-com-icon1"
              loading="lazy"
              alt=""
              src="/googlesvgrepocom.svg"
            />
          </div>
        </div>
      </div>
      <div className="dont-have-an-account-create-wrapper">
        <div className="dont-have-an-container">
          <span className="dont-have-an">{`Don’t have an account? `}</span>
          <span className="create">Create</span>
        </div>
      </div>
    </form>
  );
};

InputFields.propTypes = {
  className: PropTypes.string,
};

export default InputFields;
