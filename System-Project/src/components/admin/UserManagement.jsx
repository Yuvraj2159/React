import React, { useEffect, useState } from "react";

function UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(stored);
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">User Management</h2>

      {users.length === 0 ? (
        <p className="text-gray-600">No users found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border rounded-lg overflow-hidden shadow text-sm">
            <thead className="bg-gray-200 text-gray-800 text-left">
              <tr>
                <th className="px-6 py-3 border-b">#</th>
                <th className="px-6 py-3 border-b">Name</th>
                <th className="px-6 py-3 border-b">Email</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {users.map((user, index) => (
                <tr key={user.email} className="hover:bg-gray-50">
                  <td className="px-6 py-3 border-b">{index + 1}</td>
                  <td className="px-6 py-3 border-b">{user.username || "-"}</td>
                  <td className="px-6 py-3 border-b">{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default UserManagement;
