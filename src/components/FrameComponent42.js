import PropTypes from "prop-types";
import './FrameComponent42.css';


const FrameComponent4 = ({ className="" }) => {
  return (
    <div className={`rectangle-parent144 ${className}`}>
      <div className="frame-child102" />
      <div className="phone-icon-parent">
        <div className="phone-icon">
          <img className="phone-svgrepo-com-1-icon1" loading="lazy" alt="" src="/phonesvgrepocom-1.svg" />
        </div>
        <a className="a">+91-986546852</a>
      </div>
      <div className="choose-location-group">
        <a className="choose-location1">Choose location</a>
        <div className="vector-wrapper1">
          <img className="vector-icon14" alt="" src="/flags.svg" />
        </div>
      </div>
      <div className="english-group">
        <a className="english1">English</a>
        <div className="vector-wrapper2">
          <img className="vector-icon15" alt="" src="/flags.svg" />
        </div>
      </div>
    </div>);
};

FrameComponent4.propTypes = {
  className: PropTypes.string
};

export default FrameComponent4;