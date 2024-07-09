import PropTypes from "prop-types";
import "./ProductCategories.css";

const ProductCategories = ({ className = "" }) => {
  return (
    <div className={`product-categories ${className}`}>
      <div className="product-categories-child" />
      <div className="rectangle-parent147">
        <div className="frame-child94" />
        <a className="all6">All</a>
      </div>
      <div className="rectangle-parent148">
        <div className="frame-child95" />
        <a className="masonry7">Masonry</a>
      </div>
      <div className="rectangle-parent149">
        <div className="frame-child96" />
        <a className="concrete-ready7">Concrete ready</a>
      </div>
      <div className="rectangle-parent150">
        <div className="frame-child97" />
        <a className="plaster-mortar7">{`Plaster & Mortar`}</a>
      </div>
      <div className="rectangle-parent151">
        <div className="frame-child98" />
        <a className="precast7">Precast</a>
      </div>
      <div className="rectangle-parent152">
        <div className="frame-child99" />
        <a className="drywall-gypsum7">{`Drywall & Gypsum`}</a>
      </div>
      <div className="rectangle-parent153">
        <div className="frame-child100" />
        <a className="landscape7">Landscape</a>
      </div>
      <div className="rectangle-parent154">
        <div className="frame-child101" />
        <a className="steel-scaffolding7">Steel Scaffolding</a>
      </div>
      <button className="rectangle-parent155">
        <div className="frame-child102" />
        <a className="chemicals7">Chemicals</a>
      </button>
      <div className="rectangle-parent156">
        <div className="frame-child103" />
        <a className="cement-sand8">Cement / Sand</a>
      </div>
      <div className="rectangle-parent157">
        <div className="frame-child104" />
        <a className="white-wood7">White-wood</a>
      </div>
    </div>
  );
};

ProductCategories.propTypes = {
  className: PropTypes.string,
};

export default ProductCategories;
