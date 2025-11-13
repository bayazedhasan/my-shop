import React from 'react';
import { FiHome } from 'react-icons/fi';
import { MdChevronRight } from 'react-icons/md';

const ThirdHeader = () => {
    return (
        <>
        <div data-aos="fade-up" className=' container mx-auto px-12 p-4'>
            <div className='flex items-center gap-4'>
            <div className='flex items-center gap-1 transition-transform hover:scale-110 cursor-pointer text-[#3BB77E] hover:text-[#FECC40]'>
                <FiHome />
                <p>Home</p>
            </div>
            <div><MdChevronRight color='gray'/></div>
            <div className='transition-transform hover:scale-110 cursor-pointer'><p className='text-gray-500'>Pages</p></div>
            <div><MdChevronRight color='gray' /></div>
            <div className='transition-transform hover:scale-110 cursor-pointer'><p className='text-gray-500'>About Us</p></div>
        </div>
        </div>
        <div className='border border-gray-100 mb-15'></div>
        </>
    );
};

export default ThirdHeader;