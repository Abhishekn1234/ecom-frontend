import PropTypes from "prop-types";
import "./GroupComponent.css";

const GroupComponent = ({ className = "" }) => {
  return (
    <div className={`rectangle-parent86 ${className}`}>
      <div className="group-child233" />
      <div className="bricksnmix-transforming-online-container">
        <p className="bricksnmix-transforming-online">
          {" "}
          bricksnmix transforming online shopping into experience and aim
        </p>
        <p className="to-enrich-your">
          {" "}
          to enrich your shopping list wisely. Wide range of products powered
        </p>
        <p className="by-fast-delivery">
          {" "}
          by fast delivery and 24/7 customer service to enhance seamless
        </p>
        <p className="shopping"> shopping.</p>
      </div>
      <img
        className="screenshot-95-removebg-previ-icon2"
        alt=""
        src="/screenshot--95-removebgpreview-1@2x.png"
      />
      <img
        className="screenshot-94-removebg-previ-icon6"
        alt=""
        src="/screenshot--94-removebgpreview-1@2x.png"
      />
      <div className="about-bricksnmixcom">
        About bricksnmix.com | Warranty policy | Privacy policy | Terms and
        Conditions | Contact us
      </div>
      <div className="about-us">About us</div>
      <div className="become-a-seller">Become a Seller</div>
      <div className="bricksnmix-support-team-container">
        <p className="bricksnmix-support-team">
          bricksnmix support team is hard working 24/7 for our customers. We
          give
        </p>
        <p className="high-priority-to">
          high priority to troubleshoot and sort out all the complaints and
          issues of
        </p>
        <p className="our-customers-we">
          our customers. We will provide entire support till your face smiles.
        </p>
      </div>
      <div className="copyright-2024-bricksnmixcom">
        Copyright 2024 bricksnmix.com. All rights reserved
      </div>
      <div className="customer-support">24/7 Customer Support</div>
      <div className="connect-with-us">Connect with us</div>
      <img className="vector-icon8" alt="" src="/vector-3.svg" />
      <img className="vector-icon9" alt="" src="/vector-4.svg" />
      <img className="vector-icon10" alt="" src="/vector-5.svg" />
      <img
        className="twitter-rounded-svgrepo-com-icon"
        alt=""
        src="/twitterroundedsvgrepocom.svg"
      />
      <div className="group-child234" />
      <div className="register-as-seller1">Register as Seller</div>
      <div className="group-child235" />
      <div className="login-as-seller">Login as Seller</div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
