import PropTypes from "prop-types";
import "./FrameComponent6.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <div className={`rectangle-parent166 ${className}`}>
      <div className="frame-child116" />
      <div className="frame-wrapper18">
        <div className="screenshot-94-removebg-previ-parent3">
          <img
            className="screenshot-94-removebg-previ-icon16"
            loading="lazy"
            alt=""
            src="/screenshot--94-removebgpreview-1@2x.png"
          />
          <div className="logo-1-wrapper2">
            <img
              className="logo-1-icon11"
              loading="lazy"
              alt=""
              src="/logo-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="single-menu-container">
        <div className="single-menu2">
          <img
            className="fi-sr-apps-icon2"
            loading="lazy"
            alt=""
            src="/fisrapps1.svg"
          />
          <div className="text-wrapper4">
            <b className="text25">Dashboard</b>
          </div>
        </div>
        <div className="single-menu3">
          <div className="icon13" />
          <img className="vector-icon17" alt="" src="/vector1.svg" />
          <div className="text-wrapper5">
            <b className="text26">Sales</b>
          </div>
        </div>
        <div className="frame-wrapper19">
          <div className="stock-out-svgrepo-com-1-1-group">
            <img
              className="stock-out-svgrepo-com-1-11"
              loading="lazy"
              alt=""
              src="/stockoutsvgrepocom-1-1.svg"
            />
            <div className="text-wrapper6">
              <b className="text27">Stocks</b>
            </div>
          </div>
        </div>
      </div>
      <div className="payment-icons-wrapper">
        <div className="payment-icons">
          <div className="payment-icon-box">
            <img
              className="fi-sr-box-icon2"
              loading="lazy"
              alt=""
              src="/fisrbox.svg"
            />
            <div className="text-wrapper7">
              <b className="text28">Products</b>
            </div>
          </div>
          <div className="payment-icon-box1">
            <img
              className="fi-sr-credit-card-icon1"
              loading="lazy"
              alt=""
              src="/fisrcreditcard1.svg"
            />
            <div className="text-wrapper8">
              <b className="text29">Orders</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
