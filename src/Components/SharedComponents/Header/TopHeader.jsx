import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { MdCall } from 'react-icons/md';

const TopHeader = () => {
    return (
        <div className='flex justify-between items-center container mx-auto px-6 p-3 bg-[#F8F8FB]'>
            <div className='flex items-center gap-1'>
                <MdCall />
                <p className='pr-2 text-gray-500 text-xs font-semibold'>01791971760</p>
                <div className='flex items-center gap-1'>
                    <FaWhatsapp />
                    <p className='text-gray-500 text-xs font-semibold'>01791971760</p>
                </div>
            </div>
            <div>
                <p className='text-gray-500 text-xs font-semibold'>World's Fastest Online Shopping Destination</p>
            </div>
            <div className='flex items-center gap-5 text-gray-500 text-xs font-semibold'>
                <p>Help?</p>
                <p>Trac Order?</p>
                <p>English</p>
                <p>Contact Us</p>
            </div>
        </div>
    );
};

export default TopHeader;