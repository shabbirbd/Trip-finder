import React from 'react';
import Bennefits from '../components/Bennefits';
import Cities from '../components/Cities';
import Featured from '../components/Featured';
import Hero from '../components/Hero';
import Howitwork from '../components/Howitwork';

const Home = () => {
    return (
        <>
         <Hero/>   
         {/* <SearchForm/> */}
         <Cities/>
         <Bennefits/>
         <Featured/>
         <Howitwork/>
        </>
    );
};

export default Home;

