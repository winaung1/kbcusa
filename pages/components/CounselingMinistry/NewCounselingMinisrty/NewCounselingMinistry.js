import React from 'react'
import Header from '../../Header'
import Navbar from '../../Navbar'
import NewCounselingMainContent from './NewCounselingMainContent'
import Footer from '../../Footer'

function NewCounselingMinistry() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <NewCounselingMainContent/>
    <Footer/>
  </div>  
  )
}

export default NewCounselingMinistry