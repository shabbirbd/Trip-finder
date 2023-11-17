import React from 'react';
import hotel1 from '../assets/hotel1.jpg';
import mastercard from '../assets/mastercard.png';
import visa from '../assets/visa.png';
import PaymentInfo from '../components/PaymentInfo';

const Checkout = () => {
    return (
        <div className=' container mt-11 mb-24 lg:mb-32 flex flex-col-reverse lg:flex-row'>
            <div className='w-full lg:w-3/5 xl:w-2/3 lg:pr-10'>
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
            


            <div className='hidden lg:block flex-grow relative'>
                <div className='w-full flex flex-col sm:rounded-2xl border border-neutral-200 space-y-6 sm:space-y-8 sm:p-6 xl:p-8 sticky top-28'>
                    <div className='flex flex-col sm:flex-row sm:items-center'>
                        <div className='flex-shrink-0 w-full sm:w-40 '>
                            <div className=" aspect-w-4 aspect-h-3 sm:aspect-h-4 rounded-2xl overflow-hidden">
                                <img alt="room" className="absolute inset-0 object-cover"  src={hotel1} />
                            </div>
                        </div>

                        <div className="py-5 sm:px-5 space-y-3">
                            <div>
                                <span className="text-sm text-neutral-500line-clamp-1">Hotel room in Tokyo, Jappan</span>
                                <span className="text-base font-medium mt-1 block">The Lounge & Bar</span>
                            </div>
                            <span className="block  text-sm text-neutral-500">2 beds · 2 baths</span>
                            <div className="w-10 border-b border-neutral-200 "></div>
                            <div className="nc-StartRating flex items-center space-x-1 text-sm  " >
                                <div className="pb-[2px]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-[18px] h-[18px] text-orange-500"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"></path></svg>
                                </div>
                                <span className="font-medium ">4.5</span>
                                <span className="text-neutral-500 ">(112)</span>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col space-y-4">
                        <h3 className="text-2xl font-semibold">Price detail</h3>
                        <div className="flex justify-between text-neutral-600 ">
                            <span>$19 x 3 day</span>
                            <span>$57</span>
                        </div>
                        <div className="flex justify-between text-neutral-600 ">
                            <span>Service charge</span>
                            <span>$0</span>
                        </div>
                        <div className="border-b border-neutral-200"></div>
                        <div className="flex justify-between font-semibold">
                            <span>Total</span>
                            <span>$57</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;