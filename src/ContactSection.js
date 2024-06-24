// src/ContactSection.js

import React from "react";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default ContactSection;
