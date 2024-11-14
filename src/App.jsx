import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Hero/Home'
import Services from './components/Services/Services'
import Projets from './components/Projets/Projets'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className="container mx-auto text-[#fbfffe]">
      <Header/>
      <div className='className="container mx-auto'></div>
      <Home/>
      <Services/>
      <Projets/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

