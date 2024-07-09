import PropTypes from "prop-types";
import "./FrameComponent61.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section className={`benefits-header-wrapper ${className}`}>
      <div className="benefits-header">
        <div className="benefits-header-child" />
        <div className="customer-benefit">
          <div className="rectangle-parent115">
            <div className="frame-child57" />
            <div className="customers">
              <p className="p">6500+</p>
              <p className="customers1">Customers</p>
            </div>
          </div>
        </div>
        <div className="customer-benefit-icon">
          <img
            className="customer-benefit-icon-child"
            loading="lazy"
            alt=""
            src="/vector-51.svg"
          />
        </div>
        <div className="benefits-icons">
          <img
            className="benefits-icon-list"
            loading="lazy"
            alt=""
            src="/vector-32.svg"
          />
          <div className="rectangle-parent116">
            <div className="frame-child58" />
            <div className="sellers">
              <p className="p1">120+</p>
              <p className="sellers1">Sellers</p>
            </div>
          </div>
        </div>
        <div className="rectangle-parent117">
          <div className="frame-child59" />
          <div className="orders">
            <p className="p2">20000+</p>
            <p className="orders1">Orders</p>
          </div>
        </div>
        <div className="benefits-icons1">
          <img
            className="benefits-icons-child"
            loading="lazy"
            alt=""
            src="/vector-41.svg"
          />
          <div className="rectangle-parent118">
            <div className="frame-child60" />
            <div className="products">
              <p className="p3">1800+</p>
              <p className="products1">Products</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
