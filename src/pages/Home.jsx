import React from 'react';
import Author from '../components/Author';
import Bennefits from '../components/Bennefits';
import Cities from '../components/Cities';
import Explore from '../components/Explore';
import Featured from '../components/Featured';
import Hero from '../components/Hero';
import Howitwork from '../components/Howitwork';
import Newsletter from '../components/Newsletter';
import Suggestions from '../components/Suggestions';
import WhyChoseUs from '../components/WhyChoseUs';

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
         <Author/>
         <Explore/>
         <WhyChoseUs/>
        </>
    );
};

export default Home;

