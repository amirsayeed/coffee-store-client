import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Banner from '../../components/Banner/Banner';
import Speciality from '../../components/Speciality/Speciality';
import Coffees from '../../components/Coffees/Coffees';
import coffeeCup from '../../assets/more/4.png'
import coffeeShop from '../../assets/more/5.png'
import FollowInsta from '../../components/FollowInsta/FollowInsta';


const Home = () => {
    const coffeeData = useLoaderData();
    //console.log(coffeeData);
    const [coffees,setCoffees] = useState(coffeeData);

    return (
        <div>
            <Banner/>
            <Speciality/>
            <div style={{backgroundImage: `url(${coffeeCup}), url(${coffeeShop})`, backgroundPosition: 'top left, bottom right',
            backgroundRepeat: 'no-repeat'}}>
                <Coffees coffees={coffees} setCoffees={setCoffees}/>
            </div>
            <FollowInsta/>
        </div>
    );
};

export default Home;