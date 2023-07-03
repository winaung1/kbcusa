import React from 'react'
import Header from '../../Header'
import Navbar from '../../Navbar'
import GKBCYouthMainContent from '../2GKBC/GKBCYouthMainContent'
import Footer from '../../Footer'

function KBCDYouth() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <GKBCYouthMainContent/>
    <Footer/>
  </div>  
  )
}

export default KBCDYouth