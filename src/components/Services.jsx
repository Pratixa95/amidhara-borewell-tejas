// import React, { Suspense } from 'react'
// import WaterEffects from './WaterEffects'
// import Scene3D from './Scene3D'
// import Tractor3D from './Tractor3D'
// import PhotoVideoGallery from './PhotoVideoGallery'
// import { Canvas } from '@react-three/fiber'
// import { Loader } from '@react-three/drei'

// const Services = () => {
//   const services = [
//     {
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//         </svg>
//       ),
//       title: "Borewell Drilling",
//       // description: "Professional drilling services using advanced equipment for residential and commercial projects."
//       description: "Professional borewell drilling services in Vadodara using advanced hydraulic tractor-mounted rigs. We provide accurate and fast drilling for residential, industrial and agricultural water needs with expert groundwater guidance."
//     },
//     {
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//         </svg>
//       ),
//       title: "Borewell Installation",
//       // description: "Complete installation services including pump setup, piping, and electrical connections."
//       description: "Complete borewell installation services in Vadodara including submersible pump fitting, HDPE or PVC pipe setup, cable wiring and water connection with guaranteed performance and long-term reliability."

//     },
//     {
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//         </svg>
//       ),
//       title: "Maintenance & Repair",
//       // description: "Regular maintenance and prompt repair services to keep your borewell running efficiently."
//       description: "Expert borewell repair and maintenance services in Vadodara to fix low water flow, pump failure, pipe blockage and motor issues. Quick on-site diagnosis and same-day service available."
//     },
//     {
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//         </svg>
//       ),
//       title: "Water Testing",
//       // description: "Comprehensive water quality testing to ensure safe and clean water supply."
//       description: "Professional water testing services in Vadodara to check drinking water quality, TDS levels, pH, impurities and suitability for domestic or industrial usage. Ensure safe and healthy water supply."

//     },
//     {
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
//         </svg>
//       ),
//       title: "Pump Services",
//       // description: "Installation, repair, and replacement of submersible and surface pumps."
//       description: "Specialized submersible pump installation, repair and replacement services in Vadodara for all brands and capacities. We handle wiring, control panels, starters and automatic water flow systems."
//     },
//     {
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
//         </svg>
//       ),
//       title: "Emergency Services",
//       // description: "24/7 emergency response for urgent borewell and pump issues."
//       description: "24/7 emergency borewell and pump repair service across Vadodara. Immediate response for breakdowns, stuck motor issues, blocked pipes or sudden water loss — available day and night."
//     }
//   ]

//   return (
//     <section id="services" className="py-20 bg-white relative overflow-hidden water-surface">
//       <WaterEffects variant="waves" />
//       <div className="water-bubbles">
//         <div className="water-bubble"></div>
//         <div className="water-bubble"></div>
//         <div className="water-bubble"></div>
//       </div>
      
//       {/* 3D Water Droplets */}
//       <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-30">
//         <div className="absolute top-20 right-10 w-64 h-64 md:w-96 md:h-96">
//           <Scene3D showPump={false} showDroplets={true} />
//         </div>
//       </div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         {/* <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Comprehensive borewell solutions tailored to meet your water needs
//           </p>
//         </div> */}
//         {/* SEO added */}

//         <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 relative" style={{ zIndex: 20 }}>
//           Best Borewell Drilling & Pump Installation Services in Vadodara
//         </h1>
//         <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
//           Amidhara Borewell is one of the leading borewell drilling contractors in Vadodara, Gujarat 
//           providing professional borewell drilling, pump installation, borewell maintenance, water testing 
//           and 24/7 emergency borewell services. With modern hydraulic tractor-mounted drilling equipment, 
//           we deliver fast and reliable solutions for residential, industrial and agricultural water needs.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-blue-100 water-ripple-effect water-shimmer relative z-10"
//             >
//               <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-6">
//                 {service.icon}
//               </div>
//               <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
//               <p className="text-gray-600 leading-relaxed">{service.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* 3D Tractor Section - Prominent Display */}
//         <div className="mt-20 mb-16">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Advanced Equipment</h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               State-of-the-art drilling equipment powered by modern tractors for efficient and reliable service
//             </p>
//           </div>
          
