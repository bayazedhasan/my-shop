import { Link } from "react-router";
import useData from "../../../Hooks/useData.js";

const HomeCategory = () => {
    const {Categories} = useData()
    return (
        <div className='grid grid-cols-6 gap-6 container mx-auto px-24 pt-10'>
            {
                Categories.map(category=>(
                    <Link to={"/shop"}>
                    <div>
                        <div  data-aos="fade-up" className=' relative flex flex-col items-center border bg-[#F7F7F7] border-none p-5 '>
                            <img className='w-20 p-1' src={category.image} alt="" />
                            <h3 className='text-[#4B5966] text-md font-semibold'>{category.name}</h3>
                            <p className='text-[#878383] text-xs'>{category.items} Items</p>
                            <div className=' absolute border text-[12px] bg-[#5CAF90] border-none right-0 px-2 top-0 '>
                                <p className='text-gray-100'>{category.discount}%</p>
                            </div>
                        </div>
                    </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default HomeCategory;