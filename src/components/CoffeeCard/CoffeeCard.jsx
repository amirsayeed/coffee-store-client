import React from 'react';
import { Link } from 'react-router';

const CoffeeCard = ({coffee}) => {
    const {_id,name,chef,price,photo} = coffee;

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm border-2 gap-3 p-3">
                <figure>
                    <img
                    src={photo} />
                </figure>
                <div className='flex items-center justify-around w-full'>
                    <div className="space-y-3">
                        <h2 className="">Name : {name}</h2>
                        <p>Chef : {chef}</p>
                        <p>Price : {price} Tk.</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <Link to={`/coffees/${_id}`} className='btn'>View</Link>
                        <button className='btn'>Edit</button>
                        <button className='btn'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;