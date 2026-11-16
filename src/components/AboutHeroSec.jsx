import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, User, Video, BookOpen } from "lucide-react";
// Background image import
import heroBg from "../assets/images/bg-img-all.png";
// Right side wali main girl/laptop image import
import heroGirlImg from "../assets/images/about-right.png";
import { useAuthModal } from "./auth/AuthModalContext";

export default function AboutHero() {
  const openAuthModal = useAuthModal();

  return (
    <section
      id="about"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
      className="relative w-full min-h-screen bg-no-repeat bg-cover bg-bottom flex items-center overflow-hidden bg-[#f5f9ff] py-20"
    >
      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1400px] pt-10 mx-auto w-full px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Side Text Content (Col span 5) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="lg:col-span-5 max-w-xl lg:max-w-[540px]"
        >
          {/* Top Badge: ABOUT KIPCLASSIN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e0edff] border border-blue-200/70 mb-6"
          >
            <User className="w-3.5 h-3.5 text-[#007bff]" />
            <span className="text-[11px] sm:text-xs font-extrabold tracking-wider uppercase text-[#0f172a]">
              ABOUT KIPCLASSIN
            </span>
          </motion.div>

          {/* Main Heading with Yellow SVG Burst & Curved Underline */}
          <div className="relative inline-block">
            {/* Top-Right Yellow 3-Line Sparkle Accent */}
            <svg
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 sm:w-9 sm:h-9 absolute -top-5 -right-5 sm:-top-2 sm:-right-6 text-[#facc15]"
            >
              <path
                d="M8 22L16 6"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <path
                d="M17 27L31 14"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <path
                d="M21 35L37 29"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>

            <h1 className="text-3xl md:text-4xl lg:text-[52px] font-bold tracking-tight leading-[1.12]">
              <span className="block text-[#01287B]">Our Story, Our</span>
              <span className="block text-[#01287B] mt-1">
                Purpose, <span className="text-[#007bff]">Your</span>
              </span>
              <span className="block text-[#007bff] mt-1 relative inline-block">
                Learning.
                {/* Yellow Curved Underline under "Learning." */}
                <svg
                  viewBox="0 0 220 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3/4 h-3 sm:h-3.5 absolute -bottom-3 left-0 text-[#facc15]"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.45, duration: 0.9, ease: "easeOut" }}
                    d="M3 14C65 4 150 3 217 11"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </div>

          {/* Subtitle Description */}
          <p className="mt-6 text-slate-500 text-xs sm:text-sm leading-relaxed max-w-lg font-medium">
            KIPClassin is an AI-powered online learning platform that brings students and teachers together in a simple, interactive and intelligent classroom. We make teaching easier, learning smarter and collaboration stronger.
          </p>

          {/* CTA Buttons Row */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            {/* Primary Button: Create an Account */}
            <motion.button
              type="button"
              onClick={() => openAuthModal("signup")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden group inline-flex items-center justify-center gap-2.5 bg-[#007bff] text-white font-semibold text-sm sm:text-[15px] px-6 py-3 rounded-xl shadow-lg shadow-blue-500/25 cursor-pointer"
            >
              {/* Smooth bottom-to-top hover fill */}
              <span className="absolute inset-0 bg-[#0056d2] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Create an Account</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>

            {/* Secondary Button: Watch Demo */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden group inline-flex items-center justify-center gap-2.5 bg-white/90 hover:bg-blue-50/70 text-[#0f172a] border border-[#007bff]/50 hover:border-[#007bff] font-semibold text-sm sm:text-[14px] px-6 py-3 rounded-xl transition-colors duration-200 cursor-pointer"
            >
              <Play className="w-4 h-4 text-[#007bff] fill-transparent stroke-[2.2]" />
              <span>Watch Demo</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side Image & Floating Badges Container (Col span 7) */}
        <div className="lg:col-span-7 relative flex items-center justify-center mt-6 lg:mt-0">
          
          {/* Main Right Side Girl Image with Entrance & Hover Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="relative w-full max-w-[520px] lg:max-w-[580px] sm:-right-10"
          >
            <img
              src={heroGirlImg}
              alt="About KIPClassin online learning"
              className="w-full h-auto object-contain drop-shadow-xl "
            />
          </motion.div>

          

          

        </div>

      </div>
    </section>
  );
}