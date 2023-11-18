import React from 'react';
import founder1 from '../assets/founder1.png';
import founder2 from '../assets/founder2.png';
import founder3 from '../assets/founder3.png';
import founder4 from '../assets/founder4.png';



const Founder = () => {
    const founders = [
        {
            name: "Niamh O'Shea",
            title: "Co-founder and Chief Executive",
            avater: founder1
        },
        {
            name: "Danien Jame",
            title: "Co-founder and Chief Executive",
            avater: founder2
        },
        {
            name: "Orla Dwyer",
            title: "Co-founder and chairman",
            avater: founder3
        },
        {
            name: "Dara Frazier",
            title: "Co-Founder, Chief Strategy Officer",
            avater: founder4
        },
    ]

    return (
        <div className='relative mt-16'>
            <div className='max-w-2xl mb-12 lg:mb-16'>
                <h2 className='text-3xl md:text-4xl font-semibold'>⛱️ Founder</h2>
                <span className='mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400'>We're impartial and independent, and every day we create distinctive, world-class programmes and content</span>
            </div>


            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8 xl:gap-x-8'>
                {
                    founders?.map((founder, i)=>(
                        <div className='max-w-sm' key={i}>
                            <div className='relative h-0 aspect-h-1 aspect-w-1 rounded-xl overflow-hidden'>
                                <img src={founder.avater} alt="founder" className='absolute inset-0 object-cover' />
                            </div>
                            <h3 className="text-lg font-semibold text-neutral-900 mt-4 md:text-xl">{founder.name}</h3>
                            <span className="block text-sm text-neutral-500 dark:text-neutral-400 sm:text-base">{founder.title}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Founder;