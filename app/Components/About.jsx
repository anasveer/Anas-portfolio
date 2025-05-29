import React from 'react';
import Image from 'next/image'
import Anas from "../../public/logo.jpeg";
import { HiCode } from "react-icons/hi";


const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-Ovo'>About me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80  rounded-3xl max-w-none'>
            <Image src={Anas} alt='' className='w-full rounded-3xl'/>
        </div>
    
    <div className='flex-1'>
      <p className='mb-10 max-w-2xl  font-Ovo'>
        I am an experienced Frontend developer with over a decade of professional expertise in the field. Throughtout my career, I have had the  privilege  of collaborating  with prestigious organization to their success and growth.
      </p>
      <div className='ship'>
      <ul className='mb-10 acep' >
         <div className='text-5xl '><HiCode /></div>
         <h1 className='text-2xl mt-5'>Languages</h1>
         <h1 className='mt-5'>HTML, CSS, Javascript, React.js, Next.js</h1>
      </ul>
      </div>
      
    </div>    
      </div>
    </div>
  )
}

export default About
