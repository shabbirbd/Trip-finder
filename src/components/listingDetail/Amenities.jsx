import React from 'react';
import { amenities } from '../../data/amenities';

const Amenities = () => {
    return (
        <div className='listingDetailCard'>
            <div>
                <h2 className='text-2xl font-semibold'>Amenities</h2>
                <span className='block mt-2 text-neutral-500'>About the property's amenities and services</span>
            </div>

            <div className="w-14 border-b border-neutral-200 "></div>

            <div className='grid grid-cols-1 xl:grid-cols-3 gap-6 text-sm text-neutral-700'>
                {
                    amenities?.map((item, i)=>(
                        <div className="flex items-center space-x-3 text-3xl" key={i}>
                            {item.icon}
                            <span className='text-sm'>{item.title}</span>
                        </div>
                    ))
                }
            </div>


            <div className="w-14 border-b border-neutral-200"></div>

            <div>
                <button className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base px-4 py-3 sm:px-6 font-medium border bg-white border-neutral-200 text-neutral-700 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600 ">View more 20 amenities</button>
            </div>
        </div>
    );
};

export default Amenities;