import PropTypes from "prop-types";
import "./SingleProduct.css";

const SingleProduct = ({ className = "", istockphoto476199756612x6 }) => {
  return (
    <div className={`single-product ${className}`}>
      <div className="single-product-container">
        <div className="single-product-details">
          <div className="rectangle-parent164">
            <div className="frame-child114" />
            <div className="wrapper-istockphoto-476199756-28">
              <img
                className="istockphoto-476199756-612x612-icon28"
                loading="lazy"
                alt=""
                src={istockphoto476199756612x6}
              />
            </div>
          </div>
          <div className="single-product-info">
            <div className="cement-bags-parent">
              <div className="cement-bags1">Cement Bags</div>
              <div className="category-masonry2">Category : Masonry</div>
            </div>
          </div>
        </div>
        <div className="view-details-single">
          <button className="text21">
            <div className="depth-4-frame-01">
              <div className="depth-5-frame-01">
                <div className="view1">View</div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

SingleProduct.propTypes = {
  className: PropTypes.string,
  istockphoto476199756612x6: PropTypes.string,
};

export default SingleProduct;
