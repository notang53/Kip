import React from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  BookOpen, 
  ClipboardList, 
  Library, 
  TrendingUp, 
  User, 
  Bell, 
  Headphones, 
  ArrowRight,
  GraduationCap 
} from "lucide-react";

const Sidebar = ({ activeTab = "dashboard", setActiveTab }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "classes", label: "My Classes", icon: BookOpen },
    { id: "assignments", label: "Assignments", icon: ClipboardList },
    { id: "materials", label: "Learning Materials", icon: Library },
    { id: "progress", label: "My Progress", icon: TrendingUp },
    { id: "profile", label: "My Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-72 bg-white border-r border-slate-200/80 h-screen sticky top-0 px-6 py-7 justify-between select-none z-40">
      <div>
        {/* Brand Logo */}
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 shadow-md shadow-blue-500/20">
            <GraduationCap className="w-6 h-6 text-yellow-300" />
          </div>
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-slate-900">KIP</span>
            <span className="text-[#0066FF]">Classin</span>
          </div>
        </div>

        {/* Navigation Menu Links */}
        <nav className="space-y-1.5">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            const handleSelect = () => {
              if (item.id === "dashboard") {
                navigate("/StudentDashboard", { state: location.state });
              } else if (item.id === "classes") {
                navigate("/Classes", { state: location.state });
              } else if (item.id === "assignments") {
                navigate("/Assignments", { state: location.state });
              } else if (item.id === "progress") {
                navigate("/Progress", { state: location.state });
              } else {
                setActiveTab?.(item.id);
              }
            };

            return (
              <motion.button
                key={item.id}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSelect}
                className={`relative flex items-center gap-3.5 w-full px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/25"
                    : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-slate-500"}`} />
                <span>{item.label}</span>
              </motion.button>
            );
          })}
        </nav>
      </div>

      {/* Bottom "Need Help?" Widget */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-blue-50/80 to-blue-100/50 border border-blue-100 p-5 shadow-sm">
        <div className="flex items-center justify-center w-10 h-10 rounded-2xl bg-blue-600 text-white mb-3 shadow-md shadow-blue-500/30">
          <Headphones className="w-5 h-5" />
        </div>
        <h4 className="text-sm font-bold text-slate-900">Need Help?</h4>
        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
          Contact your teacher for support.
        </p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
          className="mt-4 flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
        >
          <span>Get Support</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </motion.button>
      </div>
    </aside>
  );
};

export default Sidebar;