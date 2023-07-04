import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState } from 'react'
import './index.css'
import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Landing from './pages/landing.jsx'
import Press from './pages/Press.jsx'
import Yacaman from './pages/Yacaman.jsx'
import ImageCollection from './Components/ImageCollection.jsx'

function App() {
  

  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route index element={<Landing />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/press" element={<Press />} />
      <Route path="/yacaman" element={<Yacaman />} />
      <Route path="/jacobo-rios" element={<ImageCollection />} />
     
      
      

    </Routes>
    </BrowserRouter>
    </div>
    
  )
}

export default App
