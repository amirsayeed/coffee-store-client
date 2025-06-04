import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from '../../components/CoffeeCard/CoffeeCard';

const MyAddedCoffees = () => {
    const myCoffeesData = useLoaderData();
    const [myCoffees, setMyCoffees] = useState(myCoffeesData);
    return (
        <div className='max-w-7xl mx-auto my-20'>
            <h2 className="text-3xl">Here are my added coffees: {myCoffees.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
                {
                    myCoffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}
                    myCoffees={myCoffees}
                    setMyCoffees={setMyCoffees}/>)
                }
                </div>
        </div>
    );
};

export default MyAddedCoffees;