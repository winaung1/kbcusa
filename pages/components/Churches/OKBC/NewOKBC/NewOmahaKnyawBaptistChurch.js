import Image from "next/image"
import Header from "../../../Header"
import Navbar from "../../../Navbar"
import ContentTemplatesLeft from "../../../LeftAndRightContent/ContentTemplatesLeft"
import NewKnyawLeft1 from "./NewKnyawLeft1"
import NewKnyawLeft2 from "./NewKnyawLeft2"
import NewKnyawLeft3 from "./NewKnyawLeft3"
import NewKnyawleft4 from "./NewKnyawLeft4"
import ContentTemplatesRight from "../../../LeftAndRightContent/ContentTemplatesRight"
import Footer from "../../../Footer"
import KnyawRight3 from "../KnyawRight3"
import NewKnyawRight1 from "./NewKnyawRight1"
import NewKnyawRight2 from "./NewKnyawRight2"



function NewOmahaKnyawBaptistChurch() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <Image src='/images/OmahaKnyawBaptistChurchImage/OmahaKnyawBaptistChurch.jpg' width={1024} height={260} alt='knyaw'/>
    <div className='flex bg-white'>
      <ContentTemplatesLeft
        title="w>td.zSd.o&." 
        pic="/images/OmahaKnyawBaptistChurchImage/Pastor1.jpg"
        pic2="/images/OmahaKnyawBaptistChurchImage/OKBCPaster2.jpg"

        description="w>td.zSd.o&.o&nbsp;&.'d.bd.xl"
        description2="o&.'d.uGJ>ubDvhw>td.zSd.o&.pXR"

        title2="w> bg t qX u wD>"
        title3="vXw>qJ;usd;t*D>"
        title4="w>td.zSd.t*h>vXtylRuGHm"
        title5="w>td.zSd.w>uGJ;eD."

        para1={<NewKnyawLeft1/>}
        para2={<NewKnyawLeft2/>}
        para3={<NewKnyawLeft3/>}
        para4={<NewKnyawleft4/>}
        
        />
      <ContentTemplatesRight
            title1="td;r[.unDbsXxHc&amp;Hmzdw&gt;td.zSd."
            titleSpan="Omaha Knyaw Baptist Church"
            title2="w&gt;td.zSd.t*h&gt;zk.udm"
            para1={<NewKnyawRight1/>}
            para2={<NewKnyawRight2/>}
            para3={<KnyawRight3/>}
            line1={<hr className='w-[98%] border-[.5px] border-black'/>}
            line2={<hr className='w-[98%] border-[.5px] border-black'/>}
            line3={<hr className='w-[98%] border-[.5px] border-black'/>}
        />
    </div>
    <Footer/>
  </div>
  )
}

export default NewOmahaKnyawBaptistChurch