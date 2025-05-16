import React from 'react';
import bannerImg from '../../assets/more/3.png';
const Banner = () => {
    return (
        <div className='relative'>
            <img src={bannerImg} alt="" />
            <div className='max-w-xl absolute space-y-3 bottom-40 right-4'>
                <h3 className='text-4xl font-bold'>Would you like a Cup of Delicious Coffee?</h3>
                <p>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='btn'>Learn more</button>
            </div>
        </div>
    );
};

export default Banner;