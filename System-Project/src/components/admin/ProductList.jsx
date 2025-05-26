import React, { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedProduct, setEditedProduct] = useState({});
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = ["All", "Uncategorized", "Electronics", "Clothing", "Books", "Furniture"];

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(stored);
  }, []);

  const filteredProducts = products.filter((p) => {
    const matchesCategory = categoryFilter === "All" || p.category === categoryFilter;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const startEditing = (product) => {
    setEditingId(product.id);
    setEditedProduct({ ...product });
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditedProduct({});
  };

  const handleFieldChange = (e) => {
    setEditedProduct({ ...editedProduct, [e.target.name]: e.target.value });
  };

  const saveChanges = () => {
    const updated = products.map((p) =>
      p.id === editingId ? editedProduct : p
    );
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
    setEditingId(null);
    setEditedProduct({});
  };

  const handleDelete = (id) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
    localStorage.setItem("products", JSON.stringify(updated));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Product List</h2>

      {/* Filter and Search */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="border px-4 py-2 rounded w-full sm:w-64"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "All" ? "All Categories" : cat}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search by product name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-4 py-2 rounded w-full"
        />
      </div>

      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <table className="w-full table-auto border">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => {
              const isEditing = editingId === product.id;
              return (
                <tr key={product.id} className="border-t">
                  <td className="px-4 py-2">
                    <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                  </td>
                  <td className="px-4 py-2">
                    {isEditing ? (
                      <input
                        type="text"
                        name="name"
                        value={editedProduct.name}
                        onChange={handleFieldChange}
                        className="border px-2 py-1 rounded w-full"
                      />
                    ) : product.name}
                  </td>
                  <td className="px-4 py-2">
                    {isEditing ? (
                      <input
                        type="text"
                        name="price"
                        value={editedProduct.price}
                        onChange={handleFieldChange}
                        className="border px-2 py-1 rounded w-full"
                      />
                    ) : product.price}
                  </td>
                  <td className="px-4 py-2">
                    {isEditing ? (
                      <input
                        type="text"
                        name="quantity"
                        value={editedProduct.quantity}
                        onChange={handleFieldChange}
                        className="border px-2 py-1 rounded w-full"
                      />
                    ) : product.quantity}
                  </td>
                  <td className="px-4 py-2">
                    {isEditing ? (
                      <select
                        name="category"
                        value={editedProduct.category}
                        onChange={handleFieldChange}
                        className="border px-2 py-1 rounded w-full"
                      >
                        {categories.slice(1).map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    ) : product.category}
                  </td>
                  <td className="px-4 py-2 space-x-2">
                    {isEditing ? (
                      <>
                        <button onClick={saveChanges} className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">Save</button>
                        <button onClick={cancelEditing} className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600">Cancel</button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => startEditing(product)} className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Edit</button>
                        <button onClick={() => handleDelete(product.id)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
                      </>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProductList;
