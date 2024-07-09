import PropTypes from "prop-types";
import "./FrameComponent41.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div className={`rectangle-parent162 ${className}`}>
      <div className="frame-child112" />
      <div className="frame-wrapper13">
        <div className="screenshot-94-removebg-previ-parent1">
          <img
            className="screenshot-94-removebg-previ-icon14"
            loading="lazy"
            alt=""
            src="/screenshot--94-removebgpreview-1@2x.png"
          />
          <div className="logo-1-frame">
            <img
              className="logo-1-icon9"
              loading="lazy"
              alt=""
              src="/logo-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="single-menu-parent">
        <div className="single-menu">
          <img className="fi-sr-apps-icon" alt="" src="/fisrapps.svg" />
          <div className="text-container">
            <b className="text2">Dashboard</b>
          </div>
        </div>
        <div className="frame-wrapper14">
          <div className="frame-parent12">
            <div className="community-svgrepo-com-parent">
              <img
                className="community-svgrepo-com-icon"
                loading="lazy"
                alt=""
                src="/communitysvgrepocom.svg"
              />
              <b className="text3">Sellers</b>
            </div>
            <div className="account-box-svgrepo-com-parent">
              <img
                className="account-box-svgrepo-com-icon"
                loading="lazy"
                alt=""
                src="/accountboxsvgrepocom.svg"
              />
              <div className="text-frame">
                <b className="text4">Customers</b>
              </div>
            </div>
            <div className="fi-sr-box-parent">
              <img
                className="fi-sr-box-icon"
                loading="lazy"
                alt=""
                src="/fisrbox.svg"
              />
              <div className="text-wrapper1">
                <b className="text5">Products</b>
              </div>
            </div>
            <div className="frame-wrapper15">
              <div className="feedback-svgrepo-com-1-1-parent">
                <img
                  className="feedback-svgrepo-com-1-1"
                  loading="lazy"
                  alt=""
                  src="/feedbacksvgrepocom-1-1.svg"
                />
                <div className="text-wrapper2">
                  <b className="text6">Feedbacks</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
