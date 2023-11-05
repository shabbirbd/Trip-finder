import React from 'react';
import travel from '../assets/travel.png';

const Bennefits = () => {
    const info = [
        {
            title: "Cost-effective advertising",
            type: "Advertising",
            description: "With a free listing, you can advertise your rental with no upfront costs",
            variant: "text-blue-800 bg-blue-200"
        },
        {
            title: "Reach millions with Chisfis",
            type: "Exposure",
            description: "Millions of people are searching for unique places to stay around the world",
            variant: "text-green-800 bg-green-200"
        },
        {
            title: "Secure and simple",
            type: "Secure",
            description: "A Holiday Lettings listing gives you a secure and easy way to take bookings and payments online",
            variant: "text-red-800 bg-red-200"
        },
    ]
    return (
        <section className='w-11/12 mx-auto lg:mt-16 md:mt-10 mt-6 flex lg:flex-row flex-col justify-center'>
            <div className='flex-grow'>
                <img src={travel} className='object-cover h-full w-full' alt="tarvel" />
            </div>

            <div className='max-w-2xl flex-shrink-0 mt-10 lg:mt-14 lg:w-2/5 lg:pl-16'>
                <div>
                    <p className='text-sm text-gray-400 tracking-widest'>BENNEFITS</p>
                    <h2 className='font-semibold text-4xl mt-5'>Happening Cities</h2>
                </div>
                <ul className='space-y-10 mt-16'>
                    {
                        info.map((data, i)=>(
                            <li className='space-y-4' key={i}>
                                <p className={`inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative ${data.variant}`}>{data.type}</p>
                                <h4 className='block text-xl font-semibold'>{data.title}</h4>
                                <p className='block mt-5 text-neutral-500'>{data.description}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
};

export default Bennefits;