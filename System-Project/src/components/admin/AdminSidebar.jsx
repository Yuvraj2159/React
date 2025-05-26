import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  PlusCircle,
  Package,
  Users,
  LogOut
} from "lucide-react";
import { AuthContext } from "../../context/AuthContext";

function AdminSidebar() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navItemClasses = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded hover:bg-blue-100 transition ${
      isActive ? "bg-blue-200 text-blue-700 font-semibold" : "text-gray-700"
    }`;

  return (
    <div className="w-64 bg-white border-r min-h-screen p-4">
      <h2 className="text-2xl font-bold text-blue-600 mb-8">Admin Panel</h2>

      <nav className="flex flex-col gap-2">
        <NavLink to="/admin-dashboard" end className={navItemClasses}>
          <LayoutDashboard size={18} /> Dashboard
        </NavLink>

        <NavLink to="/admin-dashboard/add-product" className={navItemClasses}>
          <PlusCircle size={18} /> Add Product
        </NavLink>

        <NavLink to="/admin-dashboard/products" className={navItemClasses}>
          <Package size={18} /> Products
        </NavLink>

        <NavLink to="/admin-dashboard/users" className={navItemClasses}>
          <Users size={18} /> Users
        </NavLink>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-2 text-red-600 hover:bg-red-100 rounded mt-4"
        >
          <LogOut size={18} /> Logout
        </button>
      </nav>
    </div>
  );
}

export default AdminSidebar;
