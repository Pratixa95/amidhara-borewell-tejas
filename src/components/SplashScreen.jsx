import React, { useState, useEffect } from "react";
import logo from "/logo_tejas.png";

const SplashScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShowContent(true);
            setTimeout(() => {
              onComplete();
            }, 1500);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center overflow-hidden">

      {/* Background Bubbles */}
      <div className="absolute inset-0">
        <div className="water-bubbles">
          <div className="water-bubble"></div>
          <div className="water-bubble"></div>
          <div className="water-bubble"></div>
          <div className="water-bubble"></div>
          <div className="water-bubble"></div>
        </div>
      </div>

      {/* Tractor Section */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-1/2 z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain rounded-lg shadow-2xl"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        >
          <source src="/videos/tractor-video.mp4" type="video/mp4" />
          <source src="/videos/tractor-video.webm" type="video/webm" />
        </video>
      </div>

      {/* Rotating Logo (fixed position, not overlapping text) */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-40">
        <img
          src={logo}
          alt="Amidhara Borewell drilling and water pump service in Vadodara"
          className="h-48 md:h-64 w-auto spin-logo"
        />
      </div>

      {/* Welcome Text */}
      <div
        className={`absolute bottom-1/3 text-center z-20 transition-all duration-1000 ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 mb-4 animate-pulse">
          Welcome to
        </h1>
        <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400">
          AMIDHARA BOREWELL
        </h2>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-20 w-64 md:w-96 z-20">
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-yellow-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-center text-white mt-2 text-sm md:text-base">
          Loading... {progress}%
        </p>
      </div>

      {/* Fallback Logo (optional – hidden if spinning logo shows) */}
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-10">
        <img
          src="/images/amidhara-logo.png"
          alt="Amidhara Borewell drilling and water pump service in Vadodara"
          className="h-20 md:h-32 w-auto opacity-0"
        />
      </div>
    </div>
  );
};

export default SplashScreen;
