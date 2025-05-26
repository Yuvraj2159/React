import React, { useState } from "react";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("resumes");

  const renderContent = () => {
    switch (activeTab) {
      case "resumes":
        return (
          <div className="flex flex-col items-center justify-center h-full">
            <div className="border-2 border-dashed border-gray-600 p-10 rounded-lg flex flex-col items-center justify-center hover:border-blue-500 cursor-pointer transition-all">
              <p className="text-gray-400 text-lg">Create new resume</p>
            </div>
          </div>
        );
      case "coverLetters":
        return (
          <div className="text-center text-gray-300 text-xl mt-20">
            No Cover Letters Created Yet
          </div>
        );
      case "resignationLetters":
        return (
          <div className="text-center text-gray-300 text-xl mt-20">
            No Resignation Letters Created Yet
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("resumes")}
          className={`px-4 py-2 rounded ${
            activeTab === "resumes"
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          RESUMES
        </button>
        <button
          onClick={() => setActiveTab("coverLetters")}
          className={`px-4 py-2 rounded ${
            activeTab === "coverLetters"
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          COVER LETTERS
        </button>
        <button
          onClick={() => setActiveTab("resignationLetters")}
          className={`px-4 py-2 rounded ${
            activeTab === "resignationLetters"
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          RESIGNATION LETTERS
        </button>
      </div>

      {/* Content Area */}
      {renderContent()}
    </div>
  );
}

export default Dashboard;
