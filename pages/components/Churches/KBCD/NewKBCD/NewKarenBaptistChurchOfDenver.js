import Image from "next/image"
import Header from "../../../Header"
import Navbar from "../../../Navbar"
import ContentTemplatesLeft from "../../../LeftAndRightContent/ContentTemplatesLeft"
import NewDenverLeft1 from "./NewDenverLeft1"
import NewDenverLeft2 from "./NewDenverleft2"
import ContentTemplatesRight from "../../../LeftAndRightContent/ContentTemplatesRight"
import NewDenverRight1 from "./NewDenverRight1"
import Footer from "../../../Footer"
import NewDenverRight2 from "./NewDenverRight2"
import NewDenverRight3 from "./NewDenverRight3"
import NewDenverRight4 from "./NewDenverRight4"
import NewDenverLeft3 from "./NewDenverLeft3"
import NewDenverLeft4 from "./NewDenverLeft4"




function NewKarenBaptistChurchOfDenver() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <Image src='/images/KarenBaptistChurchOfDenverImage/Denvergroup.jpg' width={1024} height={260} alt='denver'/>
    <div className='flex bg-white'>
      <ContentTemplatesLeft
        title="w>td.zSd.o&." 
        pic="/images/KarenBaptistChurchOfDenverImage/Lernoo.png"
        pic2="/images/KarenBaptistChurchOfDenverImage/Jue.png"

        description="o&.'d.vX>rlr.&nbsp;wh.w>td.zSd.o&."
        description2="o&.zdwl;uFLw>&nbsp;td.zSd.o&.pXR"
        
        title2="w> bg t qX u wD>"
        title3="vXw>qJ;usd;t*D>"
        title4="w>td.zSd.t*h>vXtylRuGHm>"
        title5="w>td.zSd.w>uGJ;eD."
        para1={<NewDenverLeft1/>}
        para2={<NewDenverLeft2/>}
        para3={<NewDenverLeft3/>}
        para4={<NewDenverLeft4/>}
        />
      <ContentTemplatesRight
           title1="'JbX.unDbsXxHc&amp;Hmzdw&gt;td.zSd."
           titleSpan=" Karen Baptist Church Of Denver"
           title2=" w&gt;td.zSd.t*h&gt;zk.udm"
           title3="cd.e>oh.wz.vXtwDcd.&dmrJvXw>td.zSd.tylRM.rh>'fvmtHRtod;M.vDRI"
           title4="'JbX.unDbsXxHw>td.zSd.0JRusdRwz."
          
           para1={<NewDenverRight1/>}
           para2={<NewDenverRight2/>}
           para3={<NewDenverRight3/>}
           para4={<NewDenverRight4/>}
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

export default NewKarenBaptistChurchOfDenver