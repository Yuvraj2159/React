import React from "react";
import { X, Upload } from "lucide-react";

function CreateResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.id === "overlay") {
      onClose();
    }
  };

  return (
    <div
      id="overlay"
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div className="bg-gray-800 text-white w-[400px] p-6 rounded-lg shadow-lg relative">
        {/* Close Icon */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <X size={24} />
        </button>

        <h2 className="text-xl font-bold mb-6">Create a Resume</h2>

        {/* Resume Name Input */}
        <label className="block text-sm mb-2">RESUME NAME *</label>
        <input
          type="text"
          placeholder="Enter here..."
          className="w-full p-2 mb-4 rounded bg-gray-700 text-white focus:outline-none"
        />

        {/* Experience Dropdown */}
        <label className="block text-sm mb-2">EXPERIENCE</label>
        <select className="w-full p-2 mb-4 rounded bg-gray-700 text-white focus:outline-none">
          <option>Select...</option>
          <option>Fresher</option>
          <option>1-3 Years</option>
          <option>3-5 Years</option>
          <option>5+ Years</option>
        </select>

        {/* Import Options */}
        <div className="mb-4 text-blue-400 cursor-pointer">IMPORT YOUR RESUME FROM LINKEDIN ➔</div>
        <div className="mb-2 text-blue-400 cursor-pointer">IMPORT YOUR EXISTING RESUME ▼</div>

        {/* File Upload */}
        <div className="flex items-center bg-gray-700 p-2 rounded">
          <input type="file" className="flex-1 text-gray-400" />
          <Upload className="text-gray-400 ml-2" />
        </div>

        <p className="text-xs text-gray-400 mt-2">
          This process may take up to 60 seconds. Please be patient and keep this page open.
        </p>

        {/* Target Resume Toggle */}
        <div className="flex items-center justify-between mt-6">
          <p className="font-semibold">Target your resume</p>
          <input type="checkbox" className="toggle-checkbox" />
        </div>
      </div>
    </div>
  );
}

export default CreateResumeModal;
