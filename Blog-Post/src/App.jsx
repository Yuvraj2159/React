import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Blog from "./pages/Blog";
import VerifyOTP from "./pages/VerifyOTP";
import Settings from "./pages/Settings";
import ForgotPassword from "./pages/ForgotPassword"; // ✅ Import ForgotPassword
import Navbar from "./components/Navbar";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

// Layout wrapper to control Navbar visibility
function Layout() {
  const location = useLocation();
  const hideNavbar =
    location.pathname === "/" ||
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/verify" ||
    location.pathname === "/ForgotPassword"; // ✅ Hide Navbar here too

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<LoginRedirect />} />
        <Route path="/login" element={<LoginRedirect />} />
        <Route path="/register" element={<RegisterRedirect />} />
        <Route path="/verify" element={<VerifyOTP />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} /> {/* ✅ Added */}
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<BlogRedirect />} />
        <Route path="/settings" element={<SettingsRedirect />} />
      </Routes>
    </>
  );
}

// Protected Routes
function LoginRedirect() {
  const { user } = useContext(AuthContext);
  return user ? <Navigate to="/blog" /> : <Login />;
}

function RegisterRedirect() {
  const { user } = useContext(AuthContext);
  return user ? <Navigate to="/blog" /> : <Register />;
}

function BlogRedirect() {
  const { user } = useContext(AuthContext);
  return user ? <Blog /> : <Navigate to="/" />;
}

function SettingsRedirect() {
  const { user } = useContext(AuthContext);
  return user ? <Settings /> : <Navigate to="/" />;
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
