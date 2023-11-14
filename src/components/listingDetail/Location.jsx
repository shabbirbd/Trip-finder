import React from 'react';



const Location = () => {
    return (
        <div className='listingDetailCard'>
            <div>
                <h2 className="text-2xl font-semibold">Location</h2>
                <span className='block mt-2 text-neutral-500'>San Diego, CA, United States of America (SAN-San Diego Intl.)</span>
            </div>

            <div className="w-14 border-b border-neutral-200"></div>

            <div className='aspect-h-5 aspect-w-5 sm:aspect-h-3 ring-1 ring-black/10 rounded-xl z-0'>
                <div className='rounded-xl overflow-hidden z-0'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914410316173!2d2.291901012413576!3d48.85837360058765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sbd!4v1699938485794!5m2!1sen!2sbd" width="100%" height="100%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Location;