import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ProductCard.css";

const ProductCard = ({
  className = "",
  propFlex,
  propMinWidth,
  propAlignSelf,
}) => {
  const productCardStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propMinWidth, propAlignSelf]);

  return (
    <div className={`product-card ${className}`} style={productCardStyle}>
      <div className="cement-bags-2519">Cement Bags (25 kg)</div>
      <div className="product-rating">
        <div className="rating-stars">
          <div className="star-icons">
            <img className="filled-stars-icon" alt="" src="/star-711.svg" />
            <img className="filled-stars-icon1" alt="" src="/star-81.svg" />
            <img className="filled-stars-icon2" alt="" src="/star-911.svg" />
            <img className="filled-stars-icon3" alt="" src="/star-101.svg" />
            <div className="empty-star">
              <img
                className="star-placeholder-icon"
                alt=""
                src="/star-111.svg"
              />
            </div>
            <div className="review-count">
              <div className="reviews27">4.9 (374 Reviews)</div>
            </div>
          </div>
          <div className="price-container">
            <b className="price-placeholder">$ 2.50</b>
            <div className="old-price">
              <div className="old-price-placeholder">
                <div className="old-price-value">$ 4.50</div>
                <div className="price-divider" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default ProductCard;
