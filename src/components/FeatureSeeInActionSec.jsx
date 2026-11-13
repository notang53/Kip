import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Play, Check } from "lucide-react";

// Right side wali laptop/action image yahan import karein
import actionLaptopImg from "../assets/images/feature-3-sec-img.png";

const actionPoints = [
  "Join a live class",
  "Use the interactive whiteboard",
  "Access learning materials",
  "Track your progress",
];

export default function SeeInActionSection() {
  return (
    <section className="relative w-full py-10 lg:py-18 px-4 sm:px-6 lg:px-10 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Main Light Blue Container Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full rounded-[36px] sm:rounded-[30px] bg-gradient-to-b from-[#f5f9ff] to-[#edf5ff] border border-blue-100/90 p-2 sm:p-6 lg:p-6 overflow-hidden shadow-xl shadow-blue-500/5"
        >
          {/* Grid Layout: Left Content & Right Image */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Side Content (Col span 6) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-6 flex flex-col items-start"
            >
              {/* Top Badge: FEATURE IN ACTION */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e0edff] border border-blue-200/80 shadow-sm mb-5">
                <Sparkles className="w-3.5 h-3.5 text-[#007bff]" />
                <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#0f172a]">
                  FEATURE IN ACTION
                </span>
              </div>

              {/* Main Heading with Yellow Sparkle Burst */}
              <div className="relative mb-2">
                {/* Top-Right Yellow 3-Line Sparkle Accent */}
                <svg
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 sm:w-9 sm:h-9 absolute -top-5 right-[-25px] sm:-top-6 sm:-right-8 text-[#facc15]"
                >
                  <path d="M8 22L16 6" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M17 27L31 14" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M21 35L37 29" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                </svg>

                <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-[#01287B] leading-[1.15]">
                  See KIPClassin <br />
                  <span className="text-[#007bff]">in Action.</span>
                </h2>
              </div>

              {/* Subtitle Description */}
              <p className="text-slate-600 text-sm sm:text-sm leading-relaxed max-w-md mb-3 font-medium">
                Explore how our key features work together to create a smarter, more engaging learning experience.
              </p>

              {/* Yellow Checkmark Bullet Points List */}
              <ul className="space-y-2 mb-4">
                {actionPoints.map((point, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.4 }}
                    className="flex items-center gap-3 text-slate-700 text-sm sm:text-[15px] font-bold"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#ffbc00] text-slate-900 flex items-center justify-center flex-shrink-0 shadow-xs">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Watch Full Demo Button */}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="relative overflow-hidden group inline-flex items-center gap-2.5 bg-[#007bff] hover:bg-[#0056d2] text-white font-semibold text-sm sm:text-[15px] px-7 py-3.5 rounded-xl shadow-lg shadow-blue-500/25 cursor-pointer transition-colors"
              >
                <Play className="w-4 h-4 fill-white text-white stroke-[2]" />
                <span>Watch Full Demo</span>
              </motion.button>

            </motion.div>


            {/* Right Side Laptop Illustration (Col span 6) */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="lg:col-span-6 relative flex items-center justify-center mt-6 lg:mt-0"
            >
              <img
                src={actionLaptopImg}
                alt="See KIPClassin in Action Laptop Demo"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}