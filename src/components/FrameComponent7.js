import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent7.css";

const FrameComponent = ({
  className = "",
  sIGNUP,
  propAlignSelf,
  propPadding,
  propWidth,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      width: propWidth,
    };
  }, [propAlignSelf, propPadding, propWidth]);

  return (
    <div className={`frame-wrapper4 ${className}`} style={frameDivStyle}>
      <button className="frame-button">
        <div className="frame-child33" />
        <div className="sign-up">{sIGNUP}</div>
      </button>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  sIGNUP: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
};

export default FrameComponent;
