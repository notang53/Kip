import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import DashboardNavbar from "./DashboardNavbar";
import { 
  PlayCircle, 
  ClipboardCheck, 
  BookOpen, 
  TrendingUp, 
  Calendar, 
  Clock, 
  ArrowRight, 
  FileText, 
  Video, 
  FileCheck 
} from "lucide-react";

const StudentDashboard = ({ username = "Alex Student" }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Sidebar Component */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Body */}
      <div className="flex flex-col flex-1 min-w-0">
        <DashboardNavbar userName={username} />

        <main className="flex-1 p-6 sm:p-10 overflow-y-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto space-y-8"
          >
            {/* Greeting Header */}
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                Good Morning, {username} <span className="inline-block animate-bounce">👋</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-500 mt-1">
                Ready to learn something new today?
              </p>
            </motion.div>

            {/* Top 4 Stats Summary Cards */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {/* Card 1 */}
              <motion.div 
                whileHover={{ y: -4, shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05)" }}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex items-center justify-between"
              >
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">My Classes</p>
                  <h3 className="text-3xl font-black text-slate-900 mt-2">4</h3>
                </div>
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 text-blue-600">
                  <PlayCircle className="w-7 h-7" />
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                whileHover={{ y: -4, shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05)" }}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex items-center justify-between"
              >
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Assignments</p>
                  <h3 className="text-3xl font-black text-slate-900 mt-2">12</h3>
                </div>
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-50 text-amber-500">
                  <ClipboardCheck className="w-7 h-7" />
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                whileHover={{ y: -4, shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05)" }}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex items-center justify-between"
              >
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Learning Materials</p>
                  <h3 className="text-3xl font-black text-slate-900 mt-2">28</h3>
                </div>
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600">
                  <BookOpen className="w-7 h-7" />
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div 
                whileHover={{ y: -4, shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05)" }}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex items-center justify-between"
              >
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">My Progress</p>
                  <h3 className="text-3xl font-black text-slate-900 mt-2">85%</h3>
                </div>
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-50 text-purple-600">
                  <TrendingUp className="w-7 h-7" />
                </div>
              </motion.div>
            </motion.div>

            {/* Middle Section: Upcoming Class & My Classes */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Upcoming Class Card (Width: 7 cols) */}
              <motion.div 
                variants={itemVariants}
                className="lg:col-span-7 bg-white rounded-3xl p-7 border border-slate-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 text-blue-600 font-bold text-sm mb-4">
                    <Calendar className="w-5 h-5" />
                    <span>Upcoming Class</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-5 items-center bg-slate-50 rounded-2xl p-4 border border-slate-100">
                    <div className="w-full sm:w-48 h-32 rounded-xl bg-slate-200 overflow-hidden relative shadow-inner">
                      <img 
                        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400" 
                        alt="Live class preview" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 w-full">
                      <h3 className="text-lg font-bold text-slate-900">Math – Live Class</h3>
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mt-2">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        <span>Today, 10:00 AM</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mt-1">
                        <Clock className="w-4 h-4 text-amber-500" />
                        <span>45 Minutes</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <motion.button
                    whileHover={{ scale: 1.01, boxShadow: "0 10px 20px -5px rgba(0, 102, 255, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold shadow-md shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Join Class</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>

              {/* My Classes List Card (Width: 5 cols) */}
              <motion.div 
                variants={itemVariants}
                className="lg:col-span-5 bg-white rounded-3xl p-7 border border-slate-100 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2.5 font-bold text-slate-900">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                      <span>My Classes</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => navigate("/Classes")}
                      className="text-xs font-bold text-blue-600 hover:underline"
                    >
                      View All →
                    </button>
                  </div>

                  <div className="space-y-3">
                    {/* Class Item 1 */}
                    <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/50 transition-colors border border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-sm">
                          √x
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">Mathematics</h4>
                          <p className="text-xs text-slate-500">4 Lessons · 2 Assignments</p>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400">
                        ›
                      </div>
                    </div>

                    {/* Class Item 2 */}
                    <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/50 transition-colors border border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                          ⚗
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">Science</h4>
                          <p className="text-xs text-slate-500">6 Lessons · 3 Assignments</p>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400">
                        ›
                      </div>
                    </div>

                    {/* Class Item 3 */}
                    <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 hover:bg-blue-50/50 transition-colors border border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold text-sm">
                          📖
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-900">English</h4>
                          <p className="text-xs text-slate-500">5 Lessons · 2 Assignments</p>
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400">
                        ›
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>

            {/* Bottom Section: Recent Assignments & Learning Materials */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Recent Assignments (Width: 7 cols) */}
              <motion.div 
                variants={itemVariants}
                className="lg:col-span-7 bg-white rounded-3xl p-7 border border-slate-100 shadow-sm"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5 font-bold text-slate-900">
                    <ClipboardCheck className="w-5 h-5 text-blue-600" />
                    <span>Recent Assignments</span>
                  </div>
                  <button className="text-xs font-bold text-blue-600 hover:underline">View All →</button>
                </div>

                <div className="space-y-3">
                  {/* Assignment 1 */}
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Algebra Practice Set</h4>
                        <p className="text-xs text-slate-500">Due: Tomorrow</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold">
                      Not Started
                    </span>
                  </div>

                  {/* Assignment 2 */}
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <FileCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">Science Lab Report</h4>
                        <p className="text-xs text-slate-500">Due: Nov 5</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-cyan-50 text-cyan-600 text-xs font-bold">
                      In Progress
                    </span>
                  </div>

                  {/* Assignment 3 */}
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">English Essay</h4>
                        <p className="text-xs text-slate-500">Due: Nov 8</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-bold">
                      Not Started
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Learning Materials (Width: 5 cols) */}
              <motion.div 
                variants={itemVariants}
                className="lg:col-span-5 bg-white rounded-3xl p-7 border border-slate-100 shadow-sm"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5 font-bold text-slate-900">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    <span>Learning Materials</span>
                  </div>
                  <button className="text-xs font-bold text-blue-600 hover:underline">View All →</button>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {/* Material 1 */}
                  <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/50 transition-colors border border-slate-100 text-center">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center mb-2">
                      <FileText className="w-5 h-5" />
                    </div>
                    <h5 className="text-xs font-bold text-slate-900">Math Notes</h5>
                    <p className="text-[10px] text-slate-400 mt-0.5">PDF · 2.4 MB</p>
                  </div>

                  {/* Material 2 */}
                  <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/50 transition-colors border border-slate-100 text-center">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-2">
                      <Video className="w-5 h-5" />
                    </div>
                    <h5 className="text-xs font-bold text-slate-900">Science Lecture</h5>
                    <p className="text-[10px] text-slate-400 mt-0.5">Video · 18 min</p>
                  </div>

                  {/* Material 3 */}
                  <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/50 transition-colors border border-slate-100 text-center">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-2">
                      <FileText className="w-5 h-5" />
                    </div>
                    <h5 className="text-xs font-bold text-slate-900">English Guide</h5>
                    <p className="text-[10px] text-slate-400 mt-0.5">PDF · 1.8 MB</p>
                  </div>
                </div>
              </motion.div>

            </div>

          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;