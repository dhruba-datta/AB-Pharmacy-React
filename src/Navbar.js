import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = ({ setCurrentCategory, onSearchClick }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSidebarDropdownOpen, setIsSidebarDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setIsSidebarDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSidebarDropdown = () => {
    setIsSidebarDropdownOpen(!isSidebarDropdownOpen);
  };

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
    setIsSidebarOpen(false);
    setIsDropdownOpen(false);
    setIsSidebarDropdownOpen(false);

    const productSection = document.getElementById("productlist");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-brand">AB Pharmacy</div>
      <div className="navbar-links">
        <a href="#hero">Home</a>
        <div className="dropdown">
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            <FontAwesomeIcon
              icon={faCaretDown}
              style={{ marginRight: "8px" }}
            />
            Products
          </button>
          <div className={`dropdown-menu ${isDropdownOpen ? "open" : ""}`}>
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
      <div className="search-cont">
        <button className="search-icon" onClick={onSearchClick}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-sidebar" onClick={closeSidebar}>
          &times;
        </button>
        <a href="#hero" onClick={closeSidebar}>
          Home
        </a>
        <div className="dropdown">
          <button className="dropdown-toggle" onClick={toggleSidebarDropdown}>
            Products
            <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: "8px" }} />
          </button>
          <div
            className={`dropdown-menu ${isSidebarDropdownOpen ? "open" : ""}`}
          >
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
        <a href="#order" onClick={closeSidebar}>
          Order & delivery
        </a>
        <a href="#contact" onClick={closeSidebar}>
          Contact
        </a>
      </div>
      <div
        className={`backdrop ${isSidebarOpen ? "show" : ""}`}
        onClick={closeSidebar}
      ></div>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
