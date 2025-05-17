import React from 'react';
import CoffeeCard from '../../components/CoffeeCard/CoffeeCard';
import { BsFillCupHotFill } from 'react-icons/bs';
import { Link } from 'react-router';
const Coffees = ({coffees,setCoffees}) => {
    return (
        <div className='w-11/12 mx-auto my-20'>
                <div className='space-y-3 text-center'>
                    <p>--- Sip & Savor ---</p>
                    <h2 className="text-2xl font-bold text-center">Our Popular Products</h2>
                    <Link to ='/addCoffee'>
                        <button onClick={()=>window.scroll(0,0)} className='btn bg-[#D2B48C]'>Add Coffee <BsFillCupHotFill size={15} /></button>
                    </Link>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}
                    coffees={coffees}
                    setCoffees={setCoffees}/>)
                }
                </div>
            </div>
    );
};

export default Coffees;