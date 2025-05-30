import React, { useState } from 'react'

const Contact = () => {

   

  return (


    <div id='contact' className='w-full px-[12%] py-10  scroll-mt-20 '>
      <div id='work' className='w-full px-[12%] py-10  scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>Connect with me</h4>
      <h2 className='text-center text-5xl font-Ovo'>Get in touch</h2>
      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>I'd love to hear from u! If you have any questions, comments or feedback, please us the form below . </p>
      </div>

   <form  className='max-w-2xl mx-auto'>
    <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
        <input type="text" placeholder='Enter your name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400' name='name' />
        <input type="email" placeholder='Enter your email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400' name='email'/>
    </div>
    <textarea rows='6' placeholder='Enter your messsage' required className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' name='message'></textarea>
    <button type='submit' className='py-3 px-8 flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>Submit</button>

    <p className='mt-5'></p>
   </form>

    </div>
  )
}

export default Contact
