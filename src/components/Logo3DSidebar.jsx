// // import React, { useState } from 'react'

// // const Logo3DSidebar = () => {
// //   const [hovered, setHovered] = useState(false)

// //   return (
// //     <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
// //       <div 
// //         className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-4 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300"
// //         onMouseEnter={() => setHovered(true)}
// //         onMouseLeave={() => setHovered(false)}
// //       >
// //         <div className="w-32 h-32 flex items-center justify-center">
// //           <img
// //             src="/images/amidhara-logo.png"
// //             alt="Amidhara Borewell Logo"
// //             className={`w-full h-full object-contain transition-transform duration-300 ${hovered ? 'scale-110' : 'scale-100'}`}
// //             onError={(e) => {
// //               // Fallback if logo not found
// //               e.target.style.display = 'none'
// //               e.target.nextSibling.style.display = 'block'
// //             }}
// //           />
// //           {/* Fallback text if image not found */}
// //           <div className="hidden text-center">
// //             <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2">
// //               <span className="text-white font-bold text-2xl">A</span>
// //             </div>
// //             <p className="text-xs font-bold text-gray-800">AMIDHARA</p>
// //             <p className="text-xs font-semibold text-blue-600">BOREWELL</p>
// //           </div>
// //         </div>
// //         <div className="text-center mt-2">
// //           <p className="text-xs font-bold text-gray-800">AMIDHARA</p>
// //           <p className="text-xs font-semibold text-blue-600">BOREWELL</p>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Logo3DSidebar

// import React, { useState } from 'react';
// import logo from "/logo_tejas.png";

// const Logo3DSidebar = () => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
//       <div 
//         className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-4 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         style={{ perspective: '1000px' }} // 3D perspective
//       >
//         <div 
//           className={`w-32 h-32 flex items-center justify-center transition-transform duration-500`}
//           style={{
//             transform: hovered 
//               ? 'rotateY(15deg) rotateX(15deg) scale(1.1)' 
//               : 'rotateY(0deg) rotateX(0deg) scale(1)'
//           }}
//         >
//           <img
//             src="/images/amidhara-logo.png"
//             alt="Amidhara Borewell Logo"
//             className="w-full h-full object-contain"
//             onError={(e) => {
//               e.target.style.display = 'none';
//               e.target.nextSibling.style.display = 'block';
//             }}
//           />
//           <div className="hidden text-center">
//             <img src={logo} alt="amidhara_logo" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Logo3DSidebar;

import React from 'react';
import logo from "/logo_tejas.png";

const Logo3DSidebar = () => {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div 
        className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-4 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300"
        style={{ perspective: '1200px' }} // perspective for 3D effect
      >
        <div className="w-32 h-32 flex items-center justify-center">
          <img
            src={logo}
            alt="Amidhara Borewell Logo"
            className="w-full h-full object-contain spin-3d"
          />
        </div>
      </div>
    </div>
  );
};

export default Logo3DSidebar;


