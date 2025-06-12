import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const updateCart = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const total = cart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(total);
    };

    updateCart();

    // Live update
    window.addEventListener("storage", updateCart);
    window.addEventListener("cart-updated", updateCart);

    // Set user name if available
    if (user) {
      setUserName(user.name || user.email.split("@")[0]); // fallback to email name
    }

    return () => {
      window.removeEventListener("storage", updateCart);
      window.removeEventListener("cart-updated", updateCart);
    };
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/home" className="text-2xl font-bold text-blue-400">MyShop</Link>

      <div className="flex gap-6 items-center">
        <Link to="/home" className="hover:text-blue-300">Home</Link>

        <Link to="/user/cart" className="hover:text-blue-300">
          Cart
          <span className="bg-blue-500 px-2 py-0.5 text-xs rounded-full ml-1">
            {cartCount}
          </span>
        </Link>

        <Link to="/user/profile" className="hover:text-blue-300">Profile</Link>

        {/* ✅ Display user's name */}
        {userName && (
          <span className="text-sm text-gray-300 whitespace-nowrap">Hi, {userName}</span>
        )}

        <button onClick={handleLogout} className="hover:text-red-400">
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
