import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { User, Menu, X } from "lucide-react";
import Logo from "../../assets/images/logo-1.png";

const navLinks = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About", href: "/about" },
  { id: "features", label: "Features", href: "/feature" },
  { id: "how-it-works", label: "How It Works", href: "/HowItWork" },
  { id: "contact", label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [hoveredTab, setHoveredTab] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Current URL path get karne ke liye
  const location = useLocation();

  return (
    <motion.header
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-50 w-full"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* 1. Left: Brand Logo wrapped in Link to Home */}
        <Link to="/" className="flex-shrink-0 focus:outline-none">
          <img src={Logo} alt="Logo" className="h-12 w-auto" />
        </Link>

        {/* 2. Center: Desktop Navigation Links */}
        <nav
          onMouseLeave={() => setHoveredTab(null)}
          className="hidden lg:flex items-center gap-3"
        >
          {navLinks.map((link) => {
            // Current route check karein
            const isActive = location.pathname === link.href;
            const isHovered = hoveredTab === link.id;

            return (
              <Link
                key={link.id}
                to={link.href}
                onMouseEnter={() => setHoveredTab(link.id)}
                className={`relative px-4 py-2 rounded-xl text-[13px] font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-[#007bff]"
                    : "text-[#0f172a] hover:text-[#007bff]"
                }`}
              >
                {/* Active Sliding Pill Background */}
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    className="absolute inset-0 bg-[#dbeafe] rounded-xl -z-10"
                  />
                )}

                {/* Subtle Hover Pill Background */}
                {isHovered && !isActive && (
                  <motion.span
                    layoutId="hoverNavPill"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.18 }}
                    className="absolute inset-0 bg-blue-50/80 rounded-xl -z-20"
                  />
                )}

                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* 3. Right: Desktop Login Button + Mobile/Tablet Toggle */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Login CTA Button (Hidden on mobile/tablet, visible on lg+) */}
          <Link to="/login" className="hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="relative overflow-hidden group flex items-center gap-2 bg-[#007bff] text-white font-semibold text-[15px] px-6 py-2.5 rounded-xl shadow-md shadow-blue-500/20 cursor-pointer"
            >
              {/* Bottom-to-top hover fill layer */}
              <span className="absolute inset-0 bg-[#0056d2] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />

              <User className="w-4 h-4 relative z-10 stroke-[2.3]" />
              <span className="relative z-10">Login</span>
            </motion.button>
          </Link>

          {/* Hamburger Menu Toggle Button (Visible on sm & md, hidden on lg+) */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="lg:hidden p-2.5 rounded-xl text-[#0f172a] bg-white hover:bg-slate-100 border border-slate-200/80 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-[#007bff]" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Responsive Mobile & Tablet Menu Drawer (sm & md) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-lg border-t border-slate-200/70 shadow-lg"
          >
            <div className="px-4 sm:px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.href;
                return (
                  <motion.div
                    key={link.id}
                    initial={{ x: -16, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                        isActive
                          ? "bg-[#dbeafe] text-[#007bff]"
                          : "text-[#0f172a] hover:bg-slate-100/80 hover:text-[#007bff]"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#007bff]" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Login Button added inside Mobile Menu Drawer */}
              <motion.div
                initial={{ x: -16, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-2 mt-1 border-t border-slate-100"
              >
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <motion.button
                    whileTap={{ scale: 0.96 }}
                    className="w-full flex items-center justify-center gap-2 bg-[#007bff] text-white font-semibold py-3 rounded-xl shadow-md shadow-blue-500/20 cursor-pointer"
                  >
                    <User className="w-4 h-4 stroke-[2.3]" />
                    <span>Login</span>
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}