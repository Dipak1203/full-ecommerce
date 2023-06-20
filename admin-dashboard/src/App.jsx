import React from "react";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/auth/Login";
import Sidebar from "./components/Sidebar";
import Statistics from "./components/pages/Statistics";
import Store from "./components/pages/Store";
import Products from "./components/pages/Products";
import Finances from "./components/pages/Finances";
import Invoices from "./components/pages/Invoices";
import Messages from "./components/pages/Messages";
import HelpCenter from "./components/pages/HelpCenter";
import Setting from "./components/pages/Setting";
import ProductForm from "./components/forms/ProductForm";
import "bootstrap/dist/css/bootstrap.min.css";
import Logout from "./components/auth/Logout";

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;

const AppContent = () => {
  const location = useLocation();
  const isLoggedIn = !!localStorage.getItem("token");

  // Check if the current route is the Login route
  const isLoginPage = location.pathname === "/";

  const PrivateRoute = ({ element, path }) => {
    if (!isLoggedIn && !isLoginPage) {
      return <Navigate to="/" />;
    }
    return element;
  };

  return (
    <>
      {!isLoginPage && <Sidebar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="/statistics" element={<PrivateRoute element={<Statistics />} />} />
        <Route path="/store" element={<PrivateRoute element={<Store />} />} />
        <Route path="/products" element={<PrivateRoute element={<Products />} />} />
        <Route path="/product/create" element={<PrivateRoute element={<ProductForm />} />} />
        <Route path="/finances" element={<PrivateRoute element={<Finances />} />} />
        <Route path="/invoices" element={<PrivateRoute element={<Invoices />} />} />
        <Route path="/message" element={<PrivateRoute element={<Messages />} />} />
        <Route path="/helpCenter" element={<PrivateRoute element={<HelpCenter />} />} />
        <Route path="/setting" element={<PrivateRoute element={<Setting />} />} />
        <Route path="/logout" element={<PrivateRoute element={<Logout />} />} />
      </Routes>
      <ToastContainer />
    </>
  );
};
