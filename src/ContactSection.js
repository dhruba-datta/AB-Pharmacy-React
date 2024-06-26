import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faPhone,
  faEnvelope,
  faAt,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
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
            <FontAwesomeIcon icon={faMobile} color="#0097A7" />
          </div>
          <div className="contact-info">
            <h3>Mobile</h3>
            <a
              href="tel:+8801912555765"
              className="contact-button contact-button-mobile"
            >
              <FontAwesomeIcon icon={faPhone} className="fa-icon" /> Call us
            </a>
          </div>
        </div>
        <div className="contact-option">
          <div className="contact-icon">
            <FontAwesomeIcon icon={faWhatsapp} color="#25D366" />
          </div>
          <div className="contact-info">
            <h3>WhatsApp</h3>
            <a
              href="https://wa.me/8801912555765"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button contact-button-whatsapp"
            >
              <FontAwesomeIcon icon={faComments} className="fa-icon" /> Chat
              with us
            </a>
          </div>
        </div>
        <div className="contact-option">
          <div className="contact-icon">
            <FontAwesomeIcon icon={faEnvelope} color="#EA4335" />
          </div>
          <div className="contact-info">
            <h3>Email</h3>
            <a
              href="mailto:abpharmacy72@gmail.com"
              className="contact-button contact-button-email"
            >
              <FontAwesomeIcon icon={faAt} className="fa-icon" /> Send mail
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
