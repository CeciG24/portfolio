import { useState } from 'react'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      
      <Navbar />
      {/*Hero Section*/}
      <Hero />
      {/*About Section*/}
      <About />
      {/*Projects Section*/}
      <Projects />
      {/*Contact Section*/}
      <Contact />
      <Footer />
    </div>
  )
}

export default App