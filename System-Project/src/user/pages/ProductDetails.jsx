import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const foundProduct = storedProducts.find(
      (item) => String(item.id) === String(id)
    );
    setProduct(foundProduct);
  }, [id]);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
  };

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="p-6 text-red-600">Product not found.</div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-3xl mx-auto">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover rounded mb-4"
        />
        <h2 className="text-3xl font-bold mb-2">{product.name}</h2>
        <p className="text-lg text-gray-700 mb-2">${product.price}</p>
        <p className="text-sm text-gray-500 mb-4">Category: {product.category}</p>
        <p className="mb-6 text-gray-600">
          {/* Optional description placeholder */}
          This is a great product that suits your needs. More features and specifications coming soon.
        </p>
        <button
          onClick={handleAddToCart}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>
        <button
          onClick={() => navigate("/Home")}
          className="ml-4 text-blue-600 hover:underline"
        >
          ← Back to Home
        </button>
      </div>
    </>
  );
}

export default ProductDetails;
