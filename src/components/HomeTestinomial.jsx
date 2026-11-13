import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";

// Apni user images yahan import karein (ya placeholder URLs replace kar lein)
import danielImg from "../assets/images/user-1.png";
import aishaImg from "../assets/images/user-2.png";
import omarImg from "../assets/images/user-3.png";

const testimonialsData = [
  {
    id: 0,
    name: "Daniel R.",
    role: "Student",
    quote:
      "“KIPClassin makes online learning so easy and interactive. I can join my classes, access materials and stay on track.”",
    image: danielImg,
    theme: "blue",
  },
  {
    id: 1,
    name: "Aisha M.",
    role: "Teacher",
    quote:
      "“As a teacher, I love how simple it is to create classes, manage students and teach live with all the tools I need in one place.”",
    image: aishaImg,
    theme: "yellow",
  },
  {
    id: 2,
    name: "Omar K.",
    role: "Student",
    quote:
      "“The live classes, whiteboard and screen sharing make lessons more engaging and help me understand better.”",
    image: omarImg,
    theme: "blue",
  },
];

export default function TestimonialsSection() {
  // Default center active index = 1 (Aisha M.)
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1
    );
  };

  // Helper to get [leftCard, centerCard, rightCard] based on activeIndex
  const getVisibleCards = () => {
    const total = testimonialsData.length;
    const prevIdx = (activeIndex - 1 + total) % total;
    const nextIdx = (activeIndex + 1) % total;
    return [
      { ...testimonialsData[prevIdx], position: "left" },
      { ...testimonialsData[activeIndex], position: "center" },
      { ...testimonialsData[nextIdx], position: "right" },
    ];
  };

  const visibleCards = getVisibleCards();

  return (
    <section
      id="testimonials"
      className="relative w-full py-14 lg:py-18 bg-gradient-to-b from-white via-[#f7faff] to-[#eef5ff] overflow-hidden"
    >
   
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col items-center">
        {/* Top Pill Badge: Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e0edff] border border-blue-200/80 mb-5"
        >
          <Quote className="w-3.5 h-3.5 text-[#007bff]" />
          <span className="text-xs font-bold tracking-wide text-[#007bff]">
            Testimonials
          </span>
        </motion.div>

        {/* Main Heading with Yellow Sparkle Accent */}
        <div className="relative text-center max-w-3xl mb-10">
          {/* Top-Right Yellow 3-Line Sparkle Accent */}
          <svg
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 sm:w-9 sm:h-9 absolute -top-5 right-0 sm:-top-6 sm:-right-6 text-[#facc15]"
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

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-[42px] font-bold tracking-tight text-[#01287B] leading-tight"
          >
            Loved by{" "}
            <span className="text-[#007bff]">Students and Teachers.</span>
          </motion.h2>

          <p className="mt-3 text-slate-600 text-xs sm:text-sm font-medium">
            See what our users say about their learning and teaching experience
            on KIPClassin.
          </p>
        </div>

        {/* 3-Card Carousel Row */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <AnimatePresence mode="popLayout">
            {visibleCards.map((item) => {
              const isCenter = item.position === "center";
              const isYellow = item.theme === "yellow";

              return (
                <motion.div
                  key={`${item.id}-${item.position}`}
                  layout
                  initial={{ opacity: 0, scale: 0.94, y: 20 }}
                  animate={{
                    opacity: 1,
                    scale: isCenter ? 1.03 : 0.98,
                    y: isCenter ? -6 : 0,
                  }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 28,
                  }}
                  whileHover={{ y: isCenter ? -10 : -5 }}
                  onClick={() => setActiveIndex(item.id)}
                  className={`cursor-pointer rounded-[28px] p-4 sm:p-5 transition-all duration-300 relative overflow-hidden ${
                    isCenter
                      ? "lg:col-span-4 bg-[#fdfaf0] border-2 border-[#fde68a] shadow-2xl shadow-amber-500/10 z-20"
                      : "lg:col-span-4 bg-[#f4f8ff] border border-blue-100/90 shadow-lg shadow-blue-500/5 opacity-90 hover:opacity-100 hidden lg:block"
                  }`}
                >
                  {/* Top Content: Circular Avatar + Stars + Quote */}
                  <div className="flex items-start gap-4 sm:gap-5">
                    {/* User Circular Photo with Colored Soft Backdrop */}
                    <div
                      className={`w-24 h-24 sm:w-28 sm:h-28 rounded-full flex-shrink-0 overflow-hidden relative flex items-end justify-center shadow-inner ${
                        isYellow
                          ? "bg-gradient-to-b from-[#fef08a] to-[#facc15]/60"
                          : "bg-gradient-to-b from-[#bae6fd] to-[#60a5fa]/50"
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    {/* Right Side: 5 Yellow Stars + Quote Icon + Text */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2.5">
                        {/* 5 Stars */}
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-[#ffbc00] text-[#ffbc00]"
                            />
                          ))}
                        </div>

                        {/* Large Watermark Quote Mark */}
                        <Quote className="w-6 h-6 text-slate-300/80 fill-slate-300/60 flex-shrink-0" />
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-slate-700 text-xs sm:text-[13.5px] leading-relaxed font-medium">
                        {item.quote}
                      </p>
                    </div>
                  </div>

                  {/* Divider Line */}
                  <div
                    className={`w-full h-[1px] my-5 ${
                      isCenter ? "bg-amber-200/70" : "bg-blue-100"
                    }`}
                  />

                  {/* Bottom Name & Role */}
                  <div className="text-center">
                    <h4 className="text-base sm:text-lg font-bold text-[#01287B]">
                      {item.name}
                    </h4>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Bottom Navigation Controls: Left Arrow + Dots + Right Arrow */}
        <div className="mt-12 flex items-center justify-center gap-4">
          {/* Previous Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="w-10 h-10 rounded-full bg-white hover:bg-blue-50 border border-blue-200 text-[#007bff] flex items-center justify-center shadow-sm transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2.3]" />
          </motion.button>

          {/* Pagination Dots */}
          <div className="flex items-center gap-2">
            {testimonialsData.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "w-2.5 bg-[#007bff] scale-110"
                      : "w-2.5 bg-blue-200 hover:bg-blue-300"
                  }`}
                />
              );
            })}
          </div>

          {/* Next Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="w-10 h-10 rounded-full bg-[#007bff] hover:bg-[#0056d2] text-white flex items-center justify-center shadow-md shadow-blue-500/25 transition-colors cursor-pointer"
          >
            <ArrowRight className="w-4 h-4 stroke-[2.3]" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}