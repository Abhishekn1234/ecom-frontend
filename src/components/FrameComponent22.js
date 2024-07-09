import { useMemo } from 'react';
import PropTypes from "prop-types";
import './FrameComponent22.css';


const FrameComponent2 = ({ className="", propPadding }) => {
  const frameDiv1Style = useMemo(() => {
                  return {
                    padding: propPadding
                  };
                }, [propPadding]);
              
  return (
    <div className={`frame-parent20 ${className}`} style={frameDiv1Style}>
      <div className="supplier-placeholders-wrapper">
        <img className="supplier-placeholders-icon" loading="lazy" alt="" src="/ellipse-24@2x.png" />
      </div>
      <div className="company-name6">Company Name</div>
    </div>);
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  
  /** Style props */
  propPadding: PropTypes.any
};

export default FrameComponent2;