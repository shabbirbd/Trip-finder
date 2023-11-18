import React from 'react';
import { PiStarFill } from 'react-icons/pi';
import { reviews } from '../data/reviews';

const Author = () => {
    return (
        <div className='bg-container2 rounded-[48px] mt-14 py-14 dark:bg-black dark:bg-opacity-20'>
            <div className='text-center w-full max-w-2xl mx-auto dark:text-neutral-100'>
                <h2 className="text-3xl md:text-4xl font-semibold">Top 10 author of the month</h2>
                <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">Rating based on customer review</span>
            </div>
            <div className='grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  xl:grid-cols-5 px-8 py-14'>
                {
                    reviews?.map((review, i)=>(
                        <a href="/" className='relative flex flex-col items-center justify-center text-center px-3 py-4 sm:px-6 sm:py-7 bg-white rounded-3xl border border-neutral-200 dark:border-neutral-600 hover:shadow-xl transition-shadow dark:bg-neutral-900' key={i}>
                            <div className='flex-shrink-0 inline-flex items-center justify-center rounded-full w-20 h-20'>
                                <img src={review.avater} alt="avater" className='object-cover w-full h-full rounded-full'/>
                            </div>
                            <div className='mt-3'>
                                <h2 className="text-base font-medium">{review.name}</h2>
                                <span className="block mt-2 text-sm text-neutral-500 dark:text-neutral-400 ">{review.city}</span>
                            </div>
                            <div className='py-2 px-5 mt-4 bg-neutral-100 rounded-full flex items-center justify-center '>
                                <span className='text-xs font-medium pt-[1px] dark:text-neutral-400'>{review.rating}</span>
                                <PiStarFill className='text-yellow-500 ml-2 h-5 w-5'/>
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    );
};

export default Author;