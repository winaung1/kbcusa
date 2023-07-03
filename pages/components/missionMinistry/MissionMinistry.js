import React from 'react'
import Header from '../Header'
import Navbar from '../Navbar'
import MissionMainContent from './MissionMainContent'
import Footer from '../Footer'

function MissionMinistry() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <MissionMainContent/>
    <Footer/>
  </div>  
  )
}

export default MissionMinistry