import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  ChevronLeft,
  ChevronRight,
  Video, 
  Cpu, 
  Presentation, 
  Calendar, 
  BookOpen, 
  Users, 
  TrendingUp, 
  ClipboardCheck, 
  ShieldCheck 
} from "lucide-react";

const suiteFeatures = [
  {
    id: 1,
    title: "Live Online Classes",
    description: "Teach and learn in real time with HD video, audio and interactive tools.",
    icon: Video,
    theme: "blue",
  },
  {
    id: 2,
    title: "AI-Powered Learning",
    description: "Get smart recommendations, create quizzes and personalize learning with AI.",
    icon: Cpu,
    theme: "yellow",
  },
  {
    id: 3,
    title: "Interactive Whiteboard",
    description: "Explain, draw and collaborate with a smart, easy-to-use whiteboard.",
    icon: Presentation,
    theme: "blue",
  },
  {
    id: 4,
    title: "Smart Class Scheduling",
    description: "Create, manage and organize classes with automated reminders.",
    icon: Calendar,
    theme: "yellow",
  },
  {
    id: 5,
    title: "Learning Materials",
    description: "Upload, organize and share notes, PDFs, videos and more in one place.",
    icon: BookOpen,
    theme: "blue",
  },
  {
    id: 6,
    title: "Collaboration Tools",
    description: "Keep students and teachers connected with chats, discussions and group activities.",
    icon: Users,
    theme: "blue",
  },
  {
    id: 7,
    title: "Progress Tracking",
    description: "Monitor performance, attendance and learning growth with clear insights.",
    icon: TrendingUp,
    theme: "blue",
  },
  {
    id: 8,
    title: "Assignments & Assessments",
    description: "Create, assign and grade homework, quizzes and tests easily.",
    icon: ClipboardCheck,
    theme: "yellow",
  },
  {
    id: 9,
    title: "Secure & Reliable",
    description: "A safe, stable and trusted platform for a seamless learning experience.",
    icon: ShieldCheck,
    theme: "blue",
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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function FeatureSecondSec() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="relative flex min-h-screen w-full items-center py-10 lg:py-12 px-4 sm:px-6 lg:px-10 bg-white overflow-hidden">
      
 
      <div className="max-w-[1400px] w-full mx-auto flex flex-col items-center">
        
        {/* Top Badge: EXPLORE FEATURES */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e0edff] border border-blue-200/80 shadow-sm mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#007bff]" />
          <span className="text-xs font-bold tracking-wider uppercase text-[#007bff]">
            EXPLORE FEATURES
          </span>
        </motion.div>

        {/* Section Heading & Subtitle with Yellow Sparkle Burst */}
        <div className="relative text-center mb-5 max-w-2xl">
          {/* Top-Right Yellow 3-Line Sparkle Accent */}
          <svg
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 sm:w-9 sm:h-9 absolute -top-5 right-4 sm:-top-6 sm:right-6 text-[#facc15]"
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
            className="text-2xl md:text-3xl lg:text-[40px] font-bold tracking-tight text-[#01287B] leading-tight"
          >
            A Complete Learning Suite <br />
            for <span className="text-[#007bff]">Students and Teachers.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-slate-600 text-sm sm:text-base font-medium"
          >
            Discover powerful tools designed to make teaching, learning and class management simple, interactive and more effective.
          </motion.p>
        </div>

        {/* 9 Cards Grid (3x3) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 w-full"
        >
          {suiteFeatures.map((item) => {
            const Icon = item.icon;
            const isBlue = item.theme === "blue";

            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className={`relative overflow-hidden group rounded-2xl p-3 sm:p-4 flex flex-col justify-between border transition-all duration-300 cursor-pointer ${
                  isBlue
                    ? "bg-[#f2f7ff] border-blue-100/90 shadow-lg shadow-blue-500/5 hover:shadow-xl hover:shadow-blue-500/10"
                    : "bg-[#fdf9ee] border-amber-100/90 shadow-lg shadow-amber-500/5 hover:shadow-xl hover:shadow-amber-500/10"
                } ${activeFeature === item.id - 1 ? "flex" : "hidden"} sm:flex`}
              >
                {/* Bottom-to-Top Hover Tint Layer */}
                <span
                  className={`absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out pointer-events-none ${
                    isBlue ? "bg-[#e6f0ff]/80" : "bg-[#fbf2d8]/80"
                  }`}
                />

                {/* Top Content: Icon & Text */}
                <div className="relative z-10">
                  {/* Icon Badge */}
                  <div className="w-9 h-9 rounded-xl bg-white shadow-md shadow-blue-500/10 flex items-center justify-center text-[#007bff] mb-2 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-bold text-[#01287B] mb-1.5 transition-colors duration-300 group-hover:text-[#007bff]">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[11px] sm:text-xs leading-snug text-slate-600 font-medium mb-2 transition-colors duration-300 group-hover:text-slate-700">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Arrow Button (Aligned Right) */}
                <div className="relative z-10 flex justify-end">
                  <motion.div
                    whileHover={{ scale: 1.15, backgroundColor: "#007bff", color: "#ffffff" }}
                    whileTap={{ scale: 0.9 }}
                    className="w-7 h-7 rounded-full border border-blue-200/80 bg-white text-[#007bff] flex items-center justify-center shadow-sm transition-all duration-200 group-hover:border-[#007bff] group-hover:bg-[#007bff] group-hover:text-white group-hover:translate-x-1"
                  >
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </motion.div>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-4 flex items-center justify-center gap-3 sm:hidden">
          <button
            type="button"
            onClick={() => setActiveFeature((feature) => Math.max(feature - 1, 0))}
            disabled={activeFeature === 0}
            aria-label="Previous feature"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#007bff] text-white shadow-md shadow-blue-500/20 transition hover:bg-[#0056d2] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="min-w-10 text-center text-xs font-semibold text-slate-600" aria-live="polite">
            {activeFeature + 1} / {suiteFeatures.length}
          </span>
          <button
            type="button"
            onClick={() => setActiveFeature((feature) => Math.min(feature + 1, suiteFeatures.length - 1))}
            disabled={activeFeature === suiteFeatures.length - 1}
            aria-label="Next feature"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#007bff] text-white shadow-md shadow-blue-500/20 transition hover:bg-[#0056d2] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </section>
  );
}