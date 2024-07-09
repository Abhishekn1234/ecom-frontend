import PropTypes from "prop-types";
import './GroupComponent4.css';


const GroupComponent = ({ className="" }) => {
  return (
    <footer className={`rectangle-parent165 ${className}`}>
      <div className="frame-child123" />
      <div className="testimonial-content">
        <div className="testimonial-images">
          <img className="screenshot-94-removebg-previ-icon15" loading="lazy" alt="" src="/screenshot--94-removebgpreview-1@2x.png" />
          <div className="testimonial-image-two">
            <img className="screenshot-95-removebg-previ-icon4" loading="lazy" alt="" src="/screenshot--95-removebgpreview-1@2x.png" />
          </div>
        </div>
        <div className="footer">
          <div className="about-bricksnmixcom2">About bricksnmix.com | Warranty policy | Privacy policy | Terms and Conditions | Contact us</div>
        </div>
      </div>
      <div className="about-us2">
        <div className="about-us-content">
          <div className="about-us-title-parent">
            <div className="about-us-title">
              <div className="about-us3">About us</div>
            </div>
            <div className="bricksnmix-transforming-online-container2">
              <p className="bricksnmix-transforming-online2"> bricksnmix transforming online shopping into experience and aim</p>
              <p className="to-enrich-your2"> to enrich your shopping list wisely. Wide range of products powered</p>
              <p className="by-fast-delivery2"> by fast delivery and 24/7 customer service to enhance seamless</p>
              <p className="shopping2"> shopping.</p>
            </div>
          </div>
          <div className="support1">
            <div className="customer-support3">24/7 Customer Support</div>
            <div className="bricksnmix-support-team-container2">
              <p className="bricksnmix-support-team2">bricksnmix support team is hard working 24/7 for our customers. We give</p>
              <p className="high-priority-to2">high priority to troubleshoot and sort out all the complaints and issues of</p>
              <p className="our-customers-we2">our customers. We will provide entire support till your face smiles.</p>
            </div>
          </div>
        </div>
        <div className="social">
          <div className="social-title">
            <div className="connect-with-us2">Connect with us</div>
          </div>
          <div className="social-icons1">
            <img className="social-icon-list" alt="" src="/vector-3.svg" />
            <img className="social-icon-list1" alt="" src="/vector-4.svg" />
            <img className="social-icon-list2" alt="" src="/vector-5.svg" />
            <img className="twitter-rounded-svgrepo-com-icon2" loading="lazy" alt="" src="/twitterroundedsvgrepocom.svg" />
          </div>
        </div>
      </div>
      <div className="seller-call-to-action-footer">
        <div className="seller-call-to-action-content">
          <div className="become-a-seller2">Become a Seller</div>
          <div className="seller-login">
            <button className="login-options">
              <div className="login-options-child" />
              <div className="register-as-seller3">Register as Seller</div>
            </button>
            <button className="login-options1">
              <div className="login-options-item" />
              <div className="login-as-seller2">Login as Seller</div>
            </button>
          </div>
        </div>
      </div>
      <div className="copyright1">
        <div className="copyright-2024-bricksnmixcom2">Copyright 2024 bricksnmix.com. All rights reserved</div>
      </div>
    </footer>);
};

GroupComponent.propTypes = {
  className: PropTypes.string
};

export default GroupComponent;