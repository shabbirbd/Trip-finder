import React from 'react';

const StayInfo = () => {
    return (
        <div className='listingDetailCard'>
            <h2 className='text-2xl font-semibold '>Stay Information</h2>

            <div className="w-14 border-b border-neutral-200 dark:border-neutral-600"></div>

            <div className='text-neutral-600 dark:text-neutral-400 space-y-3 flex flex-col'>
                <span>Providing lake views, The Symphony 9 Tam Coc in Ninh Binh provides accommodation, an outdoor swimming pool, a bar, a shared lounge, a garden and barbecue facilities. Complimentary WiFi is provided.</span>
                <br />
                <span>There is a private bathroom with bidet in all units, along with a hairdryer and free toiletries.</span>
                <br />
                <span>The Symphony 9 Tam Coc offers a terrace. Both a bicycle rental service and a car rental service are available at the accommodation, while cycling can be enjoyed nearby.</span>
            </div>
        </div>
    );
};

export default StayInfo;