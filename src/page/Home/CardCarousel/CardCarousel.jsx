import React, { useState, useEffect } from "react";
import useData from "../../../Hooks/useData";

const CardCarousel = () => {
  const { products } = useData()
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // Responsive cards per page
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) setItemsPerPage(1); // Mobile
      else if (window.innerWidth < 1024) setItemsPerPage(2); // Tablet
      else setItemsPerPage(4); // Desktop
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev < totalPages - 1 ? prev + 1 : totalPages - 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const translateX = `-${currentIndex * 100}%`;

  return (
    <>
      {/* First Carousel */}
      <div className="">
        <div className="flex justify-between items-center container mx-auto px-24 pt-10 mb-[-30px]">
          <div>
            <h1 className="text-2xl text-[#4B5966] font-bold">Trending <span className="text-[#5CAF90]">Items</span></h1>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-2 rounded-full ${currentIndex === 0 ? "bg-gray-400/50" : "bg-white/80 hover:bg-white"
                } text-gray-700 shadow-md active:scale-95 transition-transform`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex === totalPages - 1}
              className={`p-2 rounded-full ${currentIndex === totalPages - 1
                  ? "bg-gray-400/50"
                  : "bg-white/80 hover:bg-white"
                } text-gray-700 shadow-md active:scale-95 transition-transform`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className=" container mx-auto px-24">
          <h2 className="text-2xl font-bold text-center mb-6 text-white">
            🛍️ Product Carousel
          </h2>

          <div className=" overflow-hidden ">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(${translateX})` }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => {
                const start = pageIndex * itemsPerPage;
                const end = start + itemsPerPage;
                const visibleItems = products.slice(start, end);

                return (
                  <div
                    key={pageIndex}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-shrink-0 "
                  >
                    {visibleItems.map((item) => (
                      <div
                        key={item.id}
                        className=" border border-gray-200 flex items-center w-80    
                                   hover:scale-105 transition-all duration-300"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className=" w-22 p-2"
                        />
                        <div className="p-4">
                          <h3 className="text-sm text-[#777777] font-semibold mb-1 line-clamp-1">
                            {item.name}
                          </h3>
                          <p className="text-xs text-[#848484]">{item.categoryName}</p>
                          <div className="flex items-center gap-4">
                            <p className="text-sm font-bold text-[#4B5966] mt-2">
                            ${item.price.toFixed(1)}
                          </p>
                          <p className="text-xs line-through font-bold text-[#4B5966] mt-2">${item.mrp}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Second Carousel */}
      <div className="">
        <div className="flex justify-between items-center container mx-auto px-24 pt-10 mb-[-30px]">
          <div>
            <h1 className="text-2xl text-[#4B5966] font-bold">Top <span className="text-[#5CAF90]">Rated</span></h1>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-2 rounded-full ${currentIndex === 0 ? "bg-gray-400/50" : "bg-white/80 hover:bg-white"
                } text-gray-700 shadow-md active:scale-95 transition-transform`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex === totalPages - 1}
              className={`p-2 rounded-full ${currentIndex === totalPages - 1
                  ? "bg-gray-400/50"
                  : "bg-white/80 hover:bg-white"
                } text-gray-700 shadow-md active:scale-95 transition-transform`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className=" container mx-auto px-24">
          <h2 className="text-2xl font-bold text-center mb-6 text-white">
            🛍️ Product Carousel
          </h2>

          <div className=" overflow-hidden ">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(${translateX})` }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => {
                const start = pageIndex * itemsPerPage;
                const end = start + itemsPerPage;
                const visibleItems = products.slice(start, end);

                return (
                  <div
                    key={pageIndex}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-shrink-0 "
                  >
                    {visibleItems.map((item) => (
                      <div
                        key={item.id}
                        className=" border border-gray-200 flex items-center w-80    
                                   hover:scale-105 transition-all duration-300"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className=" w-22 p-2"
                        />
                        <div className="p-4">
                          <h3 className="text-sm text-[#777777] font-semibold mb-1 line-clamp-1">
                            {item.name}
                          </h3>
                          <p className="text-xs text-[#848484]">{item.categoryName}</p>
                          <div className="flex items-center gap-4">
                            <p className="text-sm font-bold text-[#4B5966] mt-2">
                            ${item.price.toFixed(1)}
                          </p>
                          <p className="text-xs line-through font-bold text-[#4B5966] mt-2">${item.mrp}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Third Carousel */}
      <div className="">
        <div className="flex justify-between items-center container mx-auto px-24 pt-10 mb-[-30px]">
          <div>
            <h1 className="text-2xl text-[#4B5966] font-bold">Top <span className="text-[#5CAF90]">Selling</span></h1>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-2 rounded-full ${currentIndex === 0 ? "bg-gray-400/50" : "bg-white/80 hover:bg-white"
                } text-gray-700 shadow-md active:scale-95 transition-transform`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex === totalPages - 1}
              className={`p-2 rounded-full ${currentIndex === totalPages - 1
                  ? "bg-gray-400/50"
                  : "bg-white/80 hover:bg-white"
                } text-gray-700 shadow-md active:scale-95 transition-transform`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className=" container mx-auto px-24">
          <h2 className="text-2xl font-bold text-center mb-6 text-white">
            🛍️ Product Carousel
          </h2>

          <div className=" overflow-hidden ">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(${translateX})` }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => {
                const start = pageIndex * itemsPerPage;
                const end = start + itemsPerPage;
                const visibleItems = products.slice(start, end);

                return (
                  <div
                    key={pageIndex}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-shrink-0 "
                  >
                    {visibleItems.map((item) => (
                      <div
                        key={item.id}
                        className=" border border-gray-200 flex items-center w-80    
                                   hover:scale-105 transition-all duration-300"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className=" w-22 p-2"
                        />
                        <div className="p-4">
                          <h3 className="text-sm text-[#777777] font-semibold mb-1 line-clamp-1">
                            {item.name}
                          </h3>
                          <p className="text-xs text-[#848484]">{item.categoryName}</p>
                          <div className="flex items-center gap-4">
                            <p className="text-sm font-bold text-[#4B5966] mt-2">
                            ${item.price.toFixed(1)}
                          </p>
                          <p className="text-xs line-through font-bold text-[#4B5966] mt-2">${item.mrp}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default CardCarousel;
