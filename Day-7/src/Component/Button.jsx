import React from "react";
import { Heart, HeartOff } from "lucide-react";

function Button({ liked, onClick, className }) {
  return (
    <button className={className} onClick={onClick}>
      {liked ? (
        <Heart className="w-6 h-6 fill-white" />
      ) : (
        <HeartOff className="w-6 h-6" />
      )}
    </button>
  );
}

export default Button;
