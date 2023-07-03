import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaHome } from 'react-icons/fa';


function Navbar() {
  return (
    <div className=' bg-gray-800 flex justify-center items-center space-x-4 text-white h-12 z-50'>
        <Link href="/">
          <FaHome className='w-8 h-8 hover:text-purple-500 hover:bg-opacity-50 hover:cursor-pointer text-gray-400 border-r-2 pr-2'/>
        </Link>
          <Link href="/components/SecondHomePage/SecondHomePage">
            <h1 className='hover:text-purple-500 hover:bg-opacity-50 hover:cursor-pointer text-gray-400 border-r-2 pr-2'>ဘၣ်ဃးဒီးကဝီၤအံၤ</h1>
          </Link>
        <Link href="/components/ThirdHomePage/ThirdHomePage">
          <h1 className='hover:text-purple-500 hover:bg-opacity-50 hover:cursor-pointer text-gray-400 border-r-2 pr-2'>ကဝီၤကမံးတံာ်</h1>
        </Link>
        <div className='relative group'>
          <Link href="#">
            <h1 className='hover:text-purple-500 hover:bg-opacity-50 hover:cursor-pointer text-gray-400 border-r-2 pr-2'>ဝဲကျိၤတဖၣ်</h1>
          </Link>
          <div className='absolute top-6 -left-4 bg-gray-800 w-96 p-2 hidden group-hover:block font-sans z-50'>
            <Link href="/components/youthMinistry/NewyouthMinistry/Newyouthministry">
              <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>YOUTH DEPARTMENT</h1>
            </Link>
            <Link href="/components/womenMinistry/NewWomenministry/NewWomenMinistry">
              <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>WOMEN DEPARTMENTss</h1>
            </Link>
            <Link href="/components/childrenMinistry/ChildrenMinistry">
              <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>CHRISTIAN DEPARTMENT</h1>
            </Link>
            <Link href="/components/MinistryDepartment/NewMinistryDepartment/NewMinistryDepartment">
              <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>MINISTRY DEPARTMENT</h1>
            </Link>
            <Link href="/components/missionMinistry/NewMissionMinistry/NewMissionMinistry">
              <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>MISSION DEPARTMENT</h1>
            </Link>
            <Link href="/components/CultureMinistry/NewCultureMinistry/NewCultureMinistry">
              <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>CULTURE AND LITERANCY DEPARTMENT</h1>
            </Link>
            <Link href="/components/CounselingMinistry/NewCounselingMinisrty/NewCounselingMinistry">
              <h1 className='hover:bg-blue-700 hover:cursor-pointer'>CARE AND COUNSELING</h1>
            </Link>
          </div>
        </div>
        <div className='relative group z-10'>
          <Link href="#">
            <h1 className='hover:text-purple-500 hover:bg-opacity-50 hover:cursor-pointer text-gray-400 border-r-2 pr-2'>တၢ်အိၣ်ဖှိၣ်တဖၣ်</h1>
          </Link>
          <div className='absolute top-6 -left-4 bg-gray-800 w-96 hidden group-hover:block p-2 font-sans'>
            <Link href="/components/Churches/KBCL/NewKBCL/NewKarenBaptistChurchOfLincoln">
              <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>LINCOLN KAREN BAPTIST CHURCH</h1>
            </Link>
            <Link href="/components/Churches/FKBCO/NewFKBCO/NewFirstKarenBaptistChurchOfOmaha">
              <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>FIRST KAREN BAPTIST CHURCH OF OMAHA</h1>
            </Link>
            <Link href="/components/Churches/GKBC/NewGKBC/NewGraceKarenBaptistChurch">
              <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>GRACE KAREN BAPTIST CHURCH</h1>
            </Link>
            <Link href="/components/Churches/OKBC/NewOKBC/NewOmahaKnyawBaptistChurch">
              <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>OMAHA KAREN BAPTIST CHURCH</h1>
            </Link>
            <Link href="/components/Churches/KBCD/NewKBCD/NewKarenBaptistChurchOfDenver">
              <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>DENVER KAREN BAPTIST CHURCH</h1>
            </Link>
            <Link href="/components/Churches/KKBC/KaraneeKarenBaptistChurch">
              <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>KARANEE KAREN BAPTIST CHURCH</h1>
            </Link>
            <Link href="/components/Churches/KEBC/NewKEBC/NewKarenEbenezerBaptistChurch">
              <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>KAREN EBENEZER BAPTIST CHURCH</h1>
            </Link>
            <Link href="/components/Churches/ZLKBC/NewZLKBC/NewZionKarenBaptistChurch">
              <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>ZION KAREN BAPTIST CHURCH</h1>
            </Link>
            <Link href="/components/EKBC/NewEKBC/NewEmmanuelKarenBaptistChurch">
              <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>EMMANUEL KAREN BAPTIST CHURCH</h1>
            </Link>
            <Link href="/components/Churches/KCKKBC/NewKCKKBC/NewKansasCityKansasKarenBaptistChurch">
              <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>KANSAS CITY KAREN BAPTIST CHURCH</h1>
            </Link>
            <Link href="/components/Churches/HGNKBC/NewHGNKBC/NewHteeGerNeeKarenBaptistChurch">
              <h1 className='border-b-[1px] hover:bg-blue-700 hover:cursor-pointer'>HTEE GER NEE KAREN BAPTIST CHURCH</h1>
            </Link>
            <Link href="/components/Churches/TMBKBC/NewTMBKBC/NewTeeMohBwarKarenBaptistChurch">
              <h1 className='hover:bg-blue-700 hover:cursor-pointer'>TEE MOH BWAR KAREN BAPTIST CHURCH </h1>
            </Link>
          </div>
        </div>
        <Link href="/components/SixHomePage/SixHomePage">
          <h1 className='hover:text-purple-500 hover:bg-opacity-50 hover:cursor-pointer text-gray-400 border-r-2 pr-2'>တၢ်ဆဲးကျိး</h1>
        </Link>
        <Link href="/components/SeventhHomePage/SeventhHomePage">
          <h1 className='hover:text-purple-500 hover:bg-opacity-50 hover:cursor-pointer text-gray-400 pr-2'>တအိၣ်ယၢၤ</h1>
        </Link>
        
    </div>
  )
}

export default Navbar