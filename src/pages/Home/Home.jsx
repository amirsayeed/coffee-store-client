import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from '../../components/CoffeeCard/CoffeeCard';
import Banner from '../../components/Banner/Banner';

const Home = () => {
    const coffeeData = useLoaderData();
    //console.log(coffeeData);
    const [coffees,setCoffees] = useState(coffeeData);

    return (
        <div>
            <Banner/>
            <div className='my-20'>
                <div className='space-y-3 text-center'>
                    <p>--- Sip & Savor ---</p>
                    <h2 className="text-2xl font-bold text-center">Our Popular Products</h2>
                    <button>Add Coffee</button>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}
                    coffees={coffees}
                    setCoffees={setCoffees}/>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;