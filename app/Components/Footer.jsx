import React from 'react'
import Image from 'next/image'
import Anas from "../../public/logo.png";
import Mail from "../../public/mail_icon.png";

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={Anas} alt='' className='w-36 mb-2 mx-auto'/>

        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={Mail} alt='' className='w-6'/>anasaslam461@gmail.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>2025 Anas. All rights reserved</p>
        <ul className='flex items-center gap-10 justify-between mt-14 sm:mt-0'>
            <li><a href="">Github</a></li>
            <li><a href="">LinkedIn</a></li>
            <li><a href="">Twitter</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
