import React from 'react'
import Header from './components/Header/Header'
import Home from './components/Hero/Home'
import Services from './components/Services/Services'
import Projets from './components/Projets/Projets'


const App = () => {
  return (
    <>
      <Header/>
      <Home/>
      <Services/>
      <Projets/>
    </>
  )
}

export default App

