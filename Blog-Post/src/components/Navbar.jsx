import { Link } from "react-router-dom";
import { LogOut, LogIn, Home, Settings as SettingsIcon } from "lucide-react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">MyBlog</Link>
      <div className="space-x-4 flex items-center">
        <Link to="/" className="hover:underline">Home</Link>
        {user ? (
          <>
            <Link to="/blog" className="hover:underline">Blog</Link>
            <Link
              to="/settings"
              className="flex items-center gap-1 hover:text-yellow-400"
            >
              <SettingsIcon size={18} /> Settings
            </Link>
            <button
              onClick={logout}
              className="flex items-center gap-1 hover:text-red-400"
            >
              <LogOut size={18} /> Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="flex items-center gap-1 hover:text-green-400"
            >
              <LogIn size={18} /> Login
            </Link>
            <Link to="/register" className="hover:underline">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
