import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/fav.png";
import backgroundImage from "../../assets/images/hero-bg.png";

const Loader = () => {
  const brandName = "KIP Classin";
  const [typedCount, setTypedCount] = useState(0);

  useEffect(() => {
    if (typedCount >= brandName.length) return undefined;

    const timer = setTimeout(() => {
      setTypedCount((count) => count + 1);
    }, 140);

    return () => clearTimeout(timer);
  }, [typedCount]);

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
        className="relative flex w-[calc(100vw-2rem)] items-center justify-center gap-3 sm:w-[500px]"
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
        <h1
          aria-label={brandName}
          className="relative min-w-0 whitespace-nowrap text-2xl font-bold tracking-tight text-white sm:text-6xl"
        >
          <span aria-hidden="true" className="invisible">
            {brandName}
          </span>
          <span aria-hidden="true" className="absolute left-0 top-0">
            {brandName.slice(0, typedCount)}
            <span className="ml-1 inline-block h-[0.85em] w-[3px] animate-[blink_0.7s_step-end_infinite] bg-[#007bff] align-middle" />
          </span>
        </h1>
      </div>

      <style>
        {`
          @keyframes blink {
            70% { opacity: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;