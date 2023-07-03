
import Link from "next/link";
import React, { useState } from "react"
function NewKnyawleft4() {
    const [showYouth, setshowYouth] = useState(false)
    const [showGKBC, setshowGKBC] = useState(false)

    function handleClickYouth(){
        setshowYouth(!showYouth);
    }
   
  
    function handleClick2015(){
        setshowGKBC(!showGKBC);
    }

  return (
    <div className='font-sans text-[15px]'>
    <div className='flex justfy-between space-x-5'>
        
        <div>
          <h1 className="cursor-pointer"  onClick={handleClickYouth}>1.OKBC တၢ်အိၣ်ဖှိၣ်အတၢ်ကွဲးနီၣ်</h1>
          <div>
                <p className="cursor-pointer underline" onClick={handleClick2015}>တနံၣ်တဘျီတၢ်အိၣ်ဖှိၣ်</p>
                <div className={showGKBC ? 'flex flex-col gap-2 list-decimal' : 'hidden'}>
                  
                 <Link href='/pdf/GKBCpdf/kaw.pdf'>
                    <a className="text-blue-500 text-lg" target='_blank'>
                      2015(pdf2)
                    </a>
                  </Link>

                  <Link href='/pdf/GKBCpdf/kaw.pdf'>
                    <a className="text-blue-500 text-lg" target='_blank'>
                      2015(pdf2)
                    </a>
                  </Link>

                </div>
                </div>
                </div>
                </div>
                </div>
  )
}

export default NewKnyawleft4