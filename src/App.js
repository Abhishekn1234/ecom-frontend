import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomeCustomer from "./pages/HomeCustomer";
import Registration from "./pages/Registration";
import DropDownMenu from "./pages/DropDownMenu";
import BenefitsOfSelling from "./pages/BenefitsOfSelling";
import SellerRegistration from "./pages/SellerRegistration";
import ProductDetails1 from "./pages/ProductDetails";
import AddressSelection from "./pages/AddressSelection";
import Payment from "./pages/Payment";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import AdminDashboard from "./pages/AdminDashboard";
import SellerDashboard from "./pages/SellerDashboard";
import SellerSales from "./pages/SellerSales";
import Login from "./pages/Login";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/registration":
        title = "";
        metaDescription = "";
        break;
      case "/drop-down-menu":
        title = "";
        metaDescription = "";
        break;
      case "/benefits-of-selling":
        title = "";
        metaDescription = "";
        break;
      case "/seller-registration":
        title = "";
        metaDescription = "";
        break;
      case "/product-details":
        title = "";
        metaDescription = "";
        break;
      case "/address-selection":
        title = "";
        metaDescription = "";
        break;
      case "/payment":
        title = "";
        metaDescription = "";
        break;
      case "/search":
        title = "";
        metaDescription = "";
        break;
      case "/cart":
        title = "";
        metaDescription = "";
        break;
      case "/admin-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/seller-dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/seller-sales":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomeCustomer />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/drop-down-menu" element={<DropDownMenu />} />
      <Route path="/benefits-of-selling" element={<BenefitsOfSelling />} />
      <Route path="/seller-registration" element={<SellerRegistration />} />
      <Route path="/product-details" element={<ProductDetails1 />} />
      <Route path="/address-selection" element={<AddressSelection />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/search" element={<Search />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/seller-dashboard" element={<SellerDashboard />} />
      <Route path="/seller-sales" element={<SellerSales />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
export default App;
