import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ setCurrentCategory }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Pharmacy Inc.</div>
      <div className="navbar-links">
        <a href="#hero">Home</a>
        <div className="dropdown">
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            Products
          </button>
          {isDropdownOpen && (
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
          )}
        </div>
        <a href="#services">Order Chart</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
