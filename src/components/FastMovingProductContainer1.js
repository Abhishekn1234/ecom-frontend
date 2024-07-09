import PropTypes from "prop-types";
import "./FastMovingProductContainer1.css";

const FastMovingProductContainer1 = ({
  className = "",
  heartLikeSvgrepoCom1,
}) => {
  return (
    <div className={`rectangle-parent88 ${className}`}>
      <div className="group-child244" />
      <div className="wrapper-istockphoto-476199756-21">
        <img
          className="istockphoto-476199756-612x612-icon21"
          alt=""
          src="/istockphoto476199756612x612removebgpreview-3-6@2x.png"
        />
      </div>
      <div className="cement-bags-2517">Cement Bags (25 kg)</div>
      <b className="b22">$ 2.50</b>
      <div className="div37">$ 4.50</div>
      <img className="group-child245" alt="" src="/star-7.svg" />
      <img className="group-child246" alt="" src="/star-8.svg" />
      <img className="group-child247" alt="" src="/star-9-3.svg" />
      <img className="group-child248" alt="" src="/star-10.svg" />
      <img className="group-child249" alt="" src="/star-11.svg" />
      <div className="reviews24">4.9 (374 Reviews)</div>
      <div className="group-child250" />
      <div className="group-child251" />
      <div className="add-to-cart22">ADD TO CART</div>
      <img
        className="heart-like-svgrepo-com-1-icon17"
        alt=""
        src={heartLikeSvgrepoCom1}
      />
    </div>
  );
};

FastMovingProductContainer1.propTypes = {
  className: PropTypes.string,
  heartLikeSvgrepoCom1: PropTypes.string,
};

export default FastMovingProductContainer1;
