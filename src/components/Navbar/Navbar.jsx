import React from 'react';
import logo from '../../assets/more/logo1.png'
import navBg from '../../assets/more/15.jpg';
const Navbar = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${navBg})` }} className="navbar shadow-sm">
                <div className="w-full mx-auto flex items-center justify-center gap-2">
                    <img className='w-10 h-10 object-cover' src={logo} alt="" />
                    <a className="text-xl md:text-3xl text-white font-bold">Espresso Emporium</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;