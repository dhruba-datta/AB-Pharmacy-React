import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = ({
  setCurrentCategory,
  searchQuery,
  setSearchQuery,
  setFilteredProducts,
  handleViewMore,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      // Focus on the search input when opening the search
      setTimeout(() => {
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      }, 100); // Adjust the delay as needed
    }
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

  const handleSearch = (query) => {
    setSearchQuery(query);
    handleViewMore(); // Automatically click "View More" button

    const productSection = document.getElementById("productlist");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setFilteredProducts([]);
    setIsSearchOpen(false); // Close the search input when clearing
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">AB Pharmacy</div>
      <div className="search-container">
        {!isSearchOpen ? (
          <button className="search-icon" onClick={toggleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        ) : (
          <>
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className={`search-input ${isSearchOpen ? "active" : ""}`}
            />
            {searchQuery && (
              <button className="clear-search" onClick={clearSearch}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            )}
          </>
        )}
      </div>
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
    </nav>
  );
};

export default Navbar;
