import PropTypes from "prop-types";
import "./FrameComponent31.css";

const FrameComponent3 = ({ className = "", istockphoto476199756612x6 }) => {
  return (
    <div className={`product-card-parent ${className}`}>
      <div className="product-card2">
        <div className="rectangle-parent163">
          <div className="frame-child113" />
          <div className="wrapper-istockphoto-476199756-27">
            <img
              className="istockphoto-476199756-612x612-icon27"
              loading="lazy"
              alt=""
              src={istockphoto476199756612x6}
            />
          </div>
        </div>
        <div className="product-info">
          <div className="product-details2">
            <div className="cement-bags">Cement Bags</div>
            <div className="category-masonry1">Category : Masonry</div>
          </div>
        </div>
      </div>
      <div className="view-details">
        <button className="text20">
          <div className="depth-4-frame-0">
            <div className="depth-5-frame-0">
              <div className="view">View</div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
  istockphoto476199756612x6: PropTypes.string,
};

export default FrameComponent3;
