import React from 'react'
import Footer from '../../Footer'
import Header from '../../Header'
import ContentTemplatesLeft from '../../LeftAndRightContent/ContentTemplatesLeft'
import ContentTemplatesRight from '../../LeftAndRightContent/ContentTemplatesRight'
import Navbar from '../../Navbar'
import Image from 'next/image'
import KareneeLeft1 from './KareneeLeft1'
import KareneeLeft2 from './KareneeLeft2'
import KareneeRight1 from './KareneeRight1'
import KareneeRight3 from './KareneeRight3'
import KaraneeRight2 from './KaraneeRight2'
import KareneeLeft3 from './KareneeLeft3'
import KareneeLeft4 from './KareneeLeft4'

function KaraneeKarenBaptistChurch() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <Image src='/images/KeraneeKarenBaptistChurchImage/KKBBCyouth.jpg' width={1024} height={260} alt='greeley'/>
    <div className='flex bg-white'>
      <ContentTemplatesLeft
          title="w>td.zSd.o&." 
          pic="/images/KeraneeKarenBaptistChurchImage/moo.jpg"
          pic2="/images/KeraneeKarenBaptistChurchimage/KKBBCPaster2.jpg"
          description="o&.rk.tJ.rl.uFJphw>td.zSd.o&.rk."
          description2="AAAAo&.vyDxlAAAAAAAw>td.zSd.o&.pXR"
          title2="w> bg t qX u wD>"
          title3="vXw>qJ;usd;t*D>"
          title4='w>td.zSd.t*h>vXtylRuGHm>'
          title5='w>td.zSd.w>uGJ;eD.'
          para1={<KareneeLeft1/>}
          para2={<KareneeLeft2/>}
          para3={<KareneeLeft3/>}
          para4={<KareneeLeft4/>}
          />
      <ContentTemplatesRight
          title1="u&ReHunDbsXxHc&Hmzdw>td.zSd."
          titleSpan="Karanee Karen Baptist Church"
          title2="u&ReHunDbsXxHc&Hmzdw>td.zSd.   ?rDxd.1u&H.ol; 3;9 /"
          title3="w>td.zSd.tuh>t*DR"
          para1={<KareneeRight1/>}
          para2={<KaraneeRight2/>}
          para3={<KareneeRight3/>}
          line1={<hr className='w-[98%] border-[.5px] border-black'/>}
          line2={<hr className='w-[98%] border-[.5px] border-black'/>}
          line3={<hr className='w-[98%] border-[.5px] border-black'/>}
        />
    </div>
    <Footer/>
</div>
  )
}

export default KaraneeKarenBaptistChurch