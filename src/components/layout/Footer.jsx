import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Send, 
  GraduationCap, 
  UserCheck, 
  UserPlus, 
  HelpCircle 
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

// Footer top wave background image yahan import karein
import footerWaveBg from "../../assets/images/Footer-bg.png";
// Brand Logo yahan import karein
import Logo from "../../assets/images/f-logo.png";

export default function Footer() {
  const [email, setEmail] = useState("");

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed successfully with: ${email}`);
    setEmail("");
  };

  return (
    <footer className="relative w-full text-white pt-10 sm:pt-26 pb-6 overflow-hidden">
      
      {/* Top Wave/Curve Background Image */}
      <div
        style={{
          backgroundImage: `url(${footerWaveBg})`,
        }}
        className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-top pointer-events-none"
      />

      {/* Main Footer Content Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 lg:gap-8 border-b border-blue-900/60">
          
          {/* Column 1: Brand Info & Socials (Col span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 flex flex-col items-start"
          >
            {/* Imported Logo */}
            <Link to="/" onClick={scrollToTop} aria-label="KIPClassin home" className="mb-2 p-2">
              <img src={Logo} alt="KIPClassin Logo" className="h-10 w-auto" />
            </Link>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm mb-6 font-medium">
              A modern online learning platform that helps students and teachers connect, teach and learn together.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3">
              {[FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href="#social"
                  whileHover={{ scale: 1.15, backgroundColor: "#007bff" }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>


          {/* Column 2: Quick Links (Col span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col"
          >
            <h4 className="text-base font-bold text-white mb-4 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Features", href: "/feature" },
                { label: "How It Works", href: "/HowItWork" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    onClick={scrollToTop}
                    className="text-slate-300 hover:text-[#007bff] text-sm font-medium transition-colors duration-200 inline-block hover:translate-x-1 transform transition-transform"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>


          {/* Column 3: For Users (Col span 3) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3 flex flex-col"
          >
            <h4 className="text-base font-bold text-white mb-4 tracking-wide">
              For Users
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Student Login", icon: GraduationCap, href: "#student-login" },
                { label: "Teacher Login", icon: UserCheck, href: "#teacher-login" },
                { label: "Create an Account", icon: UserPlus, href: "#register" },
                { label: "Help & Support", icon: HelpCircle, href: "/contact" },
              ].map((link, idx) => {
                const Icon = link.icon;
                return (
                  <li key={idx}>
                    <Link
                      to={link.href}
                      onClick={link.href.startsWith("/") ? scrollToTop : undefined}
                      className="group flex items-center gap-2.5 text-slate-300 hover:text-[#ffbc00] text-sm font-medium transition-colors duration-200"
                    >
                      <Icon className="w-4 h-4 text-[#ffbc00] group-hover:scale-110 transition-transform" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>


          {/* Column 4: Company & Newsletter Box (Col span 3) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3 flex flex-col"
          >
            <h4 className="text-base font-bold text-white mb-4 tracking-wide">
              Company
            </h4>
            <ul className="space-y-2.5 mb-6">
              {["Privacy Policy", "Terms of Service"].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-slate-300 hover:text-[#007bff] text-sm font-medium transition-colors duration-200 inline-block hover:translate-x-1 transform transition-transform"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Stay in the Loop Newsletter Card */}
            <div className="bg-[#0b2859] border border-blue-800/80 p-4 rounded-2xl shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4 text-[#ffbc00]" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Stay in the Loop</span>
              </div>
              <p className="text-[11px] text-slate-300 mb-3 leading-relaxed">
                Get updates, new features and learning tips from KIPClassin.
              </p>
              
              <form onSubmit={handleSubmit} className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-white text-slate-900 text-xs rounded-xl py-2.5 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#007bff]"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1 w-7 h-7 rounded-lg bg-[#ffbc00] hover:bg-[#f5b200] text-slate-900 flex items-center justify-center shadow-sm cursor-pointer transition-colors"
                >
                  <Send className="w-3.5 h-3.5 stroke-[2.5]" />
                </motion.button>
              </form>
            </div>

          </motion.div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400">
          <p>© 2026 KIPClassin. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms</a>
            <a href="#security" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>

      </div>
    </footer>
  );
}