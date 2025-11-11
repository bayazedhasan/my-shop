import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const ThirdBanner = () => {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <div className='mt-[-60px] pb-30'>
            <div className='flex flex-col justify-center items-center gap-3 container mx-auto px-42 pt-15'>
                <h1 className='text-[#253D4E] text-5xl font-bold'>Our Team</h1>
                <img src="/assets/wave.png" alt="" />
            </div>

            <div className=' flex gap-10 container mx-auto px-42 pt-10'>
                <div>
                    <p className='text-[#3BB77E] text-[16px] font-bold'>Our Team</p>
                    <h1 className='text-5xl font-bold w-100 text-[#253D4E] pb-8'>Meet Our Expert Team</h1>
                    <p className='text-[#7E7E8F] text-sm pb-5 w-90'>Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.</p>
                    <p className='text-[#7E7E8F] text-sm pb-6 w-90'>Proin ullamcorper pretium orci. Donec necscele risque leo. Nam massa dolor imperdiet neccon sequata congue idsem. Maecenas malesuada faucibus finibus.

                    </p>
                    <div>
                        <button
                            onClick={handleClick}
                            className="px-8 py-3 bg-[#3BB77E] text-white text-sm font-semibold rounded hover:bg-[#FDC040] transition-colors duration-300"
                        >
                            View All Members
                        </button>
                    </div>
                </div>
                <div className="relative">
                    <img className="rounded-xl w-200" src="/assets/about-6.png" alt="" />

                    <div className="absolute flex flex-col items-center gap-2 top-72 left-10 bg-white bg-opacity-80 px-18 py-8 rounded-lg shadow-xl transition-transform hover:scale-110">
                        <h2 className="text-xl font-bold text-center">Dilan Specter</h2>
                        <p className="text-gray-700">Head Engineer</p>

                        <div className="flex justify-center gap-3">
                            <FaFacebookF className="text-[#3BB77E] hover:text-[#FDC040] transition-colors duration-300 cursor-pointer" />
                            <FaTwitter className="text-[#3BB77E] hover:text-[#1DA1F2] transition-colors duration-300 cursor-pointer" />
                            <FaInstagram className="text-[#3BB77E] hover:text-[#C13584] transition-colors duration-300 cursor-pointer" />
                            <FaYoutube className="text-[#3BB77E] hover:text-[#FF0000] transition-colors duration-300 cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className='relative'>
                    <img className='rounded-xl w-200' src="/assets/about-8.png" alt="" />
                    <div className="absolute flex flex-col items-center gap-2 top-72 left-10 bg-white bg-opacity-80 px-18 py-8 rounded-lg shadow-xl 
                  transition-transform hover:scale-110">
                        <h2 className="text-xl font-bold text-center">Dilan Specter</h2>
                        <p className="text-gray-700">Head Engineer</p>
                        <div className='flex justify-center gap-3'>
                            <FaFacebookF className="text-[#3BB77E] hover:text-[#FDC040] transition-colors duration-300 cursor-pointer" />
                            <FaTwitter className="text-[#3BB77E] hover:text-[#1DA1F2] transition-colors duration-300 cursor-pointer" />
                            <FaInstagram className="text-[#3BB77E] hover:text-[#C13584] transition-colors duration-300 cursor-pointer" />
                            <FaYoutube className="text-[#3BB77E] hover:text-[#FF0000] transition-colors duration-300 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThirdBanner;