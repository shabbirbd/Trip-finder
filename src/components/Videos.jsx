import React, { useState } from 'react';
import { FaPlay } from "react-icons/fa";
import hotel2 from '../assets/hotel2.jpg';

const Videos = () => {
    const [play, setPlay] = useState(false);
    const [currentLink, setCurrentLink] = useState('https://www.youtube.com/embed/Ao7e4iisKMs?autoplay=1')

    const videosData = [
        {
            link: "https://www.youtube.com/embed/MuB7HHeuNbc?autoplay=1",
            img: hotel2
        },
        {
            link: "https://www.youtube.com/embed/eEaZvEZye84?autoplay=1",
            img: hotel2
        },
        {
            link: "https://www.youtube.com/embed/a5V6gdu5ih8?autoplay=1",
            img: hotel2
        },
        {
            link: "https://www.youtube.com/embed/Ao7e4iisKMs?autoplay=1",
            img: hotel2
        },
    ];


    const handleVideo = (link)=>{
        setCurrentLink(link);
        setPlay(true);
    }


    return (
        <div className='w-full mx-auto flex flex-col py-14'>

            <div className='max-w-2xl'>
                <h2 className='text-2xl md:text-4xl font-semibold'>🎬 The Videos</h2>
                <span className='mt-2 md:mt-4 font-normal block text-base sm:text-lg text-neutral-500'>Check out our hottest videos. View more and share more new perspectives on just about any topic. Everyone's welcome.</span>
            </div>
            

            <div className='flex flex-col lg:flex-row relative sm:py-4 sm:pr-4 md:py-6 md:pr-6 xl:py-14 xl:pr-14 '>
                <div className='absolute -top-4 -bottom-4 -right-4 w-2/3 xl:w-1/2 rounded-3xl sm:rounded-[50px] md:top-0 md:bottom-0 md:right-0  bg-container1 bg-opacity-40 z-0 '></div>

                <div className='flex-grow relative pb-2 sm:pb-4 lg:pb-0 lg:pr-5 xl:pr-6'>
                    <div className='group aspect-w-16 aspect-h-16 sm:aspect-h-9 rounded-3xl sm:rounded-[50px] will-change-transform overflow-hidden border-4 border-white'>
                        <iframe src={currentLink} allow="accelerometer; autoplay; clipbord-write; enctypted-media;  gyroscope picture-in-picture" allowFullScreen className={`${play ? "block" : "hidden"}`}></iframe>
                        <div className={`cursor-pointer absolute inset-0 ${play ? "hidden" : "flex"} items-center  justify-center z-20`} onClick={()=>setPlay(true)}>
                            <div className='bg-white bg-opacity-30 backdrop-filter backdrop-blur rounded-full w-20 h-20 lg:w-52 lg:h-52 p-3 lg:p-12'>
                                <div className='w-full h-full bg-white rounded-full text-elemental relative'>
                                    <span className='absolute inset-0 flex items-center justify-center'>
                                        <FaPlay className='w-8 h-8 md:w-12 md:h-12'/>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={`absolute inset-o ${play ? "hidden" : "block"}`}>
                            <img src={hotel2} alt="img" className='object-cover w-full h-full transform transition-transform group-hover:scale-105 duration-300 will-change-transform' />
                        </div>
                    </div>
                </div>

                <div className='flex-shrink-0 grid gap-2 grid-cols-4 sm:gap-6 lg:grid-cols-1 lg:w-36 xl:w-40'>
                        {
                            videosData?.map((data,i)=>(
                                <div className='group aspect-h-16 aspect-w-16 rounded-2xl cursor-pointer overflow-hidden sm:aspect-h-12 sm:rounded-3xl lg:aspech-h-9 will-change-transform' key={i} onClick={()=> handleVideo(data.link)}>
                                    <div className='absolute inset-0 flex items-center justify-center z-10'>
                                        <div className='bg-white rounded-full text-elemental relative shadow-inner w-8 h-8 md:w-10 md:h-10'>
                                            <span className='absolute inset-0 flex items-center justify-center text-primary-500'>
                                                <FaPlay/>
                                            </span>
                                        </div>
                                    </div>
                                    <div className='absolute inset-0 w-full h-full '>
                                        <img src={data.img} alt="img" className='object-cover w-full h-full transform transition-transform group-hover:scale-110 duration-300 will-change-transform' />
                                    </div>
                                </div>
                            ))
                        }
                </div>
            </div>
        </div>
    );
};

export default Videos;