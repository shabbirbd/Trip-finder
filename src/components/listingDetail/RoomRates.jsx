import React from 'react';

const RoomRates = () => {
    const pricing = [
        {
            title: "Monday - Thursday",
            price: "199$"
        },
        {
            title: "Friday - Sunday",
            price: "219$"
        },
        {
            title: "Rent by month",
            price: "-8.34%"
        },
        {
            title: "Minimum number of nights",
            price: "1 night"
        },
        {
            title: "Max number of nights",
            price: "90 nights"
        }
    ]
    return (
        <div className='listingDetailCard'>
            <div>
                <h2 className="text-2xl font-semibold">Room Rates</h2>
                <span className="block mt-2 text-neutral-500">Prices may increase on weekends or holidays</span>
            </div>

            <div className="w-14 border-b border-neutral-200"></div>

            <div className='text-sm sm:text-base text-neutral-600 -mb-4 space-y-2'>
                {
                    pricing?.map((item, i)=>(
                        <div className='p-4 flex items-center justify-between space-x-4 bg-neutral-100 rounded-xl border border-neutral-200' key={i}>
                            <span>{item.title}</span>
                            <span>{item.price}</span>
                        </div>
                    ))
                }   
            </div>
        </div>
    );
};

export default RoomRates;