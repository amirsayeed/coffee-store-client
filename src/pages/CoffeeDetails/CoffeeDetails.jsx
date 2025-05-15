import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const {name,price,supplier,chef,photo,category,details} = useLoaderData();

    return (
        <div className='max-w-4xl mx-auto my-10'>
            <div className="flex items-center justify-center gap-8 border bg-base-100 shadow-sm p-4">
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
    );
};

export default CoffeeDetails;