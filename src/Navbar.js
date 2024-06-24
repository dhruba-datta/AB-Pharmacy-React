// src/Navbar.js

import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ setCurrentCategory, onSearch }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setIsDropdownOpen(false);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value); // Check if 'onSearch' is defined properly
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
        <div className="search-form">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
