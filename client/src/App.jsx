import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
const App = () => {
  return (
   <BrowserRouter>
    <Navbar />
    <Routes>
     <Route path='/' element={<Home />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App