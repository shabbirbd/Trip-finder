import React from 'react';

const PaymentInfo = () => {
    return (
        <div>
            <div className="space-y-5" >
                <div className="space-y-1">
                    <label className="text-sm font-medium text-neutral-700" >Card number </label>
                    <input type="text" className="block w-full border  border-neutral-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white rounded-2xl text-sm font-normal h-11 px-4 py-3 " defaultValue="111 112 222 999"/>
                </div>

                <div className="space-y-1">
                    <label className="text-sm font-medium text-neutral-700">Card holder </label>
                    <input type="text" className="block w-full border  border-neutral-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white rounded-2xl text-sm font-normal h-11 px-4 py-3 " defaultValue="JOHN DOE"/>
                </div>

                <div className="flex space-x-5  ">
                    <div className="flex-1 space-y-1">
                        <label className="text-sm font-medium text-neutral-700" >Expiration date </label>
                        <input type="date" className="block w-full border  border-neutral-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white rounded-2xl text-sm font-normal h-11 px-4 py-3 " defaultValue="MM/YY"/>
                    </div>
                    
                    <div className="flex-1 space-y-1">
                        <label className="text-sm font-medium text-neutral-700" >CVC </label>
                        <input type="text" className="block w-full border border-neutral-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white rounded-2xl text-sm font-normal h-11 px-4 py-3 "/>
                    </div>
                </div>
                
                <div className="space-y-1">
                    <label className="text-sm font-medium text-neutral-700" >Messager for author </label>
                    <textarea className="block w-full  border text-sm rounded-2xl border-neutral-200 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 bg-white " rows="4" placeholder="..."></textarea>
                    <span className="text-sm text-neutral-500 block">Write a few sentences about yourself.</span>
                </div>
            </div>
        </div>
    );
};

export default PaymentInfo;