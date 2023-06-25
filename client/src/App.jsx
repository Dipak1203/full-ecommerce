import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Download from './components/home/Download';
import FooterComponent from './components/Footer';
const App = () => {
  return (
   <BrowserRouter>
    <Navbar />
    <Routes>
     <Route path='/' element={<Home />} />
    </Routes>
    <Download />
    <FooterComponent />
   </BrowserRouter>
  )
}

export default App