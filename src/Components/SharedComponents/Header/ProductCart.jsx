import React from 'react';
import { MdOutlineStar } from 'react-icons/md';

const ProductCart = ({product}) => {
    return (
        <div>
            
                <div
                    
                    className="border hover:scale-105 duration-300 cursor-pointer border-gray-200 w-60 rounded-md flex flex-col justify-between h-[380px] bg-white"
                >
                    <div className="flex-1 flex flex-col">
                        <div className="  ">
                            <img
                                src={product?.image}
                                alt={product?.name}
                                className=" h-full"
                            />
                        </div>
                        <div className="p-4 flex flex-col justify-between flex-1">
                            <p className="text-[#A0A0A0] text-sm pt-2">{product?.categoryName}</p>
                            <h1 className="text-[#4B5966] text-md py-1 pb-2 line-clamp-2">
                                {product?.name}
                            </h1>
                            <div className="flex items-center pt-2">
                                <MdOutlineStar color="#F6A454" />
                                <MdOutlineStar color="#F6A454" />
                                <MdOutlineStar color="#F6A454" />
                                <MdOutlineStar color="#F6A454" />
                                <MdOutlineStar color="#A0A0A0" />
                            </div>
                            <div className="flex gap-4 pt-2">
                                <p className="text-[#4B5966] font-bold text-lg">${product?.price}</p>
                                <p className="line-through text-[#A0A0A0]">${product?.mrp}</p>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
    );
};

export default ProductCart;
