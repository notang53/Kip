import React from "react";
import { motion } from "framer-motion";
import { 
  Mail, 
  User, 
  MessageSquare, 
  Headphones, 
  AtSign, 
  PhoneCall, 
  MapPin, 
  Calendar, 
  ChevronRight,
  ArrowRight
} from "lucide-react";

// Bottom banner wali laptop/demo image yahan import karein
import demoLaptopImg from "../assets/images/contact-bookademo-img.png";

const reachOutItems = [
  {
    id: 1,
    title: "Live Support",
    subtitle: "Send a message to our support team.",
    icon: Headphones,
    color: "text-amber-500",
    bg: "bg-amber-50",
    href: "#contact-form",
  },
  {
    id: 2,
    title: "Email Us",
    subtitle: "support@kipclassin.com",
    icon: AtSign,
    color: "text-amber-500",
    bg: "bg-amber-50",
    href: "mailto:support@kipclassin.com",
  },
  {
    id: 3,
    title: "Call Us",
    subtitle: "+1 (800) 123-4567",
    icon: PhoneCall,
    color: "text-amber-500",
    bg: "bg-amber-50",
    href: "tel:+18001234567",
  },
  {
    id: 4,
    title: "Our Location",
    subtitle: "123 Learning Ave, Toronto, ON, Canada",
    icon: MapPin,
    color: "text-amber-500",
    bg: "bg-amber-50",
    href: "https://www.google.com/maps/search/?api=1&query=123+Learning+Ave%2C+Toronto%2C+ON%2C+Canada",
    target: "_blank",
  },
];

