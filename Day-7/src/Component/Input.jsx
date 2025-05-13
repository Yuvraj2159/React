// InputForm.jsx
import React, { useState } from "react";

function InputForm({ onAddCard }) {
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
        caption, // Caption is optional
        image: imageData,
      });

      // Clear form fields
      setUserName("");
      setCaption("");
      setImageFile(null);
    };

    if (imageFile) {
      reader.readAsDataURL(imageFile); // Convert to base64
    } else {
      onAddCard({
        name: userName,
        caption, // Caption is optional
        image: null,
      });

      // Clear form even when no image is selected
      setUserName("");
      setCaption("");
      setImageFile(null);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 px-10 py-6 bg-slate-400 w-[400px] rounded-lg shadow"
    >
      <h1 className="text-xl font-bold">Upload Image</h1>

      <label>Username:</label>
      <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        className="border-2 border-red-200 outline-none px-2 py-1"
        required
      />

      <label>Caption (Optional):</label>
      <input
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        type="text"
        className="border-2 border-red-200 outline-none px-2 py-1"
      />

      <label>Choose Image:</label>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImageFile(e.target.files[0])}
      />

      <button
        type="submit"
        className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
      >
        Submit
      </button>
    </form>
  );
}

export default InputForm;
