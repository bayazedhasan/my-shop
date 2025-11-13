import React from 'react';
import bg from '../../../../public/assets/execulisive colloction.jpg'
import { Link } from 'react-router';
const LatestExclusive = () => {
    return (
        <div className='container mx-auto px-24'>
            <div style={{ backgroundImage: `url(${bg})` }} className=' bg-cover h-[80vh]'>
                <div  data-aos="fade-up" className='flex flex-col justify-center items-end text-right container mx-auto px-24 h-full'>
                    <h2 className='text-2xl text-white font-semibold'>30% off sale</h2>
                    <h1 className='text-5xl leading-18 text-white font-bold'>Latest Exclusive <br />
                        Summer Collection</h1>
                    <Link to="/shop"> <div className='btn w-30 bgc mt-5 border-none rounded-xl text-[#FFFFFF]  transition-transform hover:scale-105 duration-300'>
                        <button className='cursor-pointer'>Shop Now</button>
                    </div></Link>
                </div>
            </div>
        </div>
    );
};

export default LatestExclusive;