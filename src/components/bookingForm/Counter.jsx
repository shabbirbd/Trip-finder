import React, { useState } from 'react';
import { LuMinus, LuPlus } from 'react-icons/lu';

const Counter = () => {
    const [count, setCount] = useState(0)


    return (
        <div className='flex items-center justify-between w-28'>
            <button className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 dark:border-neutral-500 bg-white  focus:outline-none hover:border-neutral-700  disabled:cursor-default" type="button">
                <LuMinus />
            </button>
            <span>{count}</span>
            <button className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 dark:border-neutral-500 bg-white  focus:outline-none hover:border-neutral-700  disabled:cursor-default" type="button">
                <LuPlus />
            </button>
        </div>
    );
};

export default Counter;