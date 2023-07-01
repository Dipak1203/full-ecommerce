import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Download from './components/home/Download';
import FooterComponent from './components/Footer';
import Login from './authentication/Login';

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
            "Access-Control-Allow-Credentials": true,
          },
        });
        
        if (response.status === 200) {
          const resObject = await response.json();
          setUser(resObject.user);
        } else {
          throw new Error("Authentication has failed!");
        }
      } catch (err) {
        console.log(err);
      }
    };

    getUser();
  }, []);

  console.log(user)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar user={user} />
              <Home />
              <Download />
              <FooterComponent />
            </>
          }
        />
        <Route path="/signup" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
