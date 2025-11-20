import { useState } from "react";
import { Bell, Calendar, Phone, Heart, Settings, FileText } from "lucide-react";

function PatientDashboard() {
  const [showEmergency, setShowEmergency] = useState(true); // Example useState

  return (
    <div className="flex-1 bg-gray-50 p-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900">Welcome back, Patient</h1>
        <p className="text-gray-600 text-lg mt-2">Manage your health effortlessly</p>
      </div>

      {/* Emergency Banner */}
      {showEmergency && (
        <div className="bg-red-600 text-white rounded-3xl p-10 mb-10 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-6">
            <div className="bg-red-700 p-4 rounded-full">
              <Bell className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">Need Emergency Care?</h3>
              <p className="text-red-100">Get immediate assistance from our doctors</p>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              className="bg-white text-red-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition"
              onClick={() => alert("Calling emergency...")}
            >
              Call Now
            </button>
            <button
              className="bg-gray-200 text-red-600 px-6 py-4 rounded-xl font-bold text-lg hover:bg-gray-300 transition"
              onClick={() => setShowEmergency(false)}
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-red-600 text-white rounded-3xl p-8 shadow-md">
          <Bell className="w-12 h-12 mb-4" />
          <h3 className="text-2xl font-bold">Emergency Consultation</h3>
          <p className="mt-3 opacity-90">Urgent medical help</p>
        </div>

        <div className="bg-blue-600 text-white rounded-3xl p-8 shadow-md">
          <FileText className="w-12 h-12 mb-4" />
          <h3 className="text-2xl font-bold">Prescription Refill</h3>
          <p className="mt-3 opacity-90">Manage medications</p>
        </div>

        <div className="bg-green-600 text-white rounded-3xl p-8 shadow-md">
          <Heart className="w-12 h-12 mb-4" />
          <h3 className="text-2xl font-bold">Medical History</h3>
          <p className="mt-3 opacity-90">View health records</p>
        </div>

        <div className="bg-amber-500 text-white rounded-3xl p-8 shadow-md">
          <Calendar className="w-12 h-12 mb-4" />
          <h3 className="text-2xl font-bold">Appointments</h3>
          <p className="mt-3 opacity-90">Schedule visits</p>
        </div>

        <div className="bg-amber-600 text-white rounded-3xl p-8 shadow-md">
          <Phone className="w-12 h-12 mb-4" />
          <h3 className="text-2xl font-bold">Emergency Contacts</h3>
          <p className="mt-3 opacity-90">Manage contacts</p>
        </div>

        <div className="bg-gray-200 rounded-3xl p-8 shadow-md">
          <Settings className="w-12 h-12 mb-4 text-gray-700" />
          <h3 className="text-2xl font-bold text-gray-800">Settings</h3>
          <p className="mt-3 text-gray-600">Account settings</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Recent Activity</h2>
        <div className="bg-white rounded-3xl shadow-md overflow-hidden">
          {[
            {
              title: "Prescription Refilled",
              detail: "Medication: Aspirin 100mg",
              time: "2 hours ago",
            },
            {
              title: "Appointment Scheduled",
              detail: "Dr. Smith - General Checkup",
              time: "1 day ago",
            },
            {
              title: "Medical Record Updated",
              detail: "Lab results added",
              time: "3 days ago",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`p-6 border-b border-gray-200 ${
                i === 2 ? "" : ""
              }`}
            >
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold text-lg">{item.title}</p>
                  <p className="text-gray-600">{item.detail}</p>
                </div>
                <span className="text-gray-500">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;
