import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "", cartIconAlignSelf, cartIconFlex }) => {
  const containerStyle = useMemo(() => {
    return {
      alignSelf: cartIconAlignSelf,
      flex: cartIconFlex,
    };
  }, [cartIconAlignSelf, cartIconFlex]);

  return (
    <header className={`container2 ${className}`} style={containerStyle}>
      <div className="container-child" />
      <div className="container3">
        <div className="container4">
          <div className="container5">
            <img
              className="screenshot-94-removebg-previ-icon16"
              loading="lazy"
              alt=""
              src="/screenshot--94-removebgpreview-1@2x.png"
            />
          </div>
          <div className="container6">
            <img
              className="logo-1-icon11"
              loading="lazy"
              alt=""
              src="/logo-1@2x.png"
            />
          </div>
          <div className="container7">
            <div className="rectangle-parent150">
              <div className="frame-child105" />
              <input className="search8" placeholder="Search..." type="text" />
              <div className="search-icon4">
                <img className="icon12" alt="" src="/vector-2.svg" />
              </div>
            </div>
          </div>
          <div className="container8">
            <div className="container9">
              <div className="container10">
                <img className="icon13" loading="lazy" alt="" src="/-1.svg" />
                <div className="container11">
                  <a className="account8">Account</a>
                </div>
              </div>
              <div className="container12">
                <div className="container13">
                  <img
                    className="cart-shopping-svgrepo-com-1-icon8"
                    loading="lazy"
                    alt=""
                    src="/cartshoppingsvgrepocom-1.svg"
                  />
                  <div className="container14">
                    <a className="cart10">Cart</a>
                  </div>
                </div>
              </div>
              <div className="container15">
                <img
                  className="container-item"
                  loading="lazy"
                  alt=""
                  src="/group-18.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="categories1">
        <div className="categories-child" />
        <div className="rectangle-parent151">
          <div className="frame-child106" />
          <a className="all6">All</a>
        </div>
        <div className="rectangle-parent152">
          <div className="frame-child107" />
          <a className="masonry7">Masonry</a>
        </div>
        <div className="rectangle-parent153">
          <div className="frame-child108" />
          <a className="concrete-ready7">Concrete ready</a>
        </div>
        <div className="rectangle-parent154">
          <div className="frame-child109" />
          <a className="plaster-mortar7">{`Plaster & Mortar`}</a>
        </div>
        <div className="rectangle-parent155">
          <div className="frame-child110" />
          <a className="precast7">Precast</a>
        </div>
        <div className="rectangle-parent156">
          <div className="frame-child111" />
          <a className="drywall-gypsum7">{`Drywall & Gypsum`}</a>
        </div>
        <div className="rectangle-parent157">
          <div className="frame-child112" />
          <a className="landscape7">Landscape</a>
        </div>
        <div className="rectangle-parent158">
          <div className="frame-child113" />
          <a className="steel-scaffolding7">Steel Scaffolding</a>
        </div>
        <button className="rectangle-parent159">
          <div className="frame-child114" />
          <a className="chemicals7">Chemicals</a>
        </button>
        <div className="rectangle-parent160">
          <div className="frame-child115" />
          <a className="cement-sand7">Cement / Sand</a>
        </div>
        <div className="rectangle-parent161">
          <div className="frame-child116" />
          <a className="white-wood7">White-wood</a>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,

  /** Style props */
  cartIconAlignSelf: PropTypes.any,
  cartIconFlex: PropTypes.any,
};

export default Header;
