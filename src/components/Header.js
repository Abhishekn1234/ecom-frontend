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
              className="screenshot-94-removebg-previ-icon11"
              loading="lazy"
              alt=""
              src="/screenshot--94-removebgpreview-1@2x.png"
            />
          </div>
          <div className="container6">
            <img
              className="logo-1-icon7"
              loading="lazy"
              alt=""
              src="/logo-1@2x.png"
            />
          </div>
          <div className="container7">
            <div className="rectangle-parent127">
              <div className="frame-child68" />
              <input className="search8" placeholder="Search..." type="text" />
              <div className="search-icon4">
                <img className="icon10" alt="" src="/vector-2.svg" />
              </div>
            </div>
          </div>
          <div className="container8">
            <div className="container9">
              <div className="container10">
                <img className="icon11" loading="lazy" alt="" src="/-1.svg" />
                <div className="container11">
                  <a className="account7">Account</a>
                </div>
              </div>
              <div className="container12">
                <div className="container13">
                  <img
                    className="cart-shopping-svgrepo-com-1-icon7"
                    loading="lazy"
                    alt=""
                    src="/cartshoppingsvgrepocom-1.svg"
                  />
                  <div className="container14">
                    <a className="cart8">Cart</a>
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
        <div className="rectangle-parent128">
          <div className="frame-child69" />
          <a className="all5">All</a>
        </div>
        <div className="rectangle-parent129">
          <div className="frame-child70" />
          <a className="masonry6">Masonry</a>
        </div>
        <div className="rectangle-parent130">
          <div className="frame-child71" />
          <a className="concrete-ready6">Concrete ready</a>
        </div>
        <div className="rectangle-parent131">
          <div className="frame-child72" />
          <a className="plaster-mortar6">{`Plaster & Mortar`}</a>
        </div>
        <div className="rectangle-parent132">
          <div className="frame-child73" />
          <a className="precast6">Precast</a>
        </div>
        <div className="rectangle-parent133">
          <div className="frame-child74" />
          <a className="drywall-gypsum6">{`Drywall & Gypsum`}</a>
        </div>
        <div className="rectangle-parent134">
          <div className="frame-child75" />
          <a className="landscape6">Landscape</a>
        </div>
        <div className="rectangle-parent135">
          <div className="frame-child76" />
          <a className="steel-scaffolding6">Steel Scaffolding</a>
        </div>
        <button className="rectangle-parent136">
          <div className="frame-child77" />
          <a className="chemicals6">Chemicals</a>
        </button>
        <div className="rectangle-parent137">
          <div className="frame-child78" />
          <a className="cement-sand6">Cement / Sand</a>
        </div>
        <div className="rectangle-parent138">
          <div className="frame-child79" />
          <a className="white-wood6">White-wood</a>
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
