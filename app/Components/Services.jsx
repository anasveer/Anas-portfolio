import React from 'react'
import { FcTwoSmartphones } from "react-icons/fc";
import { FcFrame } from "react-icons/fc";
import { FcOrgUnit } from "react-icons/fc";

const Services = () => {
  return ( 
    <div id='services' className='w-full px-[12%] py-10  scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>What I Offer</h4>
      <h2 className='text-center text-5xl font-Ovo'>My Services</h2>
      <p className='flex items-center justify-center mt-4 font-Ovo' >Im a frontend  web developer based in pakistan</p>

     <div className='web'>
      
          <div className='col grid grid-cols-auto'>
            <div className='text-5xl ml-2'><FcFrame /></div>
            <h1 className='mt-4 text-2xl ml-2' >Web Design</h1>
            <p className='mt-3 write ml-2 font-Ovo' >web dvelopment is the process of building programing</p>
            <h3 className='mt-2 ml-2'>Read more..</h3>
          </div>

          <div className='col'>
            <div className='text-5xl ml-2 '><FcTwoSmartphones /></div>
            <h1 className='text-2xl mt-3 ml-2'>Mobile app</h1>
            <p className='mt-3 ml-2 write font-Ovo'>Mobile app development creating software mobile device</p>
            <h3 className='mt-3 ml-2'>Read more..</h3>
          </div>

          <div className='col'>
            <div className='text-5xl ml-2'><FcOrgUnit /></div>
            <h1 className='text-2xl mt-3 ml-2'>UI/UX design</h1>
            <p className='mt-3 ml-2 write font-Ovo'>UI/UX design focuses creating a seamless user deasign experience..</p>
            <h4 className='mt-3 ml-2'>Read more..</h4>
          </div>
         
     </div>
    </div>
    
  )
}

export default Services
