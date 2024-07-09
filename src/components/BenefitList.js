import PropTypes from "prop-types";
import "./BenefitList.css";

const BenefitList = ({ className = "" }) => {
  return (
    <div className={`benefit-list ${className}`}>
      <div className="benefit-list-child" />
      <img
        className="benefit-items-icon"
        loading="lazy"
        alt=""
        src="/vector-32.svg"
      />
      <img
        className="benefit-items-icon1"
        loading="lazy"
        alt=""
        src="/vector-41.svg"
      />
      <img
        className="benefit-items-icon2"
        loading="lazy"
        alt=""
        src="/vector-51.svg"
      />
      <textarea
        className="benefit-items"
        placeholder={`6500+
Customers`}
        rows={9}
        cols={10}
      />
      <div className="rectangle-parent122">
        <div className="frame-child65" />
        <div className="sellers2">
          <p className="p4">120+</p>
          <p className="sellers3">Sellers</p>
        </div>
      </div>
      <div className="rectangle-parent123">
        <div className="frame-child66" />
        <div className="orders2">
          <p className="p5">20000+</p>
          <p className="orders3">Orders</p>
        </div>
      </div>
      <div className="rectangle-parent124">
        <div className="frame-child67" />
        <div className="products2">
          <p className="p6">1800+</p>
          <p className="products3">Products</p>
        </div>
      </div>
    </div>
  );
};

BenefitList.propTypes = {
  className: PropTypes.string,
};

export default BenefitList;
