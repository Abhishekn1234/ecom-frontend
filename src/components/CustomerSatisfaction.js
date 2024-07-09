import PropTypes from "prop-types";
import "./CustomerSatisfaction.css";

const CustomerSatisfaction = ({ className = "" }) => {
  return (
    <div className={`customer-satisfaction ${className}`}>
      <div className="background-copy-2" />
      <div className="satisfaction-content">
        <div className="customer-satisfactio-wrapper">
          <h3 className="customer-satisfactio">Customer Satisfaction</h3>
        </div>
        <div className="satisfaction-chart">
          <div className="ui-elements6-line-1px-copy-4">
            <div className="rectangle2" />
          </div>
          <div className="chart-values">
            <img className="chart-values-child" alt="" src="/group-17.svg" />
            <img
              className="chart-values-item"
              loading="lazy"
              alt=""
              src="/group-16.svg"
            />
          </div>
        </div>
      </div>
      <div className="customer-satisfaction-inner">
        <div className="frame-parent21">
          <div className="last-month-parent">
            <div className="last-month">
              <div className="last-month-inner">
                <img
                  className="frame-child124"
                  loading="lazy"
                  alt=""
                  src="/group-181.svg"
                />
              </div>
              <div className="last-month1">Last Month</div>
            </div>
            <div className="this-month">
              <div className="this-month-value-bar-wrapper">
                <div className="this-month-value-bar" />
              </div>
              <div className="this-month-value-copy">
                <img
                  className="group-18-copy"
                  loading="lazy"
                  alt=""
                  src="/group-18-copy.svg"
                />
              </div>
              <div className="this-month1">This Month</div>
            </div>
          </div>
          <div className="frame-wrapper21">
            <div className="parent6">
              <div className="div47">$3,004</div>
              <div className="div48">$4,504</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CustomerSatisfaction.propTypes = {
  className: PropTypes.string,
};

export default CustomerSatisfaction;
