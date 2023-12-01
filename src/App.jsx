import { useState,useEffect } from 'react'
import Aos from 'aos'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import MainPhoto from './Components/UI/MainPhoto'
import Service from './Components/UI/Service'
import Contact from './Components/UI/Contact'
import Tools from './Components/UI/Tools'
import './App.css' 
import Portfolio from './Components/UI/Portfolio'
 
function App() {
  
  useEffect(()=>{
    Aos.init()
  },[])

  return (
    <>
      <Header/>
      <>
        <MainPhoto/>
        <Tools/>
        <Service/>
        <Portfolio/>
        <Contact/>
      </>
      <Footer/>
    </>
  )
}

export default App
