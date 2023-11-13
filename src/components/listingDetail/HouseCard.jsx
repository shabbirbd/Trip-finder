import React from 'react';
import { BiUpload } from 'react-icons/bi';
import { BsPatchCheckFill, BsStarFill, BsSuitHeart } from 'react-icons/bs';
import { GoPerson } from 'react-icons/go';
import { IoBed } from 'react-icons/io5';
import { MdLocationPin } from 'react-icons/md';
import { PiBathtub } from 'react-icons/pi';
import { RiDoorOpenLine } from 'react-icons/ri';
import avater1 from '../../assets/avater1.png';


const HouseCard = () => {
    const features = [{title: "guests", quantity: 6 , icon: <GoPerson/>}, {title: "beds", quantity: 6 , icon: <IoBed/>}, {title: "baths", quantity: 3 , icon: <PiBathtub/>}, {title: "bedrooms", quantity: 2 , icon: <RiDoorOpenLine/>}]

    return (
        <div className='w-full rounded-2xl border border-neutral-200 space-y-6 p-6'>
            <div className='flex justify-between items-center '>
                <span className='inline-flex px-2.5 py-1 rounded-full font-medium text-xs relative text-blue-800 bg-blue-100 '>Wooden house</span>
                <div className='flex text-neutral-700 text-sm -mx-3 -m-1.5'>
                    <span className='py-1.5 px-3 flex rounded-lg hover:bg-neutral-100 cursor-pointer'>
                        <BiUpload className='h-5 w-5'/>
                        <span className='hidden sm:block ml-2.5'>Share</span>
                    </span>
                    <span className='py-1.5 px-3 flex rounded-lg hover:bg-neutral-100 cursor-pointer'> 
                        <BsSuitHeart className='h-5 w-5'/>
                        <span className='hidden sm:block ml-2.5'>Save</span>
                    </span>
                </div>
            </div>

            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold'>Beach House in Collingwood</h2>

            <div className='flex items-center space-x-4'>
                <div className='flex items-center space-x-1 text-sm'>
                    <BsStarFill className='text-yellow-400 w-[18px] h-[18px]'/>
                    <span className='font-medium'>4.5</span>
                    <span className='text-neutral-500'>{`(119)`}</span>
                </div>
                <span className='text-neutral-500 flex items-center'>
                    <MdLocationPin/>
                    <span className='ml-1'>Tokyo, Japan</span>
                </span>
            </div>

            <div className='flex items-center'>
                <div className='relative flex-shrink-0 inline-flex items-center justify-center font-semibold shadow-inner rounded-full h-10 w-10 ring-1 ring-white '>
                    <img src={avater1} alt="avater" className='absolute inset-0 w-full h-full object-cover rounded-full' />
                    <span className='text-sm text-teal-500 flex items-center justify-center absolute w-5 h-5 -top-1.5 -right-1'>
                        <BsPatchCheckFill/>
                    </span>
                </div>
                <span className='ml-2.5 text-neutral-500'>
                    Hosted by
                    <span className='text-neutral-900 font-medium'> Kavin Francis</span>
                </span>
            </div>


            <div className="w-full border-b border-neutral-100"></div>


            <div className='flex items-center justify-between xl:justify-start space-x-8 xl:space-x-12 text-sm text-neutral-700 '>
                {
                    features?.map((feature, i)=>(
                        <div className='flex items-center space-x-2 text-2xl'>
                            {feature.icon}
                            <span className='text-sm font-normal'>
                                {feature.quantity}
                                <span className='hidden md:inline-block ml-1'>{feature.title}</span>
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default HouseCard;