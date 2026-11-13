import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

// Yahan apni teeno cards ki images import karein
import aiCardImg from "../assets/images/learning-1.png";
import assessmentImg from "../assets/images/learning-2.png";
import progressImg from "../assets/images/learning-3.png";

const features = [
  {
    id: 1,
    title: "AI-Powered Learning",
    description: "Get personalized learning support, smart recommendations, and instant help.",
    image: aiCardImg,
  },
  {
    id: 2,
    title: "Assessments & Tests",
    description: "Create quizzes and tests, automate grading, and give timely feedback.",
    image: assessmentImg,
  },
  {
    id: 3,
    title: "Student Progress Tracking",
    description: "Monitor learning progress, performance, and milestone completion in real time.",
    image: progressImg,
  },
];

export default function PowerfulLearningSection() {
  return (
    <section className="relative w-full py-10 lg:py-18 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-white via-[#f7faff] to-[#edf5ff] overflow-hidden">
      
  
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* Top Badge: Powerful Learning Features */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e0edff] border border-blue-200/80 shadow-sm mb-6"
        >
          <Sparkles className="w-4 h-4 text-[#007bff]" />
          <span className="text-xs font-semibold tracking-wider uppercase text-[#0f172a]">
            Powerful Learning Features
          </span>
        </motion.div>

        {/* Section Heading & Subtitle with Yellow Sparkle Burst & Curved Underline */}
        <div className="relative text-center mb-10 max-w-2xl">
          {/* Top-Right Yellow 3-Line Sparkle Accent */}
          <svg
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 sm:w-9 sm:h-9 absolute -top-5 right-2 sm:-top-6 sm:right-6 text-[#facc15]"
          >
            <path d="M8 22L16 6" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M17 27L31 14" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M21 35L37 29" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
          </svg>

          <h2 className="text-2xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#0f172a] leading-tight">
            More Than a{" "}
            <span className="relative inline-block text-[#007bff]">
              Virtual Classroom.
              {/* Yellow Curved Underline under "Virtual Classroom." */}
              <svg
                viewBox="0 0 260 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-3 sm:h-3.5 absolute -bottom-2.5 left-0 text-[#facc15]"
                preserveAspectRatio="none"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                  d="M3 14C70 4 180 3 257 11"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="mt-2 text-slate-600 text-xs sm:text-sm font-medium">
            Smart tools that make teaching, learning, and progress tracking easier for everyone.
          </p>
        </div>

        {/* 3 Cards Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-5xl">
          
          {features.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-3 shadow-xl border border-blue-100/80 flex flex-col justify-between relative group cursor-pointer"
            >
              <div>
                {/* Card Illustration / Image */}
                <div className="w-1/2 h-30 flex mb-2 relative overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.3 }}
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full "
                  />
                </div>

                {/* Card Title */}
                <h3 className="text-ms font-bold text-[#0f172a] mb-2.5">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-2">
                  {item.description}
                </p>
              </div>

              {/* Bottom Action Arrow Button (Aligned to Bottom Right) */}
              <div className="flex justify-end">
                <motion.div
                  whileHover={{ scale: 1.15, backgroundColor: "#007bff", color: "#ffffff" }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full border border-blue-200 bg-white text-[#007bff] flex items-center justify-center shadow-sm transition-colors duration-200"
                >
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </motion.div>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}