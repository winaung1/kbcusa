import Image from "next/image"
import Footer from "../../../Footer"
import Header from "../../../Header"
import ContentTemplatesLeft from "../../../LeftAndRightContent/ContentTemplatesLeft"
import ContentTemplatesRight from "../../../LeftAndRightContent/ContentTemplatesRight"
import Navbar from "../../../Navbar"
import KBCLParagraph5Right from "../KBCLParagraph5Right"
import NewKBCLParagraph3Left from "./NewKBCLParagraph3Left"
import NewKBCLParagraph4Left from "./NewKBCLParagraph4Left"
import NewKBCLParagraph1Right from "./NewKBCLParagraph1Right"
import NewKBCLParagraph2Right from "./NewKBCLParagraph2Right"
import NewKBCLParagraph3Right from "./NewKBCLParagraph3Right"
import NewKBCLParagraph4Right from "./NewKBCLParagraph4Right"
import NewKBCLParagraph2Left from "./NewKBCLParagraph2Left"
import NewKBCLParagraph1Left from "./NewKBCLParagraph1Left"

function NewKarenBaptistChurchOfLincoln() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <div><Image className="object-cover" src='/images/KarenBaptistChurchOfLincolnImage/LKCCF.jpg' width={1024} height={260} alt='lincoln'/></div>
    <div className='flex bg-white'>
      <ContentTemplatesLeft
        title="w>td.zSd.o&." 
        pic="/images/KarenBaptistChurchOfLincolnImage/Isaacmoo.JPG"
        pic2="/images/KarenBaptistChurchOfLincolnImage/Jame1.jpg"
       
        description="o&.tgpJ;rllw>td.zSd.o&."
        description2="o&.uFhunDxlw>td.zSd.o&.pXR"

        title2="w> bg t qX u wD>"
        title3="vXw>qJ;usd;t*D>"
        title4="w>td.zSd.t*h>vXtylRuGHm>"
        title5="w>td.zSd.w>uGJ;eD."
        para1={<NewKBCLParagraph1Left/>}
        para2={<NewKBCLParagraph2Left/>}
        para3={<NewKBCLParagraph3Left/>}
        para4={<NewKBCLParagraph4Left/>}
        
        />
      <ContentTemplatesRight
          title1="vhcX.unDbsXxHc&Hmzdw>td.zSd."
          titleSpan="First Karen Baptist Church of Lincoln"
          para1={<NewKBCLParagraph1Right/>}
          title2="vhcX.w>td.zSd.t*h>zk.udm"
          para2={<NewKBCLParagraph2Right/>}
          para3={<NewKBCLParagraph3Right/>}
          para4={<NewKBCLParagraph4Right/>}
          para5={<KBCLParagraph5Right/>}
          title3=" w>td.zSd.urHwHm'D;ySRb.rlb.'gwz.
          "
          title4="w>td.zSd.0JRusdRurHwHm'D;ySRb.rlb.'gwz.(1)"
          title5="w>td.zSd.0JRusdRurHwHm'D;ySRb.rlb.'gwz.(2) "
        
          line1={<hr className='w-[98%] border-[.5px] border-black'/>}
          line2={<hr className='w-[98%] border-[.5px] border-black'/>}
          line3={<hr className='w-[98%] border-[.5px] border-black'/>}
          line4={<hr className='w-[98%] border-[.5px] border-black'/>}
          line5={<hr className='w-[98%] border-[.5px] border-black'/>}

          
          
        />
    </div>
    <Footer/>
  </div>
  )
}

export default NewKarenBaptistChurchOfLincoln