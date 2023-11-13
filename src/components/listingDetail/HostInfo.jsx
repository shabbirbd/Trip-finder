import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsCalendar2Event, BsChatRightText, BsClock, BsPatchCheckFill } from 'react-icons/bs';
import avater1 from '../../assets/avater1.png';



const HostInfo = () => {
    const hostInfo = [
        {
            info: "Joined March 2016",
            icon: <BsCalendar2Event/>
        },
        {
            info: "Response rate - 100%",
            icon: <BsChatRightText/>
        },
        {
            info: "Fast response - within a few hours",
            icon: <BsClock/>
        }
    ]
    return (
        <div className='listingDetailCard'>
            <h2 className='text-2xl font-semibold'>Host Information</h2>

            <div className="w-14 border-b border-neutral-200"></div>

            <div className='flex items-center space-x-4'>
                <div className='relative flex-shrink-0 inline-flex items-center justify-center font-semibold shadow-inner rounded-full h-10 w-10 ring-1 ring-white '>
                    <img src={avater1} alt="avater" className='absolute inset-0 w-full h-full object-cover rounded-full' />
                    <span className='text-sm text-teal-500 flex items-center justify-center absolute w-5 h-5 -top-1.5 -right-1'>
                        <BsPatchCheckFill/>
                    </span>
                </div>

                <div>
                    <h2 className='text-xl font-medium'>Kavin Francis</h2>
                    <div className='mt-1.5 text-sm text-neutral-500 flex items-center '>
                        <div className='flex items-center text-sm space-x-1'>
                            <AiFillStar className='text-yellow-400 pb-[2px] h-[18px] w-[18px]'/>
                            <span className='font-medium'>4.5</span>
                            <span>{`(112)`}</span>
                        </div>
                        <span className='mx-2'>.</span>
                        <span>12 places</span>
                    </div>
                </div>
            </div>

            <span className='block text-neutral-600'>Providing lake views, The Symphony 9 Tam Coc in Ninh Binh provides accommodation, an outdoor swimming pool, a bar, a shared lounge, a garden and barbecue facilities...</span>

            <div className='block text-neutral-500 space-y-2.5'>
                {
                    hostInfo?.map((item, i)=>(
                        <div className="flex items-center space-x-3 text-2xl">
                            {item.icon}
                            <span className='text-sm font-normal'>{item.info}</span>
                        </div>
                    ))
                }
            </div>

            <div class="w-14 border-b border-neutral-200"></div>

            <div>
                <a class="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  border bg-white border-neutral-200 text-neutral-700  hover:bg-neutral-100   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000" href="/">See host profile</a>
            </div>
        </div>
    );
};

export default HostInfo;