import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, LockKeyhole, Mail, UserRound, X } from "lucide-react";

export default function AuthModal({ mode, onModeChange, onClose }) {
  const [notice, setNotice] = useState("");
  const isOpen = mode !== null;
  const isSignUp = mode === "signup";

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotice(mode);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/60 p-4 backdrop-blur-sm"
        >
          <motion.section
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="auth-modal-title"
            className="relative my-auto w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-7 pr-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#007bff]">
                {isSignUp ? (
                  <UserRound className="h-6 w-6" />
                ) : (
                  <LockKeyhole className="h-6 w-6" />
                )}
              </div>
              <h2
                id="auth-modal-title"
                className="text-2xl font-bold tracking-tight text-slate-900"
              >
                {isSignUp ? "Create your account" : "Welcome back"}
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                {isSignUp
                  ? "Sign up to get started with KIPClassin."
                  : "Sign in to continue to KIPClassin."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <label className="block">
                  <span className="mb-1.5 block text-sm font-semibold text-slate-700">
                    Full name
                  </span>
                  <span className="relative block">
                    <UserRound className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      placeholder="Your name"
                      className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#007bff] focus:ring-4 focus:ring-blue-100"
                    />
                  </span>
                </label>
              )}

              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Email address
                </span>
                <span className="relative block">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#007bff] focus:ring-4 focus:ring-blue-100"
                  />
                </span>
              </label>

              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-slate-700">
                  Password
                </span>
                <span className="relative block">
                  <LockKeyhole className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    name="password"
                    type="password"
                    autoComplete={isSignUp ? "new-password" : "current-password"}
                    minLength={isSignUp ? 8 : undefined}
                    required
                    placeholder={isSignUp ? "At least 8 characters" : "Enter your password"}
                    className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#007bff] focus:ring-4 focus:ring-blue-100"
                  />
                </span>
              </label>

              {notice === mode && (
                <p role="status" className="rounded-xl bg-amber-50 px-3.5 py-3 text-sm text-amber-800">
                  This form is not connected to an account service, so your details were not submitted.
                </p>
              )}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#007bff] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-[#0056d2] focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                {isSignUp ? "Create account" : "Sign in"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-600">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                type="button"
                onClick={() => onModeChange(isSignUp ? "login" : "signup")}
                className="font-semibold text-[#007bff] hover:underline"
              >
                {isSignUp ? "Sign in" : "Create an account"}
              </button>
            </p>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
