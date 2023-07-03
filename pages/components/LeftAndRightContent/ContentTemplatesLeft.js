import React from 'react'
import Image from 'next/image'

function ContentTemplatesLeft({title, pic, pic2,description, description2, title2, fontz, font2,title3, title4, title5, para1, para2, para3, para4}) {
  return (
    <div className='min-h-screen bg-white p-2 w-[250px] text-xl'>
        
        <div className='relative'>
            <Image className='rounded-t-xl' src='/images/TemplateImage/header4.gif' width={245} height={40} alt='header4'/>
            <h1 className='absolute top-1 text-[#8C3420] left-5 text-2xl'>{title}</h1>
        </div>
        <div className='w-[122px] mx-auto'>
            <Image className='object-cover' src={pic} width={122} height={121} alt='ok'/>
            <p className={`text-[#8C3420] text-center break-words  ${fontz}`}>{description}</p>
        </div>


        <div className='w-[122px] mx-auto'>
            <Image className='object-cover' src={pic2} width={122} height={121} alt/>
            <p className='text-[#8C3420] text-center text-xl break-words'>{description2}</p>
        </div>

        

        <div className='relative'>
            <Image className='rounded-t-xl' src='/images/TemplateImage/header4.gif' width={245} height={40} alt='header4'/>
            <h1 className='absolute top-1 text-[#8C3420] left-5 text-2xl'>{title2}</h1>
            <p>{para1}</p>
        </div>

        <div className='relative'>
            <Image className='rounded-t-xl' src='/images/TemplateImage/header4.gif' width={245} height={40} alt='header4'/>
            <h1 className='absolute top-1 text-[#8C3420] left-5 text-2xl'>{title3}</h1>
            <p>{para2}</p>
         </div>

            <div className='relative'>
            <Image className='rounded-t-xl' src='/images/TemplateImage/header4.gif' width={245} height={40} alt='header4'/>
            <h1 className='absolute top-1 text-[#8C3420] left-5 text-2xl'>{title4}</h1>
            <p>{para3}</p>
        </div>

        <div className='relative'>
            <Image className='rounded-t-xl' src='/images/TemplateImage/header4.gif' width={245} height={40} alt='header4'/>
            <h1 className='absolute top-1 text-[#8C3420] left-5 text-2xl'>{title5}</h1>
            <p>{para4}</p>
        </div>
        
    </div>
  )
}

export default ContentTemplatesLeft