import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar";
import DashboardNavbar from "../../components/Dashboard/DashboardNavbar";
import { classesData } from "./classesData";
import { 
  BookOpen, 
  Search, 
  Calendar, 
  User, 
  Video, 
  Layers, 
  ChevronDown
} from "lucide-react";

const MyClasses = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [activeTab, setActiveTab] = useState("classes");
  const [filterType, setFilterType] = useState("All Classes");
  const [searchQuery, setSearchQuery] = useState("");
  const [scheduleFilter, setScheduleFilter] = useState("All");
  const [teacherFilter, setTeacherFilter] = useState("All");
  const [courseFilter, setCourseFilter] = useState("All");

  // Filter logic
  const filteredClasses = classesData.filter((item) => {
    const matchesTab = filterType === "All Classes" || item.category === filterType;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.teacher.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSchedule = scheduleFilter === "All" || item.status === scheduleFilter;
    const matchesTeacher = teacherFilter === "All" || item.teacher === teacherFilter;
    const matchesCourse = courseFilter === "All" || item.course === courseFilter;
    return matchesTab && matchesSearch && matchesSchedule && matchesTeacher && matchesCourse;
  });

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  };

  const openClass = (classId) => {
    navigate(`/Classes/${classId}`, { state });
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-800 select-none">
      {/* Sidebar Component */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Body */}
      <div className="flex flex-col flex-1 min-w-0">
        <DashboardNavbar userName={state?.username || "Alex Student"} />

        <main className="flex-1 p-6 sm:p-10 overflow-y-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto space-y-8"
          >
            {/* Page Header */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-end justify-between gap-4">
              <div>
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                My Classes
              </h1>
              <p className="text-sm sm:text-base text-slate-500 mt-1">
                View and continue your enrolled classes.
              </p>
              </div>
              <button
                type="button"
                onClick={() => navigate("/StudentDashboard", { state })}
                className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Back to Dashboard
              </button>
            </motion.div>

            {/* Filter Pills Tabs (All Classes, In Progress, Completed) */}
            <motion.div variants={itemVariants} className="flex items-center gap-3">
              {["All Classes", "In Progress", "Completed"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilterType(tab)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    filterType === tab
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md shadow-blue-500/25"
                      : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </motion.div>

            {/* Filters Bar (Search, Date/Time, Teacher, Course) */}
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-100 shadow-sm flex flex-wrap items-center gap-4"
            >
              {/* Search Class Input */}
              <div className="relative flex-1 min-w-[240px]">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-400">
                  <Search className="h-4 w-4" />
                </span>
                <input
                  type="text"
                  placeholder="Search Class..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-2xl bg-slate-50/80 py-3 pl-11 pr-4 text-sm text-slate-800 placeholder-slate-400 outline-none border border-slate-200/80 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all"
                />
              </div>

              {/* Date/Time Filter Button */}
              <label className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-sm font-medium text-slate-600">
                <Calendar className="w-4 h-4 text-slate-500" />
                <select
                  aria-label="Schedule filter"
                  value={scheduleFilter}
                  onChange={(event) => setScheduleFilter(event.target.value)}
                  className="bg-transparent outline-none"
                >
                  <option value="All">All schedules</option>
                  <option value="Instant">Instant</option>
                  <option value="Scheduled">Scheduled</option>
                </select>
              </label>

              {/* Teacher Filter Dropdown */}
              <label className="flex items-center justify-between gap-4 px-4 py-3 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-sm font-medium text-slate-600 min-w-[140px]">
                <span className="flex items-center gap-2.5">
                  <User className="w-4 h-4 text-slate-500" />
                  <select
                    aria-label="Teacher filter"
                    value={teacherFilter}
                    onChange={(event) => setTeacherFilter(event.target.value)}
                    className="max-w-28 bg-transparent outline-none"
                  >
                    <option value="All">All Teachers</option>
                    {[...new Set(classesData.map((item) => item.teacher))].map((teacher) => (
                      <option key={teacher} value={teacher}>{teacher}</option>
                    ))}
                  </select>
                </span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </label>

              {/* Course Filter Dropdown */}
              <label className="flex items-center justify-between gap-4 px-4 py-3 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-sm font-medium text-slate-600 min-w-[140px]">
                <span className="flex items-center gap-2.5">
                  <BookOpen className="w-4 h-4 text-slate-500" />
                  <select
                    aria-label="Course filter"
                    value={courseFilter}
                    onChange={(event) => setCourseFilter(event.target.value)}
                    className="bg-transparent outline-none"
                  >
                    <option value="All">All Courses</option>
                    {[...new Set(classesData.map((item) => item.course))].map((course) => (
                      <option key={course} value={course}>{course}</option>
                    ))}
                  </select>
                </span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </label>
            </motion.div>

            {/* Classes List Cards */}
            <div className="space-y-4">
              <AnimatePresence>
                {filteredClasses.length > 0 ? (
                  filteredClasses.map((cls) => (
                    <motion.div
                      key={cls.id}
                      variants={itemVariants}
                      whileHover={{ y: -2, shadow: "0 15px 25px -5px rgba(0, 0, 0, 0.04)" }}
                      className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-100 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all"
                    >
                      {/* Left: Icon & Title Info */}
                      <button
                        type="button"
                        onClick={() => openClass(cls.id)}
                        className="flex items-center gap-4 text-left"
                      >
                        <div className={`w-14 h-14 rounded-2xl ${cls.iconBg} flex items-center justify-center font-black text-lg shadow-inner`}>
                          {cls.iconText}
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-slate-900">
                            {cls.course}
                          </h3>
                          <p className="text-xs text-slate-500">{cls.title}</p>
                          <div className="flex flex-wrap items-center gap-3 mt-1.5">
                            {/* Status Badge */}
                            <span className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold ${
                              cls.status === "Instant" 
                                ? "bg-emerald-50 text-emerald-600" 
                                : "bg-blue-50 text-blue-600"
                            }`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${cls.status === "Instant" ? "bg-emerald-500" : "bg-blue-500"}`} />
                              {cls.status}
                            </span>

                            {/* Teacher Name */}
                            <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                              <User className="w-3.5 h-3.5 text-slate-400" />
                              <span>{cls.teacher}</span>
                            </div>
                          </div>
                            </div>
                       </button>

                      {/* Middle: Materials & Scheduled Counts */}
                      <div className="flex items-center gap-8 self-center md:self-auto border-y md:border-y-0 border-slate-100 py-3 md:py-0 w-full md:w-auto justify-around md:justify-start">
                        {/* Materials */}
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center">
                            <Layers className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900">{cls.materialsCount}</h4>
                            <p className="text-xs text-slate-400">Materials</p>
                          </div>
                        </div>

                        {/* Scheduled */}
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center">
                            <Calendar className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900">{cls.scheduledCount}</h4>
                            <p className="text-xs text-slate-400">Scheduled</p>
                          </div>
                        </div>
                      </div>

                      {/* Right: Enter Class Button */}
                      <div className="w-full md:w-auto">
                        <motion.button
                          type="button"
                          onClick={() => openClass(cls.id)}
                          whileHover={{ scale: 1.03, boxShadow: "0 10px 20px -5px rgba(0, 102, 255, 0.4)" }}
                          whileTap={{ scale: 0.97 }}
                          className="w-full md:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold text-sm shadow-md shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer"
                        >
                          <Video className="w-4 h-4" />
                          <span>Enter Class</span>
                        </motion.button>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-16 bg-white rounded-3xl border border-slate-100 shadow-sm"
                  >
                    <p className="text-slate-400 font-medium">No classes found matching your search.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default MyClasses;