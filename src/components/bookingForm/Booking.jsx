import { DatePicker } from 'keep-react';
import React, { useContext, useState } from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import { IoLocationOutline } from 'react-icons/io5';
import { MdOutlinePersonAddAlt } from 'react-icons/md';
import { BookingContext } from '../../App';
import Counter from './Counter';

const Booking = () => {
    const guestsCriteria = [{title: "Adults", age: "Ages 13 or above"},{title: "Children", age: "Ages 2-12"}, {title: "Infants", age: "Ages 0-2"}];
    const [bookingData, setBookingData] = useContext(BookingContext);
    const [rangeDate, setRangeDate] = useState(null);

    

    return (
        <div className='max-w-6xl w-full mx-auto py-5 '>
            <form className='w-full relative flex flex-col md:flex-row md:rounded-full rounded-md shadow-xl bg-white border border-neutral-200 dark:border-slate-600 dark:bg-slate-800 dark:shadow-2xl' >
                <div className='relative flex flex-[1.5]'>
                    <div className='flex z-10 flex-1 relaive flex-shrink-0 items-center space-x-3 cursor-pointer text-left p-5'>
                        <div className="text-neutral-300 text-2xl">
                            <IoLocationOutline />
                        </div>
                        <div className='flex-grow'>
                            <input type="text" className='block w-full bg-transparent border-none focus:ring-0 p-0 focus:outline-none focus:placeholder-neutral-300 dark:placeholder-neutral-400 xl:text-lg font-semibold placeholder-neutral-800 truncate' placeholder='Location' />
                            <span className="block mt-0.5 text-sm text-neutral-400 font-light ">
                                <span className="line-clamp-1">Where are you going?</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="self-center border-r border-slate-200 dark:border-slate-600 h-8"></div>

                <div className='z-10 relative flex flex-1 p-5 group'>
                    <button className='flex-1 relative z-10 flex items-center space-x-3 focus:outline-none' type='button'>
                        <div className='text-neutral-300 text-2xl'>
                            <CiCalendarDate />
                        </div>
                        <div className='flex-grow text-left'>
                            <DatePicker showTwoMonth={true} rangeDate={setRangeDate} placeholder="Checkin - Checkout" >
                                <DatePicker.Range/>
                            </DatePicker>
                        </div>
                    </button>


                    {/* headless ui */}
                    {/* <div className='absolute top-full w-full h-5'></div>
                    <div className='border-2 border-green-400 group-hover:block hidden absolute left-1/2 z-10 mt-3 top-full w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl translate-y-0'>
                        <Calander/>
                    </div> */}
                </div>

                <div className="self-center border-r border-slate-200 dark:border-slate-600 h-8"></div>
                

                <div className='flex relative flex-1 p-5 group' >
                    <div className='flex-1 z-10 flex items-center focus:outline-none' >
                        <button className='relative z-10 flex-1 flex items-center text-left space-x-3 focus:outline-none'  type='button'> 
                            <div className='text-neutral-300 text-2xl'>
                                <MdOutlinePersonAddAlt />
                            </div>
                            <div className='flex-grow'>
                                <span className="block xl:text-lg font-semibold">{bookingData.guestCount} Guests</span>
                                <span className="block mt-1 text-sm text-neutral-400 leading-none font-light">Add guests</span>
                            </div>  
                        </button>
                        <div className='pr-2 xl:pr-4'>
                            <a type="button" className="h-14 md:h-16 w-14 md:w-16 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-neutral-50 focus:outline-none" href="/listings">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </a>
                        </div>
                    </div>

                    <div className='absolute w-full h-5 top-full right-0'></div>
                    {/* headless ui */} 
                    <div className={`absolute group-hover:block hidden right-0 z-10 w-full sm:min-w-[340px] lg:w-sm bg-white top-full mt-3 py-5 sm:py-6 px-4 sm:px-8 rounded-3xl opacity-100 shadow-xl space-y-3 dark:bg-neutral-800`} >
                        {
                            guestsCriteria?.map((item, i)=>(
                                <div className='flex items-center justify-between space-x-5 w-full ' key={i} >
                                    <div className='flex flex-col '>
                                        <span className="font-medium text-neutral-800 dark:text-neutral-400">{item.title}</span>
                                        <span className="text-xs text-neutral-500 font-normal">{item.age}</span>
                                    </div>
                                    <Counter/>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </form>
        </div>
    );
};

export default Booking;