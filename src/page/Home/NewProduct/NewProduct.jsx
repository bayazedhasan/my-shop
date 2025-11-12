import React from 'react';
import SectionHeading from '../../../Components/SharedComponents/Header/SectionHeading';
import useData from '../../../Hooks/useData';
import ProductCart from '../../../Components/SharedComponents/Header/ProductCart';

const NewProduct = () => {
    const {products} = useData()
    return (
        <div>
            <div className='container mx-auto px-24 pt-24'>
            <SectionHeading heading={"Day of the deal"} colorHeading={"deal"} discription={"Don't wait. The time will never be just right."}></SectionHeading>
        </div>

        <div className='flex gap-8 flex-wrap justify-center container mx-auto px-24 py-24'>
            {
                products.slice(-5).map(p=><ProductCart product={p}></ProductCart>)
            }
        </div>
        </div>
    );
};

export default NewProduct;