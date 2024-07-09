import FrameComponent4 from "../components/FrameComponent41";
import StatitsticCard1 from "../components/StatitsticCard1";
import StatitsticCard from "../components/StatitsticCard";
import StatisticChart from "../components/StatisticChart";
import FrameComponent3 from "../components/FrameComponent31";
import SingleProduct from "../components/SingleProduct";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <FrameComponent4 />
      <main className="search-background-parent">
        <section className="search-background" />
        <div className="frame-parent3">
          <div className="rectangle-parent80">
            <div className="frame-child26" />
            <a className="search4">Search</a>
            <div className="search-icon-wrapper">
              <img className="search-icon" alt="" src="/search-icon.svg" />
            </div>
          </div>
          <div className="frame-parent4">
            <div className="icon-flag-menu-wrapper">
              <div className="icon-flag-menu">
                <img
                  className="notification-icon"
                  loading="lazy"
                  alt=""
                  src="/notification.svg"
                />
                <div className="notification-badge">
                  <div className="notification-count">3</div>
                </div>
              </div>
            </div>
            <div className="rectangle-parent81">
              <div className="frame-child27" />
              <div className="user">
                <div className="avatar">
                  <div className="photo" />
                  <div className="notif" />
                </div>
                <div className="name1">
                  <div className="name-inner">
                    <div className="adam-johns-wrapper">
                      <div className="adam-johns7">Adam Johns</div>
                    </div>
                  </div>
                  <a className="admin">Admin</a>
                </div>
                <div className="icon4">
                  <img
                    className="fi-sr-caret-down-icon"
                    alt=""
                    src="/fisrcaretdown.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="welcome-admin-parent">
          <h1 className="welcome-admin">Welcome Admin,</h1>
          <div className="statistic-card-parent">
            <div className="statistic-card">
              <StatitsticCard1
                fiSrMoney="/fisrmoney.svg"
                text="Total Revenue"
                text1="$75,500"
                text2="+10%"
                ornament="/ornament.svg"
              />
              <StatitsticCard1
                fiSrMoney="/fisrcreditcard.svg"
                text="Total Order"
                text1="31,500"
                text2="+15%"
                ornament="/ornament-1.svg"
                propBackgroundColor="#883dcf"
              />
              <StatitsticCard1
                fiSrMoney="/fisruseradd.svg"
                text="Total Customer"
                text1="24,500"
                text2="-25%"
                ornament="/ornament-2.svg"
                propBackgroundColor="#3250ff"
              />
              <StatitsticCard text="247" />
            </div>
            <div className="statistic-chart-parent">
              <StatisticChart />
              <div className="rectangle-parent82">
                <div className="frame-child28" />
                <div className="rectangle" />
                <div className="text-wrapper">
                  <h2 className="text">Top Selling Products</h2>
                </div>
                <div className="product-list">
                  <FrameComponent3 istockphoto476199756612x6="/istockphoto476199756612x612removebgpreview-12@2x.png" />
                  <FrameComponent3 istockphoto476199756612x6="/istockphoto476199756612x612removebgpreview-12@2x.png" />
                  <SingleProduct istockphoto476199756612x6="/istockphoto476199756612x612removebgpreview-12@2x.png" />
                  <FrameComponent3 istockphoto476199756612x6="/istockphoto476199756612x612removebgpreview-12@2x.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;
