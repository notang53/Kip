import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HelpCircle, 
  ChevronDown, 
  BookOpen, 
  User, 
  Video, 
  Laptop, 
  Calendar, 
  CreditCard, 
  Headphones 
} from "lucide-react";

// Section background image yahan import karein (agar zaroorat ho)
import faqBg from "../assets/images/faq-bg.png";
// Left side text ke neche wali illustration/image yahan import karein
import faqIllustrationImg from "../assets/images/faq-left.png";

const faqData = [
  {
    id: 1,
    question: "What is KIPClassin?",
    answer: "KIPClassin is an online learning platform that helps students and teachers connect, conduct live classes, share materials and collaborate in a virtual classroom.",
    icon: BookOpen,
  },
  {
    id: 2,
    question: "How do I receive my login details?",
    answer: "Your login credentials are provided by your institution or administrator upon registration. You can use them to access your student or teacher portal directly.",
    icon: User,
  },
  {
    id: 3,
    question: "Can I use the platform on a phone or tablet?",
    answer: "Yes! KIPClassin is fully responsive and optimized for mobile phones, tablets, laptops, and desktop computers so you can learn on the go.",
    icon: Video,
  },
  {
    id: 4,
    question: "Do I need to download an application?",
    answer: "No download is strictly required for basic use; you can access all features directly through your web browser. However, dedicated companion apps are also available.",
    icon: Laptop,
  },
  {
    id: 5,
    question: "What should I do if my microphone is not working?",
    answer: "Check your browser permissions to ensure microphone access is allowed for KIPClassin. You can also test your audio settings in the device configuration menu before joining a live session.",
    icon: Calendar,
  },
  {
    id: 6,
    question: "Where can I find the learning materials?",
    answer: "All shared documents, presentations, and lecture recordings are stored securely in your dashboard under the 'Learning Materials' or course library section.",
    icon: CreditCard,
  },
  {
    id: 7,
    question: "Who should I contact for technical support?",
    answer: "If you encounter any issues, you can reach out to our 24/7 support team via the 'Help & Support' section in your portal or contact your school coordinator.",
    icon: Headphones,
  },
];

export default function FaqSection() {
  // Default expanded item is id: 1 (first FAQ)
  const [openId, setOpenId] = useState(1);

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      style={{
        backgroundImage: `url(${faqBg})`,
      }}
      className="relative w-full py-10 lg:py-18 bg-no-repeat bg-cover bg-center overflow-hidden bg-[#f8fbff]"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          
          {/* ================= LEFT SIDE: Heading & Illustration ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            {/* Top Badge: FAQ */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#e0edff] border border-blue-200/80 shadow-sm mb-6">
              <HelpCircle className="w-4 h-4 text-[#007bff]" />
              <span className="text-xs font-bold tracking-wider uppercase text-[#0f172a]">
                FAQ
              </span>
            </div>

            {/* Main Heading with Yellow Sparkle Burst & Curved Underline */}
            <div className="relative mb-4">
              {/* Top-Right Yellow 3-Line Sparkle Accent */}
              <svg
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 sm:w-9 sm:h-9 absolute -top-5 right-6 sm:-top-6 sm:right-10 text-[#facc15]"
              >
                <path d="M8 22L16 6" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M17 27L31 14" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M21 35L37 29" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              </svg>

              <h2 className="text-2xl md:text-3xl lg:text-[44px] font-bold tracking-tight text-[#0f172a] leading-tight">
                Frequently{" "}
                <span className="relative inline-block text-[#007bff]">
                  Asked Questions
                  {/* Yellow Curved Underline */}
                  <svg
                    viewBox="0 0 240 18"
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
                      d="M3 14C70 4 165 3 237 11"
                      stroke="currentColor"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h2>
            </div>

            {/* Subtitle */}
            <p className="text-slate-600 text-xs sm:text-sm font-sm mb-4 max-w-md">
              Find quick answers to common questions about KIPClassin[cite: 14].
            </p>

            {/* Left Side Bottom Image (Graduation cap + speech bubble illustration) */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-[300px] mx-auto lg:mx-0 mt-7"
            >
              <img
                src={faqIllustrationImg}
                alt="FAQ Support Illustration"
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </motion.div>
          </motion.div>


          {/* ================= RIGHT SIDE: FAQ Accordion List ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-4 w-full"
          >
            {faqData.map((item, index) => {
              const isOpen = openId === item.id;
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  className={`rounded-xl sm:rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-[#edf5ff] border-blue-300 shadow-lg shadow-blue-500/10"
                      : "bg-white hover:bg-slate-50/80 border-blue-100/90 shadow-sm"
                  }`}
                >
                  {/* Accordion Header Button */}
                  <button
                    onClick={() => toggleFaq(item.id)}
                    className="w-full flex items-center justify-between p-2 sm:p-3 text-left cursor-pointer focus:outline-none"
                  >
                    <div className="flex items-center gap-2.5 sm:gap-4 pr-3">
                      {/* Left Icon Badge */}
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                          isOpen
                            ? "bg-[#007bff] text-white shadow-md shadow-blue-500/30"
                            : "bg-blue-50 text-[#007bff]"
                        }`}
                      >
                        <Icon className="w-5 h-5 stroke-[2.2]" />
                      </div>

                      {/* Question Title */}
                      <span
                        className={`text-xs sm:text-sm font-semibold transition-colors ${
                          isOpen ? "text-[#007bff]" : "text-[#0f172a]"
                        }`}
                      >
                        {item.question}
                      </span>
                    </div>

                    {/* Toggle Arrow / Circle Icon */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                        isOpen
                          ? "bg-[#007bff] text-white shadow-sm"
                          : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                    </motion.div>
                  </button>

                  {/* Accordion Expandable Answer Body */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 sm:px-6 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-blue-200/40 ml-14 sm:ml-16 pr-6">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}