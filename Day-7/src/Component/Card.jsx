// Card.jsx
import React, { useState } from "react";
import Button from "./Button";
import { Trash2 } from "lucide-react";

function Card({ value, bgColor, onDelete }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  return (
    <div
      className={`w-[250px] h-[450px] border border-black flex flex-col rounded-lg justify-between py-4 items-center shadow-md ${bgColor} relative`}
    >
      {/* Delete Icon */}
      <button
        onClick={onDelete}
        className="absolute top-2 right-2 text-red-600 hover:text-red-800"
      >
        <Trash2 className="w-5 h-5" />
      </button>

      {/* Username as Title */}
      <h1 className="text-lg font-semibold">{value?.name || "Anonymous"}</h1>
      <hr className="border border-slate-500 w-full" />

      {/* Image Section */}
      <div className="w-[220px] h-[220px] px-2">
        {value?.image ? (
          <img
            className="w-full h-full object-cover rounded"
            src={value.image}
            alt="User-post"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-gray-500 text-sm">
            No Image
          </div>
        )}
      </div>

      {/* Caption Section - Reserve Space */}
      <p className="text-sm text-gray-700 italic px-2 text-center min-h-[24px]">
        {value?.caption || ""}
      </p>

      {/* Like/Unlike Button (Icon Only) */}
      <div className="flex gap-2 my-2">
        <Button
          liked={liked}
          onClick={toggleLike}
          className={`flex items-center w-fit px-3 py-1 text-white rounded ${
            liked ? "bg-pink-600" : "bg-indigo-500 hover:bg-indigo-600"
          }`}
        />
      </div>
    </div>
  );
}

export default Card;
