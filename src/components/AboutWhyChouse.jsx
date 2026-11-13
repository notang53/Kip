import React from "react";
import { motion } from "framer-motion";
import { Zap, LayoutGrid, Users, ShieldCheck } from "lucide-react";

const whyChooseData = [
  {
    id: 1,
    title: "All-in-One Platform",
    description: "Teach, learn and manage in one place.",
    icon: Zap,
  },
  {
    id: 2,
    title: "Easy to Use",
    description: "A clean, simple and user-friendly experience.",
    icon: LayoutGrid,
  },
  {
    id: 3,
    title: "Built for Everyone",
    description: "Designed for both students and teachers.",
    icon: Users,
  },
  {
    id: 4,
    title: "Reliable & Secure",
    description: "A stable, secure and trusted learning platform.",
    icon: ShieldCheck,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function WhyChooseSection() {
  return (
    <section className="relative w-full py-10 lg:py-18 px-4 sm:px-6 lg:px-10 bg-white overflow-hidden">
   
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* Top Badge: WHY KIPCLASSIN */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e0edff] border border-blue-200/80 shadow-sm mb-5"
        >
          <span className="text-xs font-bold tracking-wider uppercase text-[#007bff]">
            WHY KIPCLASSIN
          </span>
        </motion.div>

        {/* Section Heading with Yellow Sparkle Burst */}
        <div className="relative text-center mb-10 max-w-2xl">
          {/* Top-Right Yellow 3-Line Sparkle Accent */}
          <svg
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 sm:w-9 sm:h-9 absolute -top-5 right-2 sm:-top-6 sm:-right-6 text-[#facc15]"
          >
            <path d="M8 22L16 6" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M17 27L31 14" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M21 35L37 29" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
          </svg>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-[40px] font-bold tracking-tight text-[#01287B] leading-tight"
          >
            Why Choose <span className="text-[#007bff]">KIPClassin?</span>
          </motion.h2>
        </div>

        {/* 4 Cards Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 w-full"
        >
          {whyChooseData.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="relative overflow-hidden group rounded-[25px] p-2 sm:p-4 bg-[#f2f7ff] border border-blue-100/90 shadow-lg shadow-blue-500/5 hover:shadow-xl hover:shadow-blue-500/10 text-center flex flex-col items-center cursor-pointer transition-all duration-300"
              >
                {/* Bottom-to-Top Hover Tint Layer */}
                <span className="absolute inset-0 bg-[#e6f0ff]/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out pointer-events-none" />

                {/* Bottom Accent Line on Hover */}
                <span className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#007bff] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />

                {/* Icon Badge */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.35 }}
                  className="relative z-10 w-12 h-12 flex items-center justify-center text-[#007bff] mb-6"
                >
                  <Icon className={`w-6 h-6 ${item.id === 1 ? "fill-[#ffbc00] text-[#ffbc00]" : "stroke-[2.2]"}`} />
                </motion.div>

                {/* Card Title */}
                <h3 className="relative z-10 text-lg sm:text-[19px] font-bold text-[#01287B] mb-2.5">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="relative z-10 text-slate-600 text-xs sm:text-[13.5px] leading-relaxed max-w-[240px] font-medium">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}