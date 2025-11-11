import React from 'react';

const Card = ({ carts }) => {
    return (
        <>
            <div className='flex flex-col justify-center items-center gap-3 container mx-auto px-42 pt-15'>
                <h1 className='text-[#253D4E] text-5xl font-bold'>What We Provide?</h1>
                <img src="/assets/wave.png" alt="" />
            </div>

            <div className='grid grid-cols-3 justify-center gap-10 container mx-auto px-42 py-10'>
                {
                    carts.map((cart, index) => (
                        <div key={index}>
                            <div className="card bg-base-100 w-95 border border-gray-100 h-100 shadow-md hover:shadow-xl transition">
                                <figure className=" pt-8">
                                    <img
                                        src={cart.img}
                                        alt={cart.title || "Image"}
                                        className="rounded-xl w-30 object-cover transition-transform hover:scale-110"
                                    />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-[#253D4E] text-2xl">{cart.title}</h2>
                                    <p className="text-gray-500 text-[15px]">{cart.description}</p>
                                    <div className='pb-5'>
                                        <button className="text-[#29A56C] hover:text-[#FCC040]">
                                           {cart.button}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Card;