import React, { useEffect } from 'react';
import { MdOutlineStar } from 'react-icons/md';
import { Link } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProductCart = ({ product }) => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <div
        data-aos="fade-up"
        className="border hover:scale-105 duration-300 cursor-pointer border-gray-200 w-60 rounded-md flex flex-col justify-between h-[380px] bg-white"
      >
        <Link to={`/shop/${product.id}`}>
          <div className="flex-1 flex flex-col">
            <div>
              <img
                src={product?.image}
                alt={product?.name}
                className="h-50 w-full"
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
        </Link>
      </div>
    </div>
  );
};

export default ProductCart;
