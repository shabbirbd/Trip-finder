import React from 'react';
import Bennefits from '../components/Bennefits';
import Cities from '../components/Cities';
import Featured from '../components/Featured';
import Hero from '../components/Hero';

const Home = () => {
    return (
        <>
         <Hero/>   
         {/* <SearchForm/> */}
         <Cities/>
         <Bennefits/>
         <Featured/>
        </>
    );
};

export default Home;

