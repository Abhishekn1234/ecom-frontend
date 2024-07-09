import FrameComponent5 from "../components/FrameComponent5";
import StatitsticCard1 from "../components/StatitsticCard1";
import StatitsticCard from "../components/StatitsticCard";
import StatisticChart from "../components/StatisticChart";
import FrameComponent3 from "../components/FrameComponent31";
import SingleProduct from "../components/SingleProduct";
import "./SellerDashboard.css";

const SellerDashboard = () => {
  return (
    <div className="seller-dashboard">
      <FrameComponent5 />
      <main className="search-box-parent">
        <section className="search-box" />
        <div className="search-bar">
          <div className="search-input">
            <div className="search-input-child" />
            <input className="search5" placeholder="Search" type="text" />
            <div className="search-icon-container">
              <img className="search-icon1" alt="" src="/search-icon.svg" />
            </div>
          </div>
          <div className="user-panel">
            <div className="notification-menu">
              <div className="icon-flag-menu1">
                <img
                  className="notification-icon1"
                  loading="lazy"
                  alt=""
                  src="/notification1.svg"
                />
                <div className="notification-badge1">
                  <div className="badge-count">3</div>
                </div>
              </div>
            </div>
            <div className="user-profile">
              <div className="user-profile-child" />
              <div className="user1">
                <div className="avatar1">
                  <div className="photo1" />
                  <div className="notif1" />
                </div>
                <div className="name2">
                  <div className="name-child">
                    <div className="pioneer-con-wrapper">
                      <div className="pioneer-con">Pioneer Con...</div>
                    </div>
                  </div>
                  <a className="seller1">Seller</a>
                </div>
                <div className="icon5">
                  <img
                    className="fi-sr-caret-down-icon1"
                    alt=""
                    src="/fisrcaretdown.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="welcome-pioneer-constructions-parent">
          <h1 className="welcome-pioneer-constructions">
            Welcome Pioneer Constructions,
          </h1>
          <div className="statistic-card-group">
            <div className="statistic-card1">
              <StatitsticCard1
                fiSrMoney="/fisrmoney.svg"
                text="Total Revenue"
                text1="$5,500"
                text2="+10%"
                ornament="/ornament.svg"
                propBackgroundColor="#1d1f2c"
              />
              <StatitsticCard1
                fiSrMoney="/fisrcreditcard.svg"
                text="Total Order"
                text1="1500"
                text2="+15%"
                ornament="/ornament-1.svg"
                propBackgroundColor="#883dcf"
              />
              <StatitsticCard1
                fiSrMoney="/fisruseradd.svg"
                text="Total Customer"
                text1="245"
                text2="-25%"
                ornament="/ornament-2.svg"
                propBackgroundColor="#3250ff"
              />
              <StatitsticCard text="5" />
            </div>
            <div className="statistic-chart-group">
              <StatisticChart />
              <div className="rectangle-parent83">
                <div className="frame-child29" />
                <div className="rectangle1" />
                <div className="product-title">
                  <h2 className="text1">Top Selling Products</h2>
                </div>
                <div className="product-list1">
                  <FrameComponent3 istockphoto476199756612x6="/istockphoto476199756612x612removebgpreview-13@2x.png" />
                  <FrameComponent3 istockphoto476199756612x6="/istockphoto476199756612x612removebgpreview-13@2x.png" />
                  <SingleProduct istockphoto476199756612x6="/istockphoto476199756612x612removebgpreview-13@2x.png" />
                  <FrameComponent3 istockphoto476199756612x6="/istockphoto476199756612x612removebgpreview-13@2x.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SellerDashboard;
