import AddressPaymentLabels from "./AddressPaymentLabels";
import FrameComponent5 from "./FrameComponent5";
import PropTypes from "prop-types";
import "./Container.css";

const Container = ({ className = "" }) => {
  return (
    <div className={`container28 ${className}`}>
      <div className="container29">
        <div className="container30">
          <div className="container31">
            <h2 className="confirm-order1">{`Confirm Order & Checkout`}</h2>
            <div className="address-payment">
              <AddressPaymentLabels
                selectADeliveryAddress="Select a delivery address"
                separator="+"
              />
              <AddressPaymentLabels
                selectADeliveryAddress="Payment method"
                separator="-"
              />
            </div>
          </div>
          <div className="container32">
            <div className="container33">
              <div className="container34">
                <div className="container35">
                  <div className="card-icon" />
                </div>
                <div className="credit-or-debit-container">
                  <p className="credit-or-debit">Credit or Debit card</p>
                  <p className="visa-master-card">
                    Visa, Master card, Maestro, Rupay
                  </p>
                  <p className="blank-line2">&nbsp;</p>
                </div>
              </div>
              <div className="container36">
                <img
                  className="group-icon1"
                  loading="lazy"
                  alt=""
                  src="/group.svg"
                />
              </div>
            </div>
          </div>
          <div className="container37">
            <div className="container38">
              <div className="container39">
                <div className="container40">
                  <div className="bank-icon" />
                </div>
                <div className="container41">
                  <div className="net-banking">
                    <p className="net-banking1">Net Banking</p>
                    <p className="blank-line3">&nbsp;</p>
                    <p className="blank-line4">&nbsp;</p>
                  </div>
                  <div className="rectangle-parent163">
                    <div className="frame-child118" />
                    <div className="choose-an-option">Choose an option</div>
                  </div>
                </div>
                <div className="container42">
                  <img
                    className="bank-svgrepo-com-icon"
                    loading="lazy"
                    alt=""
                    src="/banksvgrepocom.svg"
                  />
                </div>
              </div>
            </div>
            <div className="container43">
              <div className="container-child2" />
              <div className="container44">
                <div className="container45">
                  <div className="container46">
                    <div className="cash-icon" />
                    <div className="cash-icon1" />
                  </div>
                  <div className="container47">
                    <div className="cash-on-delivery-container">
                      <p className="cash-on-delivery">Cash on Delivery</p>
                      <p className="blank-line5">&nbsp;</p>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="money-svgrepo-com-icon"
                loading="lazy"
                alt=""
                src="/moneysvgrepocom.svg"
              />
            </div>
          </div>
          <div className="container48">
            <div className="container49">
              <div className="upi-icon" />
              <div className="container50">
                <div className="other-upi-apps">Other UPI apps</div>
              </div>
              <div className="container51">
                <img
                  className="upi-ar21-icon"
                  loading="lazy"
                  alt=""
                  src="/upiar21.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <FrameComponent5 />
      </div>
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
