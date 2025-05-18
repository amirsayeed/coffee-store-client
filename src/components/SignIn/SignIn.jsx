import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

const SignIn = () => {
    const {logIn} = use(AuthContext);
    //console.log(logIn);
    const location = useLocation();
    console.log(location.state);
    const navigate = useNavigate();

    const handleSignIn = e =>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password');
        console.log(email,password)

        logIn(email,password).then(result=>{
            console.log(result.user);
            navigate(`${location.state ? location.state : '/'}`);
        })
        .catch(error=>{
            console.log(error.message);
        })
    }

    return (
        <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl p-4 my-10">
            <h1 className="text-4xl font-bold text-center">Login now!</h1>
            <div className="card-body">
                <form onSubmit={handleSignIn} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button type='submit' className="btn btn-neutral mt-4">Login</button>
                </form>
                <p>New to this website? Please <Link className='text-blue-400 underline' to='/auth/signUp'>Signup</Link></p>
            </div>
        </div>  
        
    );
};

export default SignIn;