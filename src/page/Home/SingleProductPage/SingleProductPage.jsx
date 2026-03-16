import { useParams } from 'react-router';
import useData from '../../../Hooks/useData';
import SectionHeading from '../../../Components/SharedComponents/Header/SectionHeading';
import { FaStar } from 'react-icons/fa';
import ProductCart from '../../../Components/SharedComponents/Header/ProductCart';
import React, { useState } from 'react';
import ProductOptionsModal from '../../../Components/SharedComponents/ProductOptionsModal/ProductOptionsModal';

const SingleProductPage = () => {
    const { id } = useParams();
    const { products } = useData();
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState('cart'); // 'cart' | 'buynow'

    if (!products || products.length === 0) {
        return <p>Loading...</p>;
    }

    const findProduct = products.find(p => p.id == id);
    if (!findProduct) {
        return <p>Product not found</p>;
    }

    const openModal = (mode) => {
        setModalMode(mode);
        setModalOpen(true);
    };

    return (
        <div>
            <div>
                <div className='flex items-center gap-8 my-12 justify-center'>
                    <img className='w-120 rounded-md' src={findProduct?.image} alt="" />
                    <div>
                        <p className='ts'>{findProduct?.categoryName}</p>
                        <h3 className='text-4xl font-semibold'>{findProduct?.name}</h3>
                        <div className='flex items-center gap-12'>

                            <div className='flex gap-1 py-2 text-orange-500'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div>
                                <p className='ts'>Total Rating : {findProduct?.ratings}</p>
                            </div>

                        </div>
                        <div className='flex gap-4 text-2xl '>
                            <p>Price : $ {findProduct?.price}</p>
                            <p className='line-through text-gray-400'>$ {findProduct?.mrp}</p>
                        </div>
                        <div>
                            <p className='ts mb-4'>{findProduct?.description}</p>
                            <p className='font-semibold'>SKU : <span className='font-normal text-gray-600'>{findProduct?.sku}</span></p>
                            <p className='font-semibold'>Stock: <span className='font-normal text-gray-600'>{findProduct?.stock}</span></p>
                            <p className='font-semibold'>Closure : <span className='font-normal text-gray-600'>{findProduct?.closure}</span></p>
                        </div>

                        <div className='flex gap-2 items-center'>
                            <p className='font-semibold mr-3 my-4'>Size : </p>
                            {findProduct?.weightOptions.map((w, index) => (
                                <div key={index}>
                                    <span className='font-normal text-gray-600 btn btn-xs'>{w}</span>
                                </div>
                            ))}
                        </div>

                        <div className='flex gap-2 my-4'>
                            <div>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        openModal('cart');
                                    }}
                                    className="flex-1 w-50 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm border-2 border-green-500 text-green-600 hover:bg-green-50 transition-all duration-200">Add To Cart</button>
                            </div>
                            <div>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        openModal('buynow');
                                    }}
                                    className="flex-1 flex w-50 items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:opacity-90 shadow-md"
                            style={{ background: 'linear-gradient(135deg, #29A56C, #1e7d52)' }}>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mx-auto px-24'>
                <SectionHeading heading={"Top Rted"} colorHeading={"Seleing Products"} discription={"High-quality denim jeans for men with a comfortable"}></SectionHeading>
                <div className='grid grid-cols-5 my-12'>
                    {
                        products.slice(0, 5).map(p => (
                            <ProductCart key={p.id} product={p} />
                        ))
                    }
                </div>
            </div>

            {/* Product Options Modal */}
            <ProductOptionsModal
                product={findProduct}
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                mode={modalMode}
            />
        </div>
    );
};

export default SingleProductPage;
