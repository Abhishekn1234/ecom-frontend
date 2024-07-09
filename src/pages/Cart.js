import FrameComponent2 from "../components/FrameComponent21";
import ProductCategories from "../components/ProductCategories";
import FrameComponent from "../components/FrameComponent4";
import GroupComponent from "../components/GroupComponent3";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart4">
      <section className="frame-parent2">
        <header className="rectangle-parent79">
          <div className="frame-child25" />
          <FrameComponent2 />
          <ProductCategories />
        </header>
        <FrameComponent />
      </section>
      <GroupComponent />
    </div>
  );
};

export default Cart;
