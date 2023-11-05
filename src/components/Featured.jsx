import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import hotel1 from '../assets/hotel1.jpg';
import { places } from '../data/places';


const Featured = () => {
    return (
        <section className='border-2 border-green-600  lg:w-11/12 mx-auto md:w-full mt-14 p-9 md:p-14 lg:rounded-3xl bg-container1'>
            <div className='border '>
                    <h1 className='text-3xl md:text-4xl font-semibold'>Featured places to stay</h1>
                    <p className='mt-2 md:mt-4 font-normal text-base sm:text-lg text-neutral-500'>Popular places to stay that Chisfis recommends for you</p>
            </div>
            <div className='border-2 border-blue-700 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {
                    places.map((place, i)=>(
                        <div className='border border-neutral-100 rounded-2xl bg-white overflow-hidden will-change-transform hover:shadow-xl transition-shadow' key={i}>
                            <div>
                                <img src={hotel1} alt="" />
                            </div>
                            <a href='/' className='p-4 block'>
                                <div className='space-y-4'>
                                    <span className='text-sm text-neutral-500'>entire cabin ' {place.beds} beds</span>
                                    <h2 className='font-medium capitalize text-lg'>{place.title}</h2>
                                    <div className='text-sm text-neutral-500 flex items-center space-x-2'>
                                        <CiLocationOn/>
                                        <span>{place.location}</span>
                                    </div>
                                </div>
                                <div className='border-b border-neutral-400 w-14 my-4'></div>
                                <div className='flex items-center justify-between'>
                                    <span className='text-base font-semibold'>
                                        ${place.price}
                                        <span className='text-sm text-neutral-500 font-normal'>
                                            /night
                                        </span>
                                    </span>
                                    <div className='flex items-center space-x-1 text-sm'>
                                        <FcLike/>
                                        <span className='font-medium'>{place.rating}</span>
                                        <span className='text-neutral-500'>{`(${place.rated})`}</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Featured;