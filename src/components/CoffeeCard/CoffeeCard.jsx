import React, { use } from 'react';
import { IoIosEye } from 'react-icons/io';
import { MdDeleteOutline, MdEdit } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';

const CoffeeCard = ({coffee, coffees, setCoffees}) => {
    const {_id,name,chef,price,photo} = coffee;
    const {user} = use(AuthContext);

    const handleDelete = (id) =>{
        console.log(id);

        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {
            
            fetch(`https://coffee-store-server-omega-nine.vercel.app/coffees/${_id}`, {
                method: "DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount){
                console.log('after delete', data);
                Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success"
                });

                const remaining = coffees.filter(cof=> cof._id !== _id);
                setCoffees(remaining);
            }
            })
            
        }
        });
    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm border-2 gap-3 p-5">
                <figure>
                    <img
                    src={photo} className='w-30 h-36 object-cover' />
                </figure>
                <div className='flex items-center justify-around w-full'>
                    <div className="space-y-3">
                        <h2 className="">Name : {name}</h2>
                        <p>Chef : {chef}</p>
                        <p>Price : {price} Tk.</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <Link to={`/coffees/${_id}`}>
                            <button onClick={()=>window.scroll(0,0)}  className='btn'><IoIosEye size={20} /></button>
                        </Link>
                        <Link to={`/updateCoffee/${_id}`}>
                            <button onClick={()=>window.scroll(0,0)} className='btn'><MdEdit size={20} /></button>
                        </Link>
                        <button onClick={()=>{
                            {user ?
                            handleDelete(_id): toast.warn("Please login first",{position:'top-center'})}
                        }} className='btn'><MdDeleteOutline size={20} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;