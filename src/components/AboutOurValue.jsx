import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const valuesData = [
  {
    id: 1,
    title: "Accessibility",
    description: "Learning for everyone, anywhere.",
    theme: "blue", // soft blue background
    icon: <span className="text-5xl leading-none" role="img" aria-label="Graduation cap">🎓</span>,
  },
  {
    id: 2,
    title: "Collaboration",
    description: "Bring students and teachers closer together.",
    theme: "yellow", // soft cream/yellow background
    icon: <span className="text-5xl leading-none" role="img" aria-label="Handshake">🤝</span>,
  },
  {
    id: 3,
    title: "Reliability",
    description: "A secure and stable platform you can trust.",
    theme: "blue", // soft blue background
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-14 h-14">
        <path
          d="M24 6L8 12V22C8 31.5 14.8 40.2 24 43C33.2 40.2 40 31.5 40 22V12L24 6Z"
          fill="url(#valShieldGrad)"
        />
        <path
          d="M17 24.5L21.5 29L31 19.5"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="valShieldGrad" x1="8" y1="6" x2="40" y2="43" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" />
            <stop offset="1" stopColor="#0056d2" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 4,
    title: "Continuous Growth",
    description: "Evolving with new features and better learning experiences.",
    theme: "yellow", // soft cream/yellow background
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14" aria-hidden="true">
        <defs>
          <linearGradient id="growthBarGrad" x1="32" y1="4" x2="32" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffdc2e" />
            <stop offset="1" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
        <rect x="4" y="36" width="17" height="24" rx="5" fill="url(#growthBarGrad)" />
        <rect x="24" y="20" width="17" height="40" rx="5" fill="url(#growthBarGrad)" />
        <rect x="44" y="4" width="17" height="56" rx="5" fill="url(#growthBarGrad)" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function OurValuesSection() {
  return (
    <section className="relative w-full py-14 lg:py-18 px-4 sm:px-6 lg:px-10 bg-white overflow-hidden">
      
     
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* Top Badge: Our Values */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e0edff] border border-blue-200/80 shadow-sm mb-5"
        >
          <Star className="w-3.5 h-3.5 text-[#007bff] fill-[#007bff]" />
          <span className="text-xs font-semibold tracking-wider uppercase text-[#01287B]">
            Our Values
          </span>
        </motion.div>

        {/* Section Heading with Yellow Sparkle Burst */}
        <div className="relative text-center mb-8 max-w-2xl">
          {/* Top-Right Yellow 3-Line Sparkle Accent */}
          <svg
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 sm:w-9 sm:h-9 absolute -top-5 right-2 sm:-top-6 sm:right-4 text-[#facc15]"
          >
            <path d="M8 22L16 6" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M17 27L31 14" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M21 35L37 29" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
          </svg>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#01287B] leading-tight"
          >
            The Values We Stand For
          </motion.h2>
        </div>

        {/* 4 Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 w-full"
        >
          {valuesData.map((item) => {
            const isBlue = item.theme === "blue";

            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -10, transition: { duration: 0.25 } }}
                className={`relative overflow-hidden group rounded-[25px] p-2 sm:p-3 text-center flex flex-col items-center border transition-all duration-300 cursor-pointer ${
                  isBlue
                    ? "bg-[#f2f7ff] border-blue-100/90 shadow-lg shadow-blue-500/5 hover:shadow-xl hover:shadow-blue-500/10"
                    : "bg-[#fdf9ee] border-amber-100/90 shadow-lg shadow-amber-500/5 hover:shadow-xl hover:shadow-amber-500/10"
                }`}
              >
                {/* Bottom-to-Top Hover Tint Layer */}
                <span
                  className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out pointer-events-none ${
                    isBlue ? "bg-[#e6f0ff]/80" : "bg-[#fbf2d8]/80"
                  }`}
                />

                {/* Bottom Accent Line on Hover */}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-1.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ${
                    isBlue ? "bg-[#007bff]" : "bg-[#ffbc00]"
                  }`}
                />

                {/* 3D Icon Container */}
                <motion.div
                  whileHover={{ scale: 1.12, rotate: [0, -6, 6, 0] }}
                  transition={{ duration: 0.35 }}
                  className="relative z-10 mb-3 drop-shadow-sm flex items-center justify-center"
                >
                  {item.icon}
                </motion.div>

                {/* Card Title */}
                <h3 className="relative z-10 text-lg sm:text-[19px] font-bold text-[#01287B] mb-2.5">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="relative z-10 text-slate-600 text-xs sm:text-[13.5px] leading-relaxed max-w-[240px] font-medium">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}