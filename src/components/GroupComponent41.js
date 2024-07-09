import { useMemo } from "react";
import PropTypes from "prop-types";
import "./GroupComponent41.css";

const GroupComponent4 = ({ className = "", propFlex, propHeight }) => {
  const groupDivStyle = useMemo(() => {
    return {
      flex: propFlex,
      height: propHeight,
    };
  }, [propFlex, propHeight]);

  return (
    <div className={`rectangle-parent125 ${className}`} style={groupDivStyle}>
      <div className="group-child258" />
      <div className="wrapper-image-20230524125515-26">
        <img
          className="image-20230524125515-2-removeb-icon6"
          alt=""
          src="/image202305241255152removebgpreview-1@2x.png"
        />
      </div>
      <div className="aac-blocks6">AAC Blocks</div>
      <b className="b23">$ 2.50</b>
      <div className="div38">$ 4.50</div>
      <img className="group-child259" alt="" src="/rating-star-one.svg" />
      <img className="group-child260" alt="" src="/rating-star-two.svg" />
      <img className="group-child261" alt="" src="/rating-star-one.svg" />
      <img className="group-child262" alt="" src="/rating-star-two.svg" />
      <img className="group-child263" alt="" src="/rating-star-one.svg" />
      <div className="reviews25">4.9 (374 Reviews)</div>
      <div className="group-child264" />
      <div className="group-child265" />
      <div className="add-to-cart23">ADD TO CART</div>
      <div className="off4">15% off</div>
    </div>
  );
};

GroupComponent4.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propHeight: PropTypes.any,
};

export default GroupComponent4;
