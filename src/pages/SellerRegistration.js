import Header from "../components/Header1";
import BenefitList from "../components/BenefitList";
import FrameComponent from "../components/FrameComponent7";
import './SellerRegistration.css';


const SellerRegistration = () => {
  return (
    <div className="seller-registration">
      <img className="background-icon1" alt="" src="/rectangle-105@2x.png" /><Header />
      <div className="separator" />
      <main className="content1">
        <section className="rectangle-parent80">
          <div className="frame-child22" />
          <h1 className="be-our-seller-container">
            <p className="be">{`Be `}</p>
            <p className="our">Our</p>
            <p className="seller2">Seller.</p>
          </h1>
          <div className="frame-child23" />
        </section>
        <div className="benefits"><BenefitList />
          <div className="parent2">
            <div className="div35">-</div>
            <div className="register">Register</div>
            <div className="frame-child24" />
            <div className="registration-form">
              <div className="registration-fields">
                <div className="seller-registration1">
                  <h2 className="register-as-seller">Register as seller</h2>
                  <img className="seller-icon" alt="" src="/vector11.svg" />
                </div>
                <div className="registration-fields-inner">
                  <img className="frame-child25" loading="lazy" alt="" src="/vector-6.svg" />
                </div>
              </div>
              <div className="personal-details">
                <div className="personal-inputs">
                  <div className="name-input">
                    <div className="name-field">
                      <h3 className="personal-info">Personal info</h3>
                    </div>
                    <div className="input-fields">
                      <div className="rectangle-parent81">
                        <div className="frame-child26" />
                        <input className="name3" placeholder="Name" type="text" />
                      </div>
                      <div className="rectangle-parent82">
                        <div className="frame-child27" />
                        <input className="email-or-phone" placeholder="Email or Phone " type="text" />
                      </div>
                      <div className="rectangle-parent83">
                        <div className="frame-child28" />
                        <input className="password" placeholder="Password" type="text" />
                        <div className="password-input">
                          <img className="password-icon" alt="" src="/vector-12.svg" />
                        </div>
                      </div>
                      <div className="confirm-password">
                        <div className="rectangle-parent84">
                          <div className="frame-child29" />
                          <input className="confirm-password1" placeholder="Confirm Password" type="text" />
                          <div className="confirm-password-input">
                            <img className="confirm-password-icon" alt="" src="/vector-12.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="company-details">
                    <div className="company-inputs">
                      <h3 className="company-info">Company info</h3>
                      <div className="company-fields">
                        <div className="company-input-fields">
                          <div className="rectangle-parent85">
                            <div className="frame-child30" />
                            <input className="company-name5" placeholder="Company Name" type="text" />
                          </div>
                          <div className="rectangle-parent86">
                            <div className="frame-child31" />
                            <input className="company-location" placeholder="Company Location" type="text" />
                          </div>
                          <div className="rectangle-parent87">
                            <div className="frame-child32" />
                            <input className="company-email" placeholder="Company Email" type="text" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="terms">
                      <div className="terms-agreement">
                        <input className="agreement-checkbox" type="checkbox" />
                        <div className="i-understood-the-terms-polic-wrapper">
                          <div className="i-understood-the-container">
                            <span>{`I understood the `}</span>
                            <span className="terms-policy">{`terms & policy`}</span>
                            <span>.</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div><FrameComponent sIGNUP="Register" propAlignSelf="unset" propPadding="unset" propWidth="1164px" />
          </div>
        </div>
      </main>
    </div>);
};

export default SellerRegistration;