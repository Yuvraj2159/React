import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(stored);
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const increaseQty = (id) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updated);
  };

  const decreaseQty = (id) => {
    const updated = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    updateCart(updated);
  };

  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    updateCart(updated);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="border p-4 rounded flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price} × {item.quantity}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => decreaseQty(item.id)} className="bg-gray-300 px-2 rounded">-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)} className="bg-gray-300 px-2 rounded">+</button>
                  <button onClick={() => removeItem(item.id)} className="text-red-500 ml-4">Remove</button>
                </div>
              </div>
            ))}
            <div className="text-right mt-6">
              <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
              <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
