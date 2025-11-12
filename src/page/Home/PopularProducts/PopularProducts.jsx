import React, { useState } from 'react';
import SectionHeading from '../../../Components/SharedComponents/Header/SectionHeading';
import useData from '../../../Hooks/useData';
import ProductCart from '../../../Components/SharedComponents/Header/ProductCart';
import { Link } from 'react-router';

const PopularProducts = () => {
    const { Categories, products } = useData()
    const [categoryId, setCategoryId] = useState("All");
    const handelCategoryId = (id) => {
        setCategoryId(id);
    }
    const filterProduct = categoryId==="All" ? products : products.filter(p => p.categoryId == categoryId)
    return (
        <div className='container mx-auto px-24 py-24'>
            <div className='flex justify-between items-center'>
                <div>
                    <SectionHeading heading={"New"} colorHeading={"Arrivals"} discription={"Shop online for new arrivals and get free shipping!"}></SectionHeading>
                </div>
                <div className='flex gap-10 items-center'>
                    
                    <div onClick={()=>handelCategoryId("All")} className='text-[#777777] cursor-pointer font-semibold text-sm'>
                        <p>All</p>
                    </div>
                   
                    {
                        Categories.map(category => (
                            <div className=''>

                                <p onClick={() => handelCategoryId(category?.id)} className='text-[#777777] cursor-pointer font-semibold text-sm'>{category?.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='grid grid-cols-5 gap-6 pt-15'>
                {
                    filterProduct
                        .sort((a, b) => b.ratings - a.ratings)
                        .slice(0, 10)
                        .map((product) => <ProductCart product={product}></ProductCart>)
                }
            </div>

        </div>
    );
};

export default PopularProducts;