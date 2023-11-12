import React from 'react';
import { AiFillAppstore } from 'react-icons/ai';
import listing from '../assets/listing.jpg';
import { hotels } from '../data/hotels';

const ListingHeader = () => {
    return (
        <div className=' relative grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2 py-14'>
            <div className=' relative col-span-2 row-span-3 sm:row-span-2 rounded-md sm:rounded-xl overflow-hidden cursor-pointer '>
                <img src={listing} alt="listing" className='absolute inset-0 object-cover rounded-md sm:rounded-xl w-full h-full opacity-90 hover:opacity-100 transition-opacity' />
                <div className='border-2 z-50 absolute px-5 py-2 rounded-md bg-white mx-9 top-[90%] flex items-center space-x-2 text-neutral-400 text-xl '>
                    <AiFillAppstore />
                    <span className='text-sm font-normal text-black'>Show all photos</span>
                </div>
            </div>
            {
                hotels?.map((hotel, i)=>(
                    <div key={i} className={`relative rounded-md sm:rounded-xl overflow-hidden aspect-w-4 aspect-h-3 sm:aspect-w-6 sm:aspect-h-5 cursor-pointer ${i === 3? "hidden" : " "} ${i === 3? "sm:block" : " "}`} >
                        <img src={hotel} alt="hotel" className='absolute inset-0 object-cover rounded-md sm:rounded-xl w-full h-full opacity-90 hover:opacity-100 transition-opacity' />
                    </div>
                ))
            }
        </div>
    );
};

export default ListingHeader;