import PropTypes from "prop-types";
import "./AddressPaymentLabels.css";

const AddressPaymentLabels = ({
  className = "",
  selectADeliveryAddress,
  separator,
}) => {
  return (
    <div className={`address-payment-labels ${className}`}>
      <div className="address-payment-labels-child" />
      <div className="address-payment-options">
        <h3 className="select-a-delivery-container1">
          <ol className="select-a-delivery-address1">
            <li>{selectADeliveryAddress}</li>
          </ol>
        </h3>
      </div>
      <h2 className="separator1">{separator}</h2>
    </div>
  );
};

AddressPaymentLabels.propTypes = {
  className: PropTypes.string,
  selectADeliveryAddress: PropTypes.string,
  separator: PropTypes.string,
};

export default AddressPaymentLabels;
