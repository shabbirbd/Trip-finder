import React from 'react';
import fblogo from '../../assets/fblogo.png';
import googlelogo from '../../assets/googlelogo.png';

const Authentication = ({auth}) => {


    return (
        <div className='w-11/12 mx-auto pb-24 lg:pb-32'>
            <h2 className='my-20 capitalize flex items-center justify-center text-3xl md:text-5xl font-semibold leading-[115%] text-neutral-900 dark:text-neutral-100 '>{auth}</h2>

            <div className='max-w-md mx-auto space-y-6'>
                <div className="grid gap-3">
                    <a href="#" className="will-change-transform flex w-full rounded-lg bg-sky-100 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]">
                        <img className="flex-shrink-0 w-6" src={fblogo} alt="Continue with Facebook"/>
                        <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">Continue with Facebook</h3>
                    </a>
                    <a href="#" className="will-change-transform flex w-full rounded-lg bg-sky-100 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]">
                        <img className="flex-shrink-0 w-6" src={googlelogo} alt="Continue with Google"/>
                        <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">Continue with Google</h3>
                    </a>
                </div>
            </div>  

            <div className='relative text-center my-10'>
                <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">OR</span>
            </div>


            <form className="grid grid-cols-1 gap-6 max-w-md mx-auto my-10" action="#" method="post">
                <label className="block">
                    <span className="text-neutral-800 dark:text-neutral-200">Email address</span>
                    <input type="email" autoComplete='email' className="block w-full border border-neutral-200 focus:border-primary-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-sky-600 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1" placeholder="example@example.com"/>
                </label>
                
                <label className="block">
                    <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">Password
                        {
                            auth === "login" &&  <a className="text-sm" href="#">Forgot password?</a> 
                        }
                    </span>
                    <input type="password" autoComplete='current-password' className="block w-full border border-neutral-200 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-sky-600 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"/>
                </label>
                <button className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  disabled:bg-opacity-70 bg-elemental hover:shadow-xl text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600 dark:focus:ring-offset-0" type='button'>Continue</button>
            </form>

            {
                auth === "login" ? 
                    <span className="block text-center text-neutral-700 dark:text-neutral-300">New user?  
                        <a href="/signup"> Create an account</a>
                    </span> 
                    : 
                    <span className="block text-center text-neutral-700 dark:text-neutral-300">Already have an account?  
                        <a href="/login"> Sign in</a>
                    </span>
            }
            

        </div>
    );
};

export default Authentication;