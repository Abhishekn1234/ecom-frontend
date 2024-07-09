import CategoryList from "./CategoryList";
import PropTypes from "prop-types";
import "./Header1.css";

const Header = ({ className = "" }) => {
  return (
    <header className={`header1 ${className}`}>
      <div className="header-child" />
      <div className="logo-container">
        <div className="logo-wrap">
          <div className="logo-padding">
            <div className="logo-spacing">
              <img
                className="screenshot-94-removebg-previ-icon10"
                loading="lazy"
                alt=""
                src="/screenshot--94-removebgpreview-1@2x.png"
              />
              <div className="brand-logo">
                <img
                  className="logo-1-icon6"
                  loading="lazy"
                  alt=""
                  src="/logo-1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="rectangle-parent121">
            <div className="frame-child64" />
            <a className="cement2">Cement</a>
            <div className="slogan-icon">
              <img className="slogan-shape-icon" alt="" src="/vector-2.svg" />
            </div>
          </div>
          <div className="navigation1">
            <div className="nav-links">
              <div className="parent3">
                <img className="icon9" loading="lazy" alt="" src="/-1.svg" />
                <div className="user-account">
                  <a className="account6">Account</a>
                </div>
              </div>
              <div className="cart-link-wrapper">
                <div className="cart-link">
                  <img
                    className="cart-shopping-svgrepo-com-1-icon6"
                    loading="lazy"
                    alt=""
                    src="/cartshoppingsvgrepocom-1.svg"
                  />
                  <div className="cart-label">
                    <a className="cart7">Cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CategoryList />
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
