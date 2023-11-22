import React from 'react';

const DarkBtn = ({children, navigate}) => {
    return (
        <button className='rounded-full z-50 bg-elemental md:px-9 py-3 px-7 shadow-md font-Poppins md:text-sm text-xs tracking-wide text-light hover:shadow-xl w-auto' onClick={navigate}>
            {children}
        </button>
    );
};

export default DarkBtn;