import React from 'react';

const SectionHeading = ({heading,colorHeading,discription}) => {
    return (
        <div>
            <div>
                <h1 className='text-[#4B5966] text-3xl font-bold'>{heading}  <span className='text-[#5CAF90]'>{colorHeading}</span></h1>
                <p className='text-[#837799] text-sm'>{discription}</p>
            </div>
            <div>

            </div>
        </div>
    );
};

export default SectionHeading;