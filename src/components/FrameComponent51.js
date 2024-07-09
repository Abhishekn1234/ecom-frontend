import CardRowOne from "./CardRowOne";
import PropTypes from "prop-types";
import "./FrameComponent51.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={`services-content-wrapper ${className}`}>
      <div className="services-content">
        <div className="services-header">
          <div className="services-title">
            <h1 className="what-we-do-container">
              <p className="what-we-do">
                <b>What We Do</b>
              </p>
              <p className="for-your-business">For Your Business</p>
            </h1>
            <div className="services-icon">
              <img
                className="services-icon-child"
                alt=""
                src="/vector-5-1.svg"
              />
            </div>
          </div>
        </div>
        <div className="service-cards">
          <div className="card-row-one1">
            <div className="card-row-one-item" />
            <div className="card-column-one">
              <div className="card-one-content">
                <div className="card-one-icon">
                  <img
                    className="iconlyboldactivity"
                    loading="lazy"
                    alt=""
                    src="/iconlyboldactivity.svg"
                  />
                </div>
                <h2 className="increase-sales">Increase Sales</h2>
              </div>
            </div>
            <div className="lorem-ipsum-dolor7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              dui mi, bibendum eu erat id, ultricies semper metus. Nunc
            </div>
            <div className="card-three-content">
              <button className="rectangle-parent120">
                <div className="frame-child62" />
                <div className="learn-more2">Learn More</div>
              </button>
            </div>
          </div>
          <CardRowOne iconlyBoldChart="/iconlyboldchart.svg" />
          <CardRowOne iconlyBoldChart="/dashboardsvgrepocom-1.svg" />
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