//           <div className="max-w-6xl mx-auto">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//               {/* 3D Tractor */}
//               <div className="relative h-[500px] bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-2xl overflow-hidden tractor-3d-container">
//                 <div className="absolute inset-0">
//                   <Canvas
//                     shadows
//                     gl={{ antialias: true, alpha: true }}
//                     camera={{ position: [0, 2, 5], fov: 50 }}
//                     style={{ background: 'transparent' }}
//                   >
//                     <Suspense fallback={null}>
//                       <Tractor3D />
//                     </Suspense>
//                   </Canvas>
//                   <Loader />
//                 </div>
//                 <div className="absolute bottom-4 left-4 right-4 text-center">
//                   <p className="text-gray-700 font-semibold bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg">
//                     Interactive 3D Model - Drag to rotate, scroll to zoom
//                   </p>
//                 </div>
//               </div>

//               {/* Features List */}
//               <div className="space-y-6">
//                 <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-4">Equipment Features</h3>
//                   <ul className="space-y-3">
//                     <li className="flex items-start">
//                       <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                         <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                         </svg>
//                       </div>
//                       <p className="ml-3 text-gray-700">Modern tractor-mounted drilling rigs</p>
//                     </li>
//                     <li className="flex items-start">
//                       <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                         <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                         </svg>
//                       </div>
//                       <p className="ml-3 text-gray-700">High-capacity drilling equipment</p>
//                     </li>
//                     <li className="flex items-start">
//                       <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                         <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                         </svg>
//                       </div>
//                       <p className="ml-3 text-gray-700">Precision drilling technology</p>
//                     </li>
//                     <li className="flex items-start">
//                       <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                         <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                         </svg>
//                       </div>
//                       <p className="ml-3 text-gray-700">Mobile and versatile operation</p>
//                     </li>
//                     <li className="flex items-start">
//                       <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                         <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                         </svg>
//                       </div>
//                       <p className="ml-3 text-gray-700">Efficient and time-saving operations</p>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Photo & Video Gallery Section */}
//         <div className="mt-20">
//           <PhotoVideoGallery 
//             photos={[
//               // Add your actual image files to /public/images/ folder and update these paths
//               '/images/sonalika-tractor-dealership.jpeg',
//               '/images/yellow-drilling-rig.jpeg',
//               '/images/borewell-drilling-operation.jpeg',
//               '/images/drill-rods-closeup.jpeg',
//               '/images/drill-rods-collection.jpeg',
//             ]}
//             videos={[
//               // Add your video URLs here
//              '/videos/drilling-process.mp4',
//              '/videos/drilling-process2.mp4',
//              '/videos/drilling-process3.mp4',
//             ]}
//           />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Services

import React, { Suspense } from 'react'
import WaterEffects from './WaterEffects'
import Scene3D from './Scene3D'
import Tractor3D from './Tractor3D'
import PhotoVideoGallery from './PhotoVideoGallery'
import { Canvas } from '@react-three/fiber'
import { Loader } from '@react-three/drei'

