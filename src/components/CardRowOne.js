import PropTypes from "prop-types";
import "./CardRowOne.css";

const CardRowOne = ({ className = "", iconlyBoldChart }) => {
  return (
    <div className={`card-row-one ${className}`}>
      <div className="card-row-one-child" />
      <div className="frame-parent7">
        <div className="iconlyboldchart-wrapper">
          <img
            className="iconlyboldchart"
            loading="lazy"
            alt=""
            src={iconlyBoldChart}
          />
        </div>
        <div className="card-one-description">
          <div className="customer-description">
            <h2 className="find-more-customers">Find More Customers</h2>
          </div>
          <div className="lorem-ipsum-dolor6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui
            mi, bibendum eu erat id, ultricies semper metus. Nunc
          </div>
        </div>
      </div>
      <div className="card-row-one-inner">
        <button className="rectangle-parent119">
          <div className="frame-child61" />
          <div className="learn-more1">Learn More</div>
        </button>
      </div>
    </div>
  );
};

CardRowOne.propTypes = {
  className: PropTypes.string,
  iconlyBoldChart: PropTypes.string,
};

export default CardRowOne;
