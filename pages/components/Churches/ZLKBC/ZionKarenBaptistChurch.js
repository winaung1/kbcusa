import Image from 'next/image'
import React from 'react'
import Footer from '../../Footer'
import Header from '../../Header'
import ContentTemplatesLeft from '../../LeftAndRightContent/ContentTemplatesLeft'
import ContentTemplatesRight from '../../LeftAndRightContent/ContentTemplatesRight'
import Navbar from '../../Navbar'
import KCKKBCparagraph2Right from '../KCKKBC/KCKKBCparagraph2Right'
import ZLKBCparagraph1Left from './ZLKBCparagraphLeft1'
import ZLKBCparagraphleft2 from './ZLKBCparagraphleft2'
import ZLKBCparagraph1Right from './ZLKBCparagraph1Right'

function ZionKarenBaptistChurch() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <Image src='/images/KansasCityKansasKarenBaptistChurch/KansasCityKansasKarenBaptistChurch.gif' width={1024} height={260} alt='greeley'/>
    <div className='flex bg-white px-20'>
      <ContentTemplatesLeft
          title="w>td.zSd.o&." 
          pic="/images/homePageRightSideImages/pastor-1.gif"
          pic2="/images/homePageRightSideImages/pastor-1.gif"
          description="w>td.zSd.o&.    o&.&Srl;thv;"
          description2="w>td.zSd.o&.pXR    o&.&Srl;thv;"
          title2="w> bg t qX u wD>"
          title3="vXw>qJ;usd;t*D>"
          para1={<ZLKBCparagraph1Left/>}
          para2={<ZLKBCparagraphleft2/>}
          />
      <ContentTemplatesRight
          title1="unDbsXxHc&Hmzdw>td.zSd."
          titleSpan="Kansas City Kansas Karen Baptist Church"
          title2="w&gt;td.zSd.t*h&gt;zk.udm"
          title3="w> td. zSd. cd. e> ySR wD cd. & d. rJ w> w z."
          para1={<ZLKBCparagraph1Right/>}
          para2={<KCKKBCparagraph2Right/>}
          line1={<hr className='w-[98%] border-[.5px] border-black'/>}
          line2={<hr className='w-[98%] border-[.5px] border-black'/>}
          line3={<hr className='w-[98%] border-[.5px] border-black'/>}
        />
    </div>
    <Footer/>
</div>
  )
}

export default ZionKarenBaptistChurch