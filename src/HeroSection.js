import React from "react";
import "./HeroSection.css";
import logo from "./images/logo.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-end align-items-center"
    >
      <div id="heroCarousel" className="container carousel carousel-fade">
        <div className="carousel-item active">
          <div className="carousel-container">
            <img src={logo} alt="AB Pharmacy Logo" className="hero-logo" />
            <h2 className="animate__animated animate__fadeInDown">
              Welcome to <span>AB Pharmacy</span>
            </h2>
            <p className="animate__animated animate__fadeInUp">
              Your trusted source for high-quality medicines and healthcare
              products
            </p>
            <a
              href="#contact"
              className="btn-get-started animate__animated animate__fadeInUp scrollto"
            >
              Read More
            </a>
          </div>
        </div>
      </div>

      <svg
        className="hero-waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
          ></path>
        </defs>
        <g className="wave1">
          <use
            xlinkHref="#wave-path"
            x="50"
            y="3"
            fill="rgba(255,255,255, .1)"
          ></use>
        </g>
        <g className="wave2">
          <use
            xlinkHref="#wave-path"
            x="50"
            y="0"
            fill="rgba(255,255,255, .2)"
          ></use>
        </g>
        <g className="wave3">
          <use xlinkHref="#wave-path" x="50" y="9" fill="#fff"></use>
        </g>
      </svg>
    </section>
  );
};

export default HeroSection;
