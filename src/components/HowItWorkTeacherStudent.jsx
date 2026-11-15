import React from "react";
import { motion } from "framer-motion";
import { Monitor, GraduationCap, Check } from "lucide-react";

// Apni Teacher aur Student ki transparent/cutout images yahan import karein
import teacherImg from "../assets/images/teacher.png";
import studentImg from "../assets/images/student.png";

const teacherPoints = [
  "Create and manage classes with ease.",
  "Use interactive tools like whiteboard & screen share.",
  "Assign homework, quizzes and assessments.",
  "Track student performance and engagement.",
];

const studentPoints = [
  "Join live interactive classes anytime.",
  "Collaborate with teachers and classmates.",
  "Access notes, recordings and learning.",
  "Track your progress and see real improvement.",
];

export default function TeachersStudentsSection() {
  return (
    <section className="max-w-[1400px] relative w-full min-h-screen py-10 lg:py-10 px-4 sm:px-6 lg:px-10 bg-white flex items-center justify-center overflow-hidden">
      
     
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-4 lg:gap-6">
        
        {/* ================= CARD 1: FOR TEACHERS (Warm Cream/Yellow Card) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          className="relative overflow-hidden group rounded-[20px] sm:rounded-[30px] bg-[#fdf9ee] border border-amber-100/90 shadow-xl shadow-amber-500/5 hover:shadow-2xl hover:shadow-amber-500/10 pt-4 px-6 sm:px-10 lg:px-14 pb-0"
        >
          {/* Bottom-to-Top Subtle Hover Tint Layer */}
          <span className="absolute inset-0 bg-[#fbf2d8]/75 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
            
            {/* Left Side: Teacher Image (Col span 4) */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start order-2 lg:order-1">
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.35 }}
                src={teacherImg}
                alt="For Teachers - KIPClassin"
                className="w-55 sm:w-55 lg:w-full max-w-[240px] h-auto object-contain object-bottom drop-shadow-md"
              />
            </div>

            {/* Right Side: Content & Checklist (Col span 8) */}
            <div className="lg:col-span-8 pb-4 sm:pb-4 lg:pb-6 flex flex-col items-start order-1 lg:order-2">
              {/* Pill Badge: FOR TEACHERS */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e0edff] border border-blue-200/80 shadow-xs mb-4">
                <Monitor className="w-3.5 h-3.5 text-[#007bff] stroke-[2.3]" />
                <span className="text-[9px] font-bold tracking-wider uppercase text-[#007bff]">
                  FOR TEACHERS
                </span>
              </div>

              {/* Heading with Yellow Sparkle Burst */}
              <div className="relative inline-block mb-3">
                {/* Top-Right Yellow 3-Line Sparkle Accent */}
                <svg
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 sm:w-8 sm:h-8 absolute -top-5 right-8 sm:-top-6 sm:-right-9 text-[#facc15]"
                >
                  <path d="M8 22L16 6" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M17 27L31 14" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M21 35L37 29" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                </svg>

                <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight text-[#01287B] leading-tight">
                  A Smarter Way to <span className="text-[#007bff]">Teach.</span>
                </h2>
              </div>

              {/* Subtitle */}
              <p className="text-slate-600 text-xs sm:text-[15px] leading-relaxed max-w-xl font-medium mb-6">
                Access your classes, manage learning materials and teach interactive live lessons.
              </p>

              {/* 2x2 Yellow Checkmark Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 w-full">
                {teacherPoints.map((point, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-2.5"
                  >
                    <span className="w-4 h-4 mt-0.5 rounded-full bg-[#ffbc00] text-slate-900 flex items-center justify-center flex-shrink-0 shadow-xs">
                      <Check className="w-2.5 h-2.5 stroke-[3.2]" />
                    </span>
                    <span className="text-slate-700 text-xs sm:text-[13px] font-semibold leading-snug">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>


        {/* ================= CARD 2: FOR STUDENTS (Soft Blue Card) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          whileHover={{ y: -6, transition: { duration: 0.25 } }}
          className="relative overflow-hidden group rounded-[20px] sm:rounded-[30px] bg-[#f2f7ff] border border-blue-100/90 shadow-xl shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/10 pt-4 px-6 sm:px-10 lg:px-14 pb-0"
        >
          {/* Bottom-to-Top Subtle Hover Tint Layer */}
          <span className="absolute inset-0 bg-[#e6f0ff]/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
            
            {/* Left Side: Content & Checklist (Col span 8) */}
            <div className="lg:col-span-8 pb-4 sm:pb-4 lg:pb-6 flex flex-col items-start">
              {/* Pill Badge: FOR STUDENTS */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#dcebff] border border-blue-200/80 shadow-xs mb-4">
                <GraduationCap className="w-3.5 h-3.5 text-[#007bff] stroke-[2.3]" />
                <span className="text-[9px] font-bold tracking-wider uppercase text-[#007bff]">
                  FOR STUDENTS
                </span>
              </div>

              {/* Heading with Yellow Sparkle Burst */}
              <div className="relative inline-block mb-2">
                {/* Top-Right Yellow 3-Line Sparkle Accent */}
                <svg
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7 sm:w-8 sm:h-8 absolute -top-5 right-8 sm:-top-6 sm:-right-9 text-[#facc15]"
                >
                  <path d="M8 22L16 6" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M17 27L31 14" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M21 35L37 29" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                </svg>

                <h2 className="text-2xl sm:text-3xl lg:text-[33px] font-bold tracking-tight text-[#01287B] leading-tight">
                  A Better Way to <span className="text-[#007bff]">Learn.</span>
                </h2>
              </div>

              {/* Subtitle */}
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xl font-medium mb-6">
                Join your classes, connect with teachers and access your learning materials.
              </p>

              {/* 2x2 Yellow Checkmark Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 w-full">
                {studentPoints.map((point, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-2.5"
                  >
                    <span className="w-4 h-4 mt-0.5 rounded-full bg-[#ffbc00] text-slate-900 flex items-center justify-center flex-shrink-0 shadow-xs">
                      <Check className="w-2.5 h-2.5 stroke-[3.2]" />
                    </span>
                    <span className="text-slate-700 text-xs sm:text-[13px] font-semibold leading-snug">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side: Student Image (Col span 4) */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.35 }}
                src={studentImg}
                alt="For Students - KIPClassin"
                className="w-55 sm:w-55 lg:w-full max-w-[240px] h-auto object-contain object-bottom drop-shadow-md"
              />
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}