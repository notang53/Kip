import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, User } from "lucide-react";

// Right side wali laptop/dashboard image yahan import karein
import communityLaptopImg from "../assets/images/about-3-sec-img.png";

export default function LearningCommunityBanner() {
  return (
    <section className="relative w-full py-10 lg:py-4 px-4 sm:px-6 lg:px-10 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Blue Gradient Banner Capsule Container */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full rounded-[25px] sm:rounded-[30px] bg-gradient-to-r from-[#0052cc] via-[#0065f2] to-[#1a7aff] text-white p-4 sm:p-6 lg:p-16 overflow-hidden shadow-2xl shadow-blue-500/20"
        >
          <svg
            viewBox="0 0 140 70"
            fill="none"
            aria-hidden="true"
            className="absolute bottom-0 left-0 w-[140px] h-[70px] pointer-events-none"
          >
            <path d="M0 0C2 37 32 59 105 70H0V0Z" fill="#ffcc00" />
          </svg>

          {/* Grid Layout: Left Content & Right Image */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Side Text Content (Col span 6) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-6 flex flex-col items-start"
            >
              {/* Main Heading with Yellow Sparkle Burst */}
              <div className="relative mb-4">
                {/* Top-Right Yellow 3-Line Sparkle Accent */}
                <svg
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 sm:w-9 sm:h-9 absolute -top-5 right-[-20px] sm:-top-6 sm:right-[-35px] text-[#ffcc00]"
                >
                  <path d="M8 22L16 6" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M17 27L31 14" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M21 35L37 29" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                </svg>

                <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-bold tracking-tight text-white leading-[1.15]">
                  Join Our Learning <br />
                  <span className="text-[#ffcc00]">Community</span>
                </h2>
              </div>

              {/* Subtitle Description */}
              <p className="text-blue-100 text-sm sm:text-sm leading-relaxed max-w-lg mb-8 font-medium">
                Be part of a growing community of learners and educators using AI to make education more effective and engaging.
              </p>

              {/* CTA Buttons Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                {/* Primary Button: Get Started Today (Yellow) */}
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="relative overflow-hidden group inline-flex items-center justify-center gap-2.5 bg-[#ffcc00] hover:bg-[#ffb700] text-slate-900 font-bold text-sm sm:text-[15px] px-7 py-3.5 rounded-xl shadow-lg shadow-amber-500/25 cursor-pointer transition-colors"
                >
                  <span className="relative z-10">Get Started Today</span>
                  <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>

                {/* Secondary Button: Login to Your Portal (White Outline) */}
                <motion.button
                  whileHover={{ scale: 1.04, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center justify-center gap-2.5 bg-transparent text-white border border-white/60 hover:border-white font-semibold text-sm sm:text-[15px] px-6 py-3.5 rounded-xl transition-colors cursor-pointer backdrop-blur-sm"
                >
                  <User className="w-4 h-4 text-white stroke-[2.2]" />
                  <span>Login to Your Portal</span>
                </motion.button>
              </div>

            </motion.div>


            {/* Right Side Laptop & Dashboard Illustration (Col span 6) */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="lg:col-span-6 relative flex items-center justify-center mt-6 lg:mt-0"
            >
              <img
                src={communityLaptopImg}
                alt="KIPClassin Learning Community Dashboard and AI Robot"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}