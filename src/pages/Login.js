import InputFields from "../components/InputFields";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="rectangle-parent84">
        <img className="frame-child30" alt="" src="/rectangle-86@2x.png" />
        <div className="frame-child31" />
        <img
          className="screenshot-94-removebg-previ-icon5"
          loading="lazy"
          alt=""
          src="/screenshot--94-removebgpreview-1@2x.png"
        />
        <img
          className="screenshot-95-removebg-previ-icon1"
          loading="lazy"
          alt=""
          src="/screenshot--95-removebgpreview-1@2x.png"
        />
      </div>
      <div className="rectangle-parent85">
        <div className="frame-child32" />
        <img
          className="vector-icon7"
          loading="lazy"
          alt=""
          src="/vector11.svg"
        />
        <div className="login-form">
          <InputFields />
        </div>
      </div>
    </div>
  );
};

export default Login;
