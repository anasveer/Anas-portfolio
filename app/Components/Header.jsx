import React from 'react'
import Image from 'next/image'
import Logo from "../../public/logo.jpeg";
import Hand from "../../public/hand-icon.png";
import White from "../../public/right-arrow-white.png";
import Download from "../../public/download-icon.png";

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-0'>
      <div>
        <Image src={Logo} alt='' className='rounded-full w-20' />
      </div>
      <h3 className='flex items-center gap-2 text-xl md:text-2xl mb-3  font-Ovo '>
        Hi! I'm Anas <Image src={Hand} alt='' className='w-6'/> </h3>

        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
         Frontend web developer based in Pakistan
        </h1>
        <p className='max-w-2xl mx-auto  font-Ovo'>
         I am a frontend developer from Faisalabad, 
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <a href="#contact"
            className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent '>Contact me <Image src={White} alt='' className='w-4'/></a>

            <a href="AnasAslamResume-1pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>my resume <Image src={Download} alt='' className='w-4'/></a>
        </div>
    </div>
  )
}

export default Header
