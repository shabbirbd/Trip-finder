import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { reviews1 } from '../../data/reviwes1';


const Reviews = () => {
    return (
        <div className='listingDetailCard'>
            <h2 className='text-2xl font-semibold'>Reviews {`(23 reviwes)`}</h2>

            <div className="w-14 border-b border-neutral-200 dark:border-neutral-600"></div>

            <div className='space-y-5'>
                <div className='flex items-center text-yellow-400 dark:text-yellow-600 text-2xl space-x-0.5'>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                </div>

                <div className='relative'>
                    <input type="text" className="block w-full border-neutral-200 dark:border-neutral-600 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white  dark:bg-neutral-800 rounded-3xl  h-16 px-4 py-3 " placeholder="Share your thoughts ..."/>
                    <button className="flex items-center justify-center rounded-full !leading-none disabled:bg-opacity-70 bg-elemental hover:bg-blue-700 text-neutral-50 absolute right-2 top-1/2 transform -translate-y-1/2  w-12 h-12  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                        <HiOutlineArrowNarrowRight/>
                    </button>
                </div>
            </div>

            <div className='divide-y divide-neutral-100 dark:divide-neutral-500'>
                {
                    reviews1?.map((item, i)=>(
                        <div className="flex space-x-4 py-8" key={i}>
                            <div className='pt-0.5 flex-shrink-0 w-10 h-10 rounded-full overflow-hidden'>
                                <img src={item.avater} alt="avater" className='object-cover w-full h-full'/>
                            </div>


                            <div className='flex-grow'>
                                <div className='flex justify-between space-x-3'>
                                    <div className='flex flex-col '>
                                        <h3 className='text-sm font-semibold'>{item.reviwer}</h3>
                                        <span className="text-sm text-neutral-500  mt-0.5">{item.date}</span>
                                    </div>

                                    <div className='flex text-yellow-500 dark:text-yellow-600'>
                                        <AiFillStar/>
                                        <AiFillStar/>
                                        <AiFillStar/>
                                        <AiFillStar/>
                                        <AiFillStar/>
                                        <AiFillStar/>
                                    </div>
                                </div>

                                <span className="block mt-3 text-neutral-600 dark:text-neutral-400">{item.reviwe}</span>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="pt-8">
                
                <button className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base px-4 py-3 sm:px-6 font-medium border bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-600 text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600 dark:focus:ring-sky-700 dark:focus:outline-none dark:focus:ring-ofset-2">View more 20 reviwes</button>
            </div>
        </div>
    );
};

export default Reviews;