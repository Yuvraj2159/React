import React from "react";

function Toast({ message }) {
  return (
    <div className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded shadow-lg z-50">
      {message}
    </div>
  );
}

export default Toast;
