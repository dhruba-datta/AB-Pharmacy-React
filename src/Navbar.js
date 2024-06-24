import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ setCurrentCategory, onSearch }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setIsDropdownOpen(false);
    setIsSidebarOpen(false);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Pharmacy Inc.</div>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-sidebar" onClick={toggleSidebar}>
          &times;
        </button>
        <a href="#hero" onClick={toggleSidebar}>
          Home
        </a>
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
        <a href="#services" onClick={toggleSidebar}>
          Order Chart
        </a>
        <a href="#contact" onClick={toggleSidebar}>
          Contact
        </a>
        <div className="search-form">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>
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
