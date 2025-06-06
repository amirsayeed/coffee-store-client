import React from 'react';
import { LuMoveLeft } from 'react-icons/lu';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import updateBg from '../../assets/more/11.png'
import axios from 'axios';

const UpdateCoffee = () => {
    const {_id,name,chef,supplier,category,details,quantity,photo,price} = useLoaderData();

    const handleUpdateCoffee = e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateCoffeeData = Object.fromEntries(formData.entries());
        updateCoffeeData.quantity = parseInt(updateCoffeeData.quantity);
        console.log(updateCoffeeData); 

        axios.put(`https://coffee-store-server-omega-nine.vercel.app/coffees/${_id}`, updateCoffeeData)
        // fetch(`https://coffee-store-server-omega-nine.vercel.app/coffees/${_id}`, {
        //     method: "PUT",
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(updateCoffeeData)
        // })
        // .then(res=>res.json())
        .then(data=>{
            console.log(data.data);
            if(data.data.modifiedCount){
            console.log('after update',data);
            Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Coffee has been updated",
            showConfirmButton: false,
            timer: 1500
            });
            }
        })
    }

    return (
        <div style={{backgroundImage: `url(${updateBg})`}} className='px-12 md:px-24 py-10'>
            <div className='pb-6 flex items-center gap-2'>
                <LuMoveLeft size={15} />
                <Link to='/' className='text-base font-semibold'> Back to home</Link>
            </div>
            <div className='p-12 space-y-3 text-center bg-base-200'>
                <h3 className="text-3xl font-semibold">Update Existing Coffee Details</h3>
                <p className='max-w-3xl mx-auto'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                <form onSubmit={handleUpdateCoffee}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <fieldset className='fieldset rounded-box p-4'>
                            <label className="label">Name</label>
                            <input type="text" name='name' defaultValue={name} className="input w-full" placeholder="Name" />
                        </fieldset>
                        <fieldset className='fieldset rounded-box p-4'>
                            <label className="label">Chef</label>
                            <input type="text" name='chef' defaultValue={chef} className="input w-full" placeholder="Chef" />
                        </fieldset>
                        <fieldset className='fieldset rounded-box p-4'>
                            <label className="label">Supplier</label>
                            <input type="text" name='supplier' defaultValue={supplier} className="input w-full" placeholder="Supplier" />
                        </fieldset>
                        <fieldset className='fieldset rounded-box p-4'>
                            <label className="label">Quantity</label>
                            <input type="text" name='quantity' defaultValue={quantity} className="input w-full" placeholder="Quantity" />
                        </fieldset>
                        <fieldset className='fieldset rounded-box p-4'>
                            <label className="label">Price</label>
                            <input type="text" name='price' defaultValue={price} className="input w-full" placeholder="Price" />
                        </fieldset>
                        <fieldset className='fieldset rounded-box p-4'>
                            <label className="label">Category</label>
                            <input type="text" name='category' defaultValue={category} className="input w-full" placeholder="Category" />
                        </fieldset>
                        <fieldset className='fieldset rounded-box p-4'>
                            <label className="label">Details</label>
                            <input type="text" name='details' defaultValue={details} className="input w-full" placeholder="Details" />
                        </fieldset>
                        <fieldset className='col-span-full fieldset rounded-box p-4'>
                            <label className="label">Photo</label>
                            <input type="text" name='photo' defaultValue={photo} className="input w-full" placeholder="Photo URL" />
                        </fieldset>
                    </div>
                    <div className='p-4'>
                        <input type='submit' className='btn w-full bg-[#D2B48C]' value='Update Coffee'/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;