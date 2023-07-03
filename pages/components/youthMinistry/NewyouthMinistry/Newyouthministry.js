import React from 'react'
import Header from '../../Header'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import Newyourhmaincontent from './Newyourhmaincontent'

function Newyouthministry() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <Newyourhmaincontent/>
    <Footer/>
  </div>  
  )
}

export default Newyouthministry