import React from "react";
import { motion } from "framer-motion";
import { Bell, Search, User } from "lucide-react";

const DashboardNavbar = ({ userName = "Alex Student" }) => {
  return (
    <header className="sticky top-0 z-30 flex h-20 w-full items-center justify-between border-b border-slate-200/80 bg-white/80 px-6 sm:px-10 backdrop-blur-md">
      {/* Global Search Bar */}
      <div className="relative w-full max-w-md">
        <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
          <Search className="h-4 w-4" />
        </span>
        <input
          type="text"
          placeholder="Search your classes, materials, or assignments..."
          className="w-full rounded-full bg-slate-100/80 py-3 pl-11 pr-4 text-sm text-slate-800 placeholder-slate-400 outline-none border border-transparent focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all shadow-inner"
        />
      </div>

      {/* Right Controls: Notifications & User Profile */}
      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" />
          <span className="absolute top-3 right-3 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white animate-pulse" />
        </motion.button>

        {/* User Profile Pill */}
        <div className="flex items-center gap-3 pl-2 border-l border-slate-200">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 text-white shadow-md shadow-blue-500/20">
            <User className="h-5 w-5" />
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-sm font-bold text-slate-800 leading-tight">{userName}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardNavbar;