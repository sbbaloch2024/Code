import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import WhatIDo from './components/WhatIDo.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Hero/>
    <Projects/>
    <Footer/>
  </StrictMode>,
)
