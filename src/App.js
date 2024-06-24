// src/App.js

import React from "react";
import "./App.css";
import ProductList from "./ProductList";
import HeroSection from "./HeroSection";
import OrderChart from "./OrderChart";
import ContactSection from "./ContactSection";
import Navbar from "./Navbar";
import Footer from "./Footer"; // Import the Footer component

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ProductList />
      <OrderChart />
      <ContactSection />
      <Footer /> {/* Add the Footer component */}
    </div>
  );
}

export default App;
