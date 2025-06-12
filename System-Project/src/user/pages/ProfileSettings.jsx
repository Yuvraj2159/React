import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
function ProfileSettings() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    // Load user from localStorage
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (storedUser) {
      setLoggedInUser(storedUser);
      setName(storedUser.name || "");
      setPhoto(storedUser.photo || "");
      setPreview(storedUser.photo || "");
    }
  }, []);

  const handleSave = () => {
    if (!loggedInUser) return;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Update correct user
    const updatedUsers = users.map((u) =>
      u.email === loggedInUser.email
        ? {
            ...u,
            name,
            ...(password ? { password } : {}),
            photo,
          }
        : u
    );

    const updatedLoggedInUser = {
      ...loggedInUser,
      name,
      ...(password ? { password } : {}),
      photo,
    };

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("loggedInUser", JSON.stringify(updatedLoggedInUser));

    setLoggedInUser(updatedLoggedInUser); // Update state
    alert("Profile updated successfully!");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPhoto(reader.result);
      setPreview(reader.result);
    };

    if (file) reader.readAsDataURL(file);
  };

  if (!loggedInUser) {
    return <div className="p-6 text-red-600">No user is logged in.</div>;
  }

  return (
    <>
    <Navbar />
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow mt-8">
      <h2 className="text-xl font-bold mb-4">Profile Settings</h2>

      <div className="mb-4">
        {preview && (
          <img
            src={preview}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover mx-auto mb-2"
          />
        )}
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>

      <label className="block mb-2">Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border px-3 py-2 rounded mb-4"
      />

      <label className="block mb-2">Email</label>
      <input
        type="email"
        value={loggedInUser.email}
        disabled
        className="w-full border px-3 py-2 rounded mb-4 bg-gray-100"
      />

      <label className="block mb-2">New Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border px-3 py-2 rounded mb-4"
      />

      <button
        onClick={handleSave}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Save Changes
      </button>
    </div>
    </>
  );
}

export default ProfileSettings;
