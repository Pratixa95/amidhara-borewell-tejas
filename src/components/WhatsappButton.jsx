import React, { useState } from "react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi"; // New modern icon
import "./WhatsappButton.css";

const WhatsappButton = () => {
  const [open, setOpen] = useState(false);

  const phone = "919106604895";
  const whatsappMsg = "Hello Amidhara, I need help with...";

  return (
    <div className="float-wrapper">

      {/* MENU BUTTONS */}
      <div className={`float-menu ${open ? "show" : ""}`}>

        {/* Call Button */}
        <a href={`tel:${phone}`} className="float-item call">
          <FaPhone />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${phone}?text=${encodeURIComponent(whatsappMsg)}`}
          className="float-item whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
          <span>WhatsApp</span>
        </a>

      </div>

      {/* MAIN TOGGLE BUTTON */}
      <button
        className={`float-btn ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <FiMessageSquare />
      </button>
    </div>
  );
};

export default WhatsappButton;
