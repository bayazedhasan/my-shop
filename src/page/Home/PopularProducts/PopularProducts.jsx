import React from 'react';
import SectionHeading from '../../../Components/SharedComponents/Header/SectionHeading';
import useData from '../../../Hooks/useData';
import ProductCart from '../../../Components/SharedComponents/Header/ProductCart';

const PopularProducts = () => {
    const {Categories,products} = useData()
    return (
        <div className='container mx-auto px-24 py-24'>
            <div  className='flex justify-between items-center'>
            <div>
                <SectionHeading heading={"New"} colorHeading={"Arrivals"} discription={"Shop online for new arrivals and get free shipping!"}></SectionHeading>
            </div>
            <div className='flex gap-10'>
                {
                Categories.map(category =>(
                    <div className=''>
                        <p className='text-[#777777] font-semibold text-sm'>{category.name}</p>
                    </div>
                ))
            }
            </div>
        </div>
        <ProductCart products={products}></ProductCart>
        </div>
    );
};

export default PopularProducts;