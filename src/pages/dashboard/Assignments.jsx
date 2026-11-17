import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  Calculator,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Clock,
  FileText,
  FlaskConical,
  X,
} from "lucide-react";
import Sidebar from "../../components/Dashboard/Sidebar";
import DashboardNavbar from "../../components/Dashboard/DashboardNavbar";

const initialAssignments = [
  {
    id: 1,
    title: "Algebra Practice Set",
    subject: "Mathematics",
    icon: Calculator,
    dueDate: "2026-11-06T23:59:00",
    dueLabel: "Nov 6, 2026",
    dueTime: "11:59 PM",
    status: "Pending",
    description: "Complete the algebra practice questions and show your working for each answer.",
  },
  {
    id: 2,
    title: "Science Lab Report",
    subject: "Science",
    icon: FlaskConical,
    dueDate: "2026-11-07T17:00:00",
    dueLabel: "Nov 7, 2026",
    dueTime: "05:00 PM",
    status: "Overdue",
    description: "Write up your observations, results, and conclusion from the latest science lab.",
  },
  {
    id: 3,
    title: "English Essay: My Community",
    subject: "English",
    icon: BookOpen,
    dueDate: "2026-11-09T23:59:00",
    dueLabel: "Nov 9, 2026",
    dueTime: "11:59 PM",
    status: "Submitted",
    description: "Write a short essay describing what makes your community special.",
  },
  {
    id: 4,
    title: "Physics Worksheet: Motion",
    subject: "Physics",
    icon: Calculator,
    dueDate: "2026-11-10T16:30:00",
    dueLabel: "Nov 10, 2026",
    dueTime: "04:30 PM",
    status: "Pending",
    description: "Answer the worksheet questions about speed, distance, and motion.",
  },
  {
    id: 5,
    title: "O₂ Chemistry Exercise",
    subject: "Chemistry",
    icon: FlaskConical,
    dueDate: "2026-11-12T18:00:00",
    dueLabel: "Nov 12, 2026",
    dueTime: "06:00 PM",
    status: "Submitted",
    description: "Complete the exercise on oxygen and chemical reactions.",
  },
  {
    id: 6,
    title: "O₂ Chemistry Exercise",
    subject: "Chemistry",
    icon: FlaskConical,
    dueDate: "2026-11-12T18:00:00",
    dueLabel: "Nov 12, 2026",
    dueTime: "06:00 PM",
    status: "Overdue",
    description: "Finish the remaining chemistry review questions.",
  },
];

const statusStyles = {
  Pending: "bg-amber-100 text-amber-700",
  Submitted: "bg-emerald-100 text-emerald-700",
  Overdue: "bg-red-100 text-red-700",
};

const Assignments = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [assignments, setAssignments] = useState(initialAssignments);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("soonest");
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const filteredAssignments = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return assignments
      .filter((assignment) => activeFilter === "All" || assignment.status === activeFilter)
      .filter((assignment) =>
        `${assignment.title} ${assignment.subject}`.toLowerCase().includes(query),
      )
      .sort((first, second) =>
        sortOrder === "soonest"
          ? new Date(first.dueDate) - new Date(second.dueDate)
          : new Date(second.dueDate) - new Date(first.dueDate),
      );
  }, [activeFilter, assignments, searchQuery, sortOrder]);

  const updateSelectedStatus = () => {
    setAssignments((currentAssignments) =>
      currentAssignments.map((assignment) =>
        assignment.id === selectedAssignment.id
          ? { ...assignment, status: "Submitted" }
          : assignment,
      ),
    );
    setSelectedAssignment((currentAssignment) => ({
      ...currentAssignment,
      status: "Submitted",
    }));
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-800">
      <Sidebar activeTab="assignments" />

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

            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">
                  Assignments
                </h1>
                <p className="mt-1 text-sm text-slate-500">
                  View your assigned work and submission deadlines.
                </p>
              </div>

              <label className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 shadow-sm">
                <Calendar className="h-4 w-4" />
                <select
                  aria-label="Sort assignments by due date"
                  value={sortOrder}
                  onChange={(event) => setSortOrder(event.target.value)}
                  className="bg-transparent outline-none"
                >
                  <option value="soonest">Due date: soonest</option>
                  <option value="latest">Due date: latest</option>
                </select>
                <ChevronDown className="h-4 w-4" />
              </label>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                {["All", "Pending", "Submitted", "Overdue"].map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    aria-pressed={activeFilter === filter}
                    className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                      activeFilter === filter
                        ? "bg-blue-600 text-white shadow-sm"
                        : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search assignments..."
                aria-label="Search assignments"
                className="w-full max-w-xs rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] border-collapse text-left">
                  <thead className="bg-slate-50 text-xs font-semibold text-slate-500">
                    <tr>
                      <th className="px-5 py-3">Assignment</th>
                      <th className="px-5 py-3">Subject</th>
                      <th className="px-5 py-3">Due date</th>
                      <th className="px-5 py-3">Due time</th>
                      <th className="px-5 py-3">Status</th>
                      <th className="px-5 py-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredAssignments.map((assignment) => {
                      const AssignmentIcon = assignment.icon;
                      return (
                        <tr key={assignment.id} className="text-sm hover:bg-slate-50/70">
                          <td className="px-5 py-3.5">
                            <div className="flex items-center gap-3">
                              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                                <AssignmentIcon className="h-4 w-4" />
                              </span>
                              <span className="font-semibold text-slate-800">{assignment.title}</span>
                            </div>
                          </td>
                          <td className="px-5 py-3.5 text-slate-500">{assignment.subject}</td>
                          <td className="px-5 py-3.5 text-slate-600">{assignment.dueLabel}</td>
                          <td className="px-5 py-3.5 text-slate-600">{assignment.dueTime}</td>
                          <td className="px-5 py-3.5">
                            <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusStyles[assignment.status]}`}>
                              {assignment.status}
                            </span>
                          </td>
                          <td className="px-5 py-3.5 text-right">
                            <button
                              type="button"
                              onClick={() => setSelectedAssignment(assignment)}
                              className="rounded-lg border border-blue-200 px-4 py-1.5 text-xs font-semibold text-blue-600 transition hover:bg-blue-50"
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                    {filteredAssignments.length === 0 && (
                      <tr>
                        <td colSpan="6" className="px-5 py-12 text-center text-sm text-slate-500">
                          No assignments match your search or filter.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>

      <AnimatePresence>
        {selectedAssignment && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedAssignment(null);
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm"
          >
            <motion.section
              initial={{ opacity: 0, y: 12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="assignment-detail-title"
              className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                    {selectedAssignment.subject} assignment
                  </p>
                  <h2 id="assignment-detail-title" className="mt-1 text-xl font-bold text-slate-900">
                    {selectedAssignment.title}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedAssignment(null)}
                  aria-label="Close assignment details"
                  className="rounded-full p-2 text-slate-500 hover:bg-slate-100"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                {selectedAssignment.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-4 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-slate-400" />
                  Due {selectedAssignment.dueLabel}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-slate-400" />
                  {selectedAssignment.dueTime}
                </span>
                <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[selectedAssignment.status]}`}>
                  {selectedAssignment.status}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedAssignment(null)}
                  className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50"
                >
                  Close
                </button>
                {selectedAssignment.status !== "Submitted" && (
                  <button
                    type="button"
                    onClick={updateSelectedStatus}
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    Mark as submitted
                  </button>
                )}
              </div>
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Assignments;
