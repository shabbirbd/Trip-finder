import React from 'react';

const FastFacts = () => {
    const facts = [
        {number: "10 million", info: "Articles have been public around the world (as of Sept. 30, 2021)"},
        {number: "100,000", info: "Registered users account (as of Sept. 30, 2021)"},
        {number: "220+", info: "Countries and regions have our presence (as of Sept. 30, 2021)"}
    ]
    return (
        <div className='relative mt-16'>
            <div className='max-w-2xl'>
                <h2 className='text-3xl md:text-4xl font-semibold'>🚀 Fast Facts</h2>
                <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 "> We're impartial and independent, and every day we create distinctive, world-class programmes and content</span>
            </div>

            <div className='grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8'>
                {
                    facts?.map((item, i)=>(
                        <div className="p-6 bg-neutral-100 rounded-2xl" key={i}>
                            <h3 className="text-2xl font-semibold leading-none text-neutral-900 md:text-3xl ">{item.number}</h3>
                            <span className="block text-sm text-neutral-500 mt-3 sm:text-base">{item.info}</span>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default FastFacts;