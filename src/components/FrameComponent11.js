import PropTypes from "prop-types";
import "./FrameComponent11.css";

const FrameComponent1 = ({ className = "", qty2 }) => {
  return (
    <div className={`quantity-labels-wrapper ${className}`}>
      <div className="quantity-labels">
        <div className="quantity-labels-child" />
        <div className="qty-22">{qty2}</div>
        <div className="quantity-selectors-wrapper">
          <img className="quantity-selectors-icon" alt="" src="/vector-1.svg" />
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  qty2: PropTypes.string,
};

export default FrameComponent1;
