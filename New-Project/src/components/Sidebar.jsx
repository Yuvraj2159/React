import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Briefcase, BookOpen } from "lucide-react";
import CreateResumeModal from "./CreateResumeModal";

function Sidebar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="w-64 bg-gray-800 p-5 flex flex-col gap-5 shadow-lg">
        <h1 className="text-2xl font-bold text-blue-400 mb-8">Rezi</h1>

        {/* Create New Resume Button */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          onClick={() => setShowModal(true)}
        >
          Create New Resume
        </button>

        <Link to="/" className="flex items-center gap-3 hover:text-blue-400 mt-4">
          <Home /> Dashboard
        </Link>
        <Link to="/job-search" className="flex items-center gap-3 hover:text-blue-400">
          <Briefcase /> Job Search
        </Link>
        <Link to="/sample-library" className="flex items-center gap-3 hover:text-blue-400">
          <BookOpen /> Sample Library
        </Link>

        <button className="mt-auto bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition duration-300">
          Upgrade
        </button>
      </div>

      {/* Modal Component */}
      <CreateResumeModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

export default Sidebar;
