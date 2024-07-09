import CustomerBenefit from "./CustomerBenefit";
import PropTypes from "prop-types";
import './FrameComponent61.css';


const FrameComponent6 = ({ className="" }) => {
  return (
    <section className={`benefits-header-wrapper ${className}`}>
      <div className="benefits-header">
        <div className="benefits-header-child" />
        <div className="rectangle-parent161">
          <div className="frame-child119" />
          <div className="customers">
            <p className="p1">6500+</p>
            <p className="customers1">Customers</p>
          </div>
        </div><CustomerBenefit benefitsIconList="/vector-32.svg" prop="120+" sellers="Sellers" />
        <div className="benefit-category-list">
          <img className="benefit-category-list-child" loading="lazy" alt="" src="/vector-51.svg" />
          <div className="rectangle-parent162">
            <div className="frame-child120" />
            <div className="orders">
              <p className="p2">20000+</p>
              <p className="orders1">Orders</p>
            </div>
          </div>
        </div><CustomerBenefit benefitsIconList="/vector-41.svg" prop="1800+" sellers="Products" />
      </div>
    </section>);
};

FrameComponent6.propTypes = {
  className: PropTypes.string
};

export default FrameComponent6;