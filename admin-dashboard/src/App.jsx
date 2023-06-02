import React from "react";
import { BrowserRouter, Routes, Route,useLocation } from "react-router-dom";
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
import Logout from "./components/pages/Logout";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <BrowserRouter>
    <AppContent />
    </BrowserRouter>
  );
};

export default App;


const AppContent = () =>{
  const location = useLocation();

  // Check if the current route is the Login route
  const isLoginPage = location.pathname === "/";
  return (
    <>
    {!isLoginPage && <Sidebar />}
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/store" element={<Store />} />
      <Route path="/products" element={<Products />} />
      <Route path="/finances" element={<Finances />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/message" element={<Messages />} />
      <Route path="/helpCenter" element={<HelpCenter />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  </>
  )
}