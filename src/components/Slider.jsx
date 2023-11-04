import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { cities } from '../data/cities';





const Slider = () => {
    return (
        <Swiper
            spaceBetween={10}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    cities.map(city=>(
                        <div className='border-2 border-yellow-500 h-full'>
                            <SwiperSlide>
                                <div className='border border-red-300 flex flex-col gap-3 h-64 lg:h-96 p-5'>
                                    <div>
                                        <img src={city.scene} className='rounded-xl' alt="city" />
                                    </div>
                                    <div className='border border-green-300'>
                                        <h1>{city.name}</h1>
                                        <p>{city.property} properties</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    ))
                }
            
        </Swiper>
    );
};

export default Slider;