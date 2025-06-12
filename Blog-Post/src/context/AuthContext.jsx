import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // ✅ Load pending user from localStorage
  const [pendingUser, setPendingUserState] = useState(
    JSON.parse(localStorage.getItem("pendingUser")) || null
  );

  const setPendingUser = (user) => {
    setPendingUserState(user);
    localStorage.setItem("pendingUser", JSON.stringify(user));
  };

  const clearPendingUser = () => {
    setPendingUserState(null);
    localStorage.removeItem("pendingUser");
  };

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        pendingUser,
        setPendingUser,
        clearPendingUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
