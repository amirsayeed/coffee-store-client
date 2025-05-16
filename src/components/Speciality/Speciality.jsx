import React from 'react';
import icon1 from '../../assets/icons/1.png'
import icon2 from '../../assets/icons/2.png'
import icon3 from '../../assets/icons/3.png'
import icon4 from '../../assets/icons/4.png'
const Speciality = () => {
    return (
        <div className='grid grid-cols-4 gap-5 bg-[#ECEAE3] p-4'>
            <div className='space-y-2 text-[#331A15]'>
                <img src={icon1} alt="" />
                <h3 className="text-base font-bold">Awesome Aroma</h3>
                <p className='text-[#1B1A1A]'>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className='space-y-2 text-[#331A15]'>
                <img src={icon2} alt="" />
                <h3 className="text-base font-bold">High Quality</h3>
                <p className='text-[#1B1A1A]'>We served the coffee to you maintaining the best quality</p>
            </div>
            <div className='space-y-2 text-[#331A15]'>
                <img src={icon3} alt="" />
                <h3 className="text-base font-bold">Pure Grades</h3>
                <p className='text-[#1B1A1A]'>The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div className='space-y-2 text-[#331A15]'>
                <img src={icon4} alt="" />
                <h3 className="text-base font-bold">Proper Roasting</h3>
                <p className='text-[#1B1A1A]'>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
        </div>
    );
};

export default Speciality;