import React from 'react';
import notFound from '../../assets/404/404.gif';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { LuMoveLeft } from 'react-icons/lu';
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <div>
            <Navbar/>
            <div className='flex flex-col items-center justify-center mt-5'>
                <Link to='/'>
                    <p className='flex gap-2 items-center'>
                    <LuMoveLeft size={20} /> 
                    <span className='font-bold text-lg'>Back to home</span>
                    </p>
                </Link>
                <img src={notFound} alt="" />
            </div>
            <Footer/>
        </div>
    );
};

export default ErrorPage;