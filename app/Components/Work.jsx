import React from 'react'
import Image from 'next/image';
import Works from "../../public/work-1.png";
import Pan from "../../public/work-2.png";
import San from "../../public/work-3.png";
import Nan from "../../public/work-4.png";

const Work = () => {
  return (
    <div>
       <div id='work' className='w-full px-[12%] py-10  scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>My portfolio</h4>
      <h2 className='text-center text-5xl font-Ovo'>My latest work</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in front-end dvelopment. </p>
      </div>
      
      <div className='work'>
      <div>
        <Image src={Works} alt='' className=''/>
        <div className=''>
        <h1 className='flex items-center justify-center mt-7 overlay'>Frontend project</h1>
        
        </div>
      </div>

      <div>
        <Image src={Pan} alt='' className='w-'/>
         <div className=''>
        <h1 className='flex items-center justify-center mt-7 overlay'>Web Design</h1>
        
        </div>
      </div>

      <div>
        <Image src={San} alt='' className='w-'/>
         <div className=''>
        <h1 className='flex items-center justify-center mt-7 overlay'>Mobile dvelopment</h1>
        
        </div>
      </div>

      <div>
        <Image src={Nan} alt='' className='w-'/>
         <div className=''>
        <h1 className='flex items-center justify-center mt-7 overlay'>UI/UX Design</h1>
        
        </div>
      </div>
       </div>

</div>
      
    
  )
}

export default Work
