import React from 'react';
import Footer from '../../Components/Footer';
import useData from '../../Hooks/useData';


const ShopNow = () => {
    const {Categories,} = useData()

    return (
        <div>
            <div className='grid grid-cols-12'>
                <div className='col-span-4'>
                    <div>
                        {
                            Categories.map(category=>(
                                <div><h1>{category.name}</h1></div>
                            ))
                        }
                    </div>
                    
                </div>
            </div>
        <Footer></Footer>
        </div>
    );
};

export default ShopNow;