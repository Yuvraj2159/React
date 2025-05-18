import React from "react";
import { Link } from "react-router";
import { Home, Info, Phone } from "lucide-react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-slate-800 text-white px-8 py-4 shadow-lg">
      {/* Logo */}
      <div className="text-2xl font-extrabold text-indigo-400">HamroGram</div>

      {/* Navigation Links */}
      <div className="flex gap-8 text-lg">
        <Link to="/" className="hover:text-indigo-300 flex items-center gap-2 transition-colors">
          <Home size={20} /> Home
        </Link>
        <Link to="/about" className="hover:text-indigo-300 flex items-center gap-2 transition-colors">
          <Info size={20} /> About
        </Link>
        <Link to="/contact" className="hover:text-indigo-300 flex items-center gap-2 transition-colors">
          <Phone size={20} /> Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
