import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { MdCall } from 'react-icons/md';
import { Link } from 'react-router';

const TopHeader = () => {
    return (
        <div className='bg-[#F8F8FB]'>
            <div className='flex justify-between items-center container mx-auto px-6 p-3 '>
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
                
                <Link to={"/contact"}><p>Help?</p></Link>
                <Link to={"/shop/:id"}><p>Trac Order?</p></Link>
                <p>English</p>
                <Link to={"/contact"}><p>Contact Us</p></Link>
            </div>
        </div>
        </div>
    );
};

export default TopHeader;