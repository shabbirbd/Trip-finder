import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { cities } from '../data/cities';
import SliderBtns from './SliderBtns';





const Slider = () => {
    return (
        <Swiper
            spaceBetween={10}
            breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1440:{
                    slidesPerView: 4,
                    spaceBetween: 40
                }
              }}
            >
                <SliderBtns/>
                {
                    cities.map(city=>(
                            <SwiperSlide>
                                <div className='p-5 w-auto'>
                                    <div className=' overflow-hidden rounded-xl h-96'>
                                        <img src={city.scene} className='hover:scale-125 rounded-xl duration-500 h-full' alt="city" />
                                    </div>
                                    <div className=''>
                                        <h1 className='text-2xl py-3'>{city.name}</h1>
                                        <p className='text-sm text-gray-500'>{city.property} properties</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                    ))
                }
            
        </Swiper>
    );
};

export default Slider;