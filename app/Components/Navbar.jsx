import React, { useRef } from 'react';
import Image from 'next/image'
import Man from "../../public/logo.png";
import Arrow from "../../public/arrow-icon.png";
import Color from "../../public/header-bg-color.png";
import Moon from "../../public/moon_icon.png";
import Menu from "../../public/menu-black.png";
import Close from "../../public/close-black.png";
import Sun from "../../public/sun_icon.png";
import Aoa from "../../public/arrow-icon-dark.png";
import Dmenu from "../../public/menu-white.png";
import Closi from "../../public/close-white.png";


const Navbar = ({isDark , setIsDark}) => {

const sideMenuRef = useRef()

const openMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(-16rem)'
}

const closeMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(16rem)'
}

  return ( <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]    dark:hidden'>
       <Image src={Color} alt='header image' className='w-full'/>
    </div>
      <nav className='w-full fixed  px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50     dark:bg-darkTheme dark:shadow-white/20'>
        <a href="#top">
            <Image src={Man} alt='logo' className='w-28 cursor-pointer mr-14  '/>
        </a>

        <ul className='hidden md:flex items-center gap-6  lg:gap-8 rounded-full  px-12 py-3 bg-white shadow-sm bg-opacity-50            dark:border dark:border-white/50 dark:bg-transparent '>
            <li><a className='font-Ovo' href="#top">Home</a></li>
            <li><a className='font-Ovo' href="#about">About</a></li>
            <li><a className='font-Ovo' href="#services">Services</a></li>
            <li><a className='font-Ovo' href="#work">My Work</a></li>
            <li><a className='font-Ovo' href="#contact">Contact me</a></li>
        </ul>

        <div className='flex items-center gap-4 ml-12'>
            <button onClick={()=> setIsDark(prev => !prev)}>
                <Image src={ isDark ? Sun : Moon} alt='' className='w-6'/>
            </button>
        </div>

        <div>
            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>Contact 
                <Image src={ isDark ? Aoa : Arrow} alt='arrow' className='w-3'/>
            </a>

            <button className='block md:hidden ml-3' onClick={openMenu}>
                <Image src={ isDark ? Dmenu : Menu} alt='' className='w-6'/>
            </button>
        </div>

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>
         
         <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={ isDark ? Closi : Close} alt='' className='w-5 cursor-pointer'/>
         </div>

             <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#about">About</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#services">Services</a></li>
            <li><a className='font-Ovo' onClick={closeMenu}  href="#work">My Work</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
      </nav>
      </>
  )
}

export default Navbar

