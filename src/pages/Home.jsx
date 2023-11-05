import React from 'react';
import Bennefits from '../components/Bennefits';
import Cities from '../components/Cities';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <>
         <Hero/>   
         {/* <SearchForm/> */}
         <Cities/>
         <Bennefits/>
        </>
    );
};

export default Home;

