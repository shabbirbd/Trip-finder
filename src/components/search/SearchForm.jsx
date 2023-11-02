import React from 'react';
import { BsFillCalendarDayFill, BsGeoAlt, BsPersonFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";



const SearchForm = () => {
    return (
            <form className='border-2 border-red-500 flex lg:flex-row flex-col items-center justify-center mx-14 pt-6'>
                <div className='border-2 border-green-400 flex-1 flex items-center' >
                    <i><BsGeoAlt/></i>
                    <div className='border-2 border-blue-400 flex flex-col'>
                        <input type="text" placeholder='Location'  className=''/>
                        <span className=''>Where are you going?</span>
                    </div>
                </div>

                <div className=''></div>
                
                <div className='border-2 border-green-400 flex-1 flex items-center'>
                    <i><BsFillCalendarDayFill/></i>
                     <div className='border-2 border-blue-400 flex'>
                        <div className='border-2 border-yellow-500 flex flex-col'>
                            <input data-toggle="datepicker" type="text" placeholder='Check in'/>
                            <span>Check in</span>
                        </div> 
                        <div className='border-2 border-yellow-500 flex flex-col'>
                            <input type="date" />
                            <span>Check out</span>
                        </div> 
                     </div>
                </div>

                <div className=''></div>

                <div className='border-2 border-green-400 flex-1 flex items-center'>
                    <i><BsPersonFill/></i>
                    <div className='border-2 border-blue-500'>
                        <h1>1 Guests</h1>
                        <span>Guests</span>
                    </div>
                    <div>
                        <CiSearch/>
                    </div>
                </div>
            </form>
    );
};

export default SearchForm;