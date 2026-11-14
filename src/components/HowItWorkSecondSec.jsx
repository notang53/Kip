import React from "react";
import { motion } from "framer-motion";
import { UserPlus, Monitor, Presentation, TrendingUp } from "lucide-react";

// Apni step cards ki images ya icons yahan customize kar sakte hain
const stepsData = [
  {
    step: "01",
    title: "Create Your Account",
    description: "Sign up as a student or teacher in seconds.",
    icon: UserPlus,
  },
  {
    step: "02",
    title: "Set Up Your Space",
    description: "Create or join classes, set your preferences and get ready.",
    icon: Monitor,
  },
  {
    step: "03",
    title: "Teach or Learn",
    description: "Join live classes, collaborate on the whiteboard and access learning materials.",
    icon: Presentation,
  },
  {
    step: "04",
    title: "Track & Grow",
    description: "Monitor progress, manage assignments and achieve your learning goals.",
    icon: TrendingUp,
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

export default function HowItWorksSecondSection() {
  return (
    <section className="relative w-full py-10 lg:py-18 px-4 sm:px-6 lg:px-10 bg-white overflow-hidden">
      
      {/* Subtle Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Top Badge: THE PROCESS */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e0edff] border border-blue-200/80 shadow-sm mb-5"
        >
          <span className="text-xs font-bold tracking-wider uppercase text-[#007bff]">
            THE PROCESS
          </span>
        </motion.div>

        {/* Section Heading & Subtitle with Yellow Sparkle Burst */}
        <div className="relative text-center mb-16 max-w-2xl">
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
            className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#01287B] leading-tight"
          >
            How KIPClassin <span className="text-[#007bff]">Works?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-slate-600 text-sm sm:text-base font-medium"
          >
            Get started in just a few simple steps and make the most of your learning experience.
          </motion.p>
        </div>

        {/* 4 Step Cards Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 w-full"
        >
          {stepsData.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.step}
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="relative isolate overflow-hidden group rounded-2xl p-5 sm:p-6 min-h-[180px] bg-[#f2f7ff] border border-blue-100/90 shadow-md shadow-blue-500/5 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-500/10 flex flex-col items-center text-center transition-all duration-300"
              >
                {/* Bottom-to-Top Hover Tint Layer */}
                <span className="absolute inset-0 z-0 bg-[#e6f0ff]/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out pointer-events-none" />

                <span className="absolute bottom-0 left-0 right-0 z-10 h-1 bg-[#007bff] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
                <div className="relative z-10 flex w-full flex-1 flex-col items-center">
                  <div className="self-start px-2 py-0.5 rounded-full bg-[#007bff] text-white text-[10px] font-bold shadow-sm shadow-blue-500/30">
                    {item.step}
                  </div>

                  <div className="mt-2 mb-2 w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#007bff] group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>

                  {/* Card Title */}
                  <h3 className="text-sm sm:text-base font-bold text-[#01287B] group-hover:text-[#007bff] transition-colors duration-300 mb-1">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs leading-snug text-slate-600 font-medium">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}