import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className='max-w-6xl mx-auto'>
                <Outlet/>
            </div>
            
        </div>
    );
};

export default MainLayout;