import { useMemo } from "react";
import PropTypes from "prop-types";
import "./StatitsticCard1.css";

const StatitsticCard1 = ({
  className = "",
  fiSrMoney,
  text,
  text1,
  text2,
  ornament,
  propBackgroundColor,
}) => {
  const statitsticCardStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className={`statitstic-card ${className}`} style={statitsticCardStyle}>
      <div className="square-icon-badge">
        <img
          className="fi-sr-money-icon"
          loading="lazy"
          alt=""
          src={fiSrMoney}
        />
      </div>
      <div className="body">
        <div className="text7">{text}</div>
        <div className="numbers">
          <div className="text8">{text1}</div>
          <div className="label">
            <div className="text9">{text2}</div>
          </div>
        </div>
      </div>
      <img className="ornament-icon" alt="" src={ornament} />
    </div>
  );
};

StatitsticCard1.propTypes = {
  className: PropTypes.string,
  fiSrMoney: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  ornament: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
};

export default StatitsticCard1;
