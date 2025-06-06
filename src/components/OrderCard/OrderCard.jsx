import React from 'react';
import Swal from 'sweetalert2';
const OrderCard = ({order,orders,setOrders}) => {
     const {coffeeId ,_id, name, price, quantity, photo } = order;
     const handleCancel = (id) =>{
        console.log(id);

        Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, cancel it!"
                }).then((result) => {
                if (result.isConfirmed) {
                    
                    fetch(`https://coffee-store-server-omega-nine.vercel.app/my-orders/${_id}`, {
                        method: "DELETE",
                        headers: {
                          'content-type': 'application/json'
                        },
                        body: JSON.stringify({coffeeId: coffeeId})
                    })
                    .then(res=>res.json())
                    .then(data=>{
                        if(data.deletedCount){
                        console.log('after cancel', data);
                        Swal.fire({
                        title: "Canceled!",
                        text: "Your Order has been canceled.",
                        icon: "success"
                        });
        
                        const remainingOrders = orders.filter(order=> order._id !== _id);
                        setOrders(remainingOrders);
                    }
                    })
                    
                }
                });
    }

    return (
         <div className='card card-side bg-base-100 shadow-sm border-2 p-4 gap-3'>
      <figure>
        <img src={photo} alt='Movie' />
      </figure>
      <div className='flex mt-8 w-full justify-around'>
        <div>
          <h2 className=''>{name}</h2>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
        </div>
        <div className='card-actions justify-end'>
          <div className='join join-vertical space-y-2'>
            <button onClick={()=>handleCancel(_id)} className='btn join-item'>Cancel Order</button>
          </div>
        </div>
      </div>
    </div>
    );
};

export default OrderCard;