import React from 'react'
import Header from '../../Header'
import Navbar from '../../Navbar'
import NewCultureMinContent from './NewCultureMinContent'
import Footer from '../../Footer'

function NewCultureMinistry() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <NewCultureMinContent/>
    <Footer/>
  </div>  
  )
}

export default NewCultureMinistry