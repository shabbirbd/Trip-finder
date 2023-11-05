import React from 'react';
import Slider from './Slider';

const Cities = () => {
    return (
        <section className='lg:mt-14 md:mt-10 mt-6 '>
                <div className='max-w-2xl mx-auto text-center lg:p-10 md:p-7 sm:p-5 '> 
                    <h1 className='text-3xl md:text-4xl font-semibold'>Explore Different Cities</h1>
                    <p className='m-3 md:m-4 font-normal text-base sm:text-xl text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, minima.</p>
                </div>
                
            {/* carousel item */}
            <div className='mx-auto w-11/12 '>
                <Slider/>
            </div>
        </section>
    );
};

export default Cities;