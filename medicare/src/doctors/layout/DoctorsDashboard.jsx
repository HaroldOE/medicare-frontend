import React, { useState } from "react";

// Example icons for dashboard cards
function Frame6() { return <div className="w-6 h-6 bg-blue-400 rounded-full" />; }
function Frame11() { return <div className="w-6 h-6 bg-green-400 rounded-full" />; }
function Frame8() { return <div className="w-6 h-6 bg-yellow-400 rounded-full" />; }
function Frame10() { return <div className="w-6 h-6 bg-red-400 rounded-full" />; }

// Reusable dashboard card
function DashboardCard({ title, value, icon: Icon }) {
  return (
    <div className="bg-white border border-[#827979] rounded-lg p-4 flex items-center justify-between shadow-sm">
      <div>
        <p className="text-[#827979] text-xs font-medium">{title}</p>
        <p className="text-black font-bold text-2xl">{value}</p>
      </div>
      {Icon && <Icon />}
    </div>
  );
}

// Sample recent patients data
const patients = [
  { name: "John Doe", age: 45, condition: "Hypertension", lastVisit: "2 days ago", status: "Stable" },
  { name: "Emily Davis", age: 28, condition: "Asthma", lastVisit: "5 days ago", status: "Stable" },
  { name: "Sarah Johnson", age: 32, condition: "Diabetes Type 2", lastVisit: "1 day ago", status: "Monitoring" },
];

export default function DoctorDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">
      {/* Sidebar (from commented code) */}
      <div className={`bg-[#024f9d] text-white w-64 p-6 transition-all duration-300 ${sidebarOpen ? "block" : "hidden"} md:block`}>
        <h1 className="text-2xl font-bold mb-6">HealthCare</h1>
        <p className="text-sm text-[#c0defa] mb-6">Doctor Portal</p>

        {/* Menu */}
        <nav className="flex flex-col gap-4">
          <button className="text-[#b0d4f6] font-semibold text-sm hover:text-white">Dashboard</button>
          <button className="text-[#c0defa] font-semibold text-sm hover:text-white">My Patients</button>
          <button className="text-[#c0defa] font-semibold text-sm hover:text-white">Consultations</button>
          <button className="text-[#c0defa] font-semibold text-sm hover:text-white">Appointments</button>
          <button className="text-[#c0defa] font-semibold text-sm hover:text-white">Prescription</button>
          <button className="text-[#c0defa] font-semibold text-sm hover:text-white">Analytics</button>
          <button className="text-[#c0defa] font-semibold text-sm hover:text-white">Profile</button>
          <button className="text-[#c0defa] font-semibold text-sm hover:text-white">Documentation</button>
          <button className="text-[#c0defa] font-semibold text-sm hover:text-white">Logout</button>
        </nav>

        {/* Sidebar toggle for mobile */}
        <button
          className="md:hidden mt-6 px-3 py-2 bg-blue-500 text-white rounded"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? "Hide Menu" : "Show Menu"}
        </button>
      </div>

      {/* Main Dashboard Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Doctor Dashboard</h1>
          <p className="text-gray-500 text-sm">
            Welcome back! Here's an overview of your clinic.
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <DashboardCard title="Total Patients" value="248" icon={Frame6} />
          <DashboardCard title="Pending Consultations" value="12" icon={Frame11} />
          <DashboardCard title="Prescriptions" value="37" icon={Frame8} />
          <DashboardCard title="Appointments Today" value="8" icon={Frame10} />
        </div>

        {/* Recent Patients Table */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Patients</h2>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-2 font-medium text-sm text-gray-600 mb-2">
            <p>Name</p>
            <p>Age</p>
            <p>Condition</p>
            <p>Last Visit</p>
            <p>Status</p>
            <p>Action</p>
          </div>
          <div>
            {patients.map((p, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-6 gap-2 items-center bg-[#f9f9f9] p-2 rounded mb-2 hover:bg-[#eaeaea] transition">
                <p>{p.name}</p>
                <p>{p.age}</p>
                <p>{p.condition}</p>
                <p>{p.lastVisit}</p>
                <p className={p.status === "Stable" ? "text-[#1FAB89]" : "text-[#7d0a0a]"}>{p.status}</p>
                <p className="text-[#024f9d] cursor-pointer font-semibold">View</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
