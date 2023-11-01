import React from 'react';

const DarkBtn = ({children}) => {
    return (
        <button className='rounded-full bg-elemental md:px-9 py-3 px-7 shadow-md font-Poppins md:text-sm text-xs tracking-wide text-light hover:shadow-xl w-auto'>
            {children}
        </button>
    );
};

export default DarkBtn;