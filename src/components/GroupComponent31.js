import { useMemo } from "react";
import PropTypes from "prop-types";
import "./GroupComponent31.css";

const GroupComponent3 = ({ className = "", propFlex, propHeight }) => {
  const groupDiv1Style = useMemo(() => {
    return {
      flex: propFlex,
      height: propHeight,
    };
  }, [propFlex, propHeight]);

  return (
    <div className={`rectangle-parent149 ${className}`} style={groupDiv1Style}>
      <div className="group-child266" />
      <div className="wrapper-image-20230524125515-28">
        <img
          className="image-20230524125515-2-removeb-icon8"
          alt=""
          src="/image202305241255152removebgpreview-1@2x.png"
        />
      </div>
      <div className="aac-blocks8">AAC Blocks</div>
      <b className="b25">$ 2.50</b>
      <div className="div46">$ 4.50</div>
      <img className="group-child267" alt="" src="/rating-star-one.svg" />
      <img className="group-child268" alt="" src="/rating-star-two.svg" />
      <img className="group-child269" alt="" src="/rating-star-one.svg" />
      <img className="group-child270" alt="" src="/rating-star-two.svg" />
      <img className="group-child271" alt="" src="/rating-star-one.svg" />
      <div className="reviews28">4.9 (374 Reviews)</div>
      <div className="group-child272" />
      <div className="group-child273" />
      <div className="add-to-cart24">ADD TO CART</div>
      <div className="off5">15% off</div>
    </div>
  );
};

GroupComponent3.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
  propHeight: PropTypes.any,
};

export default GroupComponent3;
