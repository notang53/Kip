import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, GraduationCap } from "lucide-react";
// Background image import
import heroBg from "../assets/images/bg-img-all.png";
// Right side wali main image import
import featureHeroImg from "../assets/images/howitwork-hero-img.png";

export default function HowItWorkHeroSec() {
  return (
    <section
      id="features-hero"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
      className="relative w-full min-h-screen bg-no-repeat bg-cover bg-bottom flex items-center  bg-[#f5f9ff] py-20"
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
          {/* Top Badge: FEATURES */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e0edff] border border-blue-200/70 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#007bff]" />
            <span className="text-[11px] sm:text-xs font-extrabold tracking-wider uppercase text-[#0f172a]">
              FEATURES
            </span>
          </motion.div>

          {/* Main Heading with Yellow SVG Burst & Curved Underline */}
          <div className="relative inline-block">
            {/* Top-Right Yellow 3-Line Sparkle Accent */}
            <svg
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 sm:w-9 sm:h-9 absolute -top-5 -right-5 sm:-top-2 sm:-right-8 text-[#facc15]"
            >
              <path d="M8 22L16 6" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M17 27L31 14" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M21 35L37 29" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            </svg>

            <h1 className="text-3xl md:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.15]">
              <span className="block text-[#071552]">See How KIPClassin</span>
              <span className="block text-[#071552] mt-1">
                Works in <span className="text-[#007bff] relative inline-block">
                  Simple
                  {/* Yellow Curved Underline under "Simple" */}
                  <svg
                    viewBox="0 0 160 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-3 sm:h-3.5 absolute -bottom-2.5 left-0 text-[#facc15]"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.45, duration: 0.9, ease: "easeOut" }}
                      d="M3 14C50 4 120 3 157 11"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
              <span className="block text-[#007bff] mt-1">Steps.</span>
            </h1>
          </div>

          {/* Subtitle Description */}
          <p className="mt-6 text-slate-500 text-xs sm:text-sm leading-relaxed max-w-lg font-medium">
            From creating an account to joining a live class, KIPClassin makes online teaching and learning easy, smart and effective for everyone.
          </p>

          {/* CTA Buttons Row */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            {/* Primary Button: Get Started Today */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden group inline-flex items-center justify-center gap-2.5 bg-[#007bff] text-white font-semibold text-sm sm:text-[15px] px-6 py-3 rounded-xl shadow-lg shadow-blue-500/25 cursor-pointer"
            >
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

        {/* Right Side Image Container with Floating Badges (Col span 7) */}
        <div className="lg:col-span-7 relative flex items-center justify-center mt-6 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="absolute sm:mt-0 mt-4 -right-8 w-2/3 max-w-[500px] lg:max-w-[600px] "
          >
            {/* Main Laptop/Plant Image */}
            <img
              src={featureHeroImg}
              alt="See How KIPClassin Works"
              className="w-full h-auto object-contain drop-shadow-xl"
            />

           
          </motion.div>
        </div>

      </div>
    </section>
  );
}