import React from 'react';
import { LuMoveLeft } from 'react-icons/lu';
import { Link, useLoaderData } from 'react-router';
import detailsBg from '../../assets/more/11.png'

const CoffeeDetails = () => {
    const {name,price,supplier,chef,photo,category,details} = useLoaderData();

    return (
        <div style={{backgroundImage: `url(${detailsBg})`}}>
            <div className='max-w-4xl mx-auto py-20'>
            <div className='pb-6 flex items-center gap-2'>
                            <LuMoveLeft size={15} />
                            <Link to='/' className='text-base font-semibold'> Back to home</Link>
                        </div>
            <div className="flex items-center justify-center gap-8 bg-base-300 shadow-md p-6">
            <figure>
                <img
                src={photo}
                alt="Album" />
            </figure>
            <div className="space-y-2">
                <h2 className="">Name: {name}</h2>
                <p>Chef: {chef}</p>
                <p>Supplier: {supplier}</p>
                <p>Category: {category}</p>
                <p>Details: {details}</p>
                <p>Price: {price}</p>
            </div>
            </div>
        </div>
        </div>
    );
};

export default CoffeeDetails;