import CategoryList from "./CategoryList";
import PropTypes from "prop-types";
import './FrameComponent32.css';


const FrameComponent3 = ({ className="" }) => {
  return (
    <header className={`rectangle-parent156 ${className}`}>
      <div className="frame-child114" />
      <div className="logo-background-wrapper">
        <div className="logo-background">
          <div className="logo-image">
            <img className="screenshot-94-removebg-previ-icon13" loading="lazy" alt="" src="/screenshot--94-removebgpreview-1@2x.png" />
          </div>
          <div className="app-logo">
            <img className="logo-1-icon9" loading="lazy" alt="" src="/logo-1@2x.png" />
          </div>
          <div className="logo-background-inner">
            <div className="rectangle-parent157">
              <div className="frame-child115" />
              <input className="search8" placeholder="Search..." type="text" />
              <div className="search-icon4">
                <img className="vector-icon16" alt="" src="/vector-2.svg" />
              </div>
            </div>
          </div>
          <div className="logo-background-child">
            <div className="account-details-parent">
              <div className="account-details">
                <img className="icon11" loading="lazy" alt="" src="/-1.svg" />
                <div className="account-name">
                  <a className="account6">Account</a>
                </div>
              </div>
              <div className="cart-details-wrapper">
                <div className="cart-details">
                  <img className="cart-shopping-svgrepo-com-1-icon6" loading="lazy" alt="" src="/cartshoppingsvgrepocom-1.svg" />
                  <div className="cart-name">
                    <a className="cart8">Cart</a>
                  </div>
                </div>
              </div>
              <div className="account-placeholder">
                <img className="account-placeholder-child" loading="lazy" alt="" src="/group-18.svg" />
              </div>
            </div>
          </div>
        </div>
      </div><CategoryList />
    </header>);
};

FrameComponent3.propTypes = {
  className: PropTypes.string
};

export default FrameComponent3;