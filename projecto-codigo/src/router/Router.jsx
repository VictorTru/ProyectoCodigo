import { BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react'
import Header from "../components/Header";
import Footer  from "../components/Footer";
import Precio from "../pages/Precio";

const router = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/precio" element={<Precio/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default router