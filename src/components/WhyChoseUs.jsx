import React from 'react';
import logo from '../assets/logo.png';
import whychoose from '../assets/whychoose.png';
import DarkBtn from './buttons/DarkBtn';


const WhyChoseUs = () => {
    return (
        <div className='bg-container1 flex flex-col lg:flex-row items-center p-10  my-14 rounded-2xl'>
            <div className=' flex-shrink-0 mb-16 lg:mb-0 lg:w-2/5'>
                <a href="/" className='w-20 inline-block'>
                    <img src={logo} alt="logo" className='w-full object-cover' />
                </a>
                <h2 className="font-semibold text-3xl md:text-4xl mt-6 sm:mt-11">Why did you choose us?</h2>
                <span className="block mt-6 text-neutral-500 mb-14">Accompanying us, you have a trip full of experiences. With Chisfis, booking accommodation, resort villas, hotels, private houses, apartments... becomes fast, convenient and easy.</span>
                <DarkBtn>Become an author</DarkBtn>
            </div>
            <div className=' flex-grow'>
                <img src={whychoose} alt="why choose us" className='w-full h-full object-cover'/>
            </div>
        </div>
    );
};

export default WhyChoseUs;