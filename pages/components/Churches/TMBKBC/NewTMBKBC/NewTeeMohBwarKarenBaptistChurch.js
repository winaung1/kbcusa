import Image from "next/image"
import Header from "../../../Header"
import Navbar from "../../../Navbar"
import ContentTemplatesLeft from "../../../LeftAndRightContent/ContentTemplatesLeft"
import TMBKCparagraph1Left from "../TMBKCparagraph1Left"
import TMBKCparagraph2Left from "../TMBKCparagraph2Left"
import Footer from "../../../Footer"
import ContentTemplatesRight from "../../../LeftAndRightContent/ContentTemplatesRight"
import NewTMBKCparagraph1Right from "./NewTMBKCparagraph1Right"
import NewTMBKCparagraph2Right from "./NewTMBKCparagraph2Right"
import NewTMBKCparagraph3Right from "./NewTMBKCparagraph3Right"
import NewTMBKCParagraph4Right from "./NewTMBKCparagraph4Right"
import NewTMBKCparagraph1Left from "./NewTMBKCparagraph1Left"
import NewTMBKCparagraph2Left from "./NewTMBKCparagraph2Left"
import NewTMBKCparagraph3Left from "./NewTMBKCparagraph3Left"
import NewTMBKCparagraph4Left from "./NewTMBKCparagraph4Left"



function NewTeeMohBwarKarenBaptistChurch() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <Image src='/images/TeeMohBwarKar/TMBChuchgroup.jpg' width={1024} height={260} alt='omaha'/>
    <div className='flex bg-white'>
      <ContentTemplatesLeft
        title="w>td.zSd.o&." 
        pic="/images/TeeMohBwarKar/TMBPastor1.jpg"
       
        description="w>td.zSd.o&.rk.o&.rk.obshrl"
       
        title2="w> bg t qX u wD>"
        title3="vXw>qJ;usd;t*D>"
        title4='w>td.zSd.t*h>vXtylRuGHm'
        title5="w>td.zSd.w>uGJ;eD."
        para1={<NewTMBKCparagraph1Left/>}
        para2={<NewTMBKCparagraph2Left/>}
        para3={<NewTMBKCparagraph3Left/>}
        para4={<NewTMBKCparagraph4Left/>}
        />
      <ContentTemplatesRight
        title1="xHrd>yS>unDbsXxHc&Hmzdw>td.zSd."
        titleSpan="Tee Moh Bwar Karen Baptist Church"
        title2="xHrd>yS>unDbsXxHc&Hmzdw>td.zSd.t*h>zk.udm"
        para1={<NewTMBKCparagraph1Right/>}
        para2={<NewTMBKCparagraph2Right/>}
        para3={<NewTMBKCparagraph3Right/>}
        para4={<NewTMBKCParagraph4Right/>}
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

export default NewTeeMohBwarKarenBaptistChurch