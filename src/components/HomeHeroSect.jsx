import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Video, BookOpen } from "lucide-react";
// Background image (agar aap pure section ki background rakhna chahte hain)
import heroBg from "../assets/images/bg-img-all.png";
// Right side wali main girl/laptop image apne folder se yahan import karein:
import heroGirlImg from "../assets/images/hero-right.png";
import { useAuthModal } from "./auth/AuthModalContext";

export default function HomeHeroSect() {
  const [typedCount, setTypedCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const openAuthModal = useAuthModal();

  const rotatingText = "Grow Together.";

  useEffect(() => {
    if (!isDeleting && typedCount === rotatingText.length) {
      const pause = setTimeout(() => setIsDeleting(true), 1000);
      return () => clearTimeout(pause);
    }

    if (isDeleting && typedCount === 0) {
      setIsDeleting(false);
      return;
    }

    const timeout = setTimeout(
      () => setTypedCount((count) => count + (isDeleting ? -1 : 1)),
      isDeleting ? 55 : 110,
    );
    return () => clearTimeout(timeout);
  }, [typedCount, isDeleting]);

  return (
    <section
      id="home"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
      className="relative w-full min-h-screen bg-no-repeat bg-cover bg-bottom flex items-center overflow-hidden bg-[#f5f9ff] py-20"
    >
      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1400px] pt-10 mx-auto w-full px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Side Text Content (Col span 6) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="lg:col-span-5 max-w-xl lg:max-w-[540px]"
        >
          {/* Top Badge: YOUR ONLINE LEARNING SPACE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e0edff] border border-blue-200/70 mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#007bff]" />
            <span className="text-[11px] sm:text-xs font-extrabold tracking-wider uppercase text-[#0f172a]">
              YOUR ONLINE LEARNING SPACE
            </span>
          </motion.div>

          {/* Main Heading with Yellow SVG Burst & Curved Underline */}
          <div className="relative inline-block">
            {/* Top-Right Yellow 3-Line Sparkle Accent */}
            <svg
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 sm:w-9 sm:h-9 absolute -top-5 -right-5 sm:-top-2 sm:-right-6 text-[#facc15]"
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

            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight leading-[1.12]">
              <span className="block text-[#01287B]">Learn Together.</span>
              <span className="block text-[#007bff] mt-1 whitespace-nowrap">
                <span className="relative inline-block whitespace-nowrap" aria-label={rotatingText}>
                  <span aria-hidden="true" className="invisible">
                    {rotatingText}
                  </span>
                  <span aria-hidden="true" className="absolute left-0 top-0 whitespace-nowrap">
                    {rotatingText.slice(0, typedCount)}
                    <span className="ml-[2px] inline-block h-[0.9em] w-[3px] rounded-full bg-[#007bff] align-middle animate-pulse" />
                  </span>
                  {/* Yellow Curved Underline under "Together." */}
                  <svg
                    viewBox="0 0 220 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-1/2 h-3 sm:h-3.5 absolute -bottom-5 left-0 sm:left-45 text-[#facc15]"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.45, duration: 0.9, ease: "easeOut" }}
                      d="M3 14C65 4 150 3 217 11"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </h1>
          </div>

          {/* Subtitle Description */}
          <p className="mt-4 text-slate-500 text-xs sm:text-sm leading-relaxed max-w-md font-medium">
            KIPClassin brings live lessons, an interactive whiteboard and
            learning materials together in one platform for students and
            teachers.
          </p>

          {/* CTA Buttons Row */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            {/* Primary Button: Create an Account */}
            <motion.button
              type="button"
              onClick={() => openAuthModal("signup")}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden group inline-flex items-center justify-center gap-2.5 bg-[#007bff] text-white font-semibold text-sm sm:text-[15px] px-6 py-3 rounded-xl shadow-lg shadow-blue-500/25 cursor-pointer"
            >
              {/* Smooth bottom-to-top hover fill */}
              <span className="absolute inset-0 bg-[#0056d2] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Create an Account</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>

            {/* Secondary Button: Watch Demo */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden group inline-flex items-center justify-center gap-2.5 bg-white/90 hover:bg-blue-50/70 text-[#0f172a] border border-[#007bff]/50 hover:border-[#007bff] font-semibold text-sm sm:text-[14px] px-6 py-3 rounded-xl transition-colors duration-200 cursor-pointer"
            >
              <Play className="w-4 h-4 text-[#007bff] fill-transparent stroke-[2.2]" />
              <span>Watch Demo</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side Image & Floating Badges Container (Col span 6) */}
        <div className="lg:col-span-7 relative flex items-center justify-center mt-6 lg:mt-0">
          
          
          {/* Main Right Side Girl Image with Entrance & Hover Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="relative w-full max-w-[520px] lg:max-w-[650px]"
          >
            <img
              src={heroGirlImg}
              alt="Student learning online with KIPClassin"
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </motion.div>

          {/* Floating Badge 1: Live Online Classes (Top Left) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            animate-float={{
              y: [0, -8, 0],
              transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{ y: [0, -8, 0] }}
            className="absolute top-2 left-2 sm:top-10 sm:left-12 bg-white/95 backdrop-blur-md px-2.5 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-blue-100 flex items-center gap-2 sm:gap-3 z-20"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/30">
              <Video className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <p className="text-[11px] sm:text-[13px] font-bold text-slate-900 leading-tight">Live Online</p>
              <p className="text-[11px] sm:text-[13px] font-bold text-slate-900 leading-tight">Classes</p>
            </div>
          </motion.div>

          {/* Floating Badge 2: Interactive Learning (Top Right / Center-Right) */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            animate-float={{
              y: [0, 8, 0],
              transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{ y: [0, 8, 0] }}
            className="absolute top-10 right-2 sm:top-16 sm:right-6 bg-white/95 backdrop-blur-md px-2.5 py-2 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl border border-amber-100 flex items-center gap-2 sm:gap-3 z-20"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amber-400 flex items-center justify-center text-slate-900 shadow-md shadow-amber-400/30">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
            </div>
            <div>
              <p className="text-[11px] sm:text-[13px] font-bold text-slate-900 leading-tight">Interactive</p>
              <p className="text-[11px] sm:text-[13px] font-bold text-slate-900 leading-tight">Learning</p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}