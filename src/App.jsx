import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from './pages/login'
import Dashboard from './pages/dashboard'
import NoPage from './pages/nopage';


function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
        <Route path = '/' element = {<LoginPage/>}/>
        <Route path = '/dashboard' element = {<Dashboard/>}/>
        <Route path="*" element={<NoPage />} />
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
