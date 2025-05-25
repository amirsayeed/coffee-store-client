import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import axios from 'axios';

const SignUp = () => {
    const {createUser} = use(AuthContext);
    //console.log(createUser);
    const navigate = useNavigate();

    const handleSignUp = e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
    
        const {email,password, ...rest} = Object.fromEntries(formData.entries());

        createUser(email,password)
        .then(result=>{
            console.log(result.user);

            const userProfile = {
            email,
            ...rest,
            creationTime: result.user?.metadata?.creationTime,
            lastSignInTime: result.user?.metadata?.lastSignInTime
            }

            axios.post('https://coffee-store-server-omega-nine.vercel.app/users', userProfile)
            // fetch('https://coffee-store-server-omega-nine.vercel.app/users',{
            //     method: 'POST',
            //     headers: {
            //         'content-type': 'application/json'
            //     },
            //     body: JSON.stringify(userProfile)
            // })
            // .then(res=>res.json())
            .then(data=>{
                if(data.data.insertedId){
                console.log('profile after save', data)
                Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your account has been created",
                showConfirmButton: false,
                timer: 1500
                });
                navigate('/');
                }
            })
        })
        .catch(error=>{
            console.log(error);
        })
    
    }

    return (
        <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl p-4 my-10">
            <div className="card-body">
                <h1 className="text-4xl font-bold text-center">Sign Up!</h1>
                <form onSubmit={handleSignUp} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Name" />
                    <label className="label">Address</label>
                    <input type="text" name='address' className="input" placeholder="Address" />
                    <label className="label">Phone</label>
                    <input type="text" name='phone' className="input" placeholder="Phone" />
                    <label className="label">Photo</label>
                    <input type="text" name='photo' className="input" placeholder="Photo URL" />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><p className="link link-hover">Already have an account? Please <Link className='text-blue-400 underline' to='/auth/signIn'>Sign In</Link> </p></div>
                    <button type='submit' className="btn btn-neutral mt-4">Sign up</button>
                </form>
            </div>
        </div>  
    );
};

export default SignUp;