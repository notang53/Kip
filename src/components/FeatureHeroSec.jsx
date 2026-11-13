import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
// Background image import
import heroBg from "../assets/images/bg-img-all.png";
// Right side wali image import (apne folder ke mutabiq name adjust kar lein)
import featureHeroImg from "../assets/images/feature-hero-img.png";

export default function FeatureHeroSec() {
  return (
    <section
      id="features-hero"
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
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-5 max-w-xl lg:max-w-[540px]"
        >
          {/* Top Badge: FEATURED */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e0edff] border border-blue-200/70 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#007bff]" />
            <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#0f172a]">
              FEATURED
            </span>
          </motion.div>

          {/* Main Heading with Yellow SVG Burst & Curved Underline */}
          <div className="relative inline-block">
            {/* Top-Right Yellow 3-Line Sparkle Accent */}
            <svg
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 sm:w-9 sm:h-9 absolute -top-5 -right-5 sm:-top-2 sm:right-20 text-[#facc15]"
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

            <h1 className="text-3xl md:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.12]">
              <span className="block text-[#01287B]">Everything You</span>
              <span className="block text-[#01287B] mt-1">
                Need for a Complete
              </span>
              <span className="block text-[#007bff] mt-1 relative inline-block">
                Learning Experience.
                {/* Yellow Curved Underline under "Learning Experience." */}
                <svg
                  viewBox="0 0 260 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-1/4 h-3 sm:h-3.5 absolute -bottom-3 left-0 sm:left-70 text-[#facc15]"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.45, duration: 0.7, ease: "easeOut" }}
                    d="M3 14C70 4 180 3 257 11"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </div>

          {/* Subtitle Description */}
          <p className="mt-4 text-slate-500 text-xs sm:text-sm leading-relaxed max-w-lg font-medium">
            A powerful set of tools for students and teachers to teach, learn, collaborate and grow — all in one AI-powered platform.
          </p>

          {/* CTA Buttons Row */}
          <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            {/* Primary Button: Get Started Today */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden group inline-flex items-center justify-center gap-2.5 bg-[#007bff] text-white font-semibold text-sm sm:text-[15px] px-6 py-3 rounded-xl shadow-lg shadow-blue-500/25 cursor-pointer"
            >
              {/* Smooth bottom-to-top hover fill */}
              <span className="absolute inset-0 bg-[#0056d2] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Get Started Today</span>
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

        {/* Right Side Image Container (Col span 7) */}
        <div className="lg:col-span-7 relative flex items-center justify-center mt-6 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="relative w-full max-w-[520px] lg:max-w-[580px]"
          >
            <img
              src={featureHeroImg}
              alt="Features KIPClassin online learning platform"
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}