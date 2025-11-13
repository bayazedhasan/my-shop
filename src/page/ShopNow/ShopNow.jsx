import React, { useState } from 'react';
import Footer from '../../Components/Footer';
import useData from '../../Hooks/useData';
import ProductCart from '../../Components/SharedComponents/Header/ProductCart';


const ShopNow = () => {
    const {Categories,products} = useData()
    const [id,setId] = useState()
    const [width,setWidth] = useState()
    const handleId = (id) => {
        setId(id)
    }
    const handleWidth = (width) => {
        setWidth(width)
    }
    
    const filterDAta = products.filter(p=>{
        const matchCategory = id?p.categoryId == id:products;
        const matchWidth = width?p.width==width:products 
        return matchCategory&&matchWidth
    })

    return (
        <div>
            <div className='grid grid-cols-12 gap-6 container mx-auto px-24 pt-12'>
                <div className='col-span-3'>
                    <div className=' cursor-pointer border border-gray-200 p-3'>
                        <p className='border-b border-gray-200 pb-3 mb-4 text-[#4B5966] text-md font-bold'>Category</p>
                        {
                            Categories.map(category=>(
                                <div onClick={()=>handleId(category.id)} className='flex gap-2 items-center pb-4 pl-4 '>
                                    <input type="checkbox" name="" id="" />
                                    <h1  className='text-[#7A7A7A] text-sm'>{category.name}</h1>
                                    </div>
                            ))
                        }
                        <div>
                            <p className='border-b border-gray-200 pt-2 pb-3 mb-4 text-[#4B5966] text-md font-bold'>Width</p>
                            {
                            [...new Set(products.map(p=>p.width))].map(p=>(
                                <div onClick={()=>handleWidth(p)} className='flex gap-2 items-center pb-4 pl-4 '>
                                    <input type="checkbox" name="" id="" />
                                    <h1  className='text-[#7A7A7A] text-sm'>{p}</h1>
                                    </div>
                            ))
                        }
                        </div>
                    </div>
                    
                </div>
                <div className='col-span-9'>
                        <div>

                        </div>
                        <div className='grid grid-cols-4 gap-4'>
                            {
                                filterDAta.map(p=><ProductCart product={p}></ProductCart>)
                            }
                        </div>
                </div>
            </div>
        <Footer></Footer>
        </div>
    );
};

export default ShopNow;