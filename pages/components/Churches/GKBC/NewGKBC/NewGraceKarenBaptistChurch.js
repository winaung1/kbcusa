import Image from "next/image"
import Header from "../../../Header"
import Navbar from "../../../Navbar"
import GraceLeft1 from "../GraceLeft1"
import GraceLeft2 from "../GraceLeft2"
import ContentTemplatesRight from "../../../LeftAndRightContent/ContentTemplatesRight"
import GraceRight1 from "../GraceRight1"
import GraceRight2 from "../GraceRight2"
import GraceRight3 from "../GraceRight3"
import GraceRight4 from "../GraceRight4"
import Footer from "../../../Footer"
import ContentTemplatesLeft from "../../../LeftAndRightContent/ContentTemplatesLeft"


function NewGraceKarenBaptistChurch() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <Image src='/images/GraceKarenBaptistChurchImage/GraceKarenBaptistChurch.gif' width={1024} height={260} alt='grace'/>
    <div className='flex bg-white'>
      <ContentTemplatesLeft
        title="w>td.zSd.o&.rk." 
        pic="/images/GraceKarenBaptistChurchImage/pastor.gif"
        pic2="/images/GraceKarenBaptistChurchImage/pastor.gif"
        description="o&.rk._yHxlw>td.zSd.o&.rk."
        description2="o&.rk._yHxl w>td.zSd.o&.rk. pXR"
        title2="w> bg t qX u wD>"
        title3="vXw>qJ;usd;t*D>"
        para1={<GraceLeft1/>}
        para2={<GraceLeft2/>}
        />
      <ContentTemplatesRight
            title1="b.qd.*hRunDbsXxHc&amp;Hmzdw&gt;td.zSd."
            titleSpan="Grace Karen Baptist Church"
            title2="w&gt;td.zSd.t*h&gt;zk.udm"
            title3="w&gt;  td. zSd. *H&gt; bg"
            title4="w&gt;  td. zSd. t w&gt; [l; w&gt; *JR"
            para1={<GraceRight1/>}
            para2={<GraceRight2/>}
            para3={<GraceRight3/>}
            para4={<GraceRight4/>}
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

export default NewGraceKarenBaptistChurch