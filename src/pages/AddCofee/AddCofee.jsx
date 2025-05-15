import React from 'react';
import Swal from 'sweetalert2';

const AddCofee = () => {

    const handleAddCoffee = e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries());
        console.log(newCoffee);

        fetch('http://localhost:5000/coffees', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
            console.log('after adding', data);
            Swal.fire({
                title: "Coffee added successfully!",
                icon: "success",
                draggable: true
            });
        }
        })
    }

    return (
        <div className='p-24'>
            <div className='p-12 space-y-3 text-center'>
                <h3 className="text-3xl font-semibold">Add New Coffee</h3>
                <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>

                <form onSubmit={handleAddCoffee}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <fieldset className='fieldset rounded-box p-4'>
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input w-full" placeholder="Name" />
                        </fieldset>
                        <fieldset className='fieldset rounded-box p-4'>
                            <label className="label">Chef</label>
                            <input type="text" name='chef' className="input w-full" placeholder="Chef" />
                        </fieldset>
                        <fieldset className='fieldset rounded-box p-4'>
                            <label className="label">Supplier</label>
                            <input type="text" name='supplier' className="input w-full" placeholder="Supplier" />
                        </fieldset>
                        <fieldset className='fieldset rounded-box p-4'>
                            <label className="label">Price</label>
                            <input type="text" name='price' className="input w-full" placeholder="Price" />
                        </fieldset>
                        <fieldset className='fieldset rounded-box p-4'>
                            <label className="label">Category</label>
                            <input type="text" name='category' className="input w-full" placeholder="Category" />
                        </fieldset>
                        <fieldset className='fieldset rounded-box p-4'>
                            <label className="label">Details</label>
                            <input type="text" name='details' className="input w-full" placeholder="Details" />
                        </fieldset>
                        <fieldset className='col-span-full fieldset rounded-box p-4'>
                            <label className="label">Photo</label>
                            <input type="text" name='photo' className="input w-full" placeholder="Photo URL" />
                        </fieldset>
                    </div>
                    <div className='p-4'>
                        <input type='submit' className='btn w-full' value='Add Coffee'/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCofee;