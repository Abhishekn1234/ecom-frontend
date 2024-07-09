import PropTypes from "prop-types";
import './CustomerBenefit.css';


const CustomerBenefit = ({ className="", benefitsIconList, prop, sellers }) => {
  return (
    <div className={`customer-benefit ${className}`}>
      <div className="benefits-icons">
        <img className="benefits-icon-list" loading="lazy" alt="" src={benefitsIconList} />
        <div className="rectangle-parent160">
          <div className="frame-child118" />
          <div className="sellers">
            <p className="p">{prop}</p>
            <p className="sellers1">{sellers}</p>
          </div>
        </div>
      </div>
    </div>);
};

CustomerBenefit.propTypes = {
  className: PropTypes.string,
  benefitsIconList: PropTypes.string,
  prop: PropTypes.string,
  sellers: PropTypes.string
};

export default CustomerBenefit;
