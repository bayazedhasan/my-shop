import React from 'react';
import { CiDeliveryTruck, CiStopwatch } from 'react-icons/ci';
import { FaHandHoldingUsd } from 'react-icons/fa';
import { FaCircleDollarToSlot } from 'react-icons/fa6';


const SupportCart = () => {
    return (
        <div  data-aos="fade-up" className='flex justify-between items-center container mx-auto px-24'>
            <div className='flex flex-col justify-center items-center border border-gray-200  w-75 p-5'>
            <div className='p-2'>
                <CiDeliveryTruck color='#29A56C' size={55}/>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-lg font-semibold text-[#4B5966]'>Free Shipping</h2>
                <p className='text-[#807D7B] text-sm'>Free shipping on all US order or</p>
                <p className='text-[#807D7B] text-sm'>order above $200</p>

            </div>
        </div>
       <div className='flex flex-col justify-center items-center border border-gray-200  w-75 p-5'>
            <div className='p-2'>
                <FaHandHoldingUsd color='#29A56C' size={55}/>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-lg font-semibold text-[#4B5966]'>24X7 Support</h2>
                <p className='text-[#807D7B] text-sm'>Contact us 24 hours a day, 7 days </p>
                <p className='text-[#807D7B] text-sm'>a week</p>

            </div>
        </div>
        <div className='flex flex-col justify-center items-center border border-gray-200  w-75 p-5'>
            <div className='p-2'>
                <CiStopwatch color='#29A56C' size={55}/>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-lg font-semibold text-[#4B5966]'>30 Days Return</h2>
                <p className='text-[#807D7B] text-sm'>Simply return it within 30 days for </p>
                <p className='text-[#807D7B] text-sm'>an exchange</p>

            </div>
        </div>
        <div className='flex flex-col justify-center items-center border border-gray-200  w-75 p-5'>
            <div className='p-2'>
                <FaCircleDollarToSlot color='#29A56C' size={55}/>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-lg font-semibold text-[#4B5966]'>Payment Secure</h2>
                <p className='text-[#807D7B] text-sm'>Contact us 24 hours a day, 7 days </p>
                <p className='text-[#807D7B] text-sm'>a week</p>

            </div>
        </div>
        </div>
    );
};

export default SupportCart;