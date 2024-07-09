import PropTypes from "prop-types";
import "./StatisticChart.css";

const StatisticChart = ({ className = "" }) => {
  return (
    <div className={`statistic-chart ${className}`}>
      <div className="chart-header">
        <h2 className="chart-title">Statistic</h2>
        <div className="text-parent">
          <div className="text13">Revenue and Sales</div>
          <div className="frame-wrapper16">
            <div className="frame-parent13">
              <div className="frame-parent14">
                <div className="color-wrapper">
                  <div className="color" />
                </div>
                <div className="color-name">Revenue</div>
              </div>
              <div className="frame-parent15">
                <div className="color-container">
                  <div className="color1" />
                </div>
                <div className="text14">Sales</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent16">
        <div className="axis-parent">
          <div className="axis">
            <div className="y-axis">
              <div className="y">
                <div className="k">$1.2k</div>
                <img className="line-icon" alt="" src="/line.svg" />
              </div>
              <div className="y1">
                <div className="k1">$1k</div>
                <img className="line-icon1" alt="" src="/line.svg" />
              </div>
              <div className="y2">
                <div className="div42">$800</div>
                <img className="line-icon2" alt="" src="/line.svg" />
              </div>
              <div className="y3">
                <div className="div43">$600</div>
                <img className="line-icon3" alt="" src="/line.svg" />
              </div>
              <div className="y4">
                <div className="div44">$400</div>
                <img className="line-icon4" alt="" src="/line.svg" />
              </div>
              <div className="y5">
                <div className="div45">$200</div>
                <img className="line-icon5" alt="" src="/line.svg" />
              </div>
              <div className="y6">
                <div className="div46">0</div>
                <img
                  className="line-icon6"
                  loading="lazy"
                  alt=""
                  src="/line-6.svg"
                />
              </div>
            </div>
            <div className="line-parent">
              <img className="line-icon7" alt="" src="/line-7.svg" />
              <div className="elipse" />
              <div className="line-wrapper">
                <img
                  className="line-icon8"
                  loading="lazy"
                  alt=""
                  src="/line-8.svg"
                />
              </div>
            </div>
          </div>
          <div className="label2">
            <div className="frame-parent17">
              <div className="color-frame">
                <div className="color2" />
              </div>
              <div className="text-group">
                <div className="text15">Revenue</div>
                <div className="text16">:</div>
              </div>
              <div className="x-axis-second">1,240</div>
            </div>
            <div className="frame-parent18">
              <div className="color-wrapper1">
                <div className="color3" />
              </div>
              <div className="text17">Sales</div>
              <div className="text18">:</div>
              <div className="text19">30%</div>
            </div>
          </div>
        </div>
        <div className="month-label">
          <div className="jan-parent">
            <div className="jan">Jan</div>
            <div className="feb">Feb</div>
            <div className="mar">Mar</div>
            <div className="apr">Apr</div>
            <div className="may">May</div>
            <b className="jun">Jun</b>
            <div className="jul">Jul</div>
            <div className="aug">Aug</div>
            <div className="sep">Sep</div>
            <div className="nov">Nov</div>
            <div className="oct">Oct</div>
            <div className="dec">Dec</div>
          </div>
        </div>
      </div>
    </div>
  );
};

StatisticChart.propTypes = {
  className: PropTypes.string,
};

export default StatisticChart;
