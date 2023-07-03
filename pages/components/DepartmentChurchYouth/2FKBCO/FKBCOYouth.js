import React from 'react'
import Header from '../../Header'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import FKBCOYouthMainContent from './FKBCOYouthMainContent'

function FKBCOYouth() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <FKBCOYouthMainContent/>
    <Footer/>
  </div>  
  )
}

export default FKBCOYouth