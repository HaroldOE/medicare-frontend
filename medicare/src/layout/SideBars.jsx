import { useState } from "react";
import { AlertCircle, FileText, Heart, Calendar, Phone, BellRing, Folder, User, Settings, LogOut } from "lucide-react";

const menuItems = [
  //   { icon: Home, label: "Dashboard", active: true },
  { icon: AlertCircle, label: "Emergency" },
  { icon: FileText, label: "Prescriptions" },
  { icon: Heart, label: "Medical History" },
  { icon: Calendar, label: "Appointments" },
  { icon: Phone, label: "Emergency Contacts" },
  { icon: BellRing, label: "Notifications" },
  { icon: Folder, label: "Documentation" },
  { icon: User, label: "Profile" },
];

function SideBars() {
  return (
    <div className="w-80 bg-[#1e40af] text-white min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-8">
        <h1 className="text-3xl font-bold">HealthCare</h1>
        <p className="text-blue-200 text-sm mt-1">Patient Portal</p>
      </div>

      <nav className="flex-1 px-6">
        <p className="text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
          Main Menu
        </p>
        {menuItems.map((item, i) => (
          <a
            key={i}
            href="#"
            className={`flex items-center gap-4 px-5 py-4 rounded-xl mb-1 transition-all ${
              item.active
                ? "bg-white text-blue-800 shadow-lg font-semibold"
                : "hover:bg-blue-700"
            }`}
          >
            <item.icon className="w-6 h-6" />
            <span className="text-base">{item.label}</span>
          </a>
        ))}

        <p className="text-blue-300 text-xs font-semibold uppercase tracking-wider mt-8 mb-3">
          More
        </p>
        <a
          href="#"
          className="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-blue-700 transition-all"
        >
          <Settings className="w-6 h-6" />
          <span className="text-base">Settings</span>
        </a>
      </nav>

      {/* Logout */}
      <div className="p-6 border-t border-blue-700">
        <a
          href="#"
          className="flex items-center gap-4 px-5 py-4 rounded-xl hover:bg-blue-700 transition-all"
        >
          <LogOut className="w-6 h-6" />
          <span className="text-base">Logout</span>
        </a>
      </div>
    </div>
  );
}

export default SideBars;
