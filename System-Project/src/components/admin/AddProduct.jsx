import React, { useState } from "react";

function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    quantity: "",
    image: "",
    category: "Uncategorized",
  });

  const categories = ["Uncategorized", "Electronics", "Clothing", "Books", "Furniture"];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { id: Date.now(), ...form };

    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    const updatedProducts = [...storedProducts, newProduct];
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    alert("Product added successfully!");
    setForm({
      name: "",
      price: "",
      quantity: "",
      image: "",
      category: "Uncategorized",
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 max-w-md">
        <input type="text" name="name" placeholder="Product Name" value={form.name} onChange={handleChange} className="border px-4 py-2 rounded" required />
        <input type="text" name="price" placeholder="Price" value={form.price} onChange={handleChange} className="border px-4 py-2 rounded" required />
        <input type="text" name="quantity" placeholder="Quantity" value={form.quantity} onChange={handleChange} className="border px-4 py-2 rounded" required />
        <input type="text" name="image" placeholder="Image URL" value={form.image} onChange={handleChange} className="border px-4 py-2 rounded" required />

        {/* Category Selector */}
        <select name="category" value={form.category} onChange={handleChange} className="border px-4 py-2 rounded">
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
