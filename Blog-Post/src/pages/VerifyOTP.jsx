import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

function VerifyOTP() {
  const { login } = useContext(AuthContext);
  const [otpInput, setOtpInput] = useState("");
  const navigate = useNavigate();

  const email = localStorage.getItem("pendingEmail"); // ✅ get email from localStorage

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("No user data found. Please sign up again.");
      navigate("/register");
      return;
    }

    try {
      const res = await fetch("https://blogsitebackend-topcollec.onrender.com/api/auth/verify-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, otp: otpInput })
      });

      const data = await res.json();

      if (data.success) {
        login(data.user);
        localStorage.removeItem("pendingEmail"); // ✅ clean up after success
        navigate("/blog");
      } else {
        alert(data.message || "Invalid OTP");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error connecting to server");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Enter OTP</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={otpInput}
            onChange={(e) => setOtpInput(e.target.value)}
            placeholder="Enter OTP"
            required
            className="w-full px-4 py-2 border rounded"
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerifyOTP;
