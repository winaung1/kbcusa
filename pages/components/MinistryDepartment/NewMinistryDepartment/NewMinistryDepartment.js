import React from 'react'
import Header from '../../Header'
import Navbar from '../../Navbar'
import MinistryMainDepartement from '../MinistryMainDepartement'
import Footer from '../../Footer'

function NewMinistryDepartment() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <MinistryMainDepartement/>
    <Footer/>
  </div> 
  )
}

export default NewMinistryDepartment