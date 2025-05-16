import React from 'react';
import bannerImg from '../../assets/more/3.png';
const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto relative'>
            <img src={bannerImg} alt="" />
            <div className='max-w-lg absolute space-y-4 bottom-40 right-6 text-white'>
                <h3 className='text-4xl font-bold'>Would you like a Cup of Delicious Coffee?</h3>
                <p>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='btn bg-[#D2B48C] text-black'>Learn more</button>
            </div>
        </div>
    );
};

export default Banner;