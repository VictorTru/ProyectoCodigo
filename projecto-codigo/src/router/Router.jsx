import { BrowserRouter, Routes, Route} from "react-router-dom";
import React from 'react'
import Header from "../components/Header";
import Footer  from "../components/Footer";
import Precio from "../pages/Precio";
import Preguntas from '../pages/Preguntas'

const router = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/precio" element={<Precio/>}/>
        <Route path="/preguntas" element={<Preguntas/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default router