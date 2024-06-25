import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ setCurrentCategory }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setIsSidebarOpen(false);

    // Navigate to the product section
    const productSection = document.getElementById("productlist");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">AB Pharmacy</div>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-sidebar" onClick={toggleSidebar}>
          &times;
        </button>
        <a href="#hero" onClick={toggleSidebar}>
          Home
        </a>
        <div className="dropdown always-open">
          <button className="dropdown-toggle">Products</button>
          <div className="dropdown-menu">
            <button onClick={() => handleCategoryChange("general")}>
              General
            </button>
            <button onClick={() => handleCategoryChange("popular")}>
              Popular
            </button>
            <button onClick={() => handleCategoryChange("herbal")}>
              Herbal
            </button>
            <button onClick={() => handleCategoryChange("surgical")}>
              Surgical
            </button>
            <button onClick={() => handleCategoryChange("baby_food")}>
              Baby Food
            </button>
            <button onClick={() => handleCategoryChange("others")}>
              Others
            </button>
          </div>
        </div>
        <a href="#order" onClick={toggleSidebar}>
          Order & delivery
        </a>
        <a href="#contact" onClick={toggleSidebar}>
          Contact
        </a>
      </div>
      <div
        className={`backdrop ${isSidebarOpen ? "show" : ""}`}
        onClick={toggleSidebar}
      ></div>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>
      <div className="navbar-links">
        <a href="#hero">Home</a>
        <div className="dropdown">
          <button className="dropdown-toggle">Products</button>
          <div className="dropdown-menu">
            <button onClick={() => handleCategoryChange("general")}>
              General
            </button>
            <button onClick={() => handleCategoryChange("popular")}>
              Popular
            </button>
            <button onClick={() => handleCategoryChange("herbal")}>
              Herbal
            </button>
            <button onClick={() => handleCategoryChange("surgical")}>
              Surgical
            </button>
            <button onClick={() => handleCategoryChange("baby_food")}>
              Baby Food
            </button>
            <button onClick={() => handleCategoryChange("others")}>
              Others
            </button>
          </div>
        </div>
        <a href="#order">Order & delivery</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
