import React from 'react';
import { BsPersonPlusFill } from "react-icons/bs";
import { FcLike } from 'react-icons/fc';
import { SlCalender } from "react-icons/sl";
import HouseCard from './HouseCard';


const ListingDetail = () => {
    return (
        <main className='relative z-10 mt-11 flex flex-col lg:flex-row border-2 border-red-400'>
            <div className='w-full lg:w-3/5 xl:2/3 space-y-8 lg:spaace-y-10 lg:pr-10 border-2 border-green-400'>
                <HouseCard/>
            </div>


            <div className='hidden lg:block flex-grow mt-14 lg:mt-0 border-2 border-blue-200'>
                <div className='sticky top-28'>
                    <div className='shadow-xl flex flex-col justify-center border border-neutral-300 p-6 space-y-9 rounded-2xl'>

                        <div className='flex justify-between'>
                            <span className='text-3xl font-semibold'>$119 <span className='ml-1 text-base font-normal text-neutral-500'>/night</span></span>
                            <div className='flex items-center space-x-1 text-sm'>
                                <FcLike/>
                                <span>4.5</span>
                                <span>{`(112)`}</span>
                            </div>
                        </div>

                        <form className='flex flex-col border border-neutral-200 rounded-3xl'>
                            <div className='z-10 relative flex flex-1 '>
                                <button className='flex-1 flex relative p-3 items-center space-x-3 focus:outline-none'>
                                    <div className='text-neutral-300 '>
                                        <SlCalender/>
                                    </div>
                                    <div className='flex-grow text-left'>
                                        <span className='block lg:text-xl font-semibold'>Feb 02 - Feb 15</span>
                                        <span className='block text-sm mt-1 text-neutral-400 leading-none font-light'>Check in - Check out</span>
                                    </div>
                                </button>
                            </div>

                            <div className='w-full border-b border-neutral-200'></div>

                            <div className='flex relaive flex-1'>
                                <div className='flex-1 flex items-center focus:outline-none rounded-b-3xl'>
                                    <button className='flex-1 flex relative p-3 items-center space-x-3 focus:outline-none'>
                                        <div className='text-neutral-300'>
                                            <BsPersonPlusFill/>
                                        </div>
                                        <div className='flex-grow text-left'>
                                            <span className='block lg:text-xl font-semibold'> 4 guests</span>
                                            <span className="block mt-1 text-sm text-neutral-400 leading-none font-light">Guests</span>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </form>
                        
                        <div className='flex flex-col space-y-4'>
                            <div className="flex justify-between text-neutral-600 dark:text-neutral-300">
                                <span>$119 x 3 night</span>
                                <span>$357</span>
                            </div>
                            <div className="flex justify-between text-neutral-600 dark:text-neutral-300">
                                <span>Service charge</span>
                                <span>$0</span>
                            </div>
                            <div className='w-full border-b border-neutral-200'></div>
                            <div className="flex justify-between font-semibold">
                                <span>Total</span>
                                <span>$199</span>
                            </div>
                        </div>

                        <a className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-70 bg-elemental  text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 " rel="noopener noreferrer" href="/checkout">Reserve</a>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ListingDetail;