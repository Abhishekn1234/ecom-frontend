import PropTypes from "prop-types";
import "./GroupComponent11.css";

const GroupComponent1 = ({ className = "" }) => {
  return (
    <div className={`line-group ${className}`}>
      <div className="frame-child117" />
      <div className="frame-child118" />
      <div className="frame-child119" />
      <img className="frame-child120" alt="" src="/vector-31.svg" />
      <div className="chart-title1">
        <div className="revenue-title">
          <div className="revenue-symbol">$ 5,500</div>
          <div className="total-revenue">Total Revenue</div>
        </div>
        <div className="chart-title-inner">
          <div className="frame-parent19">
            <div className="month-label-wrapper">
              <div className="month-label1">
                <div className="wrapper-rectangle-15">
                  <img
                    className="wrapper-rectangle-15-child"
                    loading="lazy"
                    alt=""
                    src="/rectangle-15.svg"
                  />
                </div>
                <div className="may-14">May 14</div>
                <div className="k2">$2K</div>
              </div>
            </div>
            <div className="months-row">
              <div className="months">6 months</div>
              <div className="months-values">
                <img
                  className="months-values-child"
                  alt=""
                  src="/group-3.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="chart-graph">
        <div className="chart-graph-content">
          <div className="frame-parent20">
            <div className="frame-wrapper20">
              <div className="k-parent">
                <div className="k3">5k</div>
                <div className="k4">2k</div>
                <div className="k-wrapper">
                  <div className="k5">1k</div>
                </div>
              </div>
            </div>
            <div className="line-container">
              <div className="frame-child121" />
              <div className="wrapper-vector-2">
                <img
                  className="wrapper-vector-2-child"
                  loading="lazy"
                  alt=""
                  src="/vector-22.svg"
                />
              </div>
              <div className="frame-child122" />
              <div className="frame-child123" />
            </div>
          </div>
          <div className="chart-months">
            <div className="chart-months-container">
              <div className="short-month-names">
                <div className="feb1">FEB</div>
              </div>
              <div className="short-month-names1">
                <div className="mar1">MAR</div>
              </div>
              <div className="short-month-names2">
                <div className="apr1">APR</div>
              </div>
              <div className="may1">MAY</div>
              <div className="jun1">JUN</div>
              <div className="jul1">JUL</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent1;
