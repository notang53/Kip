import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, BookOpen, Calendar, Clock, NotebookPen, User, Video, X } from "lucide-react";
import Sidebar from "../../components/Dashboard/Sidebar";
import DashboardNavbar from "../../components/Dashboard/DashboardNavbar";
import LiveClassRoom from "./LiveClassRoom";
import { classesData } from "./classesData";

const SubjectClass = () => {
  const { classId } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [activeTab, setActiveTab] = useState("Overview");
  const [showJoinConfirmation, setShowJoinConfirmation] = useState(false);
  const [isInClass, setIsInClass] = useState(false);
  const classItem = classesData.find((item) => item.id === classId);
  const username = state?.username || "Alex Student";

  if (classItem && isInClass) {
    return (
      <LiveClassRoom
        classItem={classItem}
        username={username}
        onLeave={() => setIsInClass(false)}
      />
    );
  }

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-800">
      <Sidebar activeTab="classes" />

      <div className="flex min-w-0 flex-1 flex-col">
        <DashboardNavbar userName={username} />

        <main className="flex-1 overflow-y-auto p-5 sm:p-8">
          <div className="mx-auto max-w-7xl space-y-5">
            <button
              type="button"
              onClick={() => navigate("/Classes", { state })}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-blue-600"
            >
              <ArrowLeft className="h-4 w-4" />
              My Classes
            </button>

            {classItem ? (
              <>
                <section className="flex flex-wrap items-center gap-4 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm sm:p-6">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-xl font-bold ${classItem.iconBg}`}>
                    {classItem.iconText}
                  </div>
                  <div className="min-w-[220px] flex-1">
                    <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
                      {classItem.course}
                    </h1>
                    <p className="mt-1 text-sm text-slate-500">{classItem.title}</p>
                  </div>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-slate-600">
                    <span className="inline-flex items-center gap-1.5">
                      <User className="h-4 w-4 text-slate-400" />
                      {classItem.teacher}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-slate-400" />
                      {classItem.days}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-slate-400" />
                      {classItem.time}
                    </span>
                  </div>
                </section>

                <div className="flex gap-2 border-b border-slate-200">
                  {["Overview", "Notes"].map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      aria-pressed={activeTab === tab}
                      className={`rounded-t-xl px-5 py-3 text-sm font-semibold transition ${
                        activeTab === tab
                          ? "bg-blue-600 text-white"
                          : "text-slate-500 hover:bg-white hover:text-slate-800"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                {activeTab === "Overview" ? (
                  <div className="grid gap-5 lg:grid-cols-2">
                    <section className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                      <h2 className="text-lg font-bold text-slate-900">Next Class</h2>
                      <div className="mt-4 space-y-3 text-sm text-slate-600">
                        <p className="flex items-center gap-3 border-b border-slate-100 pb-3">
                          <Calendar className="h-4 w-4 text-slate-400" />
                          {classItem.nextClassDate}
                        </p>
                        <p className="flex items-center gap-3 border-b border-slate-100 pb-3">
                          <Clock className="h-4 w-4 text-slate-400" />
                          {classItem.time}
                        </p>
                        <p className="flex items-center gap-3">
                          <BookOpen className="h-4 w-4 text-slate-400" />
                          Topic: {classItem.topic}
                        </p>
                      </div>
                    </section>

                    <section className="flex flex-col items-start justify-center rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                          <Video className="h-5 w-5" />
                        </span>
                        <h2 className="text-lg font-bold text-slate-900">Join Live Class</h2>
                      </div>
                      <p className="mt-3 text-sm text-slate-500">
                        Join this subject's live session when your teacher makes it available.
                      </p>
                      <button
                        type="button"
                        onClick={() => setShowJoinConfirmation(true)}
                        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
                      >
                        <Video className="h-4 w-4" />
                        Join Class
                      </button>
                    </section>
                  </div>
                ) : (
                  <section className="space-y-4">
                    {classItem.notes.map((note) => (
                      <article
                        key={note.title}
                        className="flex gap-4 rounded-3xl border border-slate-100 bg-white p-5 shadow-sm"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                          <NotebookPen className="h-5 w-5" />
                        </span>
                        <div>
                          <h2 className="font-bold text-slate-900">{note.title}</h2>
                          <p className="mt-1 text-sm leading-6 text-slate-500">{note.content}</p>
                        </div>
                      </article>
                    ))}
                  </section>
                )}
              </>
            ) : (
              <section className="rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-sm">
                <h1 className="text-xl font-bold text-slate-900">Class not found</h1>
                <p className="mt-2 text-sm text-slate-500">
                  This class may have been removed from your schedule.
                </p>
                <button
                  type="button"
                  onClick={() => navigate("/Classes", { state })}
                  className="mt-5 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Back to My Classes
                </button>
              </section>
            )}
          </div>
        </main>
      </div>

      <AnimatePresence>
        {showJoinConfirmation && classItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setShowJoinConfirmation(false);
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/30 p-4 backdrop-blur-[2px]"
          >
            <motion.section
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="join-class-title"
              className="relative w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setShowJoinConfirmation(false)}
                aria-label="Close dialog"
                className="absolute right-3 top-3 rounded-full p-1.5 text-slate-400 hover:bg-slate-100"
              >
                <X className="h-4 w-4" />
              </button>
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Video className="h-6 w-6" />
              </span>
              <h2 id="join-class-title" className="mt-3 text-lg font-bold text-slate-900">
                Join {classItem.course} Class?
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                You are about to join the live class with {classItem.teacher}.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 rounded-xl bg-slate-50 px-3 py-2.5 text-[10px] font-medium text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" /> {classItem.nextClassDate}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {classItem.time}
                </span>
              </div>
              <div className="mt-5 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowJoinConfirmation(false)}
                  className="rounded-full border border-slate-200 px-5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowJoinConfirmation(false);
                    setIsInClass(true);
                  }}
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-xs font-semibold text-white hover:bg-blue-700"
                >
                  <Video className="h-3.5 w-3.5" />
                  Join Class
                </button>
              </div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SubjectClass;
