import FrameComponent1 from "./FrameComponent11";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={`home-cart-parent-wrapper ${className}`}>
      <div className="home-cart-parent">
        <div className="home-cart-wrapper">
          <div className="home-cart">{`Home > Cart`}</div>
        </div>
        <div className="product-carousel">
          <div className="product-card1">
            <h2 className="cart10">Cart</h2>
            <div className="product-details1">
              <div className="rectangle-parent158">
                <div className="frame-child105" />
                <div className="image-container">
                  <div className="image-container-child" />
                  <div className="wrapper-istockphoto-476199756-26">
                    <img
                      className="istockphoto-476199756-612x612-icon26"
                      loading="lazy"
                      alt=""
                      src="/istockphoto476199756612x612removebgpreview-32@2x.png"
                    />
                  </div>
                </div>
                <div className="product-name-and-rating-wrapper">
                  <div className="product-name-and-rating">
                    <div className="cement-bags-25-kg-group">
                      <div className="cement-bags-2521">
                        Cement Bags (25 kg)
                      </div>
                      <div className="star-rating">
                        <img
                          className="star-rating-child"
                          loading="lazy"
                          alt=""
                          src="/star-72.svg"
                        />
                        <img
                          className="star-rating-item"
                          loading="lazy"
                          alt=""
                          src="/star-82.svg"
                        />
                        <img
                          className="star-rating-inner"
                          loading="lazy"
                          alt=""
                          src="/star-92.svg"
                        />
                        <img
                          className="star-rating-child1"
                          alt=""
                          src="/star-102.svg"
                        />
                        <div className="star-rating-inner1">
                          <img
                            className="frame-child106"
                            loading="lazy"
                            alt=""
                            src="/star-112.svg"
                          />
                        </div>
                        <div className="reviews-container">
                          <div className="reviews29">4.9 (374 Reviews)</div>
                        </div>
                      </div>
                    </div>
                    <div className="category-cement">
                      Category : Cement / Sand
                    </div>
                  </div>
                </div>
                <FrameComponent1 qty2="Qty    2" />
                <div className="spacer-wrapper">
                  <b className="spacer">$ 5.00</b>
                </div>
                <div className="quantity-buttons-wrapper">
                  <img
                    className="quantity-buttons-icon"
                    alt=""
                    src="/vector-21.svg"
                  />
                </div>
              </div>
              <div className="rectangle-parent159">
                <div className="frame-child107" />
                <div className="rectangle-parent160">
                  <div className="frame-child108" />
                  <div className="wrapper-image-20230524125515-28">
                    <img
                      className="image-20230524125515-2-removeb-icon8"
                      loading="lazy"
                      alt=""
                      src="/image202305241255152removebgpreview-11@2x.png"
                    />
                  </div>
                </div>
                <div className="frame-wrapper12">
                  <div className="aac-blocks-parent">
                    <div className="aac-blocks8">AAC Blocks</div>
                    <div className="category-star-rating-parent">
                      <div className="category-star-rating">
                        <img
                          className="category-star-rating-child"
                          loading="lazy"
                          alt=""
                          src="/star-72.svg"
                        />
                        <img
                          className="category-star-rating-item"
                          alt=""
                          src="/star-82.svg"
                        />
                        <img
                          className="category-star-rating-inner"
                          loading="lazy"
                          alt=""
                          src="/star-92.svg"
                        />
                        <img
                          className="category-star-rating-child1"
                          alt=""
                          src="/star-102.svg"
                        />
                        <div className="category-star-rating-inner1">
                          <img
                            className="frame-child109"
                            loading="lazy"
                            alt=""
                            src="/star-112.svg"
                          />
                        </div>
                        <div className="reviews-frame">
                          <div className="reviews30">4.8 (174 Reviews)</div>
                        </div>
                      </div>
                      <div className="category-masonry">Category : Masonry</div>
                    </div>
                  </div>
                </div>
                <FrameComponent1 qty2="Qty    1" />
                <div className="wrapper">
                  <b className="b25">$ 1.50</b>
                </div>
                <div className="vector-wrapper2">
                  <img className="vector-icon16" alt="" src="/vector-21.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="order-summary-parent-wrapper">
            <div className="order-summary-parent">
              <div className="order-summary2">Order Summary</div>
              <div className="order-details1">
                <div className="order-details-child" />
                <div className="order-details-container">
                  <div className="order-details-labels">
                    <div className="order-details-label">
                      <div className="items-in-order">Items in order 2</div>
                    </div>
                    <div className="order-details-labels-child" />
                    <div className="order-details-label1">
                      <div className="total-price">Total Price $ 8.50</div>
                    </div>
                    <div className="discount-container-wrapper">
                      <div className="discount-container">
                        <div className="discount-">Discount - $ 2.00</div>
                        <div className="delivery-details">
                          <div className="delivery-charge-free2">
                            Delivery Charge Free
                          </div>
                          <div className="expected-delivery-232">
                            Expected Delivery 23 June 2024
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="order-details-labels-inner">
                      <div className="frame-child110" />
                    </div>
                  </div>
                  <div className="sub-total-650-wrapper">
                    <div className="sub-total2">SUB TOTAL $ 6.50</div>
                  </div>
                </div>
                <div className="confirm-button-container-wrapper">
                  <button className="confirm-button-container">
                    <div className="confirm-button-container-child" />
                    <div className="confirm2">Confirm</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
