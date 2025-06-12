import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../../components/Toast"; // ✅ Import toast

function ProductCard({ product }) {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false); // ✅ State for toast

  const handleAddToCart = (e) => {
    e.stopPropagation();

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cart-updated")); // ✅ Update navbar

    // ✅ Show toast
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div
      onClick={() => navigate(`/user/product/${product.id}`)}
      className="relative border p-4 rounded shadow hover:shadow-lg cursor-pointer"
    >
      {showToast && <Toast message="Product added to cart!" />}
      
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover mb-3 rounded"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-700">${product.price}</p>
      <p className="text-sm text-gray-500 mb-3">{product.category}</p>

      <button
        onClick={handleAddToCart}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
