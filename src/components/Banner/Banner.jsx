import React from 'react';
import bannerImg from '../../assets/more/3.png';
const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto relative'>
            <img className='w-full relative' src={bannerImg} alt="" />
            <div className='max-w-md absolute space-y-2 md:space-y-4 bottom-2 md:bottom-20 lg:bottom-40 right-2 md:right-6 text-white px-1'>
                <h3 className='text-lg md:text-2xl lg:text-4xl font-bold'>Would you like a Cup of Delicious Coffee?</h3>
                <p className='text-xs md:text-base'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='btn bg-[#D2B48C] text-black'>Learn more</button>
            </div>
        </div>
    );
};

export default Banner;