import React from 'react';
import Hero from '../components/Home/Hero';
import Meet from '../components/Home/Meet';
import Mission from '../components/Home/Mission';
import Stats from '../components/Home/Stats';

const Home = () => {
    return (
        <div>
            <Hero />
            <Stats />
            <Mission />
            <Meet />
        </div>
    );
};

export default Home;