import React, { useEffect, useState } from "react";

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedUser, setEditedUser] = useState({});

  const roles = ["user", "admin"];

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditedUser({ ...users[index] });
  };

  const cancelEditing = () => {
    setEditingIndex(null);
    setEditedUser({});
  };

  const handleFieldChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    const updatedUsers = users.map((user, index) =>
      index === editingIndex ? editedUser : user
    );
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setEditingIndex(null);
    setEditedUser({});
  };

  const deleteUser = (index) => {
    const confirm = window.confirm("Are you sure you want to delete this user?");
    if (!confirm) return;

    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">User Management</h2>

      {users.length === 0 ? (
        <p className="text-gray-600">No users found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse border text-sm shadow rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-800">
              <tr>
                <th className="px-6 py-3 border-b text-left">#</th>
                <th className="px-6 py-3 border-b text-left">Name</th>
                <th className="px-6 py-3 border-b text-left">Email</th>
                <th className="px-6 py-3 border-b text-left">Role</th>
                <th className="px-6 py-3 border-b text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {users.map((user, index) => {
                const isEditing = index === editingIndex;
                return (
                  <tr key={user.email} className="hover:bg-gray-50">
                    <td className="px-6 py-3 border-b">{index + 1}</td>
                    <td className="px-6 py-3 border-b">
                      {isEditing ? (
                        <input
                          type="text"
                          name="username"
                          value={editedUser.username}
                          onChange={handleFieldChange}
                          className="border px-2 py-1 rounded w-full"
                        />
                      ) : (
                        user.username || "-"
                      )}
                    </td>
                    <td className="px-6 py-3 border-b">
                      {isEditing ? (
                        <input
                          type="email"
                          name="email"
                          value={editedUser.email}
                          onChange={handleFieldChange}
                          className="border px-2 py-1 rounded w-full"
                        />
                      ) : (
                        user.email
                      )}
                    </td>
                    <td className="px-6 py-3 border-b">
                      {isEditing ? (
                        <select
                          name="role"
                          value={editedUser.role || "user"}
                          onChange={handleFieldChange}
                          className="border px-2 py-1 rounded w-full"
                        >
                          {roles.map((r) => (
                            <option key={r} value={r}>{r}</option>
                          ))}
                        </select>
                      ) : (
                        user.role || "user"
                      )}
                    </td>
                    <td className="px-6 py-3 border-b text-center space-x-2">
                      {isEditing ? (
                        <>
                          <button
                            onClick={saveChanges}
                            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                          >
                            Save
                          </button>
                          <button
                            onClick={cancelEditing}
                            className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
                          >
                            Cancel
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => startEditing(index)}
                            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteUser(index)}
                            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default UserManagement;
