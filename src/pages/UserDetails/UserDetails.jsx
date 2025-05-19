import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const {email,name,address,phone,photo, creationTime,lastSignInTime} = useLoaderData();
    
    return (
        <div className="max-w-3xl mx-auto card card-side bg-base-200 shadow-sm my-20 p-4">
        <figure>
            <img className='rounded-2xl'
            src={photo}
            alt="Movie" />
        </figure>
        <div className="card-body space-y-2">
            <h2 className="card-title">{name}</h2>
            <p>Email: {email}</p>
            <p>Address: {address}</p>
            <p>Phone: {phone}</p>
            <p>Profile Created: {creationTime}</p>
            <p>Last Signedin: {lastSignInTime}</p>
            
        </div>
        </div>
    );
};

export default UserDetails;