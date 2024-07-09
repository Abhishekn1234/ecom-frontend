import PropTypes from "prop-types";
import './BenefitList.css';


const BenefitList = ({ className="" }) => {
  return (
    <div className={`benefit-list ${className}`}>
      <div className="benefit-list-child" />
      <img className="benefit-items-icon" loading="lazy" alt="" src="/vector-32.svg" />
      <img className="benefit-items-icon1" loading="lazy" alt="" src="/vector-41.svg" />
      <img className="benefit-items-icon2" loading="lazy" alt="" src="/vector-51.svg" />
      <textarea className="benefit-items" placeholder={`6500+
Customers`} rows={9} cols={10} />
      <div className="rectangle-parent167">
        <div className="frame-child125" />
        <div className="sellers2">
          <p className="p3">120+</p>
          <p className="sellers3">Sellers</p>
        </div>
      </div>
      <div className="rectangle-parent168">
        <div className="frame-child126" />
        <div className="orders2">
          <p className="p4">20000+</p>
          <p className="orders3">Orders</p>
        </div>
      </div>
      <div className="rectangle-parent169">
        <div className="frame-child127" />
        <div className="products">
          <p className="p5">1800+</p>
          <p className="products1">Products</p>
        </div>
      </div>
    </div>);
};

BenefitList.propTypes = {
  className: PropTypes.string
};

export default BenefitList;