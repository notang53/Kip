import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Lock, Eye, EyeOff, ArrowRight, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
// Apni background image ko yahan import karein (path apne folder ke mutabiq adjust karein)
import bgImage from "../assets/images/login-bg.png";

const StudentLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/StudentDashboard", { state: { username: formData.username } });
  };

  // Framer Motion Variants
  const cardVariants = {
    hidden: { opacity: 0, x: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen pt-20 w-full overflow-hidden flex items-center justify-center md:justify-end px-6 sm:px-12 lg:px-24 font-sans select-none">
      {/* Background Image with subtle slow zoom animation */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Subtle Dark/Warm Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/15 z-0" />

      {/* Bottom-Left Decorative Geometric Shapes (Yellow & Blue Slanted Bars) */}
      <motion.div
        initial={{ opacity: 0, x: -80, y: 40 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="pointer-events-none absolute bottom-0 left-0 z-10 w-[340px] sm:w-[440px] h-[140px]"
      >
        {/* Yellow Accent Shape */}
        <div
          className="absolute bottom-7 -left-6 w-[210px] sm:w-[250px] h-[55px] bg-[#FFC107] rounded-tr-3xl shadow-md"
          style={{ transform: "rotate(10deg)" }}
        />
        {/* Blue Main Bottom Bar */}
        <div
          className="absolute -bottom-8 -left-8 w-[340px] sm:w-[430px] h-[75px] bg-gradient-to-r from-[#1D4ED8] to-[#0284C7] shadow-lg"
          style={{ transform: "rotate(8deg)" }}
        />
      </motion.div>

      {/* Glassmorphism Login Card */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.45)",
          borderColor: "rgba(255, 255, 255, 0.45)",
        }}
        transition={{ duration: 0.3 }}
        className="relative z-20 w-full max-w-[430px] rounded-[20px] bg-white/10 backdrop-blur-md border border-white/30 p-8 sm:p-10 shadow-2xl text-white"
      >
        {/* Logo Section */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2.5 mb-5"
        >
          <motion.div
            whileHover={{ rotate: -10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 shadow-md"
          >
            <GraduationCap className="w-6 h-6 text-yellow-300" />
          </motion.div>
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-slate-900">KIP</span>
            <span className="text-[#0066FF]">Classin</span>
          </div>
        </motion.div>

        {/* Heading & Subtitle */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-white drop-shadow-sm"
        >
          Student Login
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-2.5 text-sm sm:text-[15px] text-white/90 leading-relaxed"
        >
          Access your classes, assignments, and learning materials.
        </motion.p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-7 space-y-4">
          {/* Username Input */}
          <motion.div variants={itemVariants} className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/80 transition-colors duration-200 group-focus-within:text-white" />
            <input
              type="text"
              required
              placeholder="Username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              className="w-full rounded-full bg-white/25 hover:bg-white/30 focus:bg-white/35 border border-white/40 focus:border-white py-3.5 pl-12 pr-5 text-sm text-white placeholder-white/85 outline-none transition-all duration-300 shadow-inner"
            />
          </motion.div>

          {/* Password Input */}
          <motion.div variants={itemVariants} className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/80 transition-colors duration-200 group-focus-within:text-white" />
            <input
              type={showPassword ? "text" : "password"}
              required
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full rounded-full bg-white/25 hover:bg-white/30 focus:bg-white/35 border border-white/40 focus:border-white py-3.5 pl-12 pr-12 text-sm text-white placeholder-white/85 outline-none transition-all duration-300 shadow-inner"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle Password Visibility"
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </motion.div>
          {/* Submit Button with Hover & Tap Motion */}
          <motion.div variants={itemVariants} className="pt-2">
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 28px -4px rgba(0, 114, 255, 0.75)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group relative w-full overflow-hidden rounded-full bg-gradient-to-r from-[#0082FF] via-[#0066FF] to-[#0052D4] py-3.5 px-6 font-semibold text-white shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              {/* Glossy Shine Sweep Effect on Hover */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent" />

              <span className="relative z-10 text-sm sm:text-base">
                Login to Dashboard
              </span>
              <ArrowRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default StudentLogin;