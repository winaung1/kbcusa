import React from 'react'

import ChildrenMainContent from './ChildrenMainContent'
import Header from '../Header'
import Navbar from '../Navbar'
import Footer from '../Footer'
function ChildrenMinistry() {
  return (
  <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <ChildrenMainContent/>
    <Footer/>
  </div>  
  )
}

export default ChildrenMinistry