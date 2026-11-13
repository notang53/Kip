import React from "react";
import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

const topHighlights = [
  {
    id: 1,
    title: "Smart Learning",
    subtitle: "with AI",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-11 h-11">
        <path
          d="M24 8L4 17L24 26L44 17L24 8Z"
          fill="url(#blueGrad1)"
        />
        <path
          d="M12 21V30C12 34 17.5 37 24 37C30.5 37 36 34 36 30V21L24 26L12 21Z"
          fill="#0056d2"
        />
        <path
          d="M40 19V31"
          stroke="#ffbc00"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="40" cy="32" r="2.5" fill="#ffbc00" />
        <defs>
          <linearGradient id="blueGrad1" x1="4" y1="8" x2="44" y2="26" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" />
            <stop offset="1" stopColor="#007bff" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 2,
    title: "Built for",
    subtitle: "Students & Teachers",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-11 h-11">
        <circle cx="24" cy="16" r="6" fill="#007bff" />
        <path
          d="M13 35C13 29.5 17.9 25 24 25C30.1 25 35 29.5 35 35H13Z"
          fill="url(#blueGrad2)"
        />
        <circle cx="13" cy="19" r="4.5" fill="#38bdf8" />
        <path
          d="M6 34C6 30.2 9.1 27 13 27C14.6 27 16.1 27.5 17.3 28.4"
          fill="#38bdf8"
        />
        <circle cx="35" cy="19" r="4.5" fill="#38bdf8" />
        <path
          d="M42 34C42 30.2 38.9 27 35 27C33.4 27 31.9 27.5 30.7 28.4"
          fill="#38bdf8"
        />
        <defs>
          <linearGradient id="blueGrad2" x1="13" y1="25" x2="35" y2="35" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2b95ff" />
            <stop offset="1" stopColor="#0056d2" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 3,
    title: "All-in-One",
    subtitle: "Classroom",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-11 h-11">
        {/* Bottom Blue Layer */}
        <path d="M24 39L8 30L24 21L40 30L24 39Z" fill="#0056d2" />
        {/* Middle Yellow Layer */}
        <path d="M24 32L8 23L24 14L40 23L24 32Z" fill="#ffbc00" />
        {/* Top Cyan/Blue Layer */}
        <path d="M24 25L8 16L24 7L40 16L24 25Z" fill="#2b95ff" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Secure &",
    subtitle: "Reliable",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-11 h-11">
        <path
          d="M24 6L9 12V23C9 32.5 15.4 41.2 24 44C32.6 41.2 39 32.5 39 23V12L24 6Z"
          fill="url(#shieldGrad)"
        />
        <path
          d="M18 24.5L22 28.5L30.5 20"
          stroke="white"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="shieldGrad" x1="9" y1="6" x2="39" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" />
            <stop offset="1" stopColor="#0056d2" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

export default function MissionVisionSection() {
  return (
    <section className="relative w-full py-16 lg:py-20 px-4 sm:px-6 lg:px-10 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col gap-10 lg:gap-12">
        
        {/* ================= TOP 4-COLUMN CAPSULE BANNER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative w-full rounded-[32px] sm:rounded-[44px] bg-gradient-to-b from-[#f4f8ff] to-[#ebf3ff] border border-blue-100/90 shadow-lg shadow-blue-500/5 px-6 py-8 sm:px-10 sm:py-9 overflow-hidden"
        >
          {/* Top-Left Yellow Corner Curve Accent (matching screenshot) */}
          <svg
            viewBox="0 0 120 120"
            fill="none"
            className="w-20 h-20 sm:w-28 sm:h-28 absolute top-0 left-0 pointer-events-none"
          >
            <path d="M0 0H110C45 5 10 45 0 105V0Z" fill="#ffcf00" />
          </svg>

          {/* Bottom-Right Yellow Corner Curve Accent (matching screenshot) */}
          <svg
            viewBox="0 0 120 120"
            fill="none"
            className="w-20 h-20 sm:w-28 sm:h-28 absolute bottom-0 right-0 pointer-events-none"
          >
            <path d="M120 120H10C75 115 110 75 120 15V120Z" fill="#ffcf00" />
          </svg>

          {/* 4 Columns Grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 items-center">
            {topHighlights.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.45 }}
                whileHover={{ y: -5 }}
                className={`group flex flex-col items-center text-center px-4 py-2 rounded-2xl cursor-pointer transition-all duration-300 ${
                  index < topHighlights.length - 1
                    ? "lg:border-r lg:border-blue-200/60"
                    : ""
                }`}
              >
                {/* Animated Glossy 3D Icon */}
                <motion.div
                  whileHover={{ scale: 1.12, rotate: [0, -6, 6, 0] }}
                  transition={{ duration: 0.35 }}
                  className="mb-3 drop-shadow-sm"
                >
                  {item.icon}
                </motion.div>

                {/* Two-Line Bold Heading */}
                <h3 className="text-sm sm:text-[15px] font-bold text-[#01287B] group-hover:text-[#007bff] transition-colors leading-snug">
                  <span className="block">{item.title}</span>
                  <span className="block">{item.subtitle}</span>
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>


        {/* ================= BOTTOM TWO CARDS: MISSION & VISION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-8">
          
          {/* Card 1: Our Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="relative overflow-hidden group rounded-[32px] bg-[#f2f7ff] border border-blue-100/90 p-7 sm:p-9 shadow-lg shadow-blue-500/5 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col sm:flex-row items-center justify-between gap-6 cursor-pointer"
          >
            {/* Bottom-to-Top Subtle Hover Fill */}
            <span className="absolute inset-0 bg-[#e7f0ff]/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out pointer-events-none" />

            {/* Left Content */}
            <div className="relative z-10 flex-1 text-left">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dcebff] border border-blue-200/70 mb-5">
                <Target className="w-3.5 h-3.5 text-[#007bff] stroke-[2.4]" />
                <span className="text-xs font-bold text-[#01287B]">
                  Our Mission
                </span>
              </div>

              <h3 className="text-2xl sm:text-[26px] font-bold text-[#01287B] leading-[1.2] mb-3.5">
                Make Quality <br />
                Education Accessible.
              </h3>

              <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed font-medium">
                To empower educators and learners with smart, easy and effective
                online learning tools that create real impact.
              </p>
            </div>

            {/* Right 3D Target & Arrow Illustration */}
            <motion.div
              whileHover={{ scale: 1.08, rotate: -4 }}
              transition={{ type: "spring", stiffness: 260 }}
              className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 flex-shrink-0 flex items-center justify-center"
            >
              <svg viewBox="0 0 160 160" fill="none" className="w-full h-full drop-shadow-lg">
                {/* Outer Blue Ring */}
                <circle cx="76" cy="84" r="58" fill="url(#targetOuter)" />
                {/* White Middle Ring */}
                <circle cx="76" cy="84" r="42" fill="#ffffff" />
                {/* Inner Blue Ring */}
                <circle cx="76" cy="84" r="27" fill="#007bff" />
                {/* Bullseye White Center */}
                <circle cx="76" cy="84" r="13" fill="#ffffff" />
                {/* Bullseye Dot */}
                <circle cx="76" cy="84" r="6" fill="#0056d2" />

                {/* Golden Arrow Shaft */}
                <path
                  d="M76 84L134 26"
                  stroke="#ffbc00"
                  strokeWidth="7"
                  strokeLinecap="round"
                />
                {/* Arrow Feather Fins */}
                <path
                  d="M122 38L124 18L136 24L122 38Z"
                  fill="#ffcf00"
                />
                <path
                  d="M122 38L142 36L136 24L122 38Z"
                  fill="#f59e0b"
                />

                <defs>
                  <linearGradient id="targetOuter" x1="18" y1="26" x2="134" y2="142" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#38bdf8" />
                    <stop offset="1" stopColor="#0056d2" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </motion.div>


          {/* Card 2: Our Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            className="relative overflow-hidden group rounded-[32px] bg-[#f2f7ff] border border-blue-100/90 p-7 sm:p-9 shadow-lg shadow-blue-500/5 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col sm:flex-row items-center justify-between gap-6 cursor-pointer"
          >
            {/* Bottom-to-Top Subtle Hover Fill */}
            <span className="absolute inset-0 bg-[#e7f0ff]/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out pointer-events-none" />

            {/* Left Content */}
            <div className="relative z-10 flex-1 text-left">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dcebff] border border-blue-200/70 mb-5">
                <Eye className="w-3.5 h-3.5 text-[#007bff] stroke-[2.4]" />
                <span className="text-xs font-bold text-[#01287B]">
                  Our Vision
                </span>
              </div>

              <h3 className="text-2xl sm:text-[26px] font-bold text-[#01287B] leading-[1.2] mb-3.5">
                A Smarter <br />
                Learning <span className="text-[#007bff]">World.</span>
              </h3>

              <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed font-medium">
                A world where everyone can teach, learn and grow with the
                support of intelligent, inclusive and engaging technology.
              </p>
            </div>

            {/* Right 3D Glowing Lightbulb Illustration */}
            <motion.div
              whileHover={{ scale: 1.08, y: -4 }}
              transition={{ type: "spring", stiffness: 260 }}
              className="relative z-10 w-36 h-36 sm:w-44 sm:h-44 flex-shrink-0 flex items-center justify-center"
            >
              <svg viewBox="0 0 160 160" fill="none" className="w-full h-full drop-shadow-lg">
                {/* Radiating Yellow Rays */}
                <line x1="80" y1="12" x2="80" y2="26" stroke="#ffcf00" strokeWidth="6" strokeLinecap="round" />
                <line x1="36" y1="30" x2="46" y2="40" stroke="#ffcf00" strokeWidth="6" strokeLinecap="round" />
                <line x1="124" y1="30" x2="114" y2="40" stroke="#ffcf00" strokeWidth="6" strokeLinecap="round" />
                <line x1="20" y1="74" x2="34" y2="74" stroke="#ffcf00" strokeWidth="6" strokeLinecap="round" />
                <line x1="126" y1="74" x2="140" y2="74" stroke="#ffcf00" strokeWidth="6" strokeLinecap="round" />

                {/* Bulb Glass Body */}
                <path
                  d="M80 34C56.8 34 38 52.8 38 76C38 91.2 46.1 104.5 58.2 111.8C60.5 113.2 62 115.6 62 118.3V122H98V118.3C98 115.6 99.5 113.2 101.8 111.8C113.9 104.5 122 91.2 122 76C122 52.8 103.2 34 80 34Z"
                  fill="url(#bulbGrad)"
                />

                {/* Glossy Highlight */}
                <path
                  d="M54 66C55 54 64 46 75 45"
                  stroke="white"
                  strokeOpacity="0.55"
                  strokeWidth="5"
                  strokeLinecap="round"
                />

                {/* Blue Screw Base */}
                <rect x="61" y="122" width="38" height="8" rx="4" fill="#007bff" />
                <rect x="64" y="132" width="32" height="7" rx="3.5" fill="#0056d2" />
                <path d="M70 141H90C90 145.4 85.5 149 80 149C74.5 149 70 145.4 70 141Z" fill="#01287B" />

                <defs>
                  <linearGradient id="bulbGrad" x1="45" y1="34" x2="115" y2="122" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ffe659" />
                    <stop offset="1" stopColor="#ffaa00" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}