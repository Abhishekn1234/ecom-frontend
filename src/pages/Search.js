import FrameComponent6 from "../components/FrameComponent6";
import GroupComponent from "../components/GroupComponent";
import "./Search.css";

const Search = () => {
  return (
    <div className="search6">
      <section className="frame-parent1">
        <header className="rectangle-parent73">
          <div className="frame-child18" />
          <div className="frame-wrapper">
            <div className="frame-parent2">
              <div className="screenshot-94-removebg-previ-wrapper">
                <img
                  className="screenshot-94-removebg-previ-icon5"
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
              <div className="frame-wrapper1">
                <div className="rectangle-parent74">
                  <div className="frame-child19" />
                  <a className="cement">Cement</a>
                  <div className="vector-wrapper">
                    <img className="vector-icon7" alt="" src="/vector-2.svg" />
                  </div>
                </div>
              </div>
              <div className="frame-wrapper2">
                <div className="frame-parent3">
                  <div className="parent2">
                    <img
                      className="icon6"
                      loading="lazy"
                      alt=""
                      src="/-1.svg"
                    />
                    <div className="account-wrapper">
                      <a className="account3">Account</a>
                    </div>
                  </div>
                  <div className="frame-wrapper3">
                    <div className="cart-shopping-svgrepo-com-1-parent1">
                      <img
                        className="cart-shopping-svgrepo-com-1-icon3"
                        loading="lazy"
                        alt=""
                        src="/cartshoppingsvgrepocom-1.svg"
                      />
                      <div className="cart-wrapper">
                        <a className="cart4">Cart</a>
                      </div>
                    </div>
                  </div>
                  <div className="frame-wrapper4">
                    <img
                      className="frame-child20"
                      loading="lazy"
                      alt=""
                      src="/group-18.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="rectangle-parent75">
            <div className="frame-child21" />
            <div className="rectangle-parent76">
              <div className="frame-child22" />
              <a className="all3">All</a>
            </div>
            <div className="rectangle-parent77">
              <div className="frame-child23" />
              <a className="masonry4">Masonry</a>
            </div>
            <div className="rectangle-parent78">
              <div className="frame-child24" />
              <a className="concrete-ready4">Concrete ready</a>
            </div>
            <div className="rectangle-parent79">
              <div className="frame-child25" />
              <a className="plaster-mortar4">{`Plaster & Mortar`}</a>
            </div>
            <div className="rectangle-parent80">
              <div className="frame-child26" />
              <a className="precast4">Precast</a>
            </div>
            <div className="rectangle-parent81">
              <div className="frame-child27" />
              <a className="drywall-gypsum4">{`Drywall & Gypsum`}</a>
            </div>
            <div className="rectangle-parent82">
              <div className="frame-child28" />
              <a className="landscape4">Landscape</a>
            </div>
            <div className="rectangle-parent83">
              <div className="frame-child29" />
              <a className="steel-scaffolding4">Steel Scaffolding</a>
            </div>
            <button className="group-button">
              <div className="frame-child30" />
              <a className="chemicals4">Chemicals</a>
            </button>
            <div className="rectangle-parent84">
              <div className="frame-child31" />
              <a className="cement-sand4">Cement / Sand</a>
            </div>
            <div className="rectangle-parent85">
              <div className="frame-child32" />
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
