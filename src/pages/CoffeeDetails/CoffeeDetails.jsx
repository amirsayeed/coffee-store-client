import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CoffeeDetails = () => {
    const {id} = useParams();
    const coffees = useLoaderData();
    const [coffeeDetails,setCoffeeDetails] = useState();

    useEffect(()=>{
        const findCoffee = coffees.find(coffee => coffee._id === id);
        setCoffeeDetails(findCoffee);
    },[id,coffees])
    
    if(!coffeeDetails){
        return <span>Loading...</span>
    }

    const {name,price,supplier,chef,photo,category,details} = coffeeDetails;

    return (
        <div className='max-w-4xl mx-auto my-10'>
            <div className="flex items-center justify-center gap-8 border bg-base-100 shadow-sm">
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