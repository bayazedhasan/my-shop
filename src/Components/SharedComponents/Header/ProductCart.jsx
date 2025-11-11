import React from 'react';
import { MdOutlineStar } from 'react-icons/md';

const ProductCart = ({products}) => {
    return (
        <div className='grid grid-cols-4 gap-6'>
            {
                products.map(product=>(
                    <div className='border hover:scale-105 duration-300 cursor-pointer border-gray-200 w-80 rounded-md'>
                        <div>
                            <img src={product.image} alt="" />
                        </div>
                        <div className='p-4'>
                            <p className='text-[#A0A0A0] text-sm pt-2'>{product.categoryName}</p>
                            <h1 className='text-[#4B5966] text-md py-1 pb-2 '>{product.name}</h1>
                            <div className='flex items-center pt-4 '>
                                <MdOutlineStar color='#F6A454'/>
                                <MdOutlineStar color='#F6A454'/>
                                <MdOutlineStar color='#F6A454'/>
                                <MdOutlineStar color='#F6A454'/>
                                <MdOutlineStar color='#A0A0A0'/>
                            </div>
                            <div className='flex gap-4 pt-2'>
                                <p className='text-[#4B5966] font-bold text-lg'>${product.price}</p>
                                <p className=' line-through text-[#A0A0A0]'>${product.mrp}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default ProductCart;