import React from 'react'
import ReactDOM from 'react-dom/client'
import Precio from './pages/Precio'
import './index.css'
import Header from './components/Header'
import  Footer  from './components/Footer'
import Router from './router/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>,
)
