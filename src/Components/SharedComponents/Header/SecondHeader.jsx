import React from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import { RiArrowDropDownLine } from 'react-icons/ri';

import { NavLink } from 'react-router';

const SecondHeader = () => {
    return (
        <>
        <div className='flex justify-between items-center container mx-auto px-6 p-1'>
            <div className='border bg-[#3BB77E] hover:bg-[#29A56C] w-70 transition-transform hover:scale-105 cursor-pointer text-center text-lg text-[#FFFFFF] font-semibold rounded-md mt-2'>
                 <select className="p-2  rounded-l-md focus:outline-none">
                        <option value="all" className='text-gray-500 '>Browse All Categories</option>
                        <option value="fruits" className='text-gray-500'>Fruits</option>
                        <option value="vegetables" className='text-gray-500'>Vegetables</option>
                        <option value="snacks" className='text-gray-500'>Snacks</option>
                    </select>
            </div>
            <div className='flex items-center gap-15 '>
                <NavLink to={"/deals"}>
                    <div className='flex items-center gap-1 transition-transform hover:scale-110 cursor-pointer'>
                    <img src="/assets/icon-hot.png" alt="" />
                    <p>Deals</p>
                </div>
                </NavLink>
                <div className='flex items-center transition-transform hover:scale-110 cursor-pointer'>
                    <NavLink to="/">Home</NavLink>
                    <MdArrowDropDown />
                </div>
                <div className='flex items-center transition-transform hover:scale-110 cursor-pointer'>
                    <NavLink to="/shop">Shop</NavLink>
                    <MdArrowDropDown />
                </div>
                <div className='flex items-center transition-transform hover:scale-110 cursor-pointer'>
                    <NavLink to="/blog">Blog</NavLink>
                    <MdArrowDropDown />
                </div>
                <NavLink className='transition-transform hover:scale-110 cursor-pointer' to="/about">About</NavLink>
                <NavLink className='transition-transform hover:scale-110 cursor-pointer' to="/contact">Contact</NavLink>
            </div>
            <div className='flex gap-2 items-center'>
                <img src="/assets/icon-headphone.png" alt="" />
                <div>
                    <h2 className='text-[#3BB77E] font-bold text-2xl'>1900 - 888</h2>
                    <p className='text-gray-400 text-xs'>24/7 Support Center</p>
                </div>
            </div>
        </div>
        <div className='border border-gray-100 mt-2'></div>
        
        </>
    );
};

export default SecondHeader;