import React from 'react';
import bg from "../../../../public/assets/HERO-COVER.jpg"
import { Link } from 'react-router';
const Hero = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${bg})` }} className='container mx-auto px-24 my-10 bg-cover h-[70vh]'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='cp text-xl font-semibold'>70% Off For This Winter</h2>
                    <h1 className='text-5xl leading-18 text-[#253D4E] font-bold'>Bigest Sale For Winter <br />
                        Man & Woman</h1>
                    <Link to="/shop"> <div className='btn w-35 bgc mt-5 rounded-xl text-[#FFFFFF]  transition-transform hover:scale-105 duration-300'>
                        <button className='cursor-pointer'>Shop Now</button>
                    </div></Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;