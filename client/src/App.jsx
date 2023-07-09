import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Download from "./components/home/Download";
import FooterComponent from "./components/Footer";
import Login from "./authentication/Login";
import TopNavbar from "./components/TopNavbar";
import Dashboard from "./pages/users/Dashboard";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch("http://localhost:8000/login/success", {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const resObject = await response.json();
          setUser(resObject.user);
          localStorage.setItem("user", JSON.stringify(resObject.user));
        } else {
          throw new Error("Authentication has failed!");
        }
      } catch (err) {
        console.log(err);
      }
    };

    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      getUser();
    }
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);


  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <BrowserRouter>
      <TopNavbar />
      <Navbar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/profile/:id" element={<Dashboard user={user} />} />
        <Route path="/signup" element={<Login />} />
      </Routes>
      <Download />
      <FooterComponent />
    </BrowserRouter>
  );
};

export default App;
