import React from 'react'
import Header from '../../../Header'
import Navbar from '../../../Navbar'
import ContentTemplatesLeft from '../../../LeftAndRightContent/ContentTemplatesLeft'
import FKBCOParagraph1Left from '../FKBCOParagraph1Left'
import FKBCOParagraph2Left from '../FKBCOParagraph2Left'
import ContentTemplatesRight from '../../../LeftAndRightContent/ContentTemplatesRight'
import FKBCOParagraph1Right from '../FKBCOParagraph1Right'
import FKBCOParagraph2Right from '../FKBCOParagraph2Right'
import FKBCOParagraph3Right from '../FKBCOParagraph3Right'
import FKBCOParagraph4Right from '../FKBCOParagraph4Right'
import Footer from '../../../Footer'
import Image from 'next/image'

function NewFirstKarenBaptistChurchOfOmaha() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
      <Header/>
      <Navbar/>
      <Image src='/images/FirstKarenBaptistChurchOfOmahaImage/NewFKBC.png' width={1024} height={260} alt='omaha'/>
      <div className='flex bg-white'>
        <ContentTemplatesLeft
          title="w>td.zSd.o&." 
          pic="/images/FirstKarenBaptistChurchOfOmahaImage/Nuyttin.jpg"
          pic2="/images/FirstKarenBaptistChurchOfOmahaImage/Nuyttin.jpg"
          description="o&.'d.rgnd.whR w>td.zSd.o&."
          description2="o&.'d.rgnd.whR w>td.zSd.o&.pXR"
          title2="w> bg t qX u wD>"
          title3="vXw>qJ;usd;t*D>"
          para1={<FKBCOParagraph1Left/>}
          para2={<FKBCOParagraph2Left/>}
          />
        <ContentTemplatesRight
          title1="unDbsXxHc&amp;Hmzdo&amp;dmwXtd;r[.w&gt;td.zSd."
          titleSpan="Omaha First Karen Baptist Church"
          title2="w&gt;td.zSd.t*h&gt;zk.udm"
          title3="w&gt;  td. zSd. cd. e&gt; ySR wD cd. &amp;d. rJ w&gt; w z."
          para1={<FKBCOParagraph1Right/>}
          para2={<FKBCOParagraph2Right/>}
          para3={<FKBCOParagraph3Right/>}
          para4={<FKBCOParagraph4Right/>}
          line1={<hr className='w-[98%] border-[.5px] border-black'/>}
          line2={<hr className='w-[98%] border-[.5px] border-black'/>}
          line3={<hr className='w-[98%] border-[.5px] border-black'/>}
          line4={<hr className='w-[98%] border-[.5px] border-black'/>}
          
        />
      </div>
      <Footer/>
    </div>
  )
}

export default NewFirstKarenBaptistChurchOfOmaha