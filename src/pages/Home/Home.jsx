import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from '../../components/CoffeeCard/CoffeeCard';

const Home = () => {
    const coffeeData = useLoaderData();
    //console.log(coffeeData);
    const [coffees,setCoffees] = useState(coffeeData);

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-10'>
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}
                    coffees={coffees}
                    setCoffees={setCoffees}/>)
                }
            </div>
        </div>
    );
};

export default Home;