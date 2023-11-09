import React from 'react';
import { explore } from '../data/explore';

const Explore = () => {
    
    return (
        <div className='space-y-10 mt-14 '>
            <div className='w-full max-w-2xl mx-auto text-center'>
                <h2 className="font-semibold text-3xl md:text-4xl">Explore nearby</h2>
                <span className="mt-2 md:mt-3 font-normal text-base block sm:text-xl text-neutral-500">Discover great access near you live</span>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 sm:gap-6 lg:gap-8 p-5'>
                {
                    explore?.map((data, i)=>(
                        <a key={i} className='relative flex items-center p-3 sm:p-6 border border-neutral-200 rounded-2xl hover:shadow-2xl transition-shadow'>
                            <span className='inline-flex px-2.5 py-1 rounded-full font-medium text-xs absolute top-2 right-2 text-gray-800 bg-gray-100 '>1882</span>
                            <div className='flex-shrink-0 rounded-full w-24 h-24 overflow-hidden'>
                                <img src={data.scene} alt="city" className='object-cover w-full h-full'/>
                            </div>
                            <div className='ml-4 flex-grow'>
                                <h2 className="text-base font-medium">{data.city}</h2>
                                <span className="block mt-2 text-sm text-neutral-500">{data.drive} minutes drive</span>
                            </div>
                        </a>
                    ))
                }
            </div>
            
        </div>
    );
};

export default Explore;