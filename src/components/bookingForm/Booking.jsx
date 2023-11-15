import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlinePersonAddAlt } from 'react-icons/md';

const Booking = () => {
    return (
        <div className='max-w-6xl w-full mx-auto py-5'>
            <form className='w-full relative flex flex-col md:flex-row md:rounded-full rounded-md shadow-xl bg-white border border-neutral-200' >
                <div className='relative flex flex-[1.5]'>
                    <div className='flex z-10 flex-1 relaive flex-shrink-0 items-center space-x-3 cursor-pointer text-left p-5'>
                        <div className="text-neutral-300 text-2xl">
                            <IoLocationOutline />
                        </div>
                        <div className='flex-grow'>
                            <input type="text" className='block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none focus:placeholder-neutral-300 xl:text-lg font-semibold placeholder-neutral-800 truncate' placeholder='Location' />
                            <span className="block mt-0.5 text-sm text-neutral-400 font-light ">
                                <span className="line-clamp-1">Where are you going?</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="self-center border-r border-slate-200 h-8"></div>

                <div className='z-10 relative flex flex-1 p-5'>
                    <button className='flex-1 relative z-10 flex items-center space-x-3 focus:outline-none' type='button'>
                        <div className='text-neutral-300 text-2xl'>
                            <CiCalendarDate />
                        </div>
                        <div className='flex-grow text-left'>
                            <span className="block xl:text-lg font-semibold">12 Feb - 27 Feb</span>
                            <span className="block mt-1 text-sm text-neutral-400 leading-none font-light">Check in - Check out</span>
                        </div>
                    </button>
                </div>

                <div className="self-center border-r border-slate-200 h-8"></div>
                

                <div className='flex relative flex-1 p-5'>
                    <div className='flex-1 z-10 flex items-center focus:outline-none'>
                        <button className='relative z-10 flex-1 flex items-center text-left space-x-3 focus:outline-none' type='button'> 
                            <div className='text-neutral-300 text-2xl'>
                                <MdOutlinePersonAddAlt />
                            </div>
                            <div className='flex-grow'>
                                <span className="block xl:text-lg font-semibold"> Guests</span>
                                <span className="block mt-1 text-sm text-neutral-400 leading-none font-light">Add guests</span>
                            </div>  
                        </button>
                        <div className='pr-2 xl:pr-4'>
                            <a type="button" class="h-14 md:h-16 w-14 md:w-16 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-neutral-50 focus:outline-none" href="/listings">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Booking;