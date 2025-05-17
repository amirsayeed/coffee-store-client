import React from 'react';
import cup1 from '../../assets/cups/Rectangle 9.png'
import cup2 from '../../assets/cups/Rectangle 10.png'
import cup3 from '../../assets/cups/Rectangle 11.png'
import cup4 from '../../assets/cups/Rectangle 12.png'
import cup5 from '../../assets/cups/Rectangle 13.png'
import cup6 from '../../assets/cups/Rectangle 14.png'
import cup7 from '../../assets/cups/Rectangle 15.png'
import cup8 from '../../assets/cups/Rectangle 16.png'

const FollowInsta = () => {
    return (
        <div className='max-w-7xl mx-auto my-20 text-center space-y-2'>
            <p>Follow Us Now</p>
            <h2 className="text-3xl font-bold">Follow on Instagram</h2>
            <div className='grid grid-cols-4 gap-4 mt-5'>
                <img className='w-[300px] h-[300px] object-cover rounded-xl' src={cup1} alt="" />
                <img className='w-[300px] h-[300px] object-cover rounded-xl' src={cup2} alt="" />
                <img className='w-[300px] h-[300px] object-cover rounded-xl' src={cup3} alt="" />
                <img className='w-[300px] h-[300px] object-cover rounded-xl' src={cup4} alt="" />
                <img className='w-[300px] h-[300px] object-cover rounded-xl' src={cup5} alt="" />
                <img className='w-[300px] h-[300px] object-cover rounded-xl' src={cup6} alt="" />
                <img className='w-[300px] h-[300px] object-cover rounded-xl' src={cup7} alt="" />
                <img className='w-[300px] h-[300px] object-cover rounded-xl' src={cup8} alt="" />
            </div>
        </div>
    );
};

export default FollowInsta;