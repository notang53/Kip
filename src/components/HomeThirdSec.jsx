import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// Top banner background image yahan import karein
import howItWorksBg from "../assets/images/3-sec-top.png";

// 3 cards ki images yahan import karein
import step1Img from "../assets/images/learning-1.png";
import step2Img from "../assets/images/learning-2.png";
import step3Img from "../assets/images/learning-3.png";

const steps = [
  {
    id: 1,
    title: "Create Account",
    description: "Sign up as a student or teacher.",
    image: step1Img,
  },
  {
    id: 2,
    title: "Get Connected",
    description: "Access your classes and schedule.",
    image: step2Img,
  },
  {
    id: 3,
    title: "Start Learning",
    description: "Join live classes and collaborate.",
    image: step3Img,
  },
];

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section>

      <div className="max-w-[1400px] py-20 mx-auto relative px-4 sm:px-6 lg:px-10 flex flex-col items-center">
        
        <img src={howItWorksBg} alt="" className="absolute top-0 left-0 h-[100px] bg-no-repeat bg-cover bg-center pointer-events-none"
 />
        {/* Top Badge: HOW IT WORKS */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e0edff] border border-blue-200/80 shadow-sm mb-6"
        >
          <Sparkles className="w-4 h-4 text-[#007bff]" />
          <span className="text-xs font-bold tracking-wider uppercase text-[#0f172a]">
            HOW IT WORKS
          </span>
        </motion.div>

        {/* Section Heading & Subtitle with Yellow Sparkle Burst & Curved Underline */}
        <div className="relative text-center mb-10 max-w-2xl">
          {/* Top-Right Yellow 3-Line Sparkle Accent */}
          <svg
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 sm:w-9 sm:h-9 absolute -top-5 right-4 sm:-top-3 sm:-right-4 text-[#facc15]"
          >
            <path d="M8 22L16 6" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M17 27L31 14" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M21 35L37 29" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
          </svg>

          <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold tracking-tight text-[#0f172a] leading-tight">
            Getting Started Is{" "}
            <span className="relative inline-block text-[#007bff]">
              Simple.
              {/* Yellow Curved Underline under "Simple." */}
              <svg
                viewBox="0 0 160 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-3 sm:h-3.5 absolute -bottom-2 left-0 text-[#facc15]"
                preserveAspectRatio="none"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                  d="M3 14C45 4 110 3 157 11"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="mt-4 text-slate-600 text-xs sm:text-sm font-medium">
            Three simple steps to begin your online learning experience.
          </p>
        </div>

        {/* 3 Cards Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-8 w-full relative">
          
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className={`${activeStep === index ? "" : "hidden"} md:flex bg-white rounded-3xl border border-blue-100/80 p-5 flex flex-col items-stretch text-left min-h-[205px] relative group`}
            >
              {/* Card Illustration / Image */}
              <div className="w-full h-[100px] flex items-center justify-start mb-2 relative overflow-hidden rounded-2xl">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.3 }}
                  src={step.image}
                  alt={step.title}
                  className="w-[110px] h-full object-contain"
                />
              </div>

              {/* Step Title */}
              <h3 className="text-base font-bold text-[#0f172a] mb-1">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-slate-500 text-xs leading-relaxed mb-4">
                {step.description}
              </p>

              {/* Bottom Action Arrow Button */}
              <div className="mt-auto self-end">
                <motion.div
                  whileHover={{ scale: 1.15, backgroundColor: "#007bff", color: "#ffffff" }}
                  whileTap={{ scale: 0.9 }}
                  className="w-6 h-6 rounded-full border border-blue-200 bg-white text-[#007bff] flex items-center justify-center shadow-sm cursor-pointer transition-colors duration-200"
                >
                  <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                </motion.div>
              </div>

              {/* Connecting Dotted Curved Arrow (Desktop only - between card 1->2 and 2->3) */}
              {index < 2 && (
                <div className="hidden md:block absolute -right-4 sm:-right-5 lg:-right-6 top-1/3 z-20 pointer-events-none translate-x-1/2">
                  <svg
                    width="48"
                    height="24"
                    viewBox="0 0 48 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-blue-300"
                  >
                    <path
                      d="M2 18C16 4 32 4 44 14"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeDasharray="4 4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M38 10L44 15L39 19"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}

        </div>

        <div className="mt-5 flex items-center justify-center gap-5 md:hidden">
          <button
            type="button"
            onClick={() => setActiveStep((step) => Math.max(step - 1, 0))}
            disabled={activeStep === 0}
            aria-label="Previous step"
            className="w-10 h-10 rounded-full border border-blue-200 bg-white text-[#007bff] flex items-center justify-center shadow-sm transition-colors hover:bg-blue-50 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-sm font-semibold text-slate-600" aria-live="polite">
            Step {activeStep + 1} of {steps.length}
          </span>
          <button
            type="button"
            onClick={() => setActiveStep((step) => Math.min(step + 1, steps.length - 1))}
            disabled={activeStep === steps.length - 1}
            aria-label="Next step"
            className="w-10 h-10 rounded-full border border-blue-200 bg-white text-[#007bff] flex items-center justify-center shadow-sm transition-colors hover:bg-blue-50 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}