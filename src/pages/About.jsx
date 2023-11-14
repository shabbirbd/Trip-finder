import React from 'react';
import AboutHeader from '../components/AboutHeader';
import FastFacts from '../components/FastFacts';
import Founder from '../components/Founder';
import Newsletter from '../components/Newsletter';
import WhyChoseUs from '../components/WhyChoseUs';

const About = () => {
    return (
        <>
            <AboutHeader/>
            <Founder/>
            <WhyChoseUs/>
            <FastFacts/>
            <Newsletter/>
        </>
    );
};

export default About;