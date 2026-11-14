import React from "react";
import Logo from "../../assets/images/fav.png";
import backgroundImage from "../../assets/images/hero-bg.png";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#dbeafe] overflow-hidden">
      <img
        src={backgroundImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#08275c]/70 backdrop-blur-md" />

      {/* Background Soft Glowing Ambient Orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-400/15 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: "4s" }} />

      {/* Main Content Wrapper */}
      <div
        className="relative flex items-center gap-3"
      >
        {/* Logo with Soft Pulse & Scale Effect */}
        <div className="relative flex items-center justify-center">
          <img
            src={Logo}
            alt="KIPClassin"
            className="relative w-16 h-16 sm:w-20 sm:h-20 "
          />
        </div>

        {/* Typing Text */}
        <h1 className="overflow-hidden whitespace-nowrap border-r-4 border-blue-600 pr-1 text-2xl sm:text-6xl font-bold text-white tracking-tight animate-[typing_1.5s_steps(11)_forwards,blink_0.7s_step-end_infinite] w-0">
          KIP Classin
        </h1>
      </div>

      <style>
        {`
          @keyframes typing {
            from { width: 0; }
            to { width: 380px; }
          }

          @media (max-width: 639px) {
            @keyframes typing {
              from { width: 0; }
              to { width: 180px; }
            }
          }

          @keyframes blink {
            70% { border-color: transparent; }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;