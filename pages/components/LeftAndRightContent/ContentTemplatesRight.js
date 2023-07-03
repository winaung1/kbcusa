import React from 'react'

function ContentTemplatesRight({title1, title2, title3, title4, title5, title6, titleSpan, 
  line1, line2, line3, line4, line5, line6, line7,
  para1, para2, para3, para4, para5,}) {
  return (
    <div className='px-5 w-[80%] p-2 text-xl'>
      <h1 className='text-[#8C3420] text-2xl'>{title1}<span className='font-sans'>-{titleSpan}</span></h1>
      <h1 className='pt-4 text-2xl text-[#8C3420] '>{title2}</h1>
      {line1}
      <div className='py-3 text-xl'>{para1}</div>
      <h1 className='text-2xl text-[#8C3420]'>{title3}</h1>
      {line2}
      <div className='py-3 text-xl'>{para2}</div>
      <h1 className='text-2xl text-[#8C3420]'>{title4}</h1>
      {line3}
      <div>{para3}</div>
      <h1 className='text-2xl text-[#8C3420]'>{title5}</h1>
      {line4}
      <div>{para4}</div>
      <h1 className='text-2xl text-[#8C3420]'>{title6}</h1>
      {line5}
      <div>{para5}</div>
      
    </div>
  )
}

export default ContentTemplatesRight