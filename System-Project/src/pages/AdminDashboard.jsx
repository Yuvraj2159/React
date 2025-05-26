import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";
import DashboardOverview from "../components/admin/DashboardOverview";
import AddProduct from "../components/admin/AddProduct";
import ProductList from "../components/admin/ProductList";
import UserManagement from "../components/admin/UserManagement";

function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar Navigation */}
      <AdminSidebar />

      {/* Main Content Area */}
      <div className="flex-1 p-6">
        <Routes>
          <Route path="" element={<DashboardOverview />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="products" element={<ProductList />} />
          <Route path="users" element={<UserManagement />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminDashboard;
