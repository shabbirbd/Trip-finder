import React from 'react';
import Slider from './Slider';

const Cities = () => {
    return (
        <section className='border-2 border-red-200'>
                <div className='border-2 border-sky-300 max-w-2xl m-auto'> 
                    <h1 className='text-3xl md:text-4xl font-semibold'>Explore Different Cities</h1>
                    <p className='mt-2 md:mt-3 font-normal text-base sm:text-xl text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, minima.</p>
                </div>
                
            {/* carousel item */}
            <div className='mx-auto w-11/12 '>
                <Slider/>
            </div>
        </section>
    );
};

export default Cities;