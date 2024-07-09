import FrameComponent6 from "../components/FrameComponent6";
import GroupComponent1 from "../components/GroupComponent11";
import CustomerSatisfaction from "../components/CustomerSatisfaction";
import "./SellerSales.css";

const SellerSales = () => {
  return (
    <div className="seller-sales">
      <FrameComponent6 />
      <main className="search-and-chart">
        <section className="search-divider" />
        <section className="search-and-chart-content">
          <div className="search-bar1">
            <div className="search-bar-child" />
            <input className="search6" placeholder="Search" type="text" />
            <div className="search-icon-frame">
              <img className="search-icon2" alt="" src="/search-icon.svg" />
            </div>
          </div>
          <GroupComponent1 />
          <CustomerSatisfaction />
        </section>
        <div className="notification-icon2">
          <div className="icon-flag-menu2">
            <img
              className="notification-icon3"
              loading="lazy"
              alt=""
              src="/notification1.svg"
            />
            <div className="notification-badge2">
              <div className="notification-count1">3</div>
            </div>
          </div>
        </div>
        <div className="user-profile1">
          <div className="user-profile-item" />
          <div className="user2">
            <div className="avatar2">
              <div className="photo2" />
              <div className="notif2" />
            </div>
            <div className="name3">
              <div className="name-inner1">
                <div className="pioneer-con-container">
                  <div className="pioneer-con1">Pioneer Con...</div>
                </div>
              </div>
              <a className="seller2">Seller</a>
            </div>
            <div className="icon6">
              <img
                className="fi-sr-caret-down-icon2"
                alt=""
                src="/fisrcaretdown.svg"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SellerSales;
