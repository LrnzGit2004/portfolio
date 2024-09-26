import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Hero/Home'
import Services from './components/Services/Services'
import Projets from './components/Projets/Projets'
import About from './components/About/About'


const App = () => {
  return (
    <div className="container mx-auto text-white">
      <Header/>
      <Home/>
      <Services/>
      <Projets/>
      <About/>
    </div>
  )
}

export default App

