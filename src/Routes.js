import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import CMS from "./pages/CMS";
import AddProduct from "./components/AddProduct";
import LogIn from "./pages/LogIn";
import TradeWithUs from "./pages/TradeWithUs";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact"; 
import FAQ from "./pages/FAQ";
import Messages from "./pages/messages";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/product" element={<Product />} />
    <Route path="/cms" element={<CMS />} />
    <Route path="/logIn" element={<LogIn />} />
    <Route path="/trade" element={<TradeWithUs />} />
    <Route path="/cms/addProduct" element={<AddProduct />} />
    <Route path="product/:id" element={<ProductDetail />} />
    <Route path="contact" element={<Contact />} />
    <Route path="/cms/faq" element={<FAQ />} />
    <Route path="/cms/messages" element={<Messages />} />
  </Routes>
);

export default AppRoutes;
