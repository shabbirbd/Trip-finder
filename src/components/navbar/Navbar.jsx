import React, { useState } from 'react';
import { FaBars, FaMoon, FaMountainSun, FaX } from "react-icons/fa6";
import logo from '../../assets/logo.png';
import DarkBtn from '../buttons/DarkBtn';
import Navlinks from './Navlinks';


const Navbar = () => { 
    const [open, setOpen] = useState(false)
    const [dark, setDark] = useState(false);;
    return (
        <nav className='border-b-[1px] flex justify-between py-5 align-center lg:px-48 px-8'>
            <img src={logo} alt="logo" className='h-12 w-auto cursor-pointer' />
            <ul className='md:flex items-center hidden gap-10 '>
                <Navlinks/>
            </ul>
            {/* mobile menu */}
            <ul className={`md:hidden fixed z-50 top-0 bg-white w-2/3 h-full shadow-2xl flex flex-col gap-10 text-medium p-7 pt-20 duration-500 ${open ? "right-0" : "right-[-100%]"}`}>
                <Navlinks/>
                <DarkBtn>Sign Up</DarkBtn>
            </ul>

            <div className='md:flex items-center gap-3 hidden'>
                <div className='text-2xl' onClick={()=>setDark(!dark)}>
                    {
                        dark ? <FaMountainSun/> : <FaMoon/>
                    }
                </div>
                <DarkBtn>Sign Up</DarkBtn>
            </div>

            <div className='text-2xl md:hidden z-50 pt-2 flex items-center gap-3'>
                <div onClick={()=>setDark(!dark)}>
                    {
                        dark ? <FaMountainSun/> : <FaMoon/>
                    }
                </div>
                <div  onClick={()=>setOpen(!open)}>
                    {
                        open ? <FaX/> : <FaBars/>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;