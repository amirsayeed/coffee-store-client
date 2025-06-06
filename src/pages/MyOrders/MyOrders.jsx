import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import OrderCard from '../../components/orderCard/orderCard';

const MyOrders = () => {
    const {user} = use(AuthContext);
    const [orders,setOrders] = useState([]);
    useEffect(()=>{
        axios(`https://coffee-store-server-omega-nine.vercel.app/my-orders/${user?.email}`)
        .then(res=>{
            setOrders(res?.data)
        })
        .catch(error=>{
            console.log(error);
        })
    },[user])

    return (
        <div className='max-w-7xl mx-auto my-20'>
            <h3 className="text-3xl">My orders: {orders.length}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {
                orders.map(order=><OrderCard key={order._id} order={order} setOrders={setOrders} orders={orders}/>)
                }
            </div>
        </div>
    );
};

export default MyOrders;