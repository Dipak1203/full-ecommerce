import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css';
const App = () => {
  return (
   <BrowserRouter>
    <Routes>
     <Route path='/' element={<Navbar />}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App