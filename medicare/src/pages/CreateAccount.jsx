import { useState } from "react";

function CreateAccount() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-lg overflow-hidden max-w-4xl w-full">
        {/* LEFT SECTION */}
        <div className="p-10 flex flex-col justify-center">
          {/* Logo */}
          <img
            src="/mnt/data/Create Account[1].png"
            alt="Logo"
            className="w-28 mb-6"
          />

          <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
          <p className="text-gray-500 mb-6">Join our healthcare platform</p>

          {/* Email */}
          <label className="text-gray-700 font-medium">Email</label>
          <div className="mt-1 mb-4">
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <label className="text-gray-700 font-medium">Password</label>
          <div className="mt-1 mb-4">
            <input
              type="password"
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Confirm Password */}
          <label className="text-gray-700 font-medium">Confirm Password</label>
          <div className="mt-1 mb-6">
            <input
              type="password"
              name="confirmPassword"
              placeholder="********"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Create Account Button */}
          <button className="w-full bg-blue-700 text-white p-3 rounded-lg font-semibold hover:bg-blue-800 transition">
            Create Account
          </button>

          <p className="text-sm text-gray-500 mt-4">
            Already have an account?
            <a href="#" className="text-blue-700 font-semibold ml-1">
              Sign in
            </a>
          </p>

          <a href="#" className="text-xs text-blue-600 mt-3">
            Back to Home
          </a>
        </div>

        {/* RIGHT SECTION - IMAGE */}
        <div className="hidden md:flex items-center justify-center bg-gray-100">
          <img
            src="/mnt/data/Create Account[1].png"
            alt="Healthcare"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
export default CreateAccount;
