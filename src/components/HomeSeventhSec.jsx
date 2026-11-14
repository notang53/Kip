import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  GraduationCap,
  Layers,
  Play,
  ChevronRight,
} from "lucide-react";

// Apni capsule wave background design image yahan import karein
import trustedCapsuleBg from "../assets/images/7-sec-design.png";

const trustedItems = [
  {
    id: 1,
    label: "Active Students",
    icon: Users,
    hasArrow: false,
  },
  {
    id: 2,
    label: "Teachers",
    icon: GraduationCap,
    hasArrow: false,
  },
  {
    id: 3,
    label: "Classes Held",
    icon: Layers,
    hasArrow: false,
  },
  {
    id: 4,
    label: "Watch Demo",
    icon: Play,
    hasArrow: true,
  },
];

export default function TrustedStatsSection() {
  return (
    <section className="relative w-full py-16 lg:py-20 px-4 sm:px-6 lg:px-10 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Top Badge: Trusted by Educators & Students + Yellow Sparkle Burst */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#eef5ff] border border-blue-200/70 shadow-sm mb-8"
        >
          {/* Top-Right Yellow 3-Line Sparkle Accent */}
          <svg
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 sm:w-7 sm:h-7 absolute -top-5 -right-6 text-[#facc15]"
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

          <ShieldCheck className="w-4 h-4 text-[#007bff] fill-[#007bff]/15 stroke-[2.4]" />
          <span className="text-xs sm:text-[13px] font-bold text-[#01287B] tracking-tight">
            Trusted by Educators & Students
          </span>
        </motion.div>

        {/* Main Pill Capsule Container with Imported Background Graphic */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            backgroundImage: `url(${trustedCapsuleBg})`,
          }}
          className="relative w-full bg-repeat bg-cover bg-center px-6 py-8 sm:px-10 sm:py-10 "
        >
          {/* 4 Columns Grid with Vertical Dividers */}
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 items-center">
            {trustedItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + index * 0.1, duration: 0.4 }}
                  whileHover={{ y: -5 }}
                  className={`relative group flex flex-col items-center justify-center py-3 px-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                    index < trustedItems.length - 1
                      ? "lg:border-r lg:border-slate-200/80"
                      : ""
                  }`}
                >
                  {/* Hover Soft Pill Glow */}
                  <span className="absolute inset-2 rounded-2xl bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 shadow-sm" />

                  {/* Icon Wrapper with Soft Yellow Circle Backdrop */}
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: [0, -6, 6, 0] }}
                    transition={{ duration: 0.35 }}
                    className="relative w-12 h-12 flex items-center justify-center mb-3"
                  >
                    {/* Soft Yellow Accent Circle behind Icon (matching screenshot) */}
                    <span className="absolute top-0.5 right-0.5 w-6 h-6 rounded-full bg-[#fef08a] group-hover:scale-125 transition-transform duration-300" />

                    {/* Blue Foreground Icon */}
                    <div className="relative z-10 w-10 h-10 rounded-xl bg-[#007bff] text-white flex items-center justify-center shadow-md shadow-blue-500/25">
                      <Icon
                        className={`w-5 h-5 ${
                          item.id === 4 ? "fill-white ml-0.5" : "stroke-[2.2]"
                        }`}
                      />
                    </div>
                  </motion.div>

                  {/* Item Label (+ Yellow Arrow Badge for Watch Demo) */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm sm:text-[15px] font-bold text-[#01287B] group-hover:text-[#007bff] transition-colors">
                      {item.label}
                    </span>

                    {item.hasArrow && (
                      <span className="w-4 h-4 rounded-full bg-[#ffbc00] text-white flex items-center justify-center shadow-xs group-hover:translate-x-1 transition-transform duration-200">
                        <ChevronRight className="w-3 h-3 stroke-[3]" />
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}