const Services = ({onNavigate}) => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Borewell Drilling",
      description: "Professional borewell drilling services in Vadodara using advanced hydraulic tractor-mounted rigs. We provide accurate and fast drilling for residential, industrial and agricultural water needs with expert groundwater guidance."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Borewell Installation",
      description: "Complete borewell installation services in Vadodara including submersible pump fitting, HDPE or PVC pipe setup, cable wiring and water connection with guaranteed performance and long-term reliability."

    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Maintenance & Repair",
      description: "Expert borewell repair and maintenance services in Vadodara to fix low water flow, pump failure, pipe blockage and motor issues. Quick on-site diagnosis and same-day service available."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Water Testing",
      description: "Professional water testing services in Vadodara to check drinking water quality, TDS levels, pH, impurities and suitability for domestic or industrial usage. Ensure safe and healthy water supply."

    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: "Pump Services",
      description: "Specialized submersible pump installation, repair and replacement services in Vadodara for all brands and capacities. We handle wiring, control panels, starters and automatic water flow systems."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Emergency Services",
      description: "24/7 emergency borewell and pump repair service across Vadodara. Immediate response for breakdowns, stuck motor issues, blocked pipes or sudden water loss — available day and night."
    }
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-blue-50/50 to-white relative overflow-hidden water-surface">
      <WaterEffects variant="waves" />
      <div className="water-bubbles">
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
      </div>
      
      {/* 3D Water Droplets - Adjusted opacity for cleaner look */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-20">
        <div className="absolute top-20 right-10 w-64 h-64 md:w-96 md:h-96">
          <Scene3D showPump={false} showDroplets={true} />
        </div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
  
        <div className="text-center max-w-5xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 relative drop-shadow-sm" style={{ zIndex: 20 }}>
            Best Borewell Drilling & Pump Installation Services in Vadodara
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
            Amidhara Borewell is one of the leading borewell drilling contractors in Vadodara, Gujarat 
            providing professional borewell drilling, pump installation, borewell maintenance, water testing 
            and 24/7 emergency borewell services. With modern hydraulic tractor-mounted drilling equipment, 
            we deliver fast and reliable solutions for residential, industrial and agricultural water needs.
          </p>
        </div>

        {/* Services Grid - Cleaner Cards with floating effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-md p-8 lg:p-10 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.15)] transition-all duration-300 border border-white/50 hover:border-blue-100 water-ripple-effect relative z-10 hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-2xl shadow-lg shadow-blue-600/20 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-base">{service.description}</p>
            </div>
          ))}
        </div>
        <section className="mt-16 max-w-5xl mx-auto text-center flex flex-col items-center justify-center">
        <p className="text-lg text-gray-700 mt-6">
          Want to see our real work results? View our successful projects in the{' '}
          <a
              onClick={() => onNavigate("gallery")}
              className="text-blue-600 font-semibold underline cursor-pointer"
            >
              Gallery
            </a>

          . Need expert guidance? Visit our{' '}
          <a href="#faq" className="text-blue-600 font-semibold underline">
            FAQ section
          </a>{' '}
          or{' '}
          <a href="#contact" className="text-blue-600 font-semibold underline">
            Contact Us
          </a>
          .
        </p>
      </section>

        {/* 3D Tractor Section - Spacious Layout */}
        <div className="mt-32 mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Advanced Equipment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              State-of-the-art drilling equipment powered by modern tractors for efficient and reliable service
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* 3D Tractor Display */}
              <div className="relative h-[500px] bg-gradient-to-br from-blue-50/80 to-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/60 overflow-hidden tractor-3d-container transform hover:scale-[1.02] transition-transform duration-500">
                <div className="absolute inset-0">
                  <Canvas
                    shadows
                    gl={{ antialias: true, alpha: true }}
                    camera={{ position: [0, 2, 5], fov: 50 }}
                    style={{ background: 'transparent' }}
                  >
                    <Suspense fallback={null}>
                      <Tractor3D />
                    </Suspense>
                  </Canvas>
                  <Loader />
                </div>
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <span className="inline-block text-gray-700 font-medium bg-white/90 backdrop-blur-md px-6 py-2 rounded-full shadow-sm text-sm border border-gray-100">
                    Interactive 3D Model - Drag to rotate
                  </span>
                </div>
              </div>

              {/* Features List - Clean Styling */}
              <div className="space-y-8">
                <div className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-white/60">
                  <h3 className="text-3xl font-bold text-gray-900 mb-8">Equipment Features</h3>
                  <ul className="space-y-5">
                    {[
                      "Modern tractor-mounted drilling rigs",
                      "High-capacity drilling equipment",
                      "Precision drilling technology",
                      "Mobile and versatile operation",
                      "Efficient and time-saving operations"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center group">
                        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-lg text-gray-700 font-medium">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Photo & Video Gallery Section */}
        <div className="mt-32">
          <PhotoVideoGallery 
            photos={[
              // Add your actual image files to /public/images/ folder and update these paths
              '/images/sonalika-tractor-dealership.jpeg',
              '/images/yellow-drilling-rig.jpeg',
              '/images/borewell-drilling-operation.jpeg',
              '/images/drill-rods-closeup.jpeg',
              '/images/drill-rods-collection.jpeg',
            ]}
            videos={[
              // Add your video URLs here
             '/videos/drilling-process.mp4',
             '/videos/drilling-process2.mp4',
             '/videos/drilling-process3.mp4',
            ]}
          />
        </div>
      </div>
    </section>
  )
}

export default Services