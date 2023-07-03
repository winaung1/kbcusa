import React from 'react'
import Header from '../Header'
import Navbar from '../Navbar'
import CounselingMainContent from './CounselingMainContent'
import Footer from '../Footer'

function CounselingMinistry() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <CounselingMainContent/>
    <Footer/>
  </div>  
  )
}

export default CounselingMinistry
