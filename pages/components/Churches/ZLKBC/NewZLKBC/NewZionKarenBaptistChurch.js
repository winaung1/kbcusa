import Image from "next/image"
import Header from "../../../Header"
import Navbar from "../../../Navbar"
import ContentTemplatesLeft from "../../../LeftAndRightContent/ContentTemplatesLeft"
import ZLKBCparagraphleft2 from "../ZLKBCparagraphleft2"
import ContentTemplatesRight from "../../../LeftAndRightContent/ContentTemplatesRight"
import KCKKBCparagraph1Right from "../../KCKKBC/KCKKBCparagraph1Right"
import KCKKBCparagraph2Right from "../../KCKKBC/KCKKBCparagraph2Right"
import Footer from "../../../Footer"
import NewZLKBCparagraph1Left from "./NewZLKBCparagraph1Left"
import NewZLKBCparagraph3Right from "./NewZLKBCparagraph3Right"


function NewZionKarenBaptistChurch() {
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
          para1={<NewZLKBCparagraph1Left/>}
          para2={<ZLKBCparagraphleft2/>}
          />
      <ContentTemplatesRight
          title1="unDbsXxHc&Hmzdw>td.zSd."
          titleSpan="Kansas City Kansas Karen Baptist Church"
          title2="w&gt;td.zSd.t*h&gt;zk.udm"
          title3="w> td. zSd. cd. e> ySR wD cd. & d. rJ w> w z."
          para1={<KCKKBCparagraph1Right/>}
          para2={<KCKKBCparagraph2Right/>}
          para3={<NewZLKBCparagraph3Right/>}
          line1={<hr className='w-[98%] border-[.5px] border-black'/>}
          line2={<hr className='w-[98%] border-[.5px] border-black'/>}
          line3={<hr className='w-[98%] border-[.5px] border-black'/>}
        />
    </div>
    <Footer/>
</div>
  )
}

export default NewZionKarenBaptistChurch