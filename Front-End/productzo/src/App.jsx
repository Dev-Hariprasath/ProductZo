import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";
import ProductDetails from "./components/ProductDetails";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";

const App = () => {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/addProduct" element={<AddProduct />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="/products/update/:productId" element={<UpdateProduct />} />
      </Routes>
      
      <Footer />
    </Router>
  );
};

export default App;
