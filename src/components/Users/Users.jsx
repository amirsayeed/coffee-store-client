import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Users = () => {
    const initialUsers = useLoaderData();
    const [users, setUsers] = useState(initialUsers);

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
            fetch(`http://localhost:5000/users/${id}`,{
                    method: "DELETE"
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount){
                    console.log('after delete', data);
                    Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                    });
                    const remainingUsers = users.filter(user=>user._id !== id);
                    setUsers(remainingUsers);
                }
                })
        }
        });
        
    }

    return (
        <div className='my-20 p-4'>
            <h3 className='text-xl font-bold'>Users: {users.length}</h3>
            <div>
                <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phones</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((user,idx)=> <tr key={user._id}>
                        <th>
                        <label>
                            <p>{idx+1}</p>
                        </label>
                        </th>
                        <td>
                        <div className="flex items-center gap-3">
                            <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                src={user.photo}
                                alt="Avatar Tailwind CSS Component" />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">{user.name}</div>
                            </div>
                        </div>
                        </td>
                        <td>
                        {user.address}
                        </td>
                        <td>{user.phone}</td>
                        <th>
                        <button className="btn btn-ghost btn-xs">Edit</button>
                        <button className="btn btn-ghost btn-xs">View</button>
                        <button onClick={()=>handleDelete(user._id)} className="btn btn-ghost btn-xs">Delete</button>
                        </th>
                    </tr>)
                    }
                    </tbody>
                    
                </table>
                </div>
            </div>
        </div>
    );
};

export default Users;