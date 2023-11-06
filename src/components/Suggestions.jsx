import React from 'react';
import { cities } from '../data/cities';
import Slider from './Slider';

const Suggestions = () => {
    return (
        <section className='bg-container2 lg:w-11/12 w-full mx-auto lg:rounded-[40px] mt-20 py-14'>
            <div className='w-11/12 mx-auto'>
                <div className='text-center w-full max-w-2xl  mx-auto'>
                    <h2 className='text-3xl md:text-4xl font-semibold'>Suggestions for discovery</h2>
                    <p className='mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500'>Popular places to stay that Chisfis recommends for you</p>
                </div>
                <div className='mt-14'>
                    <Slider cities={cities}/>
                </div>
            </div>
        </section>
    );
};

export default Suggestions;