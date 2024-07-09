import PropTypes from "prop-types";
import "./GroupComponent4.css";

const GroupComponent = ({ className = "" }) => {
  return (
    <footer className={`group-footer ${className}`}>
      <div className="frame-child63" />
      <div className="testimonial-content">
        <div className="testimonial-images">
          <img
            className="screenshot-94-removebg-previ-icon9"
            loading="lazy"
            alt=""
            src="/screenshot--94-removebgpreview-1@2x.png"
          />
          <div className="testimonial-image-two">
            <img
              className="screenshot-95-removebg-previ-icon3"
              loading="lazy"
              alt=""
              src="/screenshot--95-removebgpreview-1@2x.png"
            />
          </div>
        </div>
        <div className="footer">
          <div className="about-bricksnmixcom1">
            About bricksnmix.com | Warranty policy | Privacy policy | Terms and
            Conditions | Contact us
          </div>
        </div>
      </div>
      <div className="about-us1">
        <div className="about-us-content">
          <div className="about-us-title-parent">
            <div className="about-us-title">
              <div className="about-us2">About us</div>
            </div>
            <div className="bricksnmix-transforming-online-container1">
              <p className="bricksnmix-transforming-online1">
                {" "}
                bricksnmix transforming online shopping into experience and aim
              </p>
              <p className="to-enrich-your1">
                {" "}
                to enrich your shopping list wisely. Wide range of products
                powered
              </p>
              <p className="by-fast-delivery1">
                {" "}
                by fast delivery and 24/7 customer service to enhance seamless
              </p>
              <p className="shopping1"> shopping.</p>
            </div>
          </div>
          <div className="support">
            <div className="customer-support1">24/7 Customer Support</div>
            <div className="bricksnmix-support-team-container1">
              <p className="bricksnmix-support-team1">
                bricksnmix support team is hard working 24/7 for our customers.
                We give
              </p>
              <p className="high-priority-to1">
                high priority to troubleshoot and sort out all the complaints
                and issues of
              </p>
              <p className="our-customers-we1">
                our customers. We will provide entire support till your face
                smiles.
              </p>
            </div>
          </div>
        </div>
        <div className="social">
          <div className="social-title">
            <div className="connect-with-us1">Connect with us</div>
          </div>
          <div className="social-icons">
            <img className="social-icon-list" alt="" src="/vector-3.svg" />
            <img className="social-icon-list1" alt="" src="/vector-4.svg" />
            <img className="social-icon-list2" alt="" src="/vector-5.svg" />
            <img
              className="twitter-rounded-svgrepo-com-icon1"
              loading="lazy"
              alt=""
              src="/twitterroundedsvgrepocom.svg"
            />
          </div>
        </div>
      </div>
      <div className="seller-call-to-action-footer">
        <div className="seller-call-to-action-content">
          <div className="become-a-seller1">Become a Seller</div>
          <div className="seller-login">
            <button className="login-options">
              <div className="login-options-child" />
              <div className="register-as-seller2">Register as Seller</div>
            </button>
            <button className="login-options1">
              <div className="login-options-item" />
              <div className="login-as-seller1">Login as Seller</div>
            </button>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="copyright-2024-bricksnmixcom1">
          Copyright 2024 bricksnmix.com. All rights reserved
        </div>
      </div>
    </footer>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
