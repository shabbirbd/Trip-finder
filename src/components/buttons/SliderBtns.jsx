import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useSwiper } from 'swiper/react';



const SliderBtns = () => {
    const swiper = useSwiper();

    return (
        <div className='mt-4 flex justify-center sm:ml-2 flex-shrink-0 '>
            <button onClick={()=> swiper.slidePrev()} className='w-10 h-10 m-2 flex items-center justify-center border rounded-full'>
                <AiOutlineArrowLeft/>
            </button>
            <button onClick={()=> swiper.slideNext()} className='w-10 h-10 m-2 flex items-center justify-center border rounded-full'>
                <AiOutlineArrowRight/>
            </button>
        </div>
    );
};

export default SliderBtns;