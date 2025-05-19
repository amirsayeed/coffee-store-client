import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateUser = () => {
    const {_id,name,email,phone,address,photo} = useLoaderData();

    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateUserData = Object.fromEntries(formData.entries());
        console.log(updateUserData);

        fetch(`https://coffee-store-server-omega-nine.vercel.app/users/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUserData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('after update',data)
        })

    }

    return (
        <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl p-4 my-10">
            <div className="card-body">
                <h1 className="text-4xl font-bold text-center">Update Profile</h1>
                <form onSubmit={handleUpdate} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name='name' defaultValue={name} className="input" placeholder="Name" />
                    <label className="label">Address</label>
                    <input type="text" name='address' defaultValue={address} className="input" placeholder="Address" />
                    <label className="label">Phone</label>
                    <input type="text" name='phone' defaultValue={phone} className="input" placeholder="Phone" />
                    <label className="label">Photo</label>
                    <input type="text" name='photo' defaultValue={photo} className="input" placeholder="Photo URL" />
                    <label className="label">Phone</label>
                    <input type="email" name='email' defaultValue={email} className="input" placeholder="Email" />
                    
                    <button type='submit' className="btn btn-neutral mt-4">Update</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateUser;