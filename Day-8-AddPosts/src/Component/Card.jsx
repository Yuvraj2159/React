import React, { useState } from "react";
import Button from "./Button";
import { Trash2 } from "lucide-react";

function Card({ value, bgColor, onDelete }) {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked((prev) => !prev);
  };

  return (
    <div className={`flex flex-col ${bgColor} p-4`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-bold text-gray-800 dark:text-gray-200">
          {value?.name || "Anonymous"}
        </h1>
        <Trash2
          onClick={onDelete}
          className="text-gray-500 hover:fill-gray-400 dark:text-gray-300 cursor-pointer"
        />
      </div>

      {/* Image */}
      {value?.image && (
        <img
          src={value.image}
          alt="Post"
          className="w-full h-80 object-cover rounded-md mb-4"
        />
      )}

      {/* Like Button */}
      <div className="flex gap-4 mb-2">
        <Button liked={liked} onClick={toggleLike} className="p-2" />
      </div>

      

      {/* Caption */}
      {value?.caption && (
        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-semibold">{value.name} </span>
          {value.caption}
        </p>
      )}
    </div>
  );
}

export default Card;
