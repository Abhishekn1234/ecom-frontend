import PropTypes from "prop-types";
import "./GroupComponent1.css";

const GroupComponent1 = ({ className = "" }) => {
  return (
    <div className={`rectangle-parent91 ${className}`}>
      <div className="group-child257" />
      <div className="wrapper-ellipse-1">
        <img className="wrapper-ellipse-1-child" alt="" src="/ellipse-1.svg" />
      </div>
      <div className="shop-now-wrapper">
        <div className="shop-now">SHOP NOW</div>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent1;
