import React from 'react';
import ImageCarousel from './ImageCarousel';


const Banner = () => {
    return (
        <>
            <div className='flex items-center gap-10 justify-center container mx-auto px-42 mt-15'>
                <div className=''>
                    <img className='w-400 rounded-lg' src="/assets/about-1.png" alt="" />
                </div>
                <div>
                    <h1 className='text-5xl font-bold text-[#253D4E]'>Welcome to Nest</h1>
                    <p className='text-[#7E7E7E] text-[15px] w-140 pt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>
                    <p className='text-[#7E7E7E] text-[15px] w-150 pt-4 pb-6'>Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>
                    <ImageCarousel></ImageCarousel>
                </div>
            </div>
            
        </>
    );
};


export default Banner;