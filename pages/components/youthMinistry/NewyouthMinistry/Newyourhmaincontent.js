import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

function Newyourhmaincontent() {
    const [showYouth, setshowYouth] = useState(false)
    const [showGKBC, setshowGKBC] = useState(false)

    function handleClickYouth(){
        setshowYouth(!showYouth);
    }


    function handleClick2015(){
        setshowGKBC(!showGKBC);
    }

 
return (
  <div>
  <Image src='/images/YouthMinistryImage/youth201518.jpg' width={1024} height={260} alt='youth'/>
  <div className='min-h-screen bg-white p-2'>
      <div className='w-3/4 mx-auto text-2xl'>
        <p className='font-sans' >New</p>
        <h1 className='text-red-500 text-3xl text-center py-3'>ကလံၤစိးထဃၣ်သးကဝီၤတၢ်စံၣ်စိၤကဘျံးပၤ</h1>
        <hr className='font-bold text-3xl w-3/4 mx-auto border-[1px] border-black mb-3'/>
        <p>
        w&gt; &apos;k; td. xD. u0DR usJ; pX; u &X t w&gt; y nd. rh&gt; w&gt; u xk; M&gt; uhR y ySR o; p&gt; w z. t w&gt; o; pJ tg xD. vX w&gt; bl. w&gt; bg &apos;D; rR up&gt; 
        ,GR t w&gt; zH; w&gt; rR vX w&gt; td.zSd. tylR<span class="font-sans text-sm">,</span> A u o; ql. &apos;D; u usJ; pX; rR &apos;d. xD. w&gt; td. zSd. t *D&gt; vDRIA w&gt; vX y u b. rR *hR xD. M. td. &apos;H; 0J tg rHR tusg w&gt; qJ; usdm vd m 
        o;<span class="font-sans text-sm">,</span> A &apos;D; y vd. b. tg xD. w&gt; [h. ul. [h. z; &apos;D; [h. xD. oud; w&gt; xH. vX w&gt; rR &apos;d. xD. y u0DR usJ; pX; u&X t *D&gt; M. vDRI
        </p>
        <p className='py-5'>
          u 0DR usJ; pX; u&X ySR wD cd. &d. rJ w&gt;  vX A 2015 eH. wkR A 2018eH.
        </p>
        <div className='pt-10 w-fit'>
          <p>u&X cd. A=A o &. rk. q. vDR tJ. A</p>
          <p>u&Xcd.cH *R w *R A=A o&.tJ.eh&gt;rl</p>
          eJ. %GJ. A= Ao &. rk. unD zD pd A<br/>
          eJ. %GJ. oCJR A=A o&.-uh;pd<br/>
          ySRyXRph A=A o&.qXeh&gt;0g<br/>
          ySR o rH ord; ph A=Ao&.rk.tJ.uD&gt;ck. <span class="font-sans text-sm">,</span> A eD&gt;tJ.q.xl<br/>
          ySR rR eD. rR Cg w&gt; A=AeD&gt; tJ.uvkmzD<span class="font-sans text-sm">,</span>A pDRxdvGh.<br/>
          ySR [h. ul. w&gt; A=A u 0DR cd. e&gt; &apos;D; u0DR tylR w&gt; td. zSd. wz. t w&gt; zSd. o&.
        </div>
        <p className='py-5'>
          w&gt; [l; w&gt; *JR
        </p>
        <div className='py-5'>
          <p>
              1IA weH. w bsD td. &apos;D; w&gt; td. zSd. <span class="font-sans text-sm">,</span>
              A rh rh&gt; *h&gt; *D&gt; tl w&gt; td. zSd. M. b. w&gt; rR tDR vX vD wJ pd tylR
          </p>
          <p>
              2IA w eH. w bsD td. &apos;D; usJ; pX;u&X w&gt; o; 0H. jyX &apos;D;
               ySR vX t rR M&gt; cd. z; A 1 b. w&gt; qSX xD. tDR ql uD&gt; w&gt; jyX
          </p>
          <p>
              3IA w&gt; [; &h vdm rkm vdm [; bg oud; ,GR vX w&gt; td. zSd. w z. b. w&gt; rR tDR A 4 vg w bsD
          </p>
          <p>
              4IA qSX xD. 0DR usJ; pX; u&X cX. p; ql uD&gt; usJ; pX; u&X w&gt; rR vd
          </p>
          <p>
              5IA w&gt; wdm td. vX w&gt; u xk; xD. w&gt; o; 0H. vD ,JR uGDR
          </p>
        </div>

        <div className='py-10'>
            
          w&gt;qJ;usd;vD&gt;
          eD&gt;unDzDpd
          <p className='font-sans text-sm'>
              knyawpawsoe@yahoo.com<br/>
              816-606-3041
          </p>
          o&.rk.q.vDRtJ.
          <p className='font-sans text-sm'>402-314-1810</p>

          
          <p className='font-sans text-sm leading-6'>
              History<br/>
              2012 to 2015
          </p>
        </div>
        
        <a  href="/components/womenMinistry/WomenMinistry" target='_blank' className='underline hover:text-blue-500 hover:cursor-pointer text-[18px]'>၁သၢနံၣ်တဘျီပိာ်မုၣ်၀ဲၤကျိၤတၢ်ဂ့ၢ်ကဘျံးပၤ<span className=' text-sm'></span></a>  
        {<hr className='w-[98%] border-[.5px] border-black'/>}
            
        <p className= 'pt-3 font-sans text-[20px] font-bold'> တၢ်အိၣ်ဖှိၣ်တဖၣ်အပှၤသးစၢ် Website Page</p>
            <ol className=''>

                <li><a href='/components/DepartmentChurchYouth/2FKBCO/FKBCOYouth' target='_blank' className='underline hover:text-blue-500 hover:cursor-pointer text-[23px]'>1Io&dmwXunDbsXxHc&Hmzdw&gt;td.zSd.usJ;pX;u&Xo;p&gt;<span className='font-sans text-sm'></span></a></li>
                <li><a href='/components/DepartmentChurchYouth/2GKBC/GKBCYouth' target='_blank' className='underline hover:text-blue-500 hover:cursor-pointer text-[16px]'>၂I ဘၣ်ဆိၣ်ဂ့ၤကညီဘျၢထံခရံာ်ဖိတၢ်အိၣ်ဖှိၣ်ကျဲၤစၢၤကရၢသးစၢ်<span className='font-sans text-sm'>,</span></a></li>
                <li><a href='/components/DepartmentChurchYouth/2HGNKBC/HGNKBCYouth' target='_blank' className='underline hover:text-blue-500 hover:cursor-pointer text-[23px]'>3I xH*X&gt;eHRunDbsXxHc&Hmzdw&gt;td.zSd.usJ;pX;u&Xo;p&gt;<span className='font-sans text-sm'></span></a></li>
                <li><a href='/components/DepartmentChurchYouth/2KBCD/KBCDYouth' target='_blank' className='underline hover:text-blue-500 hover:cursor-pointer text-[23px]'>4I 'JbX.unDbsXxHc&Hmzdw&gt;td.zSd.usJ;pX;u&Xo;p&gt;<span className='font-sans text-sm'></span></a></li>
                <li><a href='/components/DepartmentChurchYouth/2KBCDL/KBCDLYouth' target='_blank' className='underline hover:text-blue-500 hover:cursor-pointer text-[23px]'>5I vhcX.unDbsXxHc&Hmzdw&gt;td.zSd.usJ;pX;u&Xo;p&gt;<span className='font-sans text-sm'></span></a></li>
                <li><a href='/components/Churches/KBCL/KarenBaptistChurchOfLincoln' target='_blank' className='underline hover:text-blue-500 hover:cursor-pointer text-[23px]'>6I vhcX&gt;unDbsXxHc&Hmzdw&gt;td.zSd.<span className='font-sans text-sm'>,</span></a>Aw&gt;td.zSd.o&.=o&.tgpJ;rl</li>
                <li><a href='/components/Churches/GKBC/GraceKarenBaptistChurch' target='_blank' className='underline hover:text-blue-500 hover:cursor-pointer text-[23px]'>7I b.qd.*hRunDbsXxHc&Hmzdw&gt;td.zSd.A <span className='font-sans text-sm'>Missouri,</span></a>Aw&gt;td.zSd.o&.=o&.rk.jyHxl</li>
                <li><a href='/components/Churches/KKBC/KaraneeKarenBaptistChurch' target='_blank' className='underline hover:text-blue-500 hover:cursor-pointer text-[23px]'>8u&ReHunDbsXxHc&Hmzdw&gt;td.zSd.<span className='font-sans text-sm'>Missouri,</span></a>Aw&gt;td.zSd.o&.=  =====</li>
                <li><a href='/components/EKBC/EmmanuelKarenBaptistChurch' target='_blank' className='underline hover:text-blue-500 hover:cursor-pointer text-[16px]'>၉။ဧ့ၤမၤ​နူၤအ့လးကညီဘျၢထံခရံာ်ဖိတၢ်အိၣ်ဖှိၣ် <span className='font-sans text-sm'>Missouri,</span></a>Aw&gt;td.zSd.o&.=o&.q.tJ.0g</li>
                <li><a href='/components/Churches/KCKKBC/KansasCityKansasKarenBaptistChurch' target='_blank' className='underline hover:text-blue-500 hover:cursor-pointer text-[16px]'>၁၀။ခဲၣ်စဲၣ်ကညီဘျၢထံခရံာ်ဖိတၢ်အိၣ်ဖှိၣ် <span className='font-sans text-sm'>Missouri,</span></a>Aw&gt;td.zSd.o&.=o&.&SrlRthv;</li>
                <li><a href='/components/Churches/TMBKBC/TeeMohBwarKarenBaptistChurch' target='_blank' className='underline hover:text-blue-500 hover:cursor-pointer text-[16px]'>၁၁။ထံမိၢ်ပှၢ်ကညီဘျၢထံခရံာ်ဖိတၢ်အိၣ်ဖှိၣ်<span className='font-sans text-sm'>Nebraska,</span></a>Aw&gt;td.zSd.o&.=o&.rk.obsh</li>
                <li><a href='/components/Churches/HGNKBC/HteeGerNeeKarenBaptistChurch' target='_blank' className='underline hover:text-blue-500 hover:cursor-pointer text-[16px]'>၁၂။ထံဂၢၢ်နံၤကညီလီၤဘျၢထံခရံာ်ဖိတၢ်အိၣ်ဖှိၣ် <span className='font-sans text-sm'>Nebraska,</span></a>Aw&gt;td.zSd.o&.=o&.tJ.eH.rl</li>
           
            </ol>

            {<hr className='w-[98%] border-[.5px] border-black'/>}
            <p className= 'pt-3 font-sans text-[20px] font-bold'> သးစၢ်၀ဲၤကျိၤတနံၣ်ဘၣ်တနံၣ်တၢ်ကွဲးနီၣ်</p>
      
      </div>
      
      <div className='font-sans flex justify-center'>
    <div className='flex justfy-between space-x-5'>
        
        <div>
          <h1 className="font-bold text-md text-orange-500 cursor-pointer"  onClick={handleClickYouth}>သးစၢ်၀ဲၤကျိၤတနံၣ်ဘၣ်တနံၣ်တၢ်ကွဲးနီၣ်</h1>
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



</div>
</div>
  </div>
 

   
</div>
  )
}

export default Newyourhmaincontent