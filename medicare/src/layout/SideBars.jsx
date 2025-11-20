import { useState } from "react";
import {
  AlertCircle,
  FileText,
  Heart,
  Calendar,
  Phone,
  BellRing,
  Folder,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { icon: AlertCircle, label: "Emergency", path: "/emergency" },
  { icon: FileText, label: "Prescriptions", path: "/prescriptions" },
  { icon: Heart, label: "Medical History", path: "/medical-history" },
  { icon: Calendar, label: "Appointments", path: "/appointments" },
  { icon: Phone, label: "Emergency Contacts", path: "/emergency-contacts" },
  { icon: BellRing, label: "Notifications", path: "/notifications" },
  { icon: Folder, label: "Documentation", path: "/documentation" },
  { icon: User, label: "Profile", path: "/profile" },
];

function SideBars() {
  const [activeIndex, setActiveIndex] = useState(0); // track active menu

  return (
    <div className="w-80 bg-[#1e40af] text-white min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-8">
        <h1 className="text-3xl font-bold">HealthCare</h1>
        <p className="text-blue-200 text-sm mt-1">Patient Portal</p>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-6">
        <p className="text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
          Main Menu
        </p>
        {menuItems.map((item, i) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={i}
              to={item.path}
              onClick={() => setActiveIndex(i)}
              className={`flex items-center gap-4 px-5 py-4 rounded-xl mb-1 transition-all ${
                activeIndex === i
                  ? "bg-white text-blue-800 shadow-lg font-semibold"
                  : "hover:bg-blue-700"
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="text-base">{item.label}</span>
            </NavLink>
          );
        })}

        <p className="text-blue-300 text-xs font-semibold uppercase tracking-wider mt-8 mb-3">
          More
        </p>
        <NavLink
          to="/settings"
          className="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-blue-700 transition-all"
        >
          <Settings className="w-6 h-6" />
          <span className="text-base">Settings</span>
        </NavLink>
      </nav>

      {/* Logout */}
      <div className="p-6 border-t border-blue-700">
        <button className="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-blue-700 transition-all w-full text-left">
          <LogOut className="w-6 h-6" />
          <span className="text-base">Logout</span>
        </button>
      </div>
    </div>
  );
}

export default SideBars;
