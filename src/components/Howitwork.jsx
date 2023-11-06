import React from 'react';
import tour1 from '../assets/tour1.png';
import tour2 from '../assets/tour2.png';
import tour3 from '../assets/tour3.png';


const Howitwork = () => {
    const data = [
        {
            title: "Book & relax",
            desc: "Let each trip be an inspirational journey, each room a peaceful space",
            img: tour1
        },
        {
            title: "Smart checklist",
            desc: "Let each trip be an inspirational journey, each room a peaceful space",
            img: tour2
        },
        {
            title: "Save more",
            desc: "Let each trip be an inspirational journey, each room a peaceful space",
            img: tour3
        }
    ]
    return (
        <section className='mt-20 w-10/12 mx-auto'>
            <div className='text-center w-full max-w-2xl mx-auto'>
                <h1 className='text-3xl md:text-4xl font-semibold'>How It Works</h1>
                <p className='mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500'>Keep calm & travel on</p>
            </div>
            <div className='w-full mt-20 grid md:grid-cols-3 gap-20'>
                {
                    data.map((info, i)=>(
                        <div key={i} className='flex flex-col items-center max-w-xs mx-auto'>
                            <div className='mb-8 max-w-[200px] mx-auto rounded-full'>
                                <img src={info.img} alt="tour" className='object-cover w-full h-full' />
                            </div>
                            <div className='text-center mt-auto'>
                                <h3 className='text-xl font-semibold'>{info.title}</h3>
                                <p className='block mt-5 text-neutral-500'>{info.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Howitwork;