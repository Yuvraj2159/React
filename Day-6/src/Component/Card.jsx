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
      className={`w-[250px] h-[420px] border border-black flex flex-col rounded-lg justify-between py-4 items-center shadow-md ${bgColor} relative`}
    >
      {/* Delete icon */}
      <button
        onClick={onDelete}
        className="absolute top-2 right-2 text-red-600 hover:text-red-800"
      >
        <Trash2 className="w-5 h-5" />
      </button>

      <h1 className="text-lg font-semibold">Posts</h1>
      <hr className="border border-slate-500 w-full" />
      <h2 className="text-md font-medium">{value?.name}</h2>
      <div className="w-[220px] h-[220px] px-2">
        <img
          className="w-full h-full object-cover rounded"
          src={value?.image}
          alt="User-post"
        />
      </div>
      <div className="flex gap-2 my-2">
        <Button
          liked={liked}
          onClick={toggleLike}
          className={`flex items-center w-fit px-4 py-1 text-white rounded gap-2 ${
            liked ? "bg-pink-600" : "bg-indigo-500 hover:bg-indigo-600"
          }`}
        >
          
        </Button>
      </div>
    </div>
  );
}

export default Card;
