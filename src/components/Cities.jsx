import React from 'react';
import Slider from './Slider';

const Cities = () => {
    return (
        <section className='border-2 border-red-200'>
            <div className='border-2 border-y-green-300 flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-16'>
                <div className='border-2 border-sky-300 max-w-2xl mx-3'> 
                    <h1 className='text-3xl md:text-4xl font-semibold'>Explore Different Cities</h1>
                    <p className='mt-2 md:mt-3 font-normal text-base sm:text-xl text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, minima.</p>
                </div>
                <div className='border-2 border-yellow-400 mt-4 flex justify-end sm:ml-2 sm:mt-0 flex-shrink-0'>
                    <p>{"<"}</p>
                    <p>{">"}</p>
                </div>
            </div>

            {/* carousel item */}
            <div className='border-2 border-green-400'>
                <Slider/>
            </div>
        </section>
    );
};

export default Cities;