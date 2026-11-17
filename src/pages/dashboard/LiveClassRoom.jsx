import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  BookOpen,
  Camera,
  CameraOff,
  ChevronLeft,
  ChevronRight,
  Maximize,
  MessageCircle,
  Mic,
  MicOff,
  MonitorUp,
  MoreHorizontal,
  PhoneOff,
  Send,
  Users,
  Video,
} from "lucide-react";
import Sidebar from "../../components/Dashboard/Sidebar";
import teacherPhoto from "../../assets/images/user-3.png";
import teacherPhotoFemale from "../../assets/images/teacher.png";
import studentPhoto from "../../assets/images/user-1.png";

const initialMessages = [
  { id: 1, author: "Teacher", text: "Good morning everyone! Can you see my screen?", private: false },
  { id: 2, author: "You", text: "Yes, I can see it.", private: false },
  { id: 3, author: "Teacher", text: "Great. Let's start today's lesson.", private: false },
  { id: 4, author: "You", text: "Could you explain the last step again?", private: true },
];

const LiveClassRoom = ({ classItem, username, onLeave }) => {
  const [seconds, setSeconds] = useState(0);
  const [slide, setSlide] = useState(1);
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);
  const [chatMode, setChatMode] = useState("Class Chat");
  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const [notice, setNotice] = useState("");
  const [confirmLeave, setConfirmLeave] = useState(false);
  const chatInputRef = useRef(null);
  const teacherPhotoSrc = classItem.teacher.startsWith("Ms.") ? teacherPhotoFemale : teacherPhoto;
  const visibleMessages = messages.filter((message) => message.private === (chatMode === "Private"));
  const duration = `${String(Math.floor(seconds / 3600)).padStart(2, "0")}:${String(
    Math.floor((seconds % 3600) / 60),
  ).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;

  useEffect(() => {
    const timerId = window.setInterval(() => setSeconds((value) => value + 1), 1000);
    return () => window.clearInterval(timerId);
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    const text = messageText.trim();
    if (!text) return;

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: Date.now(),
        author: "You",
        text,
        private: chatMode === "Private",
      },
    ]);
    setMessageText("");
  };

  return (
    <div className="flex min-h-screen bg-slate-100 font-sans text-slate-800">
      <Sidebar activeTab="classes" />

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex min-h-16 flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onLeave}
              aria-label="Return to class details"
              className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <h1 className="text-sm font-bold text-slate-900 sm:text-base">
              {classItem.course} – Live Class
            </h1>
            <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700">
              Live
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
            <span>{duration}</span>
            <span className="inline-flex items-center gap-1">
              <Users className="h-4 w-4" /> 24
            </span>
            <button type="button" aria-label="Full screen" className="rounded-lg p-2 hover:bg-slate-100">
              <Maximize className="h-4 w-4" />
            </button>
          </div>
        </header>

        <main className="grid flex-1 gap-3 p-3 xl:min-h-0 xl:grid-cols-[minmax(0,1.15fr)_minmax(150px,0.55fr)_minmax(270px,0.8fr)]">
          <section className="flex min-h-[360px] flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm xl:min-h-0">
            <div className="mb-3 flex items-center justify-between gap-2">
              <span className="rounded-full bg-slate-700 px-3 py-1 text-[10px] font-semibold text-white">
                {classItem.teacher} (Presenter)
              </span>
              <button type="button" aria-label="Whiteboard options" className="rounded-lg p-2 text-slate-500 hover:bg-slate-100">
                <Maximize className="h-4 w-4" />
              </button>
            </div>

            <div className="flex flex-1 flex-col items-center justify-center px-2 text-center">
              <h2 className="text-2xl font-extrabold text-blue-950 sm:text-3xl">
                {classItem.topic}
              </h2>
              {classItem.course === "Mathematics" ? (
                <p className="mt-8 text-xl text-slate-800 sm:text-2xl">
                  (a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup>
                </p>
              ) : (
                <p className="mt-8 max-w-lg text-base leading-7 text-slate-600">
                  Today we are learning about {classItem.topic.toLowerCase()} in {classItem.course}.
                </p>
              )}
              <div className="mt-5 h-1 w-3/4 rounded-full bg-blue-500" />
            </div>

            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setSlide((value) => Math.max(1, value - 1))}
                aria-label="Previous slide"
                className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:bg-slate-50"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="text-xs font-medium text-slate-500">{slide} / 12</span>
              <button
                type="button"
                onClick={() => setSlide((value) => Math.min(12, value + 1))}
                aria-label="Next slide"
                className="rounded-lg border border-slate-200 p-2 text-slate-600 hover:bg-slate-50"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-3 xl:grid-cols-1 xl:grid-rows-2">
            <div className="relative min-h-[170px] overflow-hidden rounded-2xl bg-slate-900">
              <img src={teacherPhotoSrc} alt={classItem.teacher} className="h-full w-full object-cover" />
              <span className="absolute bottom-2 left-2 rounded-md bg-slate-900/75 px-2 py-1 text-[10px] font-medium text-white">
                {classItem.teacher}
              </span>
            </div>
            <div className="relative min-h-[170px] overflow-hidden rounded-2xl bg-slate-900">
              {cameraOn ? (
                <img src={studentPhoto} alt={username} className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center text-4xl font-bold text-white">
                  {username.charAt(0).toUpperCase()}
                </div>
              )}
              <span className="absolute bottom-2 left-2 rounded-md bg-slate-900/75 px-2 py-1 text-[10px] font-medium text-white">
                {username} (You)
              </span>
            </div>
          </section>

          <section className="flex min-h-[360px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm xl:min-h-0">
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
              <h2 className="flex items-center gap-2 text-sm font-bold text-slate-800">
                <MessageCircle className="h-4 w-4 text-blue-600" /> Messages
              </h2>
              <span className="text-xs text-slate-400">24</span>
            </div>
            <div className="flex gap-2 border-b border-slate-100 px-3 py-2">
              {["Class Chat", "Private"].map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setChatMode(mode)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    chatMode === mode ? "bg-blue-50 text-blue-700" : "text-slate-500 hover:bg-slate-50"
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
            <div className="flex-1 space-y-3 overflow-y-auto p-3">
              {visibleMessages.map((message) => (
                <div key={message.id} className={`flex ${message.author === "You" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[90%] rounded-2xl px-3 py-2 text-xs ${
                    message.author === "You" ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-700"
                  }`}>
                    <p className="mb-1 text-[10px] font-bold opacity-70">{message.author}</p>
                    {message.text}
                  </div>
                </div>
              ))}
              {visibleMessages.length === 0 && (
                <p className="pt-6 text-center text-xs text-slate-400">No private messages yet.</p>
              )}
            </div>
            <form onSubmit={sendMessage} className="flex gap-2 border-t border-slate-100 p-3">
              <input
                ref={chatInputRef}
                id="class-chat-input"
                value={messageText}
                onChange={(event) => setMessageText(event.target.value)}
                placeholder="Type a message..."
                aria-label="Type a message"
                className="min-w-0 flex-1 rounded-xl bg-slate-100 px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-blue-200"
              />
              <button type="submit" aria-label="Send message" className="rounded-xl bg-blue-600 p-2 text-white hover:bg-blue-700">
                <Send className="h-4 w-4" />
              </button>
            </form>
          </section>
        </main>

        <footer className="flex flex-wrap items-center justify-center gap-2 border-t border-slate-200 bg-white px-3 py-3 sm:gap-4">
          <button
            type="button"
            onClick={() => {
              setMicOn((value) => !value);
              setNotice(micOn ? "Microphone muted" : "Microphone unmuted");
            }}
            aria-label={micOn ? "Mute microphone" : "Unmute microphone"}
            className={`rounded-xl p-3 ${micOn ? "bg-slate-100 text-slate-700" : "bg-red-100 text-red-600"}`}
          >
            {micOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
          </button>
          <button
            type="button"
            onClick={() => {
              setCameraOn((value) => !value);
              setNotice(cameraOn ? "Camera turned off" : "Camera turned on");
            }}
            aria-label={cameraOn ? "Turn camera off" : "Turn camera on"}
            className={`rounded-xl p-3 ${cameraOn ? "bg-slate-100 text-slate-700" : "bg-red-100 text-red-600"}`}
          >
            {cameraOn ? <Camera className="h-5 w-5" /> : <CameraOff className="h-5 w-5" />}
          </button>
          <button
            type="button"
            onClick={() => setNotice("Screen sharing is not connected in this demo.")}
            aria-label="Share screen"
            className="rounded-xl p-3 text-slate-600 hover:bg-slate-100"
          >
            <MonitorUp className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setNotice("Whiteboard is already open.")}
            aria-label="Open whiteboard"
            className="rounded-xl p-3 text-slate-600 hover:bg-slate-100"
          >
            <BookOpen className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => chatInputRef.current?.focus()}
            aria-label="Focus chat"
            className="rounded-xl p-3 text-slate-600 hover:bg-slate-100"
          >
            <MessageCircle className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setNotice("There are 24 participants in this class.")}
            aria-label="Show participants"
            className="rounded-xl p-3 text-slate-600 hover:bg-slate-100"
          >
            <Users className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setNotice("More class options will be available soon.")}
            aria-label="More options"
            className="rounded-xl p-3 text-slate-600 hover:bg-slate-100"
          >
            <MoreHorizontal className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setConfirmLeave(true)}
            className="rounded-full bg-red-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-600"
          >
            <span className="inline-flex items-center gap-2"><PhoneOff className="h-4 w-4" /> Leave Class</span>
          </button>
          {notice && (
            <p role="status" className="basis-full text-center text-xs text-slate-500">{notice}</p>
          )}
        </footer>

        <AnimatePresence>
          {confirmLeave && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) setConfirmLeave(false);
              }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/35 p-4 backdrop-blur-[2px]"
            >
              <motion.section
                initial={{ opacity: 0, y: 12, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                role="dialog"
                aria-modal="true"
                aria-labelledby="leave-class-title"
                className="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-2xl"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600">
                  <PhoneOff className="h-5 w-5" />
                </span>
                <h2 id="leave-class-title" className="mt-3 text-lg font-bold text-slate-900">
                  Leave this class?
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  You can rejoin the class later from My Classes.
                </p>
                <div className="mt-5 flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setConfirmLeave(false)}
                    className="rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={onLeave}
                    className="rounded-full bg-red-500 px-5 py-2 text-sm font-semibold text-white hover:bg-red-600"
                  >
                    Leave
                  </button>
                </div>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LiveClassRoom;
