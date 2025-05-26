import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { User, Shield, Eye, EyeOff } from "lucide-react";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [role, setRole] = useState("user"); // 'user' or 'admin'
  const [showPassword, setShowPassword] = useState(false); // Show/hide password

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (role === "user") {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser && storedUser.email === email && storedUser.password === password) {
        login();
        navigate("/home");
      } else {
        setError("Invalid user credentials.");
      }
    } else if (role === "admin") {
      const adminEmail = "admin@gmail.com";
      const adminPassword = "admin123";

      if (email === adminEmail && password === adminPassword) {
        login();
        navigate("/admin-dashboard");
      } else {
        setError("Invalid admin credentials.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white rounded shadow">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {role === "user" ? "User Login" : "Admin Login"}
        </h2>

        {/* Toggle Role Switch */}
        <div className="flex justify-center items-center mb-6">
          <span className="text-sm font-medium mr-3">{role === "user" ? "User" : "Admin"}</span>
          <button
            type="button"
            onClick={() => setRole(role === "user" ? "admin" : "user")}
            className={`relative inline-flex items-center w-14 h-8 rounded-full transition-colors duration-300 ${
              role === "admin" ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            <span
              className={`transform transition-transform duration-300 absolute left-1 top-1 w-6 h-6 bg-white rounded-full flex items-center justify-center ${
                role === "admin" ? "translate-x-6" : "translate-x-0"
              }`}
            >
              {role === "admin" ? <Shield size={16} /> : <User size={16} />}
            </span>
          </button>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-600 text-center mb-2">{error}</p>}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 rounded border"
          />

          {/* Password Field with Show/Hide Icon */}
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              className="w-full px-4 py-2 rounded border pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-2.5 text-gray-600"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            Log In
          </button>
        </form>

        {/* Signup Link for Users */}
        {role === "user" && (
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">Sign Up</Link>
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;
