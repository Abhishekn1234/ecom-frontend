import CategoryList from "./CategoryList";
import PropTypes from "prop-types";
import './FrameComponent8.css';


const FrameComponent8 = ({ className="" }) => {
  return (
    <header className={`rectangle-parent158 ${className}`}>
      <div className="frame-child116" />
      <div className="frame-wrapper20">
        <div className="logo-bar-parent">
          <div className="logo-bar">
            <img className="screenshot-94-removebg-previ-icon14" loading="lazy" alt="" src="/screenshot--94-removebgpreview-1@2x.png" />
          </div>
          <div className="search-bar2">
            <img className="logo-1-icon10" loading="lazy" alt="" src="/logo-1@2x.png" />
          </div>
          <div className="navigation">
            <div className="rectangle-parent159">
              <div className="frame-child117" />
              <a className="cement3">Cement</a>
              <div className="cement-icon">
                <img className="vector-icon17" alt="" src="/vector-2.svg" />
              </div>
            </div>
          </div>
          <div className="user-actions1">
            <div className="account-actions">
              <div className="account-dropdown">
                <img className="icon12" loading="lazy" alt="" src="/-1.svg" />
                <div className="account-name1">
                  <a className="account7">Account</a>
                </div>
              </div>
              <div className="cart-actions">
                <div className="cart-dropdown">
                  <img className="cart-shopping-svgrepo-com-1-icon7" loading="lazy" alt="" src="/cartshoppingsvgrepocom-1.svg" />
                  <div className="cart-name1">
                    <a className="cart9">Cart</a>
                  </div>
                </div>
              </div>
              <div className="notification-icon5">
                <img className="notification-icon-child" loading="lazy" alt="" src="/group-57.svg" />
              </div>
            </div>
          </div>
        </div>
      </div><CategoryList />
    </header>);
};

FrameComponent8.propTypes = {
  className: PropTypes.string
};

export default FrameComponent8;