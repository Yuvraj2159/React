import React, { useEffect, useState } from "react";

function DashboardOverview() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    setProducts(storedProducts);
    setOrders(storedOrders);
    setUsers(storedUsers);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-6 rounded shadow text-center">
          <h3 className="text-xl font-semibold text-blue-800">Total Products</h3>
          <p className="text-3xl font-bold mt-2">{products.length}</p>
        </div>
        <div className="bg-green-100 p-6 rounded shadoww text-center">
          <h3 className="text-xl font-semibold text-green-800">Total Orders</h3>
          <p className="text-3xl font-bold mt-2">{orders.length}</p>
        </div>
        <div className="bg-purple-100 p-6 rounded shadow text-center">
          <h3 className="text-xl font-semibold text-purple-800">Total Users</h3>
          <p className="text-3xl font-bold mt-2">{users.length}</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardOverview;
