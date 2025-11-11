
const SecondCart = ({ secoundCarts }) => {
    return (
        <div className="container mx-auto px-6 pt-15 grid grid-cols-5 gap-5">
            {
                secoundCarts.map(cart => (
                    <div className="flex items-center gap-4 border bg-[#F4F6FA] border-none rounded-lg p-5">
                        <div>
                            <img className=" transition transform hover:scale-120" src={cart.img} alt="" />
                        </div>
                        <div>
                            <h2 className="font-bold text-lg">{cart.name}</h2>
                            <p className="text-[#ADADB0] text-md">{cart.short_description}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

export default SecondCart;