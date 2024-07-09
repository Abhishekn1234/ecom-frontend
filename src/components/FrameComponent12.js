import FrameComponent2 from "./FrameComponent22";
import PropTypes from "prop-types";
import "./FrameComponent12.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`nearest-suppliers-group ${className}`}>
      <h2 className="nearest-suppliers1">Nearest Suppliers</h2>
      <div className="supplier-list">
        <div className="supplier-items">
          <div className="right-arrow-svgrepo-com-7-wrapper">
            <img
              className="right-arrow-svgrepo-com-7-icon1"
              loading="lazy"
              alt=""
              src="/rightarrowsvgrepocom-7.svg"
            />
          </div>
          <FrameComponent2 />
          <FrameComponent2 propPadding="0px 42px 0px 0px" />
          <FrameComponent2 propPadding="0px 39px 0px 0px" />
          <FrameComponent2 propPadding="0px 42px 0px 0px" />
          <FrameComponent2 propPadding="unset" />
          <div className="right-arrow-svgrepo-com-6-wrapper">
            <img
              className="right-arrow-svgrepo-com-6-icon2"
              alt=""
              src="/rightarrowsvgrepocom-6.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
