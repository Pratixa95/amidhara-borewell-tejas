import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = ({ onNavigate }) => {
  const scrollToSection = (id) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-10 relative overflow-hidden water-surface">
      {/* Water Bubbles */}
      <div className="water-bubbles">
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-extrabold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold leading-tight">
                Amidhara Borewell
              </span>
            </div>

            <p className="text-gray-400 mb-6 text-base leading-relaxed">
              Your trusted partner for reliable water solutions. Professional
              borewell services with years of expertise.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-5 mt-4">
              {/* WhatsApp */}
              <a
                href="https://wa.me/919106604895"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full flex items-center justify-center 
                           bg-gradient-to-tr from-green-400 to-green-600 
                           hover:scale-110 hover:shadow-xl transition-all duration-300"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-white text-2xl" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full flex items-center justify-center 
                           bg-gradient-to-tr from-blue-500 to-blue-700 
                           hover:scale-110 hover:shadow-xl transition-all duration-300"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-white text-2xl" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/amidhara_borewell?igsh=MWlzeGR2eWU1c3Juag=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full flex items-center justify-center 
                           bg-gradient-to-tr from-pink-400 via-purple-500 to-pink-600
                           hover:scale-110 hover:shadow-xl transition-all duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              {["home", "services", "gallery", "about", "product", "faq", "contact"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="hover:text-white transition-all"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li>Borewell Drilling</li>
              <li>Installation Services</li>
              <li>Maintenance</li>
              <li>Repair Services</li>
              <li>Water Testing</li>
              <li>Pump Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="font-medium text-white">+91 91066 04895</li>
              <li>infoamidharaborewell@gmail.com</li>
              <li>
                Sahajanand Krupa Society, F/120,  
                <br /> Tarsali, Vadodara, Gujarat 390009
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 text-center mt-12 pt-6">
          <p className="text-gray-400 text-sm sm:text-base">
            © {new Date().getFullYear()} TEJASKP AI SOFTWARE - All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
