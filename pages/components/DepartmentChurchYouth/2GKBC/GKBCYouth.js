import React from 'react'
import Header from '../../Header'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import GKBCYouthMainContent from './GKBCYouthMainContent'

function GKBCWomen() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <GKBCYouthMainContent/>
    <Footer/>
  </div>  
  
  )
}

export default GKBCWomen