import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const PrivateRoute = ({ element }) => {
  // Implement your authentication logic here
  // You can redirect to the login page if the user is not authenticated
  // Example: if (!authenticated) return <Navigate to="/login" />;
  // Otherwise, render the component passed as the `element` prop
  return element;
};

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
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
    </BrowserRouter>
  );
};

export default App;
