import React from 'react';
import useData from '../../Hooks/useData';
import ProductCart from '../../Components/SharedComponents/Header/ProductCart';
import SectionHeading from '../../Components/SharedComponents/Header/SectionHeading';

const Deals = () => {
    const {products} = useData()
    return (
        <div data-aos="fade-up" className='py-12 container mx-auto px-24'>
            <div className='flex justify-center items-center text-center'><SectionHeading heading={"Hot"} colorHeading={"Deals"} discription={"70% Off For This Winter"}></SectionHeading></div>
            <div className='grid grid-cols-5 gap-6 items-center pt-12'>
            {
                products.map(p=><ProductCart product={p}></ProductCart>)
            }
        </div>
        </div>
    );
};

export default Deals;