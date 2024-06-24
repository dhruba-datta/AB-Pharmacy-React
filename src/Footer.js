import React from "react";
import "./Footer.css";
import logo from "./images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="AB Pharmacy Logo" className="footer-logo" />
        <div className="footer-right">
          <h1>AB Pharmacy</h1>
          <ul className="footer-links">
            <li>
              <i className="fas fa-mobile-alt"></i>
              <a href="tel:+8801912555765">+880 1912-555765</a>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <a href="mailto:abpharmacy72@gmail.com">abpharmacy72@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className="footer-left">
          <p>Copyright &copy; All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
