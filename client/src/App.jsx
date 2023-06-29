import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Download from './components/home/Download';
import FooterComponent from './components/Footer';
import Login from './authentication/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
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
