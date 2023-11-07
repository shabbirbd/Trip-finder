import React from 'react';
import Bennefits from '../components/Bennefits';
import Cities from '../components/Cities';
import Featured from '../components/Featured';
import Hero from '../components/Hero';
import Howitwork from '../components/Howitwork';
import Newsletter from '../components/Newsletter';
import Suggestions from '../components/Suggestions';

const Home = () => {
    return (
        <>
         <Hero/>   
         {/* <SearchForm/> */}
         <Cities/>
         <Bennefits/>
         <Featured/>
         <Howitwork/>
         <Suggestions/>
         <Newsletter/>
        </>
    );
};

export default Home;

