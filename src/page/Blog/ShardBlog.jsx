import React from 'react';
import useData from '../../Hooks/useData';
import SectionHeading from '../../Components/SharedComponents/Header/SectionHeading';
import { Link } from 'react-router';

const ShardBlog = () => {
    const {blogs} = useData()
    return (

        <div data-aos="fade-up" className='container mx-auto px-24'>
            <div className='flex justify-between items-center pt-12'>
                <SectionHeading heading={"Latest"} colorHeading={"Blog"} discription={"We tackle interesting topics every day in 2023."}></SectionHeading>
                <Link to={"/blog"}><p className='text-[#4B5966] hover:text-[#5CAF90] '>All Blogs</p></Link>
            </div>
            <div className='pt-12 grid grid-cols-5 gap-6'>
                {
                    blogs.map(blog=>(
                        <div className=' hover:shadow-orange-50 w-62 '>
                            <div>
                                <img className='w-65' src={blog?.img} alt="" />
                            </div>
                            <div className='p-2 '>
                                <h1 className='text-[#4B5966] text-lg font-semibold'>{blog?.title}</h1>
                                <Link to={"/blog"}><button className='pt-2 cursor-pointer text-gray-600 text-sm duration-300 hover:text-[#5CAF90]'>{blog?.btn}</button></Link>
                            </div>
                        </div>
                    ))
                }
            </div>
            
            
        </div>
    );
};

export default ShardBlog;