import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <div className={`rectangle-parent165 ${className}`}>
      <div className="frame-child115" />
      <div className="frame-wrapper17">
        <div className="screenshot-94-removebg-previ-parent2">
          <img
            className="screenshot-94-removebg-previ-icon15"
            loading="lazy"
            alt=""
            src="/screenshot--94-removebgpreview-1@2x.png"
          />
          <div className="logo-1-wrapper1">
            <img
              className="logo-1-icon10"
              loading="lazy"
              alt=""
              src="/logo-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="single-menu-group">
        <div className="single-menu1">
          <img className="fi-sr-apps-icon1" alt="" src="/fisrapps.svg" />
          <div className="menu-label-wrapper">
            <b className="menu-label">Dashboard</b>
          </div>
        </div>
        <div className="user-actions1">
          <div className="notification-icon5">
            <img
              className="notification-bell-icon"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <div className="notification-label">
              <b className="text22">Sales</b>
            </div>
          </div>
        </div>
        <div className="menu-icons">
          <div className="menu-items">
            <div className="stock-out-svgrepo-com-1-1-parent">
              <img
                className="stock-out-svgrepo-com-1-1"
                loading="lazy"
                alt=""
                src="/stockoutsvgrepocom-1-1.svg"
              />
              <div className="stock-label">
                <b className="text23">Stocks</b>
              </div>
            </div>
            <div className="menu-item">
              <img
                className="fi-sr-box-icon1"
                loading="lazy"
                alt=""
                src="/fisrbox.svg"
              />
              <div className="menu-name">
                <b className="menu-label1">Products</b>
              </div>
            </div>
            <div className="menu-item1">
              <img
                className="fi-sr-credit-card-icon"
                loading="lazy"
                alt=""
                src="/fisrcreditcard1.svg"
              />
              <div className="text-wrapper3">
                <b className="text24">Orders</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
