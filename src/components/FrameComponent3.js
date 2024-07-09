import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({
  className = "",
  istockphoto476199756612x6,
  heartLikeSvgrepoCom1,
  star7,
  star9,
}) => {
  return (
    <div className={`rectangle-parent87 ${className}`}>
      <div className="group-child236" />
      <div className="wrapper-istockphoto-476199756-20">
        <img
          className="istockphoto-476199756-612x612-icon20"
          alt=""
          src={istockphoto476199756612x6}
        />
      </div>
      <div className="cement-bags-2516">Cement Bags (25 kg)</div>
      <b className="b21">$ 2.50</b>
      <div className="div36">$ 4.50</div>
      <img className="group-child237" alt="" src={star7} />
      <img className="group-child238" alt="" src="/star-8.svg" />
      <img className="group-child239" alt="" src={star9} />
      <img className="group-child240" alt="" src="/star-10.svg" />
      <img className="group-child241" alt="" src="/star-11.svg" />
      <div className="reviews23">4.9 (374 Reviews)</div>
      <div className="group-child242" />
      <div className="group-child243" />
      <div className="add-to-cart21">ADD TO CART</div>
      <img
        className="heart-like-svgrepo-com-1-icon16"
        alt=""
        src={heartLikeSvgrepoCom1}
      />
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
  istockphoto476199756612x6: PropTypes.string,
  heartLikeSvgrepoCom1: PropTypes.string,
  star7: PropTypes.string,
  star9: PropTypes.string,
};

export default FrameComponent3;
