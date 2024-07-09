import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent52.css";

const FrameComponent5 = ({ className = "", propPadding }) => {
  const container1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={`container16 ${className}`} style={container1Style}>
      <div className="container17">
        <div className="order-summary2">Order Summary</div>
        <div className="rectangle-parent162">
          <div className="frame-child117" />
          <div className="container18">
            <div className="container19">
              <div className="container20">
                <div className="container-inner" />
                <div className="wrapper-istockphoto-476199756-25">
                  <img
                    className="istockphoto-476199756-612x612-icon25"
                    loading="lazy"
                    alt=""
                    src="/istockphoto476199756612x612removebgpreview-4@2x.png"
                  />
                </div>
              </div>
              <div className="container21">
                <div className="container22">
                  <div className="cement-bags-2519">Cement Bags (25 kg)</div>
                  <div className="qty-22">Qty : 2</div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-details1">
            <div className="order-detail-labels" />
            <div className="order-detail-labels1">
              <div className="original-price1">Original Price $ 3.20</div>
            </div>
            <div className="container23">
              <div className="offer-price1">Offer Price $ 2.50</div>
            </div>
            <div className="container24">
              <div className="quantity-21">Quantity 2</div>
            </div>
            <div className="order-detail-labels2">
              <div className="delivery-charge-free2">Delivery Charge Free</div>
            </div>
            <div className="order-detail-labels3">
              <div className="expected-delivery-232">
                Expected Delivery 23 June 2024
              </div>
            </div>
            <div className="order-detail-labels4" />
            <div className="container25">
              <div className="sub-total2">SUB TOTAL $ 5.00</div>
            </div>
          </div>
          <div className="container26">
            <button className="container27">
              <div className="container-child1" />
              <div className="confirm2">Confirm</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default FrameComponent5;
