import LoginFormContainer from "../components/LoginFormContainer";
import "./Registration.css";

const Registration = () => {
  return (
    <div className="registration">
      <div className="login-page-layout">
        <img
          className="login-page-layout-child"
          alt=""
          src="/rectangle-86@2x.png"
        />
        <div className="login-page-layout-item" />
        <img
          className="screenshot-94-removebg-previ-icon1"
          loading="lazy"
          alt=""
          src="/screenshot--94-removebgpreview-1@2x.png"
        />
        <img
          className="screenshot-95-removebg-previ-icon"
          loading="lazy"
          alt=""
          src="/screenshot--95-removebgpreview-1@2x.png"
        />
      </div>
      <LoginFormContainer />
    </div>
  );
};

export default Registration;
