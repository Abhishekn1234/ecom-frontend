import PropTypes from "prop-types";
import "./CategoryList.css";

const CategoryList = ({ className = "" }) => {
  return (
    <div className={`category-list ${className}`}>
      <div className="category-list-child" />
      <div className="rectangle-parent100">
        <div className="frame-child42" />
        <div className="all4">All</div>
      </div>
      <div className="rectangle-parent101">
        <div className="frame-child43" />
        <div className="masonry5">Masonry</div>
      </div>
      <div className="rectangle-parent102">
        <div className="frame-child44" />
        <div className="concrete-ready5">Concrete ready</div>
      </div>
      <div className="rectangle-parent103">
        <div className="frame-child45" />
        <div className="plaster-mortar5">{`Plaster & Mortar`}</div>
      </div>
      <div className="rectangle-parent104">
        <div className="frame-child46" />
        <div className="precast5">Precast</div>
      </div>
      <div className="rectangle-parent105">
        <div className="frame-child47" />
        <div className="drywall-gypsum5">{`Drywall & Gypsum`}</div>
      </div>
      <div className="rectangle-parent106">
        <div className="frame-child48" />
        <div className="landscape5">Landscape</div>
      </div>
      <div className="rectangle-parent107">
        <div className="frame-child49" />
        <div className="steel-scaffolding5">Steel Scaffolding</div>
      </div>
      <button className="rectangle-parent108">
        <div className="frame-child50" />
        <div className="chemicals5">Chemicals</div>
      </button>
      <div className="rectangle-parent109">
        <div className="frame-child51" />
        <div className="cement-sand5">Cement / Sand</div>
      </div>
      <div className="rectangle-parent110">
        <div className="frame-child52" />
        <div className="white-wood5">White-wood</div>
      </div>
    </div>
  );
};

CategoryList.propTypes = {
  className: PropTypes.string,
};

export default CategoryList;
