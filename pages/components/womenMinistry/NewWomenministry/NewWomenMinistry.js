import React from 'react'
import NewWomenMaincontent from './NewWomenMaincontent'
import Header from '../../Header'
import Navbar from '../../Navbar'
import Footer from '../../Footer'

function NewWomenMinistry() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <NewWomenMaincontent/>
    <Footer/>
  </div>  
  )
}

export default NewWomenMinistry