import { Route, Routes } from "react-router-dom";
import Login from "../../pages/Auth/Login";
import Register from "../../pages/Auth/Register";
import Home from "../../pages/Home/Home";
import Product from "../../pages/Products/Product";
import Header from "../Common/Header/Header";
import NotPage from "../../pages/NotPage";
import Cart from "../../pages/Cart/Cart";
import ResetPassword from "../../pages/Auth/ResetPassword";
import ForgotPassword from "../../pages/Auth/ForgotPassword";
import Checkout from "../../pages/Cart/Checkout";
import CheckoutSuccess from "../../pages/Cart/CheckoutSuccess";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products">
          <Route index element={<Product />} />
        </Route>
        <Route path="/carts/*">
          <Route index element={<Cart />} />
          <Route path="checkout-process" element={<Checkout />} />
          <Route path="checkout/success" element={<CheckoutSuccess />} />
        </Route>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/password/reset/:token" element={<ResetPassword />} />
        <Route exact path="*" element={<NotPage />} />
      </Routes>
    </>
  );
};

export default AppLayout;
