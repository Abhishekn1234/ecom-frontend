import FrameComponent6 from "../components/FrameComponent62";
import GroupComponent from "../components/GroupComponent";
import "./Search.css";

const Search = () => {
  return (
    <div className="search3">
      <section className="frame-parent">
        <header className="frame-header">
          <div className="frame-child10" />
          <div className="frame-wrapper">
            <div className="frame-group">
              <div className="screenshot-94-removebg-previ-wrapper">
                <img
                  className="screenshot-94-removebg-previ-icon4"
                  loading="lazy"
                  alt=""
                  src="/screenshot--94-removebgpreview-1@2x.png"
                />
              </div>
              <div className="logo-1-wrapper">
                <img
                  className="logo-1-icon3"
                  loading="lazy"
                  alt=""
                  src="/logo-1@2x.png"
                />
              </div>
              <div className="frame-container">
                <div className="rectangle-parent67">
                  <div className="frame-child11" />
                  <a className="cement">Cement</a>
                  <div className="vector-wrapper">
                    <img className="vector-icon6" alt="" src="/vector-2.svg" />
                  </div>
                </div>
              </div>
              <div className="frame-wrapper1">
                <div className="frame-parent1">
                  <div className="parent2">
                    <img
                      className="icon3"
                      loading="lazy"
                      alt=""
                      src="/-1.svg"
                    />
                    <div className="account-wrapper">
                      <a className="account3">Account</a>
                    </div>
                  </div>
                  <div className="frame-wrapper2">
                    <div className="cart-shopping-svgrepo-com-1-parent1">
                      <img
                        className="cart-shopping-svgrepo-com-1-icon3"
                        loading="lazy"
                        alt=""
                        src="/cartshoppingsvgrepocom-1.svg"
                      />
                      <div className="cart-wrapper">
                        <a className="cart3">Cart</a>
                      </div>
                    </div>
                  </div>
                  <div className="frame-wrapper3">
                    <img
                      className="frame-child12"
                      loading="lazy"
                      alt=""
                      src="/group-18.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rectangle-parent68">
            <div className="frame-child13" />
            <div className="rectangle-parent69">
              <div className="frame-child14" />
              <a className="all3">All</a>
            </div>
            <div className="rectangle-parent70">
              <div className="frame-child15" />
              <a className="masonry4">Masonry</a>
            </div>
            <div className="rectangle-parent71">
              <div className="frame-child16" />
              <a className="concrete-ready4">Concrete ready</a>
            </div>
            <div className="rectangle-parent72">
              <div className="frame-child17" />
              <a className="plaster-mortar4">{`Plaster & Mortar`}</a>
            </div>
            <div className="rectangle-parent73">
              <div className="frame-child18" />
              <a className="precast4">Precast</a>
            </div>
            <div className="rectangle-parent74">
              <div className="frame-child19" />
              <a className="drywall-gypsum4">{`Drywall & Gypsum`}</a>
            </div>
            <div className="rectangle-parent75">
              <div className="frame-child20" />
              <a className="landscape4">Landscape</a>
            </div>
            <div className="rectangle-parent76">
              <div className="frame-child21" />
              <a className="steel-scaffolding4">Steel Scaffolding</a>
            </div>
            <button className="group-button">
              <div className="frame-child22" />
              <a className="chemicals4">Chemicals</a>
            </button>
            <div className="rectangle-parent77">
              <div className="frame-child23" />
              <a className="cement-sand4">Cement / Sand</a>
            </div>
            <div className="rectangle-parent78">
              <div className="frame-child24" />
              <a className="white-wood4">White-wood</a>
            </div>
          </div>
        </header>
        <FrameComponent6 />
      </section>
      <img className="products-separator-icon" alt="" />
      <GroupComponent />
    </div>
  );
};

export default Search;
