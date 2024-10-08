import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Auth from './components/Auth'
import Login from './pages/Login'
import Duckhunt from './pages/Duckhunt'
import Spaceguild from './pages/Spaceguild'
import Spaceexploration from './pages/Spaceexploration'
import Footer from './components/Footer'
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
         <Route path="*" element={<Home />} />
         <Route path="/Home" element={<Home />} />
         <Route path="/signup" element={<Auth />} />
         <Route path="/login" element={<Login />} />
         <Route path="/duckhunt" element={<Duckhunt/> } />
         <Route path="/spaceguild" element={<Spaceguild/>} />
         <Route path="/spaceexploration" element={<Spaceexploration/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
