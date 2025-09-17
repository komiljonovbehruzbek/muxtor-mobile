import React from 'react'

import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="w-full h-[500vh] bg-gradient-to-r from-gray-900 via-black to-gray-800">
      <Navbar />
      <Carousel />
      <section id='home'>
        <Home />
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='products'>
        <Products />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      <Footer />
    </div>
  )
}

export default App
