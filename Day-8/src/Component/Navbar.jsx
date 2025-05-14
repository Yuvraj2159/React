import React from "react";
import { Home, PlusSquare, Heart, User } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

function Navbar() {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-white dark:bg-gray-800 shadow-md fixed top-0 left-0 w-full z-10">
      <h1 className="text-2xl font-bold text-indigo-600 dark:text-white">HamroGram</h1>
      <div className="flex gap-6 text-gray-700 dark:text-gray-200">
        <Home className="w-6 h-6 cursor-pointer" />
        <PlusSquare className="w-6 h-6 cursor-pointer" />
        <Heart className="w-6 h-6 cursor-pointer" />
        <User className="w-6 h-6 cursor-pointer" />
        <DarkModeToggle />
      </div>
    </div>
  );
}

export default Navbar;
