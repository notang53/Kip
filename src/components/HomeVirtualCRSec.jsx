import React from "react";
import { motion } from "framer-motion";
import {
  MonitorPlay,
  PenTool,
  Users,
  Video,
  Share2,
  Hand,
  ArrowRight,
  Sparkles,
} from "lucide-react";

// Background image yahan import karein (jismein right side par laptop/girl aur blue circles hain)
import classroomBg from "../assets/images/home5-sec-bg.png";

const featureBoxes = [
  { icon: PenTool, title: "Interactive Whiteboard" },
  { icon: Users, title: "Participant Management" },
  { icon: Video, title: "Live Video & Audio" },
  { icon: Share2, title: "Screen Sharing" },
  { icon: Hand, title: "Raise Hand" },
  { icon: Users, title: "Participant Management" },
];

export default function VirtualClassroomHero() {
  return (
    <section
      id="virtual-classroom"
      style={{
        backgroundImage: `url(${classroomBg})`,
      }}
      className="relative w-full min-h-screen bg-no-repeat bg-cover bg-left sm:bg-right-bottom  lg:bg-center flex items-center overflow-hidden bg-[#f5f9ff] py-20"
    >
      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-4 sm:px-6 lg:px-10">
        
        {/* Left Side Content Grid (Max width set so text & badges stay on the left) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-xl lg:max-w-[620px]"
        >
          {/* Top Badge: A Better Virtual Classroom */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e0edff] border border-blue-200/70 mb-6"
          >
            <MonitorPlay className="w-3.5 h-3.5 text-[#007bff]" />
            <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#0f172a]">
              A Better Virtual Classroom
            </span>
          </motion.div>

          {/* Main Heading with Yellow Sparkle Burst & Curved Underline */}
          <div className="relative inline-block">
            {/* Top-Right Yellow 3-Line Sparkle Accent */}
            <svg
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 sm:w-9 sm:h-9 absolute -top-5 right-10 sm:-top-6 sm:right-40 text-[#facc15]"
            >
              <path d="M8 22L16 6" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M17 27L31 14" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              <path d="M21 35L37 29" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            </svg>

            <h1 className="text-2xl md:text-4xl lg:text-[50px] font-bold tracking-tight leading-[1.12]">  
                <span className="text-[#01287B]">Better</span> <span className="text-[#0075FF]">Virtual <br /> Classroom </span>  <span className="text-[#01287B]">Experience</span>
                {/* Yellow Curved Underline under "Experience" */}
                <span>
                <svg
                  viewBox="0 0 240 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-1/4 h-3 sm:h-3.5 absolute -bottom-3 left-0 sm:left-80 text-[#facc15]"
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
          <p className="mt-6 text-slate-600 text-sm sm:text-md leading-relaxed max-w-lg font-medium">
            Bring your online classes to life with tools that make teaching and learning more engaging.
          </p>

          {/* 6 Mini Feature Cards Grid (2 columns x 3 rows) */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3.5 max-w-lg">
            {featureBoxes.map((box, index) => {
              const Icon = box.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white/90 hover:bg-white backdrop-blur-md p-2 rounded-2xl shadow-md shadow-blue-500/5 border border-blue-100/80 flex flex-row gap-2 cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-xl bg-blue-50 group-hover:bg-[#007bff] text-[#007bff] group-hover:text-white flex items-center justify-center transition-colors duration-200">
                    <Icon className="w-4 h-4 stroke-[2.2]" />
                  </div>
                  <span className="text-xs font-bold text-[#0f172a] leading-tight">
                    {box.title}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Watch Demo CTA Button */}
          <div className="mt-6">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden group inline-flex items-center justify-center gap-2.5 bg-[#007bff] text-white font-semibold text-sm sm:text-[15px] px-6 py-3 rounded-xl shadow-lg shadow-blue-500/25 cursor-pointer"
            >
              {/* Bottom-to-top hover fill */}
              <span className="absolute inset-0 bg-[#0056d2] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">watch demo</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}