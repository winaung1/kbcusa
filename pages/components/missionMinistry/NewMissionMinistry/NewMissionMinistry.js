import React from 'react'
import Header from '../../Header'
import Navbar from '../../Navbar'
import NewMissionMainContent from './NewMissionMainContent'
import Footer from '../../Footer'

function NewMissionMinistry() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <NewMissionMainContent/>
    <Footer/>
  </div> 
  )
}

export default NewMissionMinistry