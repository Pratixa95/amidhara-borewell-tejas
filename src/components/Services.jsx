import React, { Suspense } from 'react'
import WaterEffects from './WaterEffects'
import Scene3D from './Scene3D'
import Tractor3D from './Tractor3D'
import PhotoVideoGallery from './PhotoVideoGallery'
import { Canvas } from '@react-three/fiber'
import { Loader } from '@react-three/drei'

const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Borewell Drilling",
      description: "Professional drilling services using advanced equipment for residential and commercial projects."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Borewell Installation",
      description: "Complete installation services including pump setup, piping, and electrical connections."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Maintenance & Repair",
      description: "Regular maintenance and prompt repair services to keep your borewell running efficiently."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Water Testing",
      description: "Comprehensive water quality testing to ensure safe and clean water supply."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: "Pump Services",
      description: "Installation, repair, and replacement of submersible and surface pumps."
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Emergency Services",
      description: "24/7 emergency response for urgent borewell and pump issues."
    }
  ]

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden water-surface">
      <WaterEffects variant="waves" />
      <div className="water-bubbles">
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
      </div>
      
      {/* 3D Water Droplets */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-30">
        <div className="absolute top-20 right-10 w-64 h-64 md:w-96 md:h-96">
          <Scene3D showPump={false} showDroplets={true} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive borewell solutions tailored to meet your water needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-blue-100 water-ripple-effect water-shimmer relative z-10"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-white mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* 3D Tractor Section - Prominent Display */}
        <div className="mt-20 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Advanced Equipment</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              State-of-the-art drilling equipment powered by modern tractors for efficient and reliable service
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* 3D Tractor */}
              <div className="relative h-[500px] bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-2xl overflow-hidden tractor-3d-container">
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
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-gray-700 font-semibold bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                    Interactive 3D Model - Drag to rotate, scroll to zoom
                  </p>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Equipment Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-gray-700">Modern tractor-mounted drilling rigs</p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-gray-700">High-capacity drilling equipment</p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-gray-700">Precision drilling technology</p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-gray-700">Mobile and versatile operation</p>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="ml-3 text-gray-700">Efficient and time-saving operations</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Photo & Video Gallery Section */}
        <div className="mt-20">
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

