import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import newsletter from "../assets/newsletter.png";

const Newsletter = () => {
    return (
        <div className='w-11/12 mx-auto relative flex flex-col lg:flex-row lg:items-center py-14'>
            <div className=' flex-shrink-0 mb-10 lg:mb-0 lg:mr-10 lg:w-2/5'>
                <h2 className='font-semibold text-4xl'>Join our newsletter 🏖️</h2>
                <span className='block mt-5 text-neutral-500 dark:text-neutral-400'>Read and share new perspectives on just about any topic. Everyone's welcome.</span>
                <ul className='space-y-4 mt-10'>
                    <li className='flex items-center space-x-4'>
                        <span className='inline-flex px-2.5 py-1 rounded-full font-medium text-xs text-blue-800 bg-blue-100 relative'>01</span>
                        <span className='font-medium text-neutral-700 dark:text-neutral-300'>Get more discounts</span>
                    </li>
                    <li className='flex items-center space-x-4'>
                        <span className='inline-flex px-2.5 py-1 rounded-full font-medium text-xs text-red-800 bg-red-100 relative'>02</span>
                        <span className='font-medium text-neutral-700 dark:text-neutral-300'>Get premium magazines</span>
                    </li>
                </ul>
                <form className='mt-10 relative max-w-sm'>
                    <input type="email" className='block w-full border border-neutral-300 dark:border-neutral-700 focus:border-blue-300 focus:ring focus:ring-blue-200 dark:focus:ring-opacity-50 dark:focus-blue-600 dark:bg-neutral-900 focus:ring-opacity-50 rounded-full text-sm font-normal h-11 px-4 py-3' required  placeholder='Enter your email'/>
                    <button className='flex items-center justify-center rounded-full !leading-none bg-elemental hover:bg-sky-700 text-neutral-50 absolute transform top-1/2 -translate-y-1/2 right-[5px] w-9 h-9 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-elemental' type='submit'><AiOutlineArrowRight/></button>
                </form>
            </div>
            <div className=' flex-grow dark:bg-darkBg'>
                <img src={newsletter} alt="newsletter" className='object-cover w-full h-full' />
            </div>
        </div>
    );
};

export default Newsletter;