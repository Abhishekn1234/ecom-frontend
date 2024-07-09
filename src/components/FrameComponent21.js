import PropTypes from "prop-types";
import "./FrameComponent21.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={`frame-wrapper8 ${className}`}>
      <div className="frame-parent10">
        <div className="screenshot-94-removebg-previ-frame">
          <img
            className="screenshot-94-removebg-previ-icon12"
            loading="lazy"
            alt=""
            src="/screenshot--94-removebgpreview-1@2x.png"
          />
        </div>
        <div className="logo-1-container">
          <img
            className="logo-1-icon8"
            loading="lazy"
            alt=""
            src="/logo-1@2x.png"
          />
        </div>
        <div className="frame-wrapper9">
          <div className="rectangle-parent146">
            <div className="frame-child92" />
            <a className="cement4">Cement</a>
            <div className="vector-wrapper1">
              <img className="vector-icon15" alt="" src="/vector-2.svg" />
            </div>
          </div>
        </div>
        <div className="frame-wrapper10">
          <div className="frame-parent11">
            <div className="parent5">
              <img className="icon12" loading="lazy" alt="" src="/-1.svg" />
              <div className="account-container">
                <a className="account8">Account</a>
              </div>
            </div>
            <div className="cart-link-parent-wrapper">
              <div className="cart-link-parent">
                <img
                  className="cart-shopping-svgrepo-com-1-icon8"
                  loading="lazy"
                  alt=""
                  src="/cartshoppingsvgrepocom-1.svg"
                />
                <div className="cart-container">
                  <a className="cart9">Cart</a>
                </div>
              </div>
            </div>
            <div className="frame-wrapper11">
              <img
                className="frame-child93"
                loading="lazy"
                alt=""
                src="/group-18.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
