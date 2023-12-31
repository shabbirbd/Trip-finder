import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { places } from '../data/places';
import HeartBtn from './buttons/HeartBtn';


const Featured = () => {


    return (
        <section className='mx-auto w-full m:w-screen mt-14 p-9 md:p-14 rounded-3xl bg-container1 space-y-10 dark:bg-black dark:bg-opacity-20'>
            <div className='flex flex-col items-center justify-center dark:text-neutral-100'>
                    <h1 className='text-3xl md:text-4xl font-semibold'>Featured places to stay</h1>
                    <p className='mt-2 md:mt-4 font-normal text-base sm:text-lg text-neutral-500 dark:text-neutral-400'>Popular places to stay that Chisfis recommends for you</p>
            </div>
            <div className=' grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {
                    places.map((place, i)=>(
                        <div className='border border-neutral-100 rounded-2xl bg-white overflow-hidden will-change-transform hover:shadow-xl transition-shadow dark:bg-neutral-900 dark:border-neutral-800' key={i}>
                            {/* <div>
                                <img src={hotel1} alt="" />
                            </div> */}
                            <Swiper
                                cssMode={true}
                                navigation={true}
                                pagination={true}
                                modules={[Navigation, Pagination]}
                                className="mySwiper"
                            >
                                
                                {
                                    place.gallary.map((img, i)=>(
                                            <SwiperSlide key={i}>
                                                <div className='relative'>
                                                    <div className='absolute m-3  flex justify-end w-11/12'>
                                                        <HeartBtn/>
                                                    </div>
                                                    <img src={img} alt="hotel" className='h-full object-cover'/>
                                                </div>
                                            </SwiperSlide>
                                    ))
                                }
                                
                            </Swiper>
                            <a href='/' className='p-4 block'>
                                <div className='space-y-4'>
                                    <span className='text-sm text-neutral-500 dark:text-neutral-400'>entire cabin ' {place.beds} beds</span>
                                    <h2 className='font-medium capitalize text-lg'>{place.title}</h2>
                                    <div className='text-sm text-neutral-500 dark:text-neutral-400 flex items-center space-x-2'>
                                        <CiLocationOn/>
                                        <span>{place.location}</span>
                                    </div>
                                </div>
                                <div className='border-b border-neutral-400 w-14 my-4 dark:border-neutral-700'></div>
                                <div className='flex items-center justify-between'>
                                    <span className='text-base font-semibold'>
                                        ${place.price}
                                        <span className='text-sm text-neutral-500 dark:text-neutral-400 font-normal'>
                                            /night
                                        </span>
                                    </span>
                                    <div className='flex items-center space-x-1 text-sm'>
                                        <FcLike/>
                                        <span className='font-medium'>{place.rating}</span>
                                        <span className='text-neutral-500 dark:text-neutral-400'>{`(${place.rated})`}</span>
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