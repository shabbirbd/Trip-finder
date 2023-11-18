import React from 'react';
import about from '../assets/about.jpg';

const AboutHeader = () => {
    return (
        <div className='flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 relative text-center lg:text-left items-center pt-14 dark:bg-darkBg'>
            <div className='w-screen max-w-full xl:max-w-lg space-y-5 lg:space-y-7'>
                <h2 className='text-3xl !leading-tight font-semibold text-neutral-900 md:text-4xl xl:text-5xl '>👋🏻 About us</h2>
                <span className="block text-base xl:text-lg text-neutral-600 dark:text-neutral-400">We're impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the around the world.</span>
            </div>

            <div className='flex-grow'>
                <img src={about} alt="about"  className='w-full rounded-es-full rounded-se-full'/>
            </div>
        </div>
    );
};

export default AboutHeader;