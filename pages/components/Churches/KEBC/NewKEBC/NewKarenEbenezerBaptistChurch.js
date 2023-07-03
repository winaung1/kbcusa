import Image from "next/image"
import Header from "../../../Header"
import Navbar from "../../../Navbar"
import ContentTemplatesLeft from "../../../LeftAndRightContent/ContentTemplatesLeft"
import EbenezarLeft1 from "../EbenezarLeft1"
import EbenezarLeft2 from "../EbenezarLeft2"
import ContentTemplatesRight from "../../../LeftAndRightContent/ContentTemplatesRight"
import EbenezarRight4 from "../EbenezarRight4"
import Footer from "../../../Footer"
import NewEbenezarRight1 from "./NewEbenezarRight1"
import NewEbenezarRight2 from "./NewEbenezarRight2"
import NewEbenezarRight3 from "./NewEbenezarRight3"
import NewEbenezarRight4 from "./NewEbenezarRight4"
import NewEbenezarLeft1 from "./NewEbenezarLeft1"
import NewEbenezarLeft2 from "./NewEbenezarLeft2"
import NewEbenezarLeft3 from "./NewEbenezarLeft3"
import NewEbenezarLeft4 from "./NewEbenezarLeft4"


function NewKarenEbenezerBaptistChurch() {
  return (
    <div className='w-[1023px] mx-auto min-h-screen'>
    <Header/>
    <Navbar/>
    <Image src='/images/KarenEbenezerBaptistChurchImage/EbenezerKarenBaptistChurch.jpg' width={1024} height={260} alt='ebenezer'/>
    <div className='flex bg-white'>
      <ContentTemplatesLeft
        title="w>td.zSd.o&." 
        pic="/images/KarenEbenezerBaptistChurchImage/Debora.jpg"
        pic2="/images/KarenEbenezerBaptistChurchImage/EKBCpastor.jpg"
        fontz="text-xl"
        description="w>td.zSd.o&.rk.   'd.'bd&.'H"
        description2="o&.q.uyDR  w>td.zSd.o&.pXR"
        title2="w> bg t qX u wD>"
        title3="vXw>qJ;usd;t*D>"
        title4="w>td.zSd.t*h>vXtylRuGHm>"
        title5="vXw>qJ;usd;t*D>"
        para1={<NewEbenezarLeft1/>}
        para2={<NewEbenezarLeft2/>}
        para3={<NewEbenezarLeft3/>}
        para4={<NewEbenezarLeft4/>}
       
        />
      <ContentTemplatesRight
            title1="unDbsXxHc&amp;HmzdthRbhRMp&gt;w&gt;td.zSd."
            titleSpan="Karen Ebenezer Baptist Church"
            title2=" w&gt;td.zSd.t*h&gt;zk.udm"
            title3="w&gt;  td. zSd. ySR wD cd. &amp;d. rJ w&gt;"
            title4="w>td.zSd.0JRusdRySRb.rlb.'gwz."
            para1={<NewEbenezarRight1/>}
            para2={<NewEbenezarRight2/>}
            para3={<NewEbenezarRight3/>}
            para4={<NewEbenezarRight4/>}
           
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

export default NewKarenEbenezerBaptistChurch