import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import JobSearch from "./pages/JobSearch";
import SampleLibrary from "./pages/SampleLibrary";

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-900 text-white">
        {/* Sidebar with Create New Resume Button */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/job-search" element={<JobSearch />} />
            <Route path="/sample-library" element={<SampleLibrary />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
