import React from "react";
import { Heart, HeartOff } from "lucide-react";

function Button({ liked, onClick, className, children }) {
  return (
    <button className={className} onClick={onClick}>
      {liked ? (
        <Heart className="w-5 h-5 fill-white" />
      ) : (
        <HeartOff className="w-5 h-5" />
      )}
      {children}
    </button>
  );
}

export default Button;
