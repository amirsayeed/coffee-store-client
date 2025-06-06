import React, { use } from 'react';
import logo from '../../assets/more/logo1.png'
import navBg from '../../assets/more/15.jpg';
import { AuthContext } from '../../context/AuthContext';
import { Link, NavLink } from 'react-router';
import { toast } from 'react-toastify';
const Navbar = () => {
    const {user,logOut} = use(AuthContext);

    const handleLogOut = () =>{
        logOut().then(()=>{
            toast.success('Logout successful');
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const links = <>
                    <li><NavLink to='/'>Home</NavLink></li>
                    {user && <>
                            <li><NavLink to={`/myCoffees/${user?.email}`}>My Coffees</NavLink></li>
                            <li><NavLink to='/my-orders'>My Orders</NavLink></li>
                    </>}
                  </>
    return (
          <div style={{ backgroundImage: `url(${navBg})` }} className="navbar shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-base">
                        {links}
                    </ul>
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                        <img className='w-10 h-10 object-cover' src={logo} alt="" />
                        <a className="text-xl md:text-3xl text-white font-bold">Espresso Emporium</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base text-white">
                        {links}
                    </ul>
                </div>
                <div className='navbar-end'>                       
                        {user ? 
                            <div className='flex items-center gap-1'>
                                <p className='hidden md:flex text-white'>{user.email}</p>
                                <button onClick={handleLogOut} className='btn bg-[#D2B48C]'>Log out</button>
                            </div>
                             :
                            <Link to='/auth/signIn' className='btn bg-[#D2B48C]'>Login</Link>
                        }
                </div>
            </div>
    );
};

export default Navbar;