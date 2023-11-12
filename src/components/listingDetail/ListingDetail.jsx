import React from 'react';
import { FcLike } from 'react-icons/fc';

const ListingDetail = () => {
    return (
        <main className='relative z-10 mt-11 flex flex-col lg:flex-row border-2 border-red-400'>
            <div className='w-full lg:w-3/5 xl:2/3 space-y-8 lg:spaace-y-10 lg:pr-10 border-2 border-green-400'>
                Listing detail
            </div>


            <div className='hidden lg:block flex-grow mt-14 lg:mt-0 border-2 border-blue-200'>
                <div className='sticky top-28'>
                    <div className='shadow-xl flex flex-col justify-center border border-neutral-300 p-4 rounded-2xl'>

                        <div className='flex justify-between'>
                            <span className='text-3xl font-semibold'>$119 <span className='ml-1 text-base font-normal text-neutral-500'>/night</span></span>
                            <div className='flex items-center space-x-1 text-sm'>
                                <FcLike/>
                                <span>4.5</span>
                                <span>{`(112)`}</span>
                            </div>
                        </div>




                    </div>
                </div>
            </div>
        </main>
    );
};

export default ListingDetail;