import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  CalendarCheck2,
  CheckCircle2,
  Clock3,
  GraduationCap,
  TrendingUp,
  X,
} from "lucide-react";
import Sidebar from "../../components/Dashboard/Sidebar";
import DashboardNavbar from "../../components/Dashboard/DashboardNavbar";

const subjectProgress = [
  { subject: "Mathematics", percent: 90, completed: 9, total: 10, icon: "√x", color: "bg-purple-500", iconColor: "bg-purple-100 text-purple-600" },
  { subject: "Science", percent: 80, completed: 8, total: 10, icon: "⚗", color: "bg-emerald-500", iconColor: "bg-emerald-100 text-emerald-600" },
  { subject: "English", percent: 90, completed: 9, total: 10, icon: "A", color: "bg-amber-500", iconColor: "bg-amber-100 text-amber-600" },
  { subject: "Physics", percent: 75, completed: 6, total: 8, icon: "⚛", color: "bg-violet-500", iconColor: "bg-violet-100 text-violet-600" },
];

const attendanceRecords = [
  { subject: "Mathematics", attended: 9, total: 10 },
  { subject: "Science", attended: 8, total: 9 },
  { subject: "English", attended: 7, total: 8 },
  { subject: "Physics", attended: 6, total: 7 },
];

const Progress = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [activeTab, setActiveTab] = useState("Progress");
  const [selectedSubject, setSelectedSubject] = useState(null);
  const attendancePercent = Math.round(
    (attendanceRecords.reduce((sum, record) => sum + record.attended, 0) /
      attendanceRecords.reduce((sum, record) => sum + record.total, 0)) * 100,
  );

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-800">
      <Sidebar activeTab="progress" />

      <div className="flex min-w-0 flex-1 flex-col">
        <DashboardNavbar userName={state?.username || "Alex Student"} />

        <main className="flex-1 overflow-y-auto p-5 sm:p-8">
          <div className="mx-auto max-w-7xl">
            <button
              type="button"
              onClick={() => navigate("/StudentDashboard", { state })}
              className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-blue-600"
            >
              <ArrowLeft className="h-4 w-4" />
              Dashboard
            </button>

            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">My Progress</h1>
              <p className="mt-1 text-sm text-slate-500">
                See how you&apos;re doing across your courses.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <article className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Classes</p>
                  <p className="mt-2 text-2xl font-extrabold text-slate-900">3 / 4</p>
                  <p className="mt-1 text-xs text-slate-500">Active this term</p>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <GraduationCap className="h-5 w-5" />
                </span>
              </article>
              <article className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Lessons completed</p>
                  <p className="mt-2 text-2xl font-extrabold text-slate-900">28</p>
                  <p className="mt-1 text-xs text-slate-500">Across all subjects</p>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
              </article>
              <article className="flex items-center justify-between rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Overall progress</p>
                  <p className="mt-2 text-2xl font-extrabold text-slate-900">85%</p>
                  <p className="mt-1 text-xs text-slate-500">Keep up the great work</p>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                  <TrendingUp className="h-5 w-5" />
                </span>
              </article>
            </div>

            <div className="mt-6 flex items-center justify-between border-b border-slate-200">
              <div className="flex gap-2">
                {["Progress", "Attendance"].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    aria-pressed={activeTab === tab}
                    className={`rounded-t-xl px-4 py-2.5 text-sm font-semibold transition ${
                      activeTab === tab
                        ? "bg-blue-600 text-white"
                        : "text-slate-500 hover:bg-white hover:text-slate-800"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {activeTab === "Progress" ? (
              <section className="mt-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Progress by Subject</h2>
                    <p className="mt-1 text-xs text-slate-500">Completed lessons in each subject.</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedSubject("all")}
                    className="text-xs font-semibold text-blue-600 hover:underline"
                  >
                    View Details <span aria-hidden="true">→</span>
                  </button>
                </div>

                <div className="space-y-5">
                  {subjectProgress.map((item) => (
                    <button
                      key={item.subject}
                      type="button"
                      onClick={() => setSelectedSubject(item.subject)}
                      className="grid w-full grid-cols-[36px_minmax(90px,150px)_1fr_42px] items-center gap-3 text-left sm:grid-cols-[40px_150px_1fr_48px]"
                    >
                      <span className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold ${item.iconColor}`}>
                        {item.icon}
                      </span>
                      <span className="truncate text-xs font-medium text-slate-600">{item.subject}</span>
                      <span className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                        <motion.span
                          initial={{ width: 0 }}
                          animate={{ width: `${item.percent}%` }}
                          transition={{ duration: 0.6 }}
                          className={`block h-full rounded-full ${item.color}`}
                        />
                      </span>
                      <span className="text-right text-xs font-semibold text-slate-700">{item.percent}%</span>
                    </button>
                  ))}
                </div>
              </section>
            ) : (
              <section className="mt-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Attendance</h2>
                    <p className="mt-1 text-xs text-slate-500">Your attendance by subject.</p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                    {attendancePercent}% overall
                  </span>
                </div>
                <div className="mt-5 divide-y divide-slate-100">
                  {attendanceRecords.map((record) => {
                    const percent = Math.round((record.attended / record.total) * 100);
                    return (
                      <div key={record.subject} className="flex items-center gap-3 py-4">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                          <CalendarCheck2 className="h-4 w-4" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="flex justify-between gap-2">
                            <span className="text-sm font-semibold text-slate-700">{record.subject}</span>
                            <span className="text-xs font-semibold text-slate-600">{percent}%</span>
                          </div>
                          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                            <div className="h-full rounded-full bg-blue-500" style={{ width: `${percent}%` }} />
                          </div>
                        </div>
                        <span className="hidden items-center gap-1 text-xs text-slate-400 sm:inline-flex">
                          <Clock3 className="h-3.5 w-3.5" />
                          {record.attended}/{record.total}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}
          </div>
        </main>
      </div>

      <AnimatePresence>
        {selectedSubject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedSubject(null);
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm"
          >
            <motion.section
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="progress-detail-title"
              className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 id="progress-detail-title" className="text-xl font-bold text-slate-900">
                    {selectedSubject === "all" ? "Progress Details" : `${selectedSubject} Progress`}
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">Completed lessons by subject</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedSubject(null)}
                  aria-label="Close progress details"
                  className="rounded-full p-2 text-slate-500 hover:bg-slate-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-5 space-y-4">
                {subjectProgress
                  .filter((item) => selectedSubject === "all" || item.subject === selectedSubject)
                  .map((item) => (
                    <div key={item.subject}>
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-slate-700">{item.subject}</span>
                        <span className="font-bold text-slate-800">{item.completed}/{item.total} lessons</span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                        <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.percent}%` }} />
                      </div>
                    </div>
                  ))}
              </div>
              <button
                type="button"
                onClick={() => setSelectedSubject(null)}
                className="mt-6 w-full rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Close
              </button>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Progress;
