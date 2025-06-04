import React, { use, useEffect, useState } from 'react';
import { LuMoveLeft } from 'react-icons/lu';
import { Link, useLoaderData } from 'react-router';
import detailsBg from '../../assets/more/11.png'
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

const CoffeeDetails = () => {
    const {user} = use(AuthContext);
    const CoffeeDetails = useLoaderData();
    const [coffee,setCoffee] = useState(CoffeeDetails);
    const {_id,name,price,supplier,chef,photo,category,details,quantity,likedBy,email} = coffee;
    const [liked, setLiked] = useState(likedBy.includes(user?.email));
    const [likeCount, setLikeCount] = useState(likedBy.length);
    console.log('is liked ',liked);

    useEffect(()=>{
        setLiked(likedBy.includes(user?.email))
    },[likedBy,user])
     
    const handleLike = () =>{
        if(user?.email === email){
           return alert('lojja kre nah!')
        }
        axios.patch(`https://coffee-store-server-omega-nine.vercel.app/like/${_id}`,{email: user?.email})
        .then(res=>{
            console.log(res?.data);
            const isLiked = res?.data?.liked;
            setLiked(isLiked);
            setLikeCount(prev=> (isLiked ? prev+ 1 : prev - 1));
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const handleOrder = () =>{
        if(user?.email === email){
            return alert("Tomar nijer coffee")
        }

        const orderCoffee = {
            coffeeId: _id,
            customerEmail: user?.email
        }

        axios.post(`https://coffee-store-server-omega-nine.vercel.app/place-order/${_id}`, orderCoffee)
        .then(res=>{
            console.log(res?.data);
            setCoffee(prev => {
                return { ...prev, quantity: prev.quantity - 1 };
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <div style={{backgroundImage: `url(${detailsBg})`}}>
            <div className='max-w-4xl mx-auto py-20 px-1'>
            <div className='pb-6 flex items-center gap-2'>
                            <LuMoveLeft size={15} />
                            <Link to='/' className='text-base font-semibold'> Back to home</Link>
                        </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-base-300 shadow-md p-6">
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
                <p>Quantity: {quantity}</p>
                <p>Price: {price}</p>
                <p>Likes : {likeCount}</p>
                <div className='flex flex-col md:flex-row gap-3 my-3'>
                <button onClick={handleOrder} className='btn btn-primary'>Order</button>
                <button onClick={handleLike} className='btn btn-secondary'>👍{liked ?'Liked': 'Like' }</button>
                </div>
            </div>
            
            </div>
        </div>
        </div>
    );
};

export default CoffeeDetails;