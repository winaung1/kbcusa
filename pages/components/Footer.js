import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {checkout} from "../../checkout"
import { 
   FaRegCopyright,
   FaFacebookF, 
   FaYoutube, 
   FaCcPaypal,
   FaCcVisa,
   FaCcMastercard,
   FaCcDiscover,
   FaCcAmex
  } 
   from 'react-icons/fa';
import { checkCustomRoutes } from 'next/dist/lib/load-custom-routes';


function Footer() {
  const footerLinks = [
    {
      id: 1,
      title: "ကဘျံးပၤတၢ" ,
      link: '/'
    },
    {
      id: 2,
      title: "ဘၣ်ဃးဒီးကဝီၤအံၤ" ,
      link: "/components/SecondHomePage/SecondHomePage"
    },
    {
      id: 3,
      title: "ကဝီၤကမံးတံာ်" ,
      link: "/components/ThirdHomePage/ThirdHomePage"
    },
    {
      id: 4,
      title: "ကဝီၤခတဝဲၤကျိၤ" ,
      link: "/components/childrenMinistry/ChildrenMinistry"
    },
    {
      id: 5,
      title: "ကဝီၤဝီာ်မုၣ်ကရၤ" ,
      link: "/components/womenMinistry/WomenMinistry"
    },
    {
      id: 6,
      title: "ကဝီၤကျဲးစၢးကရၢ" ,
      link: "/components/youthMinistry/YouthMinistry"
    },
    {
      id: 7,
      title: "တၢ်ဆဲးကျိး" ,
      link: "/components/SixHomePage/SixHomePage"
    },
    {
      id: 8,
      title: "Water" ,
      link: "/components/SixHomePage/SixHomePage"
    },
  ];
  return (
    <div className='bg h-54 text-white'>
      <div className='flex justify-evenly px-10'>
      <div className='flex items-center space-x-10'>
        <div className='flex flex-col py-5'>
          <h1 className='font-sans text-purple-500 text-xl pb-2'>Home</h1>
          {footerLinks.map(link => (
            <Link key={link.id} href={`${link.link}`}>
              <p className='hover:text-purple-500 cursor-pointer'>{link.title}</p>
            </Link>
          ))}
        </div>
          <hr className='border-gray-500 border-[1px] h-[190px]'/>
      </div>
      <div className='flex items-center space-x-10'>
        <div className='flex flex-col py-5'>
          <h1 className='font-sans text-purple-500 text-xl pb-2'>Donate</h1>
          <div className='flex space-x-2'>
            <div>
              <div onClick={(() => {
            checkout({
              lineItems: [
                {
                  price: "price_1LlIm8EtRFSkR2CjnWO6RTYp",
                  quantity: 1,
                }
              ]
            })
          })}>
                <FaCcPaypal className='text-6xl '/>
              </div>
              <Link href='/'>
                <FaCcVisa className='text-6xl'/>
              </Link>
              <Link href='/'>
                <FaCcMastercard className='text-6xl'/>
              </Link>
            </div>
            <div>
              <Link href='/'>
                <FaCcDiscover className='text-6xl'/>
              </Link>
              <Link href='/'>
                <FaCcAmex className='text-6xl'/>
              </Link>
            </div>
          </div>
        </div>
          <hr className='border-gray-500 border-[1px]  h-[190px]'/>
      </div>
      <div className='flex items-center space-x-10'>
        <div className='flex flex-col py-5 font-sans'>
          <h1 className='font-sans text-purple-500 text-xl pb-2'>Central North KBC</h1>
          <h1>E-mails:</h1>
          <p>kbcusacn@gmail.com</p>
          <p>info@kbcusacn.org</p>
          <div className='opacity-0'>
            <p>kbcusacn@gmail.com</p>
            <p>info@kbcusacn.org</p>
            <p>kbcusacn@gmail.com</p>
            <p>info@kbcusacn.org</p>

          </div>
        </div>
      </div>
      <div className='flex items-center space-x-10'>
        <div className='flex flex-col py-5 font-sans'>
          <h1 className='font-sans text-purple-500 text-xl pb-2'>Find Us On</h1>
          <div className='flex space-x-6'>
            <Link href="https://www.facebook.com/lermumar/">
              <a target="_blank">
                <FaFacebookF className='text-blue-500 text-3xl'/>
              </a>
            </Link>
            <Link href="https://www.youtube.com/user/KBCUSACN">
              <a target="_blank">
                <FaYoutube className='text-red-500 text-3xl'/>
              </a>
            </Link>
          </div>
          <div className='opacity-0'>
            <div className='flex space-x-6'>
              <FaFacebookF className='text-blue-500 text-3xl'/>
              <FaYoutube className='text-red-500 text-3xl'/>
            </div>
            <div className='flex space-x-6'>
              <FaFacebookF className='text-blue-500 text-3xl'/>
              <FaYoutube className='text-red-500 text-3xl'/>
            </div>
            <div className='flex space-x-6'>
              <FaFacebookF className='text-blue-500 text-3xl'/>
              <FaYoutube className='text-red-500 text-3xl'/>
            </div>
            <div className='flex space-x-6'>
              <FaFacebookF className='text-blue-500 text-3xl'/>
              <FaYoutube className='text-red-500 text-3xl'/>
            </div>
            <div className='flex space-x-6'>
              <FaFacebookF className='text-blue-500 text-3xl'/>
              <FaYoutube className='text-red-500 text-3xl'/>
            </div>
          </div>
        </div>
      </div>
      
      </div>
      <div className='font-sans flex justify-center space-x-4 bg-gray-800 w-full h-12 items-center'>
        <div className='flex items-center space-x-2'>
          <FaRegCopyright/>
          <p>NORTH REGION KAREN BAPTIST CHURCHES</p>
        </div>
        <h1 className='font-sans text-center'>Web Design by ဝ့မၠံၣ်အီၤ (Win Aung)</h1>
      </div>
    </div>


// <div class="overflow-x-auto relative font-sans">
//     <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//         <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
//             <tr>
//                 <th scope="col" class="py-3">
//                     Product name
//                 </th>
//                 <th scope="col" class="py-3 px-6">
//                     Qty
//                 </th>
//                 <th scope="col" class="py-3 px-6">
//                     Price
//                 </th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr class="bg-white dark:bg-gray-800">
//                 <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     Apple MacBook Pro 17"
//                 </th>
//                 <td class="py-4 px-6">
//                     1
//                 </td>
//                 <td class="py-4 px-6">
//                     $2999
//                 </td>
//             </tr>
//             <tr class="bg-white dark:bg-gray-800">
//                 <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     Microsoft Surface Pro
//                 </th>
//                 <td class="py-4 px-6">
//                     1
//                 </td>
//                 <td class="py-4 px-6">
//                     $1999
//                 </td>
//             </tr>
//             <tr class="bg-white dark:bg-gray-800">
//                 <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                     Magic Mouse 2
//                 </th>
//                 <td class="py-4 px-6">
//                    1
//                 </td>
//                 <td class="py-4 px-6">
//                     $99
//                 </td>
//             </tr>
//         </tbody>
//         <tfoot className='bg-white'>
//             <tr class="font-semibold text-gray-900 dark:text-white">
//                 <th scope="row" class="py-3 px-6 text-base">Total</th>
//                 <td class="py-3 px-6">3</td>
//                 <td class="py-3 px-6">21,000</td>
//             </tr>
//         </tfoot>
//     </table>
// </div>

    
  )
}

export default Footer