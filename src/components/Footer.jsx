// // import React from 'react'

// // const Footer = ({ onNavigate }) => {
// //   const scrollToSection = (id) => {
// //     if (onNavigate) {
// //       onNavigate(id)
// //     } else {
// //       const element = document.getElementById(id)
// //       if (element) {
// //         element.scrollIntoView({ behavior: 'smooth' })
// //       }
// //     }
// //   }

// //   return (
// //     <footer className="bg-gray-900 text-white py-12 relative overflow-hidden water-surface">
// //       {/* Water Bubbles */}
// //       <div className="water-bubbles">
// //         <div className="water-bubble"></div>
// //         <div className="water-bubble"></div>
// //       </div>

// //       <div className="container mx-auto px-4 relative z-10">
// //         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

// //           {/* Company Info */}
// //           <div>
// //             <div className="flex items-center space-x-2 mb-4">
// //               <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
// //                 <span className="text-white font-bold text-xl">A</span>
// //               </div>
// //               <span className="text-2xl font-bold">Amidhara Borewell</span>
// //             </div>

// //             <p className="text-gray-400 mb-4">
// //               Your trusted partner for reliable water solutions. 
// //               Professional borewell services with years of expertise.
// //             </p>

// //             <div className="flex space-x-4">
// //               <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
// //                 <i className="fab fa-facebook-f text-white"></i>
// //               </a>
// //               <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
// //                 <i className="fab fa-twitter text-white"></i>
// //               </a>
// //               <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
// //                 <i className="fab fa-instagram text-white"></i>
// //               </a>
// //             </div>
// //           </div>

// //           {/* Quick Links / Pages */}
// //           <div>
// //             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
// //             <ul className="space-y-2">
// //               <li><button onClick={() => scrollToSection('home')} className="text-gray-400 hover:text-white transition-colors">Home</button></li>
// //               <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors">Services</button></li>
// //               <li><button onClick={() => scrollToSection('gallery')} className="text-gray-400 hover:text-white transition-colors">Gallery</button></li>
// //               <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">About Us</button></li>
// //               <li><button onClick={() => scrollToSection('product')} className="text-gray-400 hover:text-white transition-colors">Product</button></li>
// //               <li><button onClick={() => scrollToSection('faq')} className="text-gray-400 hover:text-white transition-colors">FAQ</button></li>
// //               <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white transition-colors">Contact</button></li>
// //             </ul>
// //           </div>

// //           {/* Services */}
// //           <div>
// //             <h3 className="text-lg font-semibold mb-4">Our Services</h3>
// //             <ul className="space-y-2 text-gray-400">
// //               <li>Borewell Drilling</li>
// //               <li>Installation Services</li>
// //               <li>Maintenance</li>
// //               <li>Repair Services</li>
// //               <li>Water Testing</li>
// //               <li>Pump Solutions</li>
// //             </ul>
// //           </div>

// //           {/* Contact Info */}
// //           <div>
// //             <h3 className="text-lg font-semibold mb-4">Contact</h3>
// //             <ul className="space-y-2 text-gray-400">
// //               <li>+91 91066 04895</li>
// //               <li>infoamidharaborewell@gmail.com</li>
// //               <li>Sahajanand Krupa Society, F/120, Tarsali, Vadodara, Gujarat 390009</li>
// //             </ul>
// //           </div>

// //         </div>

// //         {/* Bottom */}
// //         <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
// //           <p>© {new Date().getFullYear()} TEJASKP AI SOFTWARE - All rights reserved.</p>
          
// //         </div>
// //       </div>
// //     </footer>
// //   )
// // }

// // export default Footer

// import React from 'react';

// const Footer = ({ onNavigate }) => {
//   const scrollToSection = (id) => {
//     if (onNavigate) {
//       onNavigate(id);
//     } else {
//       const element = document.getElementById(id);
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   };

