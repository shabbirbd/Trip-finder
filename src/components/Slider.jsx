import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderBtns from './buttons/SliderBtns';





const Slider = ({cities}) => {

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
                    cities?.map((city, i)=>(
                            <SwiperSlide key={i}>
                                <div className='p-5'>
                                    <div className=' overflow-hidden rounded-xl h-96'>
                                        <img src={city.scene} className='hover:opacity-100 lg:md:opacity-90 rounded-xl duration-300 h-full w-full' alt="city" />
                                    </div>
                                    <div className=''>
                                        <h2 className='text-xl py-3'>{city.name}</h2>
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