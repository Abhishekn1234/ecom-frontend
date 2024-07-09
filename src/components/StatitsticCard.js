import PropTypes from "prop-types";
import "./StatitsticCard.css";

const StatitsticCard = ({ className = "", text }) => {
  return (
    <div className={`statitstic-card1 ${className}`}>
      <div className="square-icon-badge1">
        <input className="fi-sr-box" type="checkbox" />
      </div>
      <div className="body1">
        <div className="text10">Total Product</div>
        <div className="numbers1">
          <div className="text11">{text}</div>
          <div className="label1">
            <div className="text12">0%</div>
          </div>
        </div>
      </div>
      <img className="ornament-icon1" alt="" src="/ornament-3.svg" />
    </div>
  );
};

StatitsticCard.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
};

export default StatitsticCard;
