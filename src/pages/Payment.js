import Header from "../components/Header";
import Container from "../components/Container";
import GroupComponent from "../components/GroupComponent";
import "./Payment.css";

const Payment = () => {
  return (
    <div className="payment">
      <section className="container1">
        <Header />
        <Container />
      </section>
      <GroupComponent />
    </div>
  );
};

export default Payment;
