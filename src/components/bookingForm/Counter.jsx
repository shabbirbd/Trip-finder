import React, { useContext, useState } from 'react';
import { LuMinus, LuPlus } from 'react-icons/lu';
import { BookingContext } from '../../App';

const Counter = () => {
    const [count, setCount] = useState(0)
    const [bookingData, setBookingData] = useContext(BookingContext)


    const handleChange = (type)=>{
        if(type === "increase" ){
            setCount(count + 1)
            setBookingData({...bookingData, guestCount: bookingData.guestCount + 1})
        } else if(type === "decrease" && count > 0 && bookingData.guestCount > 0){
            setCount(count - 1)
            setBookingData({...bookingData, guestCount: bookingData.guestCount - 1})
        }
    }



    return (
        <div className='flex items-center justify-between w-28'>
            <button className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 dark:border-neutral-500 bg-white  focus:outline-none hover:border-neutral-700  disabled:cursor-default" type="button" onClick={()=>handleChange("decrease")}>
                <LuMinus />
            </button>
            <span>{count}</span>
            <button className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 dark:border-neutral-500 bg-white  focus:outline-none hover:border-neutral-700  disabled:cursor-default" type="button" onClick={()=>handleChange("increase")}>
                <LuPlus />
            </button>
        </div>
    );
};

export default Counter;