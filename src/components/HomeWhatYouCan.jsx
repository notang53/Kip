import React from "react";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  Video,
  Share,
  PenLine,
  CalendarDays,
  BookOpenCheck,
  Presentation,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Live Online Classes",
    description:
      "Connect with teachers and students through live audio and video sessions.",
    icon: Video,
    theme: "blue",
  },
  {
    id: 2,
    title: "Screen Sharing",
    description:
      "Share presentations, documents and your screen during lessons.",
    icon: Share,
    theme: "yellow",
  },
  {
    id: 3,
    title: "Interactive Whiteboard",
    description:
      "Write, draw and explain ideas together on a shared digital board.",
    icon: PenLine,
    theme: "blue",
  },
  {
    id: 4,
    title: "Easy Class Scheduling",
    description:
      "Stay updated with upcoming classes and scheduled sessions.",
    icon: CalendarDays,
    theme: "yellow",
  },
  {
    id: 5,
    title: "Learning Materials",
    description:
      "Access learning resources shared by your teachers.",
    icon: BookOpenCheck,
    theme: "blue",
  },
  {
    id: 6,
    title: "Teacher Tools",
    description:
      "Manage class participants, control permissions and keep lessons focused.",
    icon: Presentation,
    theme: "yellow",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative w-full py-10 lg:py-18 px-4 sm:px-6 lg:px-10 bg-white overflow-hidden"
    >
      {/* Subtle Background Ambient Glow */}
      {/* <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-100/35 rounded-full blur-3xl pointer-events-none -z-10" /> */}

      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Top Pill Badge: WHAT YOU CAN DO */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e0edff] border border-blue-200/70 mb-5"
        >
          <LayoutGrid className="w-3.5 h-3.5 text-[#007bff]" />
          <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#007bff]">
            WHAT YOU CAN DO
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-center text-[#01287B] leading-[1.18] max-w-2xl mb-14"
        >
          Everything You Need for{" "}
          <span className="text-[#007bff]">A Better Virtual Classroom.</span>
        </motion.h2>

        {/* 6 Cards Grid (3x2 on desktop, 2x3 on tablet, 1x6 on mobile) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 w-full"
        >
          {features.map((item) => {
            const Icon = item.icon;
            const isBlue = item.theme === "blue";

            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className={`relative overflow-hidden group rounded-3xl p-3 sm:p-5 text-center flex flex-col items-center border transition-shadow duration-300 cursor-pointer ${
                  isBlue
                    ? "bg-[#f2f7ff] border-blue-100/90 hover:shadow-xl hover:shadow-blue-500/10"
                    : "bg-[#fdf9ee] border-amber-100/90 hover:shadow-xl hover:shadow-amber-500/10"
                }`}
              >
                {/* Smooth Bottom-to-Top Hover Tint Layer */}
                <span
                  className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out pointer-events-none ${
                    isBlue ? "bg-[#e6f0ff]/80" : "bg-[#fbf2d8]/80"
                  }`}
                />

                {/* Bottom Accent Bar on Hover */}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ${
                    isBlue ? "bg-[#007bff]" : "bg-[#ffbc00]"
                  }`}
                />

                {/* Glossy Rounded-Square Icon Badge */}
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                  className={`relative z-10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-transform duration-300 group-hover:scale-110 ${
                    isBlue
                      ? "bg-gradient-to-b from-[#2b95ff] to-[#0056d2] text-white shadow-blue-500/30"
                      : "bg-gradient-to-b from-[#ffe047] to-[#f5a600] text-slate-900 shadow-amber-400/35"
                  }`}
                >
                  {/* Top Inner Gloss Shine */}
                  <span className="absolute inset-x-1.5 top-1 h-2.5 rounded-full bg-white/30 pointer-events-none" />
                  <Icon className="w-6 h-6 stroke-[2.2]" />
                </motion.div>

                {/* Card Title */}
                <h3 className="relative z-10 text-lg sm:text-[15px] font-bold text-[#01287B] mb-2.5">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="relative z-10 text-slate-500 text-xs sm:text-[11.5px] leading-relaxed max-w-[260px] font-medium">
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