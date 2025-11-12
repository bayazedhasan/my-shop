import React from "react";
import { Link } from "react-router";
import useData from "../../../Hooks/useData";

const CollectionCart = () => {
  const { collectionCart } = useData();

  return (
    <div className="container mx-auto px-24 py-16 grid grid-cols-3 gap-6">
      {collectionCart.map((collection) => (
        <div
          key={collection.id}
          className="relative h-[35vh] rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
          style={{
            backgroundImage: `url(${collection.bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          
          <div className="absolute inset-0 bg-black/40"></div>

          
          <div className="absolute inset-0 flex flex-col justify-center items-end text-right px-8">
            <h1 className="text-3xl text-white font-bold mb-2 drop-shadow-lg w-50">
              {collection.name}
            </h1>
            <div className=" absolute top-0 left-0 bg-white px-2">
                <p className="text-xs text-gray-500">{collection.discount}</p>
            </div>
            
            <Link
              to="/shop"
              className="mt-3 bg-white px-4 bgc text-white py-1 rounded-md text-sm font-semibold hover:bg-gray-200 transition"
            >
              Shop Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionCart;