//   return (
//     <footer className="bg-gray-900 text-white py-12 relative overflow-hidden water-surface">
//       {/* Water Bubbles */}
//       <div className="water-bubbles">
//         <div className="water-bubble"></div>
//         <div className="water-bubble"></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

//           {/* Company Info */}
//           <div>
//             <div className="flex items-center space-x-2 mb-4">
//               <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
//                 <span className="text-white font-bold text-xl">A</span>
//               </div>
//               <span className="text-2xl font-bold">Amidhara Borewell</span>
//             </div>

//             <p className="text-gray-400 mb-4">
//               Your trusted partner for reliable water solutions. 
//               Professional borewell services with years of expertise.
//             </p>

//             {/* Social Icons */}
//             <div className="flex space-x-4">
//               {/* WhatsApp */}
//               <a
//                 href="https://wa.me/919106604895"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
//                 title="Chat on WhatsApp"
//               >
//                 <i className="fab fa-whatsapp text-white"></i>
//               </a>

//               {/* Facebook */}
//               <a
//                 href="https://www.facebook.com/YourPage"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
//                 title="Visit Facebook"
//               >
//                 <i className="fab fa-facebook-f text-white"></i>
//               </a>

//               {/* Instagram */}
//               <a
//                 href="https://www.instagram.com/YourPage"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors"
//                 title="Visit Instagram"
//               >
//                 <i className="fab fa-instagram text-white"></i>
//               </a>
//             </div>
//           </div>

//           {/* Quick Links / Pages */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               {['home','services','gallery','about','product','faq','contact'].map((section) => (
//                 <li key={section}>
//                   <button
//                     onClick={() => scrollToSection(section)}
//                     className="text-gray-400 hover:text-white transition-colors"
//                   >
//                     {section.charAt(0).toUpperCase() + section.slice(1)}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Our Services</h3>
//             <ul className="space-y-2 text-gray-400">
//               <li>Borewell Drilling</li>
//               <li>Installation Services</li>
//               <li>Maintenance</li>
//               <li>Repair Services</li>
//               <li>Water Testing</li>
//               <li>Pump Solutions</li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact</h3>
//             <ul className="space-y-2 text-gray-400">
//               <li>+91 91066 04895</li>
//               <li>infoamidharaborewell@gmail.com</li>
//               <li>Sahajanand Krupa Society, F/120, Tarsali, Vadodara, Gujarat 390009</li>
//             </ul>
//           </div>

//         </div>

//         {/* Bottom */}
//         <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
//           <p>© {new Date().getFullYear()} TEJASKP AI SOFTWARE - All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = ({ onNavigate }) => {
  const scrollToSection = (id) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden water-surface">
      {/* Water Bubbles */}
      <div className="water-bubbles">
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-bold">Amidhara Borewell</span>
            </div>

            <p className="text-gray-400 mb-4">
              Your trusted partner for reliable water solutions. Professional borewell services with years of expertise.
            </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919106604895"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full flex items-center justify-center 
                        bg-gradient-to-tr from-green-400 to-green-600 
                        hover:scale-110 hover:shadow-lg transition-transform duration-300 ease-in-out"
              title="Chat on WhatsApp"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="text-white text-2xl" />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/YourPage"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full flex items-center justify-center 
                        bg-gradient-to-tr from-blue-500 to-blue-700 
                        hover:scale-110 hover:shadow-lg transition-transform duration-300 ease-in-out"
              title="Visit Facebook"
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
                        hover:scale-110 hover:shadow-lg transition-transform duration-300 ease-in-out"
              title="Visit Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl" />
            </a>
          </div>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['home','services','gallery','about','product','faq','contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-gray-400 hover:text-white transition-colors"
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
            <ul className="space-y-2 text-gray-400">
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
            <ul className="space-y-2 text-gray-400">
              <li>+91 91066 04895</li>
              <li>infoamidharaborewell@gmail.com</li>
              <li>Sahajanand Krupa Society, F/120, Tarsali, Vadodara, Gujarat 390009</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} TEJASKP AI SOFTWARE - All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
