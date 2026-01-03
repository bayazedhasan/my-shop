import React from 'react';
import SecondHeader from './SecondHeader';
import TopHeader from './TopHeader';
import { useSelector } from 'react-redux';


const Header = () => {

    const products = useSelector((state)=>state.cart.products)
    
    return (

<>
<TopHeader></TopHeader>
        <div className='flex justify-between items-center container mx-auto px-6 p-5'>

            <div><img className='w-46' src="/assets/logo.png" alt="" /></div>

            <div className="w-170">
                <div className="flex items-center border border-[#BCE3C9] rounded-md focus-within:border-blue-500 transition-colors p-1">

                    {/* Category Dropdown */}
                    <select className="p-2 bg-white rounded-l-md focus:outline-none">
                        <option value="all">All Categories</option>
                        <option value="fruits">Fruits</option>
                        <option value="vegetables">Vegetables</option>
                        <option value="snacks">Snacks</option>
                    </select>

                    {/* Separator Line */}
                    <div className="w-px bg-gray-300 h-6 mx-2"></div>

                    {/* Search Input */}
                    <div className="relative flex-1">
                        <input
                            type="search"
                            required
                            placeholder="Search for items...
"
                            className="w-full p-2 pl-3 pr-10 focus:outline-none rounded-none"
                        />
                        <svg
                            className="h-5 w-5 absolute right-2 top-1/2 transform -translate-y-1/2 opacity-50"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </svg>
                    </div>

                </div>
            </div>

            <div className='flex gap-22 cursor-pointer'>
                <div className="">
                    <div className="w-5 indicator flex gap-1 ">
                        <img src="/assets/icon-compare.png" alt="" />
                        <h1 className='text-gray-400'>Compare</h1>
                        <span className="badge badge-xs bg-[#29A56C] indicator-item text-[#FFFFFF]">3</span>
                    </div>
                </div>
                <div className="">
                    <div className="w-5 indicator flex gap-1">
                        <img src="/assets/icon-heart.png" alt="" />
                        <h1 className='text-gray-400'>Wishlist</h1>
                        <span className="badge badge-xs bg-[#29A56C] indicator-item text-[#FFFFFF]">6</span>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="">
                        <div className="w-5 indicator flex gap-1 ">
                            <img src="/assets/icon-cart.png" alt="" />
                            <h1 className='text-gray-400'>Cart</h1>
                            <span className="badge badge-xs  bg-[#29A56C] indicator-item text-[#FFFFFF]">{products.length}</span>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="">
                            <div className="w-5 rounded-full flex gap-1 ">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="/assets/icon-user.png" />
                                <h1 className='text-gray-400'>Account</h1>
                            </div>
                            <div>
                                <ul
                                    tabIndex="-1"
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                    <li><a>Settings</a></li>
                                    <li><a>Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                </div>

            </div>
        </div>
        <div className='border border-gray-100'></div>
        <SecondHeader></SecondHeader>
        
        </>
    );
};

export default Header;