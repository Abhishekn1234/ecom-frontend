import PropTypes from "prop-types";
import './FrameComponent71.css';


const FrameComponent7 = ({ className="" }) => {
  return (
    <section className={`hero-content-parent ${className}`}>
      <div className="hero-content">
        <div className="seller-call-to-action">
          <img className="seller-button-background" loading="lazy" alt="" src="/rectangle-105@2x.png" />
          <h1 className="be-our-seller-container1">
            <p className="be1">{`Be `}</p>
            <p className="our1">Our</p>
            <p className="seller4">Seller.</p>
          </h1>
        </div>
        <button className="register-button">
          <div className="register-button-child" />
          <div className="register1">Register</div>
        </button>
      </div>
      <div className="hero-image" />
      <div className="hero-description">
        <h2 className="h2">-</h2>
      </div>
    </section>);
};

FrameComponent7.propTypes = {
  className: PropTypes.string
};

export default FrameComponent7;