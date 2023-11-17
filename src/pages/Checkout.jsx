import React from 'react';
import mastercard from '../assets/mastercard.png';
import visa from '../assets/visa.png';
import PaymentInfo from '../components/PaymentInfo';

const Checkout = () => {
    return (
        <div className='border-2 border-green-300 container mt-11 mb-24 lg:mb-32 flex flex-col-reverse lg:flex-row'>
            <div className='w-full lg:w-3/5 xl:w-2/3 lg:pr-10 border-2 border-red-400'>
                <div className='w-full flex flex-col sm:rounded-2xl sm:border sm:border-neutral-200 space-y-8 px-0 sm:p-6 xl:p-8'>
                    <h2 className="text-3xl lg:text-4xl font-semibold">Confirm and payment</h2>

                    <div className="border-b border-neutral-200 "></div>

                    <div>
                        <h3 className="text-2xl font-semibold">Your trip</h3>

                        <div className="mt-6 border border-neutral-200 rounded-3xl flex flex-col sm:flex-row divide-y sm:divide-x sm:divide-y-0 divide-neutral-200overflow-hidden z-10">
                            <button className="text-left flex-1 p-5 flex justify-between space-x-5dark:hover:bg-neutral-800" type="button">
                                <div className="flex flex-col">
                                    <span className="text-sm text-neutral-400">Date</span>
                                    <span className="mt-1.5 text-lg font-semibold">Feb 06 - Feb 23</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-6 h-6 text-neutral-6000">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path></svg>
                            </button>
                            <button type="button" className="text-left flex-1 p-5 flex justify-between space-x-5 ">
                                <div className="flex flex-col">
                                    <span className="text-sm text-neutral-400">Guests</span>
                                    <span className="mt-1.5 text-lg font-semibold">
                                        <span className="line-clamp-1">3 Guests, 1 Infants</span>
                                    </span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-6 h-6 text-neutral-6000"><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold">Pay with</h3>

                        <div className="w-14 mt-6 border-b border-neutral-200"></div>

                        <div className='mt-6'>
                            <div className="flex my-5 gap-1">
                                <button className="px-4 py-1.5 sm:px-6 sm:py-2.5 rounded-full focus:outline-none bg-neutral-800  text-white" id="headlessui-tabs-tab-:r1s:" type="button" >Paypal</button>
                                <button className="px-4 py-1.5 sm:px-6 sm:py-2.5  rounded-full flex items-center justify-center focus:outline-none  text-neutral-6000  hover:bg-neutral-100" type="button" >
                                    <span className="mr-2.5">Credit card</span>
                                    <img className="w-8" src={visa} alt="visa"/>
                                    <img className="w-8" src={mastercard} alt="mastercard"/>
                                </button>
                                <div className="w-14 border-b border-neutral-200 my-5"></div>
                            </div>
                        </div>

                        <PaymentInfo/>
                    </div>

                    <div className="pt-8">
                        <a className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6 bg-elemental hover:shadow-2xl text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 " rel="noopener noreferrer" href="/">Confirm and pay</a>
                    </div>
                </div>
            </div>
            


            <div className='hidden lg:block flex-grow'>

            </div>
        </div>
    );
};

export default Checkout;