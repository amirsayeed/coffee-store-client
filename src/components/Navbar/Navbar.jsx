import React, { use } from 'react';
import logo from '../../assets/more/logo1.png'
import navBg from '../../assets/more/15.jpg';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router';
const Navbar = () => {
    const {user,logOut} = use(AuthContext);

    const handleLogOut = () =>{
        logOut().then(()=>{
            alert('Logout successful');
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
          <div style={{ backgroundImage: `url(${navBg})` }} className="navbar shadow-sm">
                <div className="navbar-start">
                    <div className='flex items-center justify-center gap-2'>
                        <img className='w-10 h-10 object-cover' src={logo} alt="" />
                        <a className="text-xl md:text-3xl text-white font-bold">Espresso Emporium</a>
                    </div>
                </div>
                <div className='navbar-end'>                       
                        {user ? 
                            <div className='flex items-center gap-1'>
                                <p className='text-white'>{user.email}</p>
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