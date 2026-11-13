import React from "react";
import { motion } from "framer-motion";
import { Users, GraduationCap, Presentation, User, ArrowRight } from "lucide-react";

// Yahan apni images import karein
import studentImg from "../assets/images/portal-1.png";
import teacherImg from "../assets/images/portal-2.png";

export default function PortalSection() {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6 lg:px-10 bg-gradient-to-b from-white via-[#f7faff] to-[#edf5ff] overflow-hidden">
      
      {/* Background Decorative Glow */}
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-3xl pointer-events-none -z-10" /> */}

      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* Top Badge: CHOOSE YOUR PORTAL */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e0edff] border border-blue-200/80 shadow-sm mb-6"
        >
          <Users className="w-4 h-4 text-[#007bff]" />
          <span className="text-xs font-semibold tracking-wider uppercase text-[#0f172a]">
            CHOOSE YOUR PORTAL
          </span>
        </motion.div>

        {/* Section Heading with Yellow Sparkle Burst */}
        <div className="relative inline-block text-center mb-8">
          {/* Top-Right Yellow 3-Line Sparkle Accent */}
          <svg
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 sm:w-9 sm:h-9 absolute -top-5 -right-6 sm:-top-6 sm:-right-8 text-[#facc15]"
          >
            <path d="M8 22L16 6" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M17 27L31 14" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M21 35L37 29" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
          </svg>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[#0f172a] leading-tight">
            One Platform for Teaching <br className="hidden sm:block" />
            and <span className="text-[#007bff]">Learning</span>
          </h2>
        </div>

        {/* Cards Grid (Student & Teacher) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl">
          
          {/* ================= STUDENT CARD ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="bg-[#f0f6ff] rounded-3xl shadow-xl shadow-blue-500/5 border border-blue-100/80 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden group"
          >
            {/* Student Image */}
            <div className="w-full sm:w-[220px] h-[320px] flex-shrink-0 relative overflow-hidden rounded-2xl bg-[#f0f6ff]">
              <img
                src={studentImg}
                alt="Student Portal"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Student Details */}
            <div className="flex flex-col p-4 flex-grow text-left w-full">
              {/* Icon Badge */}
              <div className="w-11 h-11 rounded-2xl bg-[#007bff] flex items-center justify-center text-white shadow-md shadow-blue-500/30 mb-3">
                <GraduationCap className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-extrabold text-[#0f172a]">
                I'm a <span className="text-[#007bff]">Student</span>
              </h3>

              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                Join your classes, connect with teachers and access your learning materials.
              </p>

              {/* Student Login Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="mt-5 relative overflow-hidden group/btn w-full inline-flex items-center justify-center gap-2 bg-[#007bff] text-white font-semibold text-sm py-3 px-5 rounded-xl shadow-md shadow-blue-500/20 cursor-pointer"
              >
                <span className="absolute inset-0 bg-[#0056d2] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
                <User className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Student Login</span>
              </motion.button>

              {/* Create Account Link */}
              <p className="mt-3 text-xs text-slate-500 text-center sm:text-left">
                New student?{" "}
                <a href="#register" className="text-[#007bff] font-bold hover:underline">
                  Create an account
                </a>
              </p>
            </div>
          </motion.div>


          {/* ================= TEACHER CARD ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="bg-[#fffbeb] rounded-3xl  shadow-xl shadow-amber-500/5 border border-amber-100/80 flex flex-col sm:flex-row items-center gap-6 relative overflow-hidden group"
          >
            {/* Teacher Image */}
            <div className="w-full sm:w-[220px] h-[320px] flex-shrink-0 relative overflow-hidden rounded-2xl bg-[#fffbeb]">
              <img
                src={teacherImg}
                alt="Teacher Portal"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Teacher Details */}
            <div className="flex flex-col p-4 flex-grow text-left w-full">
              {/* Icon Badge */}
              <div className="w-11 h-11 rounded-2xl bg-[#ffbc00] flex items-center justify-center text-slate-900 shadow-md shadow-amber-400/30 mb-3">
                <Presentation className="w-6 h-6 stroke-[2.2]" />
              </div>

              <h3 className="text-2xl font-extrabold text-[#0f172a]">
                I'm a <span className="text-[#ff9900]">Teacher</span>
              </h3>

              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                Access your classes, manage learning materials and teach interactive live lessons.
              </p>

              {/* Teacher Login Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="mt-5 relative overflow-hidden group/btn w-full inline-flex items-center justify-center gap-2 bg-[#ffbc00] hover:bg-[#ffb000] text-slate-900 font-bold text-sm py-3 px-5 rounded-xl shadow-md shadow-amber-500/20 cursor-pointer"
              >
                <span className="absolute inset-0 bg-[#f5ae00] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out" />
                <User className="w-4 h-4 relative z-10 stroke-[2.5]" />
                <span className="relative z-10">Teacher Login</span>
              </motion.button>

              {/* Create Account Link */}
              <p className="mt-3 text-xs text-slate-500 text-center sm:text-left">
                New teacher?{" "}
                <a href="#register" className="text-[#007bff] font-bold hover:underline">
                  Create an account
                </a>
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}