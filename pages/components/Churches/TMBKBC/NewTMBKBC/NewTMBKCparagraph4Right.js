import Link from "next/link";
import { handleClientScriptLoad } from "next/script"
import React, { useState } from "react"

function NewTMBKCParagraph4Right() {

      const [showYouth, setshowYouth] = useState(false)
      const [showWomen, setshowWomen] = useState(false)
      const [showChristian, setshowChristian] = useState(false)
      const [showMinistry, setshowMinistry] = useState(false)
      const [showMission, setshowMission] = useState(false)
      const [showCulture, setshowCulture] = useState(false)
      const [showCounseling, setshowCounseling] = useState(false)
      const [showGKBC, setshowGKBC] = useState(false)

      function handleClickYouth(){
          setshowYouth(!showYouth);
      }
      function handleClickWomen(){
          setshowWomen(!showWomen);
      }
      function handleClickChristian(){
          setshowChristian(!showChristian);
      }
      function handleClickMinistry(){
          setshowMinistry(!showMinistry);
      }
      function handleClickMission(){
          setshowMission(!showMission);
      }
      function handleClickCulture(){
          setshowCulture(!showCulture);
      }
      function handleClickCounseling(){
        setshowCounseling(!showCounseling);
    }
      function handleClick2015(){
          setshowGKBC(!showGKBC);
      }
  return (
    <div className='font-sans '>
      <div className='flex justfy-between space-x-5'>
          
          <div>
            <h1 className="cursor-pointer"  onClick={handleClickYouth}>YOUTH</h1>
              <div className={showYouth ? 'block' : 'hidden'}>
                <div>
                  <p className="cursor-pointer underline" onClick={handleClick2015}>REPORT</p>
                  <div className={showGKBC ? 'flex flex-col gap-2 list-decimal' : 'hidden'}>
                    
                   <Link href='/pdf/GKBCpdf/kaw.pdf'>
                      <a className="text-blue-500 text-lg" target='_blank'>
                        2015(pdf2)
                      </a>
                    </Link>

                    <Link href='/pdf/GKBCpdf/kaw.pdf'>
                      <a className="text-blue-500 text-lg" target='_blank'>
                        2016(pdf2)
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
          </div>


          <div>
            <h1 className="cursor-pointer"  onClick={handleClickWomen}>WOMEN</h1>
              <div className={showWomen ? 'block' : 'hidden'}>
                <div>
                  <p className="cursor-pointer underline" onClick={handleClick2015}>REPORT</p>
                  <div className={showGKBC ? 'flex flex-col gap-2 list-decimal' : 'hidden'}>
                    
                    <Link href='/pdf/GKBCpdf/kaw.pdf'>
                      <a className="text-blue-500 text-lg" target='_blank'>
                        2015(pdf2)
                      </a>
                    </Link>

                    <Link href='/pdf/GKBCpdf/kaw.pdf'>
                      <a className="text-blue-500 text-lg" target='_blank'>
                        2016(pdf2)
                      </a>
                    </Link> 
                  </div>
                </div>
              </div>
          </div>

          <div>
            <h1 className="cursor-pointer"  onClick={handleClickChristian}>CHRISTIAN</h1>
              <div className={showChristian ? 'block' : 'hidden'}>
                <div>
                  <p className="cursor-pointer underline" onClick={handleClick2015}>REPORT</p>
                  <div className={showGKBC ? 'flex flex-col gap-2 list-decimal' : 'hidden'}>
                    
                   <Link href='/pdf/GKBCpdf/kaw.pdf'>
                      <a className="text-blue-500 text-lg" target='_blank'>
                        2015(pdf2)
                      </a>
                    </Link>

                    <Link href='/pdf/GKBCpdf/kaw.pdf'>
                      <a className="text-blue-500 text-lg" target='_blank'>
                        2016(pdf2)
                      </a>
                    </Link> 
                  </div>
                </div>
              </div>
          </div>

          <div>
            <h1 className="cursor-pointer"  onClick={handleClickMinistry}>MINISTRY</h1>
              <div className={showMinistry ? 'block' : 'hidden'}>
                <div>
                  <p className="cursor-pointer underline" onClick={handleClick2015}>REPORT</p>
                  <div className={showGKBC ? 'flex flex-col gap-2 list-decimal' : 'hidden'}>
                    
                   <Link href='/pdf/GKBCpdf/kaw.pdf'>
                      <a className="text-blue-500 text-lg" target='_blank'>
                        2015(pdf2)
                      </a>
                    </Link>

                    <Link href='/pdf/GKBCpdf/kaw.pdf'>
                      <a className="text-blue-500 text-lg" target='_blank'>
                        2016(pdf2)
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
          </div>

          <div>
            <h1 className="cursor-pointer"  onClick={handleClickMission}>MISSION</h1>
              <div className={showMission ? 'block' : 'hidden'}>
                <div>
                  <p className="cursor-pointer underline" onClick={handleClick2015}>REPORT</p>
                  <div className={showGKBC ? 'flex flex-col gap-2 list-decimal' : 'hidden'}>
                    
                   <Link href='/pdf/GKBCpdf/kaw.pdf'>
                      <a className="text-blue-500 text-lg" target='_blank'>
                        2015(pdf2)
                      </a>
                    </Link>

                    <Link href='/pdf/GKBCpdf/kaw.pdf'>
                      <a className="text-blue-500 text-lg" target='_blank'>
                        2016(pdf2)
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
          </div>

          <div>
            <h1 className="cursor-pointer"  onClick={handleClickCulture}>CULTURE</h1>
              <div className={showCulture ? 'block' : 'hidden'}>
                <div>
                  <p className="cursor-pointer underline" onClick={handleClick2015}>REPORT</p>
                  <div className={showGKBC ? 'flex flex-col gap-2 list-decimal' : 'hidden'}>
                    
                   <Link href='/pdf/GKBCpdf/kaw.pdf'>
                      <a className="text-blue-500 text-lg" target='_blank'>
                        2015(pdf2)
                      </a>
                    </Link>

                    <Link href='/pdf/GKBCpdf/kaw.pdf'>
                      <a className="text-blue-500 text-lg" target='_blank'>
                        2016(pdf2)
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
          </div>

          <div>
            <h1 className="cursor-pointer"  onClick={handleClickCounseling}>COUNSELING</h1>
              <div className={showCounseling ? 'block' : 'hidden'}>
                <div>
                  <p className="cursor-pointer underline" onClick={handleClick2015}>REPORT</p>
                  <div className={showGKBC ? 'flex flex-col gap-2 list-decimal' : 'hidden'}>
                    
                   <Link href='/pdf/GKBCpdf/kaw.pdf'>
                      <a className="text-blue-500 text-lg" target='_blank'>
                        2015(pdf2)
                      </a>
                    </Link>

                    <Link href='/pdf/GKBCpdf/kaw.pdf'>
                      <a className="text-blue-500 text-lg" target='_blank'>
                        2016(pdf2)
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
          </div>
     </div>
  </div>  
  )
}

export default NewTMBKCParagraph4Right