export default function ContactFormSection() {
  return (
    <section className="relative w-full py-12 lg:py-20 px-4 sm:px-6 lg:px-10 bg-white overflow-hidden">
      <div className="max-w-[1100px] mx-auto flex flex-col gap-10 lg:gap-12">
        
        {/* ================= TOP GRID: FORM & OTHER WAYS TO REACH US ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 items-stretch">
          
          {/* LEFT SIDE: Send Us a Message Form Card (Col span 7) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-6 bg-gradient-to-br from-[#f6faff] to-[#edf6ff] border border-blue-100/90 rounded-2xl p-5 sm:p-6 shadow-lg shadow-blue-500/5 relative overflow-hidden"
          >
            {/* Form Header */}
            <div className="flex items-center gap-2.5 mb-1">
              <div className="w-7 h-7 text-[#007bff] flex items-center justify-center">
                <Mail className="w-6 h-6 stroke-[2]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#01287B] tracking-tight">
                Send Us a Message
              </h2>
            </div>
            <p className="text-slate-600 text-[11px] sm:text-xs font-medium mb-4 ml-9">
              Fill out the form below and our team will get back  <br /> to you as soon as possible.
            </p>

            {/* Contact Form Fields */}
            <form id="contact-form" onSubmit={(e) => e.preventDefault()} className="space-y-2.5">
              
              {/* Row 1: First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#007bff]">
                  <User className="w-3.5 h-3.5 stroke-[2]" />
                  </span>
                  <input
                    type="text"
                    placeholder="First Name *"
                  className="w-full bg-white border border-blue-100/90 rounded-lg py-2.5 pl-9 pr-3 text-xs text-slate-800 placeholder-slate-500 focus:outline-none focus:border-[#007bff] focus:ring-2 focus:ring-blue-500/20 transition-all shadow-xs"
                    required
                  />
                </div>

                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#007bff]">
                    <User className="w-3.5 h-3.5 stroke-[2]" />
                  </span>
                  <input
                    type="text"
                    placeholder="Last Name *"
                    className="w-full bg-white border border-blue-100/90 rounded-lg py-2.5 pl-9 pr-3 text-xs text-slate-800 placeholder-slate-500 focus:outline-none focus:border-[#007bff] focus:ring-2 focus:ring-blue-500/20 transition-all shadow-xs"
                    required
                  />
                </div>
              </div>

              {/* Row 2: Email Address */}
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#007bff]">
                  <Mail className="w-3.5 h-3.5 stroke-[2]" />
                </span>
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="w-full bg-white border border-blue-100/90 rounded-lg py-2.5 pl-9 pr-3 text-xs text-slate-800 placeholder-slate-500 focus:outline-none focus:border-[#007bff] focus:ring-2 focus:ring-blue-500/20 transition-all shadow-xs"
                  required
                />
              </div>

              {/* Row 3: Subject Dropdown */}
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#007bff]">
                  <MessageSquare className="w-3.5 h-3.5 stroke-[2]" />
                </span>
                <select
                  className="w-full bg-white border border-blue-100/90 rounded-lg py-2.5 pl-9 pr-8 text-xs text-slate-700 focus:outline-none focus:border-[#007bff] focus:ring-2 focus:ring-blue-500/20 transition-all shadow-xs appearance-none cursor-pointer"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>Subject *</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing & Membership</option>
                  <option value="partnership">School Partnership</option>
                </select>
                <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-[#007bff] text-[10px]">
                  ▼
                </span>
              </div>

              {/* Row 4: Your Message */}
              <div className="relative">
                <span className="absolute top-3 left-3 pointer-events-none text-[#007bff]">
                  <MessageSquare className="w-3.5 h-3.5 stroke-[2]" />
                </span>
                <textarea
                  rows={2}
                  placeholder="Your Message *"
                  className="w-full bg-white border border-blue-100/90 rounded-lg py-2.5 pl-9 pr-3 text-xs text-slate-800 placeholder-slate-500 focus:outline-none focus:border-[#007bff] focus:ring-2 focus:ring-blue-500/20 transition-all shadow-xs resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="relative overflow-hidden group w-full inline-flex items-center justify-center gap-1.5 bg-gradient-to-b from-[#05c8ff] to-[#0757f5] hover:from-[#00b8f5] hover:to-[#0348d5] text-white font-bold text-[11px] py-2.5 rounded-full shadow-md shadow-blue-500/20 cursor-pointer transition-colors"
              >
                <span className="relative z-10">Send Message</span>
                <ArrowRight className="w-3 h-3 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
               </motion.button>

            </form>
          </motion.div>


          {/* RIGHT SIDE: Other Ways to Reach Us (Col span 5) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-[#01287B] tracking-tight mb-3">
              Other Ways to Reach Us
            </h2>

            <div className="flex flex-col gap-2">
              {reachOutItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    target={item.target}
                    rel={item.target === "_blank" ? "noreferrer" : undefined}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + idx * 0.08, duration: 0.6 }}
                    whileHover={{ x: 6, backgroundColor: "#f2f7ff" }}
                    className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-[#f4f9ff] to-[#edf6ff] border border-blue-100/70 shadow-sm transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      {/* Icon Container with Amber/Yellow accent */}
                      <div className="w-8 h-8 text-amber-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 stroke-[2.2]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#01287B] group-hover:text-[#007bff] transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-slate-600 text-[10px] sm:text-[11px] font-medium">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Right Arrow Badge */}
                    <div className="w-6 h-6 rounded-full bg-blue-100/70 text-[#007bff] flex items-center justify-center flex-shrink-0 group-hover:bg-[#007bff] group-hover:text-white transition-colors">
                      <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

        </div>


        {/* ================= BOTTOM BANNER: BOOK A QUICK DEMO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="relative w-full sm:h-30 h-full rounded-2xl bg-gradient-to-r from-[#f3f8ff] to-[#f3f8ff]/20 border border-blue-100/20 p-5 sm:p-6 lg:px-8 shadow-lg shadow-blue-500/5 flex flex-col lg:flex-row items-center justify-between gap-5"
        >
          {/* Left Content */}
          <div className="flex flex-col items-start max-w-lg">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 text-[#007bff] flex items-center justify-center">
                <Calendar className="w-7 h-7 stroke-[2.2]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#01287B] tracking-tight">
                Book a Quick Demo
              </h3>
            </div>
            <p className="text-slate-600 text-[9px] sm:text-xs font-medium mb-2 leading-relaxed">
              Want to see KIPClassin in action? Schedule a free demo with our team.
            </p>

           
          </div>

           <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="relative group inline-flex items-center gap-2 bg-gradient-to-r from-[#008dff] to-[#007bff] hover:from-[#007bff] hover:to-[#0056d2] text-white font-bold text-[11px] px-4 py-2 rounded-full shadow-md shadow-blue-500/20 cursor-pointer transition-colors"
            >
              <span className="relative z-10">Schedule a Demo</span>
              <ArrowRight className="w-3 h-3 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>

          {/* Right Side Illustration Image */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-[340px] lg:max-w-[400px] flex-shrink-0"
          >
            <img
              src={demoLaptopImg}
              alt="Book a Quick Demo Laptop & Graduation Cap"
              className="w-full h-auto object-contain drop-shadow-lg"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}