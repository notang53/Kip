import React from "react";
import { motion } from "framer-motion";
import { MessageSquareText, FileText, HelpCircle } from "lucide-react";
// Background image import
import heroBg from "../assets/images/bg-img-all.png";
// Right side wali image import (jaise plant/contact image)
import contactHeroImg from "../assets/images/contact-hero-img.png";

export default function ContactHeroSec() {
  return (
    <section
      id="contact-hero"
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
          className="lg:col-span-5 sm:ms-10 max-w-xl lg:max-w-[440px]"
        >
          {/* Top Badge: CONTACT US */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e0edff] border border-blue-200/70 mb-4"
          >
            <MessageSquareText className="w-3.5 h-3.5 text-[#007bff]" />
            <span className="text-[9px] sm:text-xs font-semibold tracking-wider uppercase text-[#007bff]">
              CONTACT US
            </span>
          </motion.div>

          {/* Main Heading with Yellow SVG Burst */}
          <div className="relative inline-block">
            {/* Top-Right Yellow 3-Line Sparkle Accent */}
            <svg
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 sm:w-9 sm:h-9 absolute -top-5 right-2 sm:-top-6 sm:right-45 text-[#facc15]"
            >
              <path d="M8 22L16 6" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M17 27L31 14" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M21 35L37 29" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            </svg>

            <h1 className="text-3xl md:text-4xl lg:text-[48px] font-bold tracking-tight leading-[1.15]">
              <span className="block text-[#01287B]">Let's Talk!</span>
              <span className="block text-[#01287B] mt-1">
                We're Here to <span className="text-[#007bff]">Help.</span>
              </span>
            </h1>
          </div>

          {/* Subtitle Description */}
          <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed max-w-lg font-medium">
            Have questions, need support, or want to learn more about KIPClassin? Reach out to our team — we'd love to hear from you.
          </p>

          {/* CTA Buttons / Info Badges Row */}
          <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            {/* Quick Support Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 bg-white hover:bg-blue-50/70 text-[#0f172a] border border-blue-100 font-bold text-xs sm:text-sm px-5 py-2 rounded-xl shadow-md shadow-blue-500/5 transition-colors cursor-pointer"
            >
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center">
                <FileText className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span>Quick Support</span>
            </motion.button>

            {/* Helpful Guidance Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 bg-white hover:bg-blue-50/70 text-[#0f172a] border border-blue-100 font-bold text-xs sm:text-sm px-5 py-2 rounded-xl shadow-md shadow-blue-500/5 transition-colors cursor-pointer"
            >
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#007bff] flex items-center justify-center">
                <HelpCircle className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span>Helpful Guidance</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side Image Container (Col span 7) */}
        <div className="lg:col-span-7 relative flex items-center justify-center mt-6 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="absolute sm:-right-8 w-2/3 max-w-[500px] lg:max-w-[630px]"
          >
            <img
              src={contactHeroImg}
              alt="Contact KIPClassin Support"
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}