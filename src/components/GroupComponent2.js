import PropTypes from "prop-types";
import "./GroupComponent2.css";

const GroupComponent2 = ({ className = "" }) => {
  return (
    <div className={`rectangle-parent89 ${className}`}>
      <img className="group-child252" alt="" src="/rectangle-62@2x.png" />
      <div className="rectangle-parent90">
        <div className="group-child253" />
        <img className="group-child254" alt="" src="/ellipse-23.svg" />
      </div>
      <div className="group-child255" />
      <b className="earn-rewards">Earn Rewards</b>
      <div className="earn-rewards-points-container">
        <p className="earn-rewards-points">
          Earn rewards points on every purchase
        </p>
        <p className="and-redeem-it">and redeem it.</p>
      </div>
      <div className="group-child256" />
      <div className="learn-more">Learn more</div>
    </div>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent2;
