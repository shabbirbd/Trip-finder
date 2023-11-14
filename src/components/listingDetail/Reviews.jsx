import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { reviews1 } from '../../data/reviwes1';


const Reviews = () => {
    return (
        <div className='listingDetailCard'>
            <h2 className='text-2xl font-semibold'>Reviews {`(23 reviwes)`}</h2>

            <div className="w-14 border-b border-neutral-200"></div>

            <div className='space-y-5'>
                <div className='flex items-center text-yellow-400 space-x-0.5'>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                </div>

                <div className='relative'>
                    <input type="text" className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white rounded-3xl  h-16 px-4 py-3 " placeholder="Share your thoughts ..."/>
                    <button className="flex items-center justify-center rounded-full !leading-none disabled:bg-opacity-70 bg-blue-600 hover:bg-blue-700 text-neutral-50 absolute right-2 top-1/2 transform -translate-y-1/2  w-12 h-12  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                        <HiOutlineArrowNarrowRight/>
                    </button>
                </div>
            </div>

            <div className='divide-y divide-neutral-100'>
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

                                    <div className='flex text-yellow-500'>
                                        <AiFillStar/>
                                        <AiFillStar/>
                                        <AiFillStar/>
                                        <AiFillStar/>
                                        <AiFillStar/>
                                        <AiFillStar/>
                                    </div>
                                </div>

                                <span className="block mt-3 text-neutral-600">{item.reviwe}</span>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="pt-8">
                <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base px-4 py-3 sm:px-6  ttnc-ButtonSecondary font-medium border bg-white border-neutral-200 text-neutral-700  hover:bg-neutral-100 dark:hover:bg-neutral-800   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">View more 20 reviews</button>
            </div>
        </div>
    );
};

export default Reviews;