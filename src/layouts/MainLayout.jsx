import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className='w-11/12 mx-auto'>
                <Outlet/>
            </div>
            
        </div>
    );
};

export default MainLayout;