import React, { useState } from "react";

function Input({ onAddCard }) {
  const [userName, setUserName] = useState("");
  const [caption, setCaption] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userName) {
      alert("Username is required!");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const imageData = reader.result;

      onAddCard({
        name: userName,
        caption,
        image: imageData,
      });

      setUserName("");
      setCaption("");
      setImageFile(null);
    };

    if (imageFile) {
      reader.readAsDataURL(imageFile);
    } else {
      onAddCard({
        name: userName,
        caption,
        image: null,
      });

      setUserName("");
      setCaption("");
      setImageFile(null);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md"
    >
      <h2 className="text-xl font-bold text-gray-700 dark:text-gray-200 text-center">
        Create a New Post
      </h2>

      <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        placeholder="Username"
        className="border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        required
      />

      <textarea
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Write a caption..."
        rows="3"
        className="border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImageFile(e.target.files[0])}
        className="text-gray-700 dark:text-gray-200"
      />

      <button
        type="submit"
        className="mt-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg"
      >
        Share Post
      </button>
    </form>
  );
}

export default Input;
