import React from 'react';
import herobg from '../assets/herobg.png';
import DarkBtn from './buttons/DarkBtn';

const Hero = () => {
    return (
        <section className='flex lg:flex-row flex-col lg:items-center gap-5 pt-20 md:px-24 px-4 font-Poppins'>
            <div className='flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0'>
                <h1 className='font-medium text-4xl md:text-5xl xl:text-7xl'>Hotel, Car &  Experiences</h1>
                <p className='text-gray-600 w-2/3 md:py-4 py-2 leading-relaxed'>Accompanying us, you have a trip full of experiences. With Chisfis, booking accommodation, resort villas, hotels</p>
                <DarkBtn>Start Your Search</DarkBtn>
            </div>
            <div className='flex-grow '>
                <img src={herobg} alt="hero" className='w-full' />
            </div>
        </section>
    );
};
export default Hero;