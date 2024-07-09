import PropTypes from "prop-types";
import './CategoryList.css';


const CategoryList = ({ className="" }) => {
  return (
    <div className={`category-list ${className}`}>
      <div className="category-list-child" />
      <div className="rectangle-parent145">
        <div className="frame-child103" />
        <div className="all6">All</div>
      </div>
      <div className="rectangle-parent146">
        <div className="frame-child104" />
        <div className="masonry7">Masonry</div>
      </div>
      <div className="rectangle-parent147">
        <div className="frame-child105" />
        <div className="concrete-ready7">Concrete ready</div>
      </div>
      <div className="rectangle-parent148">
        <div className="frame-child106" />
        <div className="plaster-mortar7">{`Plaster & Mortar`}</div>
      </div>
      <div className="rectangle-parent149">
        <div className="frame-child107" />
        <div className="precast7">Precast</div>
      </div>
      <div className="rectangle-parent150">
        <div className="frame-child108" />
        <div className="drywall-gypsum7">{`Drywall & Gypsum`}</div>
      </div>
      <div className="rectangle-parent151">
        <div className="frame-child109" />
        <div className="landscape7">Landscape</div>
      </div>
      <div className="rectangle-parent152">
        <div className="frame-child110" />
        <div className="steel-scaffolding7">Steel Scaffolding</div>
      </div>
      <button className="rectangle-parent153">
        <div className="frame-child111" />
        <div className="chemicals7">Chemicals</div>
      </button>
      <div className="rectangle-parent154">
        <div className="frame-child112" />
        <div className="cement-sand8">Cement / Sand</div>
      </div>
      <div className="rectangle-parent155">
        <div className="frame-child113" />
        <div className="white-wood7">White-wood</div>
      </div>
    </div>);
};

CategoryList.propTypes = {
  className: PropTypes.string
};

export default CategoryList;