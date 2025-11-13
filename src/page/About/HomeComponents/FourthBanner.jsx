import React from 'react';
import { FiSend } from 'react-icons/fi';

const FourthBanner = () => {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <div data-aos="fade-up" className='inset-0 bg-cover bg-center bg-no-repeat rounded-xl mx-6 ' style={{ backgroundImage: "url('/assets/banner-10.png')" }}>
            <div className=" flex justify-between items-center container mx-auto px-24 mt-10 " >
            <div>
                <div>
                    <h1 className='text-[#253D4E] text-4xl font-bold w-140 pb-5'>Stay home & get your daily
                        needs from our shop</h1>
                    <p className='text-[#7E7E7E] text-lg pb-5'>Start You'r Daily Shopping with <span className='text-[#3BB77E]'>Nest Mart</span></p>
                    <div className="relative w-[480px] mt-5">
                        {/* Input container */}
                        <div className="flex items-center w-full h-[60px] bg-white rounded-full shadow-md px-5">
                            <FiSend className="text-gray-400 mr-2" size={22} />
                            <input
                                type="email"
                                placeholder="Your email address"
                                required
                                className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400"
                            />
                        </div>

                        {/* Floating Button */}
                        <button
                            onClick={handleClick}
                            className="absolute right-0 top-4/8 -translate-y-1/2 px-13 py-5 bg-[#3BB77E] text-white text-sm font-semibold rounded-full 
               hover:bg-[#FDC040] transition-all duration-300 shadow-lg"
                        >
                            Subscribe
                        </button>
                    </div>





                </div>


            </div>
            <div>
                <img className='w-130' src="/assets/banner-13.png" alt="" />
            </div>
        </div>
        </div>
    );
};

export default FourthBanner;