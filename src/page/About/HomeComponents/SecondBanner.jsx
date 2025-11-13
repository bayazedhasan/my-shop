import React from 'react';

const SecondBanner = () => {
    return (
        <>
        <div data-aos="fade-up" className='flex items-center gap-10 container mx-auto px-42 pt-10'>
            <div>
                <img className='w-350' src="/assets/about-5.png" alt="" />
            </div>
            <div>
                <h3 className='text-[#B6B6B6] text-3xl font-bold pb-8'>Our performance</h3>
                <h1 className='text-[#253D4E] text-5xl font-bold w-120 pb-10'>Your Partner for e-commerce grocery solution</h1>
                <p className='text-[#7E7E8F] text-sm pb-5 w-115'>Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
                <p className='text-[#7E7E8F] text-sm w-118'>Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
            </div>
        </div>

        <div className='flex justify-between container mx-auto px-42 pt-15'>
            <div>
                <h1 className='text-4xl text-[#253D4E] font-bold pb-5'>Who we are</h1>
                <p className='text-[#7E7E8F] text-sm pb-5 w-90'>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</p>
            </div>
            <div>
                <h1 className='text-4xl text-[#253D4E] font-bold pb-5'>Our history</h1>
                <p className='text-[#7E7E8F] text-sm pb-5 w-90'>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</p>
            </div>
            <div>
                <h1 className='text-4xl text-[#253D4E] font-bold pb-5'>Our mission</h1>
                <p className='text-[#7E7E8F] text-sm pb-5 w-90'>Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac odio orci ultrices in.</p>
            </div>
        </div>
        </>
    );
};

export default SecondBanner;