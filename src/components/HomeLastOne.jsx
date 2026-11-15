import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, User } from "lucide-react";

// Background image yahan import karein
import classroomBg from "../assets/images/last-one-bg.png";
// Logo yahan import karein
import Logo from "../assets/images/logo-1.png";

export default function LastOne() {
  return (
    <section
      id="last-section"
      style={{
        backgroundImage: `url(${classroomBg})`,
      }}
      className="relative w-full min-h-screen mt-2 bg-no-repeat bg-cover bg-left sm:bg-right-bottom lg:bg-center flex items-center overflow-hidden bg-[#f5f9ff] py-20"
    >
      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-10">
        
        {/* Left Side Content Grid */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-xl lg:max-w-[620px]"
        >
          {/* Top Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-6"
          >
            <img src={Logo} alt="KIPClassin Logo" className="h-10 w-auto" />
          </motion.div>

          {/* Main Heading with Yellow Sparkle Burst & Curved Underline */}
          <div className="relative inline-block">
            {/* Top-Right Yellow 3-Line Sparkle Accent */}
            <svg
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 sm:w-9 sm:h-9 absolute -top-5 right-10 sm:-top-5 sm:right-[40px] text-[#facc15]"
            >
              <path d="M8 22L16 6" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M17 27L31 14" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M21 35L37 29" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            </svg>

            <h1 className="text-3xl md:text-4xl lg:text-[50px] font-bold tracking-tight leading-[1.15]">  
              <span className="text-[#01287B]">Your Next Learning</span> <br />
              <span className="text-[#01287B]">Experience</span> <span className="text-[#0075FF]">Starts Here.</span>  
              
              {/* Yellow Curved Underline under "Starts Here." */}
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 240 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-3 sm:h-3.5 absolute -bottom-2 left-0 text-[#facc15]"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.45, duration: 0.9, ease: "easeOut" }}
                    d="M3 14C70 4 165 3 237 11"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </div>

          {/* Subtitle Description */}
          <p className="mt-6 text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg font-medium">
            Join your classroom, connect with your teacher and make learning more interactive.[cite: 15]
          </p>

          {/* CTA Buttons Row */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            {/* Primary Button: Get Started Today */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden group inline-flex items-center justify-center gap-2.5 bg-[#007bff] text-white font-semibold text-sm sm:text-[15px] px-7 py-3.5 rounded-xl shadow-lg shadow-blue-500/25 cursor-pointer"
            >
              <span className="absolute inset-0 bg-[#0056d2] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Get Started Today</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>

            {/* Secondary Button: Login to Your Portal */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden group inline-flex items-center justify-center gap-2.5 bg-white/90 hover:bg-blue-50/70 text-[#0f172a] border border-[#007bff]/50 hover:border-[#007bff] font-semibold text-sm sm:text-[15px] px-6 py-3.5 rounded-xl transition-colors duration-200 cursor-pointer"
            >
              <User className="w-4 h-4 text-[#007bff] stroke-[2.2]" />
              <span>Login to Your Portal</span>
            </motion.button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}