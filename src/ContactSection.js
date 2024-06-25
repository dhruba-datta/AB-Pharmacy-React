import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-options">
        <div className="contact-option">
          <div className="contact-icon">
            <i className="fas fa-mobile-alt"></i>
          </div>
          <div className="contact-info">
            <h3>Mobile</h3>
            <a href="tel:+8801912555765">
              <button className="contact-button">
                <i className="fas fa-phone"></i> Call us
              </button>
            </a>
          </div>
        </div>
        <div className="contact-option">
          <div className="contact-icon">
            <i className="fab fa-whatsapp"></i>
          </div>
          <div className="contact-info">
            <h3>Whatsapp</h3>
            <a
              href="https://wa.me/8801912555765"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="contact-button">
                <i className="fab fa-whatsapp"></i> Chat on WhatsApp
              </button>
            </a>
          </div>
        </div>
        <div className="contact-option">
          <div className="contact-icon">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="contact-info">
            <h3>Email</h3>
            <a href="mailto:abpharmacy72@gmail.com">
              <button className="contact-button">
                <i className="fas fa-envelope"></i> Send Email
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
