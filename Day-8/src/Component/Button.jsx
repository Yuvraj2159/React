import React from "react";
import { Heart } from "lucide-react";

function Button({ liked, onClick, className,}) {
  return (

    <>
    <button
      onClick={onClick}
      className={`${className} transition-transform duration-300 ease-in-out hover:scale-125`}
    >
      {liked ? (
        <Heart className="w-8 h-8 text-red-500 fill-red-500 transition-colors duration-300" />
      ) : (
        <Heart className="w-8 h-8 text-gray-400 transition-colors duration-300" />
      )}
    </button>
    </>

  );
}

export default Button;
