import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Navbar from '../Navbar'
import MinistryMainDepartement from './MinistryMainDepartement'

function MinistryMainContent() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <MinistryMainDepartement/>
    <Footer/>
  </div> 
  )
}

export default MinistryMainContent