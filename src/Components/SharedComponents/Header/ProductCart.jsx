import React, { useEffect } from 'react';
import { MdOutlineStar } from 'react-icons/md';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaCartShopping } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { addToCart } from "../../../redux/features/cart/cartSlice";


const ProductCart = ({ product }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div
      data-aos="fade-up"
      className="border border-gray-200 hover:scale-101 w-60 rounded-md flex flex-col h-[380px] bg-white relative"
    >
      <Link to={`/shop/${product?.id}`}>
        <img
          src={product?.image}
          alt={product?.name}
          className="h-[200px] cursor-grab w-full object-cover"
        />
      </Link>

      <button
        onClick={handleAddToCart}
        className="absolute top-3 cursor-pointer right-3 hover:scale-110 transition"
        type="button"
      >
        <FaCartShopping color="#29A56C" size={20} />
      </button>

      <div className="p-4 flex flex-col justify-between flex-1">
        <p className="text-[#A0A0A0] text-sm">{product?.categoryName}</p>

        <h1 className="text-[#4B5966] text-md py-1 line-clamp-2">
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
          <p className="text-[#4B5966] font-bold text-lg">
            ${product?.price}
          </p>
          <p className="line-through text-[#A0A0A0]">
            ${product?.mrp